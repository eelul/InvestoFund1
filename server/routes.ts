import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import {
  insertUserSchema,
  insertInvestmentApplicationSchema,
  insertDealSubmissionSchema,
  insertMerchantApplicationSchema,
  insertContactInquirySchema,
} from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // User management
  app.post("/api/users", async (req, res) => {
    try {
      const userData = insertUserSchema.parse(req.body);
      const user = await storage.createUser(userData);
      res.json(user);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  });

  app.get("/api/users/:email", async (req, res) => {
    try {
      const user = await storage.getUserByEmail(req.params.email);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.json(user);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  });

  // Investment applications
  app.post("/api/investment-applications", async (req, res) => {
    try {
      const { userId, ...applicationData } = req.body;
      const validatedData = insertInvestmentApplicationSchema.parse(applicationData);
      
      const application = await storage.createInvestmentApplication({
        ...validatedData,
        userId: parseInt(userId),
      });

      // Send welcome email (mock for now)
      await storage.createEmailLog({
        userId: parseInt(userId),
        emailType: "investor_welcome",
        recipientEmail: req.body.userEmail || "",
        subject: "Welcome to InvestoFund - Investment Application Received",
        status: "sent",
      });

      res.json(application);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  });

  app.get("/api/investment-applications/user/:userId", async (req, res) => {
    try {
      const applications = await storage.getInvestmentApplicationsByUser(
        parseInt(req.params.userId)
      );
      res.json(applications);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  });

  // Deal submissions (ISO/Brokers)
  app.post("/api/deal-submissions", async (req, res) => {
    try {
      const { userId, ...submissionData } = req.body;
      const validatedData = insertDealSubmissionSchema.parse(submissionData);
      
      const submission = await storage.createDealSubmission({
        ...validatedData,
        userId: parseInt(userId),
      });

      // Send confirmation email
      await storage.createEmailLog({
        userId: parseInt(userId),
        emailType: "deal_submission_confirmation",
        recipientEmail: req.body.userEmail || "",
        subject: "Deal Submission Received - Under Review",
        status: "sent",
      });

      res.json(submission);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  });

  app.get("/api/deal-submissions/user/:userId", async (req, res) => {
    try {
      const submissions = await storage.getDealSubmissionsByUser(
        parseInt(req.params.userId)
      );
      res.json(submissions);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  });

  app.get("/api/deal-submissions", async (req, res) => {
    try {
      const submissions = await storage.getAllDealSubmissions();
      res.json(submissions);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  });

  // Merchant applications
  app.post("/api/merchant-applications", async (req, res) => {
    try {
      const { userId, ...applicationData } = req.body;
      const validatedData = insertMerchantApplicationSchema.parse(applicationData);
      
      // Generate pre-qualification results
      const monthlyRevenue = applicationData.monthlyRevenue;
      let estimatedFunding = { min: 5000, max: 25000 };
      let factorRate = { min: 1.35, max: 1.45 };

      if (monthlyRevenue === "$15,000 - $30,000") {
        estimatedFunding = { min: 15000, max: 45000 };
        factorRate = { min: 1.30, max: 1.40 };
      } else if (monthlyRevenue === "$30,000 - $50,000") {
        estimatedFunding = { min: 25000, max: 75000 };
        factorRate = { min: 1.25, max: 1.35 };
      } else if (monthlyRevenue === "$50,000+") {
        estimatedFunding = { min: 50000, max: 150000 };
        factorRate = { min: 1.20, max: 1.30 };
      }

      const preQualificationResults = {
        estimatedFunding,
        factorRate,
        estimatedDailyPayment: Math.round((estimatedFunding.min * factorRate.max) / 60),
      };

      const application = await storage.createMerchantApplication({
        ...validatedData,
        userId: parseInt(userId),
        preQualificationResults,
      });

      // Send confirmation email
      await storage.createEmailLog({
        userId: parseInt(userId),
        emailType: "merchant_application_confirmation",
        recipientEmail: req.body.userEmail || "",
        subject: "Funding Application Received - Review in Progress",
        status: "sent",
      });

      res.json(application);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  });

  app.get("/api/merchant-applications/user/:userId", async (req, res) => {
    try {
      const applications = await storage.getMerchantApplicationsByUser(
        parseInt(req.params.userId)
      );
      res.json(applications);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  });

  app.get("/api/merchant-applications", async (req, res) => {
    try {
      const applications = await storage.getAllMerchantApplications();
      res.json(applications);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  });

  // Contact inquiries
  app.post("/api/contact-inquiries", async (req, res) => {
    try {
      const inquiryData = insertContactInquirySchema.parse(req.body);
      const inquiry = await storage.createContactInquiry(inquiryData);

      // Send confirmation email
      await storage.createEmailLog({
        userId: null,
        emailType: "contact_inquiry_confirmation",
        recipientEmail: inquiryData.email,
        subject: "Thank you for contacting InvestoFund",
        status: "sent",
      });

      res.json(inquiry);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  });

  app.get("/api/contact-inquiries", async (req, res) => {
    try {
      const inquiries = await storage.getAllContactInquiries();
      res.json(inquiries);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  });

  // Manual payment request endpoint
  app.post("/api/request-payment", async (req, res) => {
    try {
      const { applicationId, applicationType, amount, userEmail, userName } = req.body;

      if (!amount || amount < 50) {
        return res.status(400).json({ 
          message: "Amount must be at least $50" 
        });
      }

      // Update application status to "payment_requested"
      if (applicationType === 'investment') {
        await storage.updateInvestmentApplication(applicationId, {
          status: 'payment_requested',
        });

        // Send payment request email
        await storage.createEmailLog({
          userId: null,
          emailType: "payment_request",
          recipientEmail: userEmail,
          subject: `InvestoFund - Payment Instructions for $${amount.toLocaleString()} Investment`,
          status: "sent",
        });
      }

      res.json({ 
        success: true, 
        message: "Payment request sent successfully",
        paymentInstructions: {
          amount: amount,
          reference: `INV-${applicationId}-${Date.now()}`,
          bankDetails: "Wire transfer instructions will be sent via email"
        }
      });
    } catch (error: any) {
      res.status(500).json({ 
        message: "Error processing payment request: " + error.message 
      });
    }
  });

  // Manual payment confirmation endpoint
  app.post("/api/confirm-payment", async (req, res) => {
    try {
      const { applicationId, applicationType, confirmationDetails } = req.body;

      if (applicationType === 'investment') {
        await storage.updateInvestmentApplication(applicationId, {
          status: 'funded',
          paymentIntentId: confirmationDetails.referenceNumber || null,
        });

        // Send payment confirmation email
        await storage.createEmailLog({
          userId: null,
          emailType: "payment_confirmation",
          recipientEmail: confirmationDetails.userEmail,
          subject: "InvestoFund - Payment Received and Investment Confirmed",
          status: "sent",
        });
      }
      
      res.json({ success: true, status: 'funded' });
    } catch (error: any) {
      res.status(500).json({ 
        message: "Error confirming payment: " + error.message 
      });
    }
  });

  // File upload endpoint (placeholder for future implementation)
  app.post("/api/upload-file", async (req, res) => {
    try {
      // This would integrate with a file storage service like AWS S3
      // For now, just return a placeholder response
      const file = {
        filename: req.body.filename || "document.pdf",
        size: req.body.size || 1024,
        url: "/placeholder-document.pdf",
      };

      res.json({ 
        success: true, 
        file,
        message: "File upload placeholder - implement with actual storage service"
      });
    } catch (error: any) {
      res.status(500).json({ 
        message: "Error uploading file: " + error.message 
      });
    }
  });

  // Email logs
  app.get("/api/email-logs/user/:userId", async (req, res) => {
    try {
      const logs = await storage.getEmailLogsByUser(parseInt(req.params.userId));
      res.json(logs);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  });

  // Document management
  app.post("/api/documents", async (req, res) => {
    try {
      const { userId, documentType, fileName, filePath } = req.body;
      const document = await storage.createDocument({
        userId: parseInt(userId),
        documentType,
        fileName,
        filePath,
      });
      res.json(document);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  });

  app.get("/api/documents/user/:userId", async (req, res) => {
    try {
      const documents = await storage.getDocumentsByUser(parseInt(req.params.userId));
      res.json(documents);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  });

  app.post("/api/documents/:id/download", async (req, res) => {
    try {
      await storage.incrementDownloadCount(parseInt(req.params.id));
      res.json({ success: true });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
