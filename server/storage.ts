import {
  users,
  investmentApplications,
  dealSubmissions,
  merchantApplications,
  contactInquiries,
  emailLogs,
  documents,
  eSignatures,
  type User,
  type InsertUser,
  type InvestmentApplication,
  type InsertInvestmentApplication,
  type DealSubmission,
  type InsertDealSubmission,
  type MerchantApplication,
  type InsertMerchantApplication,
  type ContactInquiry,
  type InsertContactInquiry,
  type EmailLog,
  type Document,
  type ESignature,
  type InsertESignature,
} from "@shared/schema";
import { db } from "./db";
import { eq, desc, sql } from "drizzle-orm";

// Interface for storage operations
export interface IStorage {
  // User operations
  getUser(id: number): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  updateUser(id: number, updates: Partial<User>): Promise<User>;
  getAllUsers(): Promise<User[]>;

  // Investment applications
  createInvestmentApplication(application: InsertInvestmentApplication & { userId: number }): Promise<InvestmentApplication>;
  getInvestmentApplicationsByUser(userId: number): Promise<InvestmentApplication[]>;
  getAllInvestmentApplications(): Promise<InvestmentApplication[]>;
  updateInvestmentApplication(id: number, updates: Partial<InvestmentApplication>): Promise<InvestmentApplication>;

  // Deal submissions
  createDealSubmission(submission: InsertDealSubmission & { userId: number }): Promise<DealSubmission>;
  getDealSubmissionsByUser(userId: number): Promise<DealSubmission[]>;
  getAllDealSubmissions(): Promise<DealSubmission[]>;
  updateDealSubmission(id: number, updates: Partial<DealSubmission>): Promise<DealSubmission>;

  // Merchant applications
  createMerchantApplication(application: InsertMerchantApplication & { userId: number }): Promise<MerchantApplication>;
  getMerchantApplicationsByUser(userId: number): Promise<MerchantApplication[]>;
  getAllMerchantApplications(): Promise<MerchantApplication[]>;
  updateMerchantApplication(id: number, updates: Partial<MerchantApplication>): Promise<MerchantApplication>;

  // Contact inquiries
  createContactInquiry(inquiry: InsertContactInquiry): Promise<ContactInquiry>;
  getAllContactInquiries(): Promise<ContactInquiry[]>;
  updateContactInquiry(id: number, updates: Partial<ContactInquiry>): Promise<ContactInquiry>;

  // Email logs
  createEmailLog(log: Omit<EmailLog, 'id' | 'sentAt'>): Promise<EmailLog>;
  getEmailLogsByUser(userId: number): Promise<EmailLog[]>;
  getAllEmailLogs(): Promise<EmailLog[]>;

  // Documents
  createDocument(document: Omit<Document, 'id' | 'downloadCount' | 'createdAt'>): Promise<Document>;
  getDocumentsByUser(userId: number): Promise<Document[]>;
  incrementDownloadCount(id: number): Promise<void>;

  // E-signatures
  createESignature(signature: InsertESignature & { userId: number }): Promise<ESignature>;
  getESignaturesByUser(userId: number): Promise<ESignature[]>;
  getESignaturesByApplication(applicationId: number, applicationType: string): Promise<ESignature[]>;
  getAllESignatures(): Promise<ESignature[]>;
}

