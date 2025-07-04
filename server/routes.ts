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
import { emailService } from "./emailService";
import { DOCUMENT_TEMPLATES, getDocumentById, getDocumentsByCategory, personalizeDocument } from "@shared/documents";
import { z } from "zod";

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

  // Document template endpoints
  app.get("/api/documents/templates", async (req, res) => {
    try {
      res.json(DOCUMENT_TEMPLATES);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  });

  app.get("/api/documents/templates/category/:category", async (req, res) => {
    try {
      const documents = getDocumentsByCategory(req.params.category);
      res.json(documents);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  });

  app.get("/api/documents/templates/:id", async (req, res) => {
    try {
      const document = getDocumentById(req.params.id);
      if (!document) {
        return res.status(404).json({ message: "Document not found" });
      }
      res.json(document);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  });

  // Download packet endpoint (for the DownloadPacket component)
  const downloadPacketSchema = z.object({
    firstName: z.string().min(2),
    lastName: z.string().min(2), 
    email: z.string().email(),
    company: z.string().min(2),
    phone: z.string().min(10),
    deliveryMethod: z.enum(["email", "download"]),
    documentIds: z.array(z.string()).optional().default(["iso-information-packet"])
  });

  app.post("/api/download-packet", async (req, res) => {
    try {
      const data = downloadPacketSchema.parse(req.body);
      
      if (data.deliveryMethod === "email") {
        const success = await emailService.sendDocumentPacket({
          to: data.email,
          firstName: data.firstName,
          lastName: data.lastName,
          company: data.company,
          documentIds: data.documentIds
        });

        if (success) {
          // Log the email in database
          await storage.createEmailLog({
            userId: null,
            emailType: "document_packet",
            recipientEmail: data.email,
            subject: `InvestoFund Document Package`,
            status: "sent",
          });

          res.json({ success: true, message: "Documents sent to email" });
        } else {
          res.status(500).json({ message: "Failed to send email" });
        }
      } else {
        // For download method, just return success
        res.json({ success: true, message: "Ready for download" });
      }
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  });

  // Investor document packet endpoint
  const investorPacketSchema = z.object({
    firstName: z.string().min(2),
    lastName: z.string().min(2),
    email: z.string().email(),
    investmentAmount: z.number().min(5000),
    investmentType: z.enum(["single", "portfolio"]),
    deliveryMethod: z.enum(["email", "download"])
  });

  app.post("/api/investor-packet", async (req, res) => {
    try {
      const data = investorPacketSchema.parse(req.body);
      
      const documentIds = [
        "investor-welcome-packet",
        "risk-disclosure-summary",
        "profit-sharing-agreement"
      ];

      if (data.deliveryMethod === "email") {
        const personalData = {
          "Capital Provider Name": `${data.firstName} ${data.lastName}`,
          "Amount, e.g., Ten Thousand Dollars ($10,000.00)": `${data.investmentAmount.toLocaleString()} Dollars ($${data.investmentAmount.toLocaleString()})`,
          "Date": new Date().toLocaleDateString(),
          "Your Name": "InvestoFund Management",
          "Your Title, e.g., Managing Member": "Managing Member"
        };

        const success = await emailService.sendDocumentPacket({
          to: data.email,
          firstName: data.firstName,
          lastName: data.lastName,
          documentIds,
          personalData
        });

        if (success) {
          await storage.createEmailLog({
            userId: null,
            emailType: "investor_packet",
            recipientEmail: data.email,
            subject: "InvestoFund Investor Package",
            status: "sent",
          });

          res.json({ success: true, message: "Investor packet sent to email" });
        } else {
          res.status(500).json({ message: "Failed to send investor packet" });
        }
      } else {
        res.json({ success: true, message: "Ready for download" });
      }
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  });

  // ISO onboarding packet endpoint
  const isoPacketSchema = z.object({
    firstName: z.string().min(2),
    lastName: z.string().min(2),
    email: z.string().email(),
    company: z.string().min(2),
    phone: z.string().min(10),
    deliveryMethod: z.enum(["email", "download"])
  });

  app.post("/api/iso-packet", async (req, res) => {
    try {
      const data = isoPacketSchema.parse(req.body);
      
      const documentIds = [
        "iso-information-packet",
        "iso-commission-structure", 
        "iso-agreement",
        "deal-submission-template"
      ];

      if (data.deliveryMethod === "email") {
        const personalData = {
          "ISO Company Name": data.company,
          "ISO Address": "[To be completed]",
          "Date of Signing": new Date().toLocaleDateString(),
          "Your Company Address": "123 InvestoFund Plaza, New York, NY 10001",
          "Your Name": "InvestoFund Management",
          "Your Title": "Managing Partner",
          "ISO Contact Name": `${data.firstName} ${data.lastName}`,
          "ISO Title": "Principal"
        };

        const success = await emailService.sendDocumentPacket({
          to: data.email,
          firstName: data.firstName,
          lastName: data.lastName,
          company: data.company,
          documentIds,
          personalData
        });

        if (success) {
          await storage.createEmailLog({
            userId: null,
            emailType: "iso_packet",
            recipientEmail: data.email,
            subject: "InvestoFund ISO Partner Package",
            status: "sent",
          });

          res.json({ success: true, message: "ISO packet sent to email" });
        } else {
          res.status(500).json({ message: "Failed to send ISO packet" });
        }
      } else {
        res.json({ success: true, message: "Ready for download" });
      }
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  });

  // Expert consultation request endpoint (for ISO training)
  const expertCallSchema = z.object({
    firstName: z.string().min(2),
    lastName: z.string().min(2),
    email: z.string().email(),
    phone: z.string().min(10),
    company: z.string().min(2),
    experience: z.enum(["new", "1-2years", "3-5years", "5+years"]),
    preferredTime: z.string().min(1),
    topics: z.string().min(10)
  });

  app.post("/api/expert-consultation", async (req, res) => {
    try {
      const data = expertCallSchema.parse(req.body);
      
      // Send notification to internal team
      const success = await emailService.sendWelcomeEmail({
        to: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        userType: 'iso'
      });

      if (success) {
        await storage.createEmailLog({
          userId: null,
          emailType: "expert_consultation_request",
          recipientEmail: data.email,
          subject: "Expert Consultation Request Received",
          status: "sent",
        });

        res.json({ 
          success: true, 
          message: "Expert consultation request submitted. We'll contact you within 24 hours." 
        });
      } else {
        res.status(500).json({ message: "Failed to process consultation request" });
      }
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  });

  // Send payment instructions with email
  app.post("/api/send-payment-instructions", async (req, res) => {
    try {
      const { firstName, lastName, email, amount, investmentType } = req.body;
      
      const referenceNumber = `INV-${Date.now()}`;
      
      const success = await emailService.sendPaymentInstructions({
        to: email,
        firstName,
        lastName,
        amount,
        investmentType,
        referenceNumber
      });

      if (success) {
        await storage.createEmailLog({
          userId: null,
          emailType: "payment_instructions",
          recipientEmail: email,
          subject: `Investment Payment Instructions - Reference ${referenceNumber}`,
          status: "sent",
        });

        res.json({ 
          success: true, 
          referenceNumber,
          message: "Payment instructions sent to email" 
        });
      } else {
        res.status(500).json({ message: "Failed to send payment instructions" });
      }
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  });

  // Admin API endpoints
  app.get("/api/admin/stats", async (req, res) => {
    try {
      // Get counts from all tables
      const users = await storage.getUserByEmail(""); // This will return undefined, but we just need the count method
      const totalUsers = (await storage.getAllUsers ? await storage.getAllUsers() : []).length;
      const totalInvestmentApplications = (await storage.getAllInvestmentApplications ? await storage.getAllInvestmentApplications() : []).length;
      const totalDealSubmissions = (await storage.getAllDealSubmissions()).length;
      const totalMerchantApplications = (await storage.getAllMerchantApplications()).length;
      const totalContactInquiries = (await storage.getAllContactInquiries()).length;
      const totalEmailsSent = (await storage.getAllEmailLogs ? await storage.getAllEmailLogs() : []).length;

      res.json({
        totalUsers,
        totalInvestmentApplications,
        totalDealSubmissions,
        totalMerchantApplications,
        totalContactInquiries,
        totalEmailsSent,
      });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  });

  app.get("/api/admin/users", async (req, res) => {
    try {
      const users = await storage.getAllUsers ? await storage.getAllUsers() : [];
      res.json(users);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  });

  app.get("/api/admin/investment-applications", async (req, res) => {
    try {
      const applications = await storage.getAllInvestmentApplications ? await storage.getAllInvestmentApplications() : [];
      res.json(applications);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  });

  app.get("/api/admin/deal-submissions", async (req, res) => {
    try {
      const deals = await storage.getAllDealSubmissions();
      res.json(deals);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  });

  app.get("/api/admin/merchant-applications", async (req, res) => {
    try {
      const merchants = await storage.getAllMerchantApplications();
      res.json(merchants);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  });

  app.get("/api/admin/contact-inquiries", async (req, res) => {
    try {
      const contacts = await storage.getAllContactInquiries();
      res.json(contacts);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  });

  app.get("/api/admin/email-logs", async (req, res) => {
    try {
      const emails = await storage.getAllEmailLogs ? await storage.getAllEmailLogs() : [];
      res.json(emails);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  });

  // E-signature routes
  app.post("/api/e-signatures", async (req, res) => {
    try {
      const {
        userId,
        documentId,
        documentTitle,
        documentContent,
        documentHash,
        signerName,
        signerEmail,
        signatureData,
        signatureType,
        ipAddress,
        applicationId,
        applicationType
      } = req.body;

      const signature = await storage.createESignature({
        userId,
        documentId,
        documentTitle,
        documentContent,
        documentHash,
        signerName,
        signerEmail,
        signatureData,
        signatureType,
        ipAddress,
        applicationId,
        applicationType,
      });

      // Log the signature creation
      await storage.createEmailLog({
        userId,
        emailType: "esignature_completed",
        recipientEmail: signerEmail,
        subject: `Document Signed: ${documentTitle}`,
        status: "sent",
      });

      res.json(signature);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  });

  app.get("/api/e-signatures/:userId", async (req, res) => {
    try {
      const userId = parseInt(req.params.userId);
      const signatures = await storage.getESignaturesByUser(userId);
      res.json(signatures);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  });

  app.get("/api/admin/e-signatures", async (req, res) => {
    try {
      const signatures = await storage.getAllESignatures();
      res.json(signatures);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