export class DatabaseStorage implements IStorage {
  // User operations
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.email, email));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  async updateUser(id: number, updates: Partial<User>): Promise<User> {
    const [user] = await db
      .update(users)
      .set({ ...updates, updatedAt: new Date() })
      .where(eq(users.id, id))
      .returning();
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  }

  async getAllUsers(): Promise<User[]> {
    return await db
      .select()
      .from(users)
      .orderBy(desc(users.createdAt));
  }

  // Investment applications
  async createInvestmentApplication(application: InsertInvestmentApplication & { userId: number }): Promise<InvestmentApplication> {
    const [app] = await db
      .insert(investmentApplications)
      .values(application)
      .returning();
    return app;
  }

  async getInvestmentApplicationsByUser(userId: number): Promise<InvestmentApplication[]> {
    return await db
      .select()
      .from(investmentApplications)
      .where(eq(investmentApplications.userId, userId))
      .orderBy(desc(investmentApplications.createdAt));
  }

  async getAllInvestmentApplications(): Promise<InvestmentApplication[]> {
    return await db
      .select()
      .from(investmentApplications)
      .orderBy(desc(investmentApplications.createdAt));
  }

  async updateInvestmentApplication(id: number, updates: Partial<InvestmentApplication>): Promise<InvestmentApplication> {
    const [app] = await db
      .update(investmentApplications)
      .set(updates)
      .where(eq(investmentApplications.id, id))
      .returning();
    if (!app) {
      throw new Error("Investment application not found");
    }
    return app;
  }

  // Deal submissions
  async createDealSubmission(submission: InsertDealSubmission & { userId: number }): Promise<DealSubmission> {
    const [deal] = await db
      .insert(dealSubmissions)
      .values(submission)
      .returning();
    return deal;
  }

  async getDealSubmissionsByUser(userId: number): Promise<DealSubmission[]> {
    return await db
      .select()
      .from(dealSubmissions)
      .where(eq(dealSubmissions.userId, userId))
      .orderBy(desc(dealSubmissions.createdAt));
  }

  async getAllDealSubmissions(): Promise<DealSubmission[]> {
    return await db
      .select()
      .from(dealSubmissions)
      .orderBy(desc(dealSubmissions.createdAt));
  }

  async updateDealSubmission(id: number, updates: Partial<DealSubmission>): Promise<DealSubmission> {
    const [deal] = await db
      .update(dealSubmissions)
      .set(updates)
      .where(eq(dealSubmissions.id, id))
      .returning();
    if (!deal) {
      throw new Error("Deal submission not found");
    }
    return deal;
  }

  // Merchant applications
  async createMerchantApplication(application: InsertMerchantApplication & { userId: number }): Promise<MerchantApplication> {
    const [app] = await db
      .insert(merchantApplications)
      .values(application)
      .returning();
    return app;
  }

  async getMerchantApplicationsByUser(userId: number): Promise<MerchantApplication[]> {
    return await db
      .select()
      .from(merchantApplications)
      .where(eq(merchantApplications.userId, userId))
      .orderBy(desc(merchantApplications.createdAt));
  }

  async getAllMerchantApplications(): Promise<MerchantApplication[]> {
    return await db
      .select()
      .from(merchantApplications)
      .orderBy(desc(merchantApplications.createdAt));
  }

  async updateMerchantApplication(id: number, updates: Partial<MerchantApplication>): Promise<MerchantApplication> {
    const [app] = await db
      .update(merchantApplications)
      .set(updates)
      .where(eq(merchantApplications.id, id))
      .returning();
    if (!app) {
      throw new Error("Merchant application not found");
    }
    return app;
  }

  // Contact inquiries
  async createContactInquiry(inquiry: InsertContactInquiry): Promise<ContactInquiry> {
    const [contact] = await db
      .insert(contactInquiries)
      .values(inquiry)
      .returning();
    return contact;
  }

  async getAllContactInquiries(): Promise<ContactInquiry[]> {
    return await db
      .select()
      .from(contactInquiries)
      .orderBy(desc(contactInquiries.createdAt));
  }

  async updateContactInquiry(id: number, updates: Partial<ContactInquiry>): Promise<ContactInquiry> {
    const [contact] = await db
      .update(contactInquiries)
      .set(updates)
      .where(eq(contactInquiries.id, id))
      .returning();
    if (!contact) {
      throw new Error("Contact inquiry not found");
    }
    return contact;
  }

  // Email logs
  async createEmailLog(log: Omit<EmailLog, 'id' | 'sentAt'>): Promise<EmailLog> {
    const [emailLog] = await db
      .insert(emailLogs)
      .values({ ...log, sentAt: new Date() })
      .returning();
    return emailLog;
  }

  async getEmailLogsByUser(userId: number): Promise<EmailLog[]> {
    return await db
      .select()
      .from(emailLogs)
      .where(eq(emailLogs.userId, userId))
      .orderBy(desc(emailLogs.sentAt));
  }

  async getAllEmailLogs(): Promise<EmailLog[]> {
    return await db
      .select()
      .from(emailLogs)
      .orderBy(desc(emailLogs.sentAt));
  }

  // Documents
  async createDocument(document: Omit<Document, 'id' | 'downloadCount' | 'createdAt'>): Promise<Document> {
    const [doc] = await db
      .insert(documents)
      .values({ 
        ...document, 
        downloadCount: 0,
        createdAt: new Date()
      })
      .returning();
    return doc;
  }

  async getDocumentsByUser(userId: number): Promise<Document[]> {
    return await db
      .select()
      .from(documents)
      .where(eq(documents.userId, userId))
      .orderBy(desc(documents.createdAt));
  }

  async incrementDownloadCount(id: number): Promise<void> {
    const [doc] = await db.select().from(documents).where(eq(documents.id, id));
    if (doc) {
      await db
        .update(documents)
        .set({ 
          downloadCount: (doc.downloadCount || 0) + 1
        })
        .where(eq(documents.id, id));
    }
  }

  // E-signatures
  async createESignature(signature: InsertESignature & { userId: number }): Promise<ESignature> {
    const [esig] = await db
      .insert(eSignatures)
      .values({
        ...signature,
        signedAt: new Date(),
      })
      .returning();
    return esig;
  }

  async getESignaturesByUser(userId: number): Promise<ESignature[]> {
    return await db
      .select()
      .from(eSignatures)
      .where(eq(eSignatures.userId, userId))
      .orderBy(desc(eSignatures.signedAt));
  }

  async getESignaturesByApplication(applicationId: number, applicationType: string): Promise<ESignature[]> {
    return await db
      .select()
      .from(eSignatures)
      .where(
        sql`${eSignatures.applicationId} = ${applicationId} AND ${eSignatures.applicationType} = ${applicationType}`
      )
      .orderBy(desc(eSignatures.signedAt));
  }

  async getAllESignatures(): Promise<ESignature[]> {
    return await db
      .select()
      .from(eSignatures)
      .orderBy(desc(eSignatures.signedAt));
  }
}

export const storage = new DatabaseStorage();