import {
  users,
  investmentApplications,
  dealSubmissions,
  merchantApplications,
  contactInquiries,
  emailLogs,
  documents,
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
} from "@shared/schema";

export interface IStorage {
  // User operations
  getUser(id: number): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  updateUser(id: number, updates: Partial<User>): Promise<User>;

  // Investment applications
  createInvestmentApplication(application: InsertInvestmentApplication & { userId: number }): Promise<InvestmentApplication>;
  getInvestmentApplicationsByUser(userId: number): Promise<InvestmentApplication[]>;
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

  // Documents
  createDocument(document: Omit<Document, 'id' | 'downloadCount' | 'createdAt'>): Promise<Document>;
  getDocumentsByUser(userId: number): Promise<Document[]>;
  incrementDownloadCount(id: number): Promise<void>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private investmentApplications: Map<number, InvestmentApplication>;
  private dealSubmissions: Map<number, DealSubmission>;
  private merchantApplications: Map<number, MerchantApplication>;
  private contactInquiries: Map<number, ContactInquiry>;
  private emailLogs: Map<number, EmailLog>;
  private documents: Map<number, Document>;
  private currentId: number;

  constructor() {
    this.users = new Map();
    this.investmentApplications = new Map();
    this.dealSubmissions = new Map();
    this.merchantApplications = new Map();
    this.contactInquiries = new Map();
    this.emailLogs = new Map();
    this.documents = new Map();
    this.currentId = 1;
  }

  // User operations
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(user => user.email === email);
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId++;
    const user: User = {
      ...insertUser,
      id,
      stripeCustomerId: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.users.set(id, user);
    return user;
  }

  async updateUser(id: number, updates: Partial<User>): Promise<User> {
    const user = this.users.get(id);
    if (!user) throw new Error("User not found");
    
    const updatedUser = { ...user, ...updates, updatedAt: new Date() };
    this.users.set(id, updatedUser);
    return updatedUser;
  }

  // Investment applications
  async createInvestmentApplication(application: InsertInvestmentApplication & { userId: number }): Promise<InvestmentApplication> {
    const id = this.currentId++;
    const app: InvestmentApplication = {
      ...application,
      id,
      paymentIntentId: null,
      status: "pending",
      createdAt: new Date(),
    };
    this.investmentApplications.set(id, app);
    return app;
  }

  async getInvestmentApplicationsByUser(userId: number): Promise<InvestmentApplication[]> {
    return Array.from(this.investmentApplications.values()).filter(app => app.userId === userId);
  }

  async updateInvestmentApplication(id: number, updates: Partial<InvestmentApplication>): Promise<InvestmentApplication> {
    const application = this.investmentApplications.get(id);
    if (!application) throw new Error("Investment application not found");
    
    const updatedApplication = { ...application, ...updates };
    this.investmentApplications.set(id, updatedApplication);
    return updatedApplication;
  }

  // Deal submissions
  async createDealSubmission(submission: InsertDealSubmission & { userId: number }): Promise<DealSubmission> {
    const id = this.currentId++;
    const deal: DealSubmission = {
      ...submission,
      id,
      status: "submitted",
      createdAt: new Date(),
    };
    this.dealSubmissions.set(id, deal);
    return deal;
  }

  async getDealSubmissionsByUser(userId: number): Promise<DealSubmission[]> {
    return Array.from(this.dealSubmissions.values()).filter(deal => deal.userId === userId);
  }

  async getAllDealSubmissions(): Promise<DealSubmission[]> {
    return Array.from(this.dealSubmissions.values());
  }

  async updateDealSubmission(id: number, updates: Partial<DealSubmission>): Promise<DealSubmission> {
    const submission = this.dealSubmissions.get(id);
    if (!submission) throw new Error("Deal submission not found");
    
    const updatedSubmission = { ...submission, ...updates };
    this.dealSubmissions.set(id, updatedSubmission);
    return updatedSubmission;
  }

  // Merchant applications
  async createMerchantApplication(application: InsertMerchantApplication & { userId: number }): Promise<MerchantApplication> {
    const id = this.currentId++;
    const app: MerchantApplication = {
      ...application,
      id,
      status: "submitted",
      createdAt: new Date(),
    };
    this.merchantApplications.set(id, app);
    return app;
  }

  async getMerchantApplicationsByUser(userId: number): Promise<MerchantApplication[]> {
    return Array.from(this.merchantApplications.values()).filter(app => app.userId === userId);
  }

  async getAllMerchantApplications(): Promise<MerchantApplication[]> {
    return Array.from(this.merchantApplications.values());
  }

  async updateMerchantApplication(id: number, updates: Partial<MerchantApplication>): Promise<MerchantApplication> {
    const application = this.merchantApplications.get(id);
    if (!application) throw new Error("Merchant application not found");
    
    const updatedApplication = { ...application, ...updates };
    this.merchantApplications.set(id, updatedApplication);
    return updatedApplication;
  }

  // Contact inquiries
  async createContactInquiry(inquiry: InsertContactInquiry): Promise<ContactInquiry> {
    const id = this.currentId++;
    const contact: ContactInquiry = {
      ...inquiry,
      id,
      status: "new",
      createdAt: new Date(),
    };
    this.contactInquiries.set(id, contact);
    return contact;
  }

  async getAllContactInquiries(): Promise<ContactInquiry[]> {
    return Array.from(this.contactInquiries.values());
  }

  async updateContactInquiry(id: number, updates: Partial<ContactInquiry>): Promise<ContactInquiry> {
    const inquiry = this.contactInquiries.get(id);
    if (!inquiry) throw new Error("Contact inquiry not found");
    
    const updatedInquiry = { ...inquiry, ...updates };
    this.contactInquiries.set(id, updatedInquiry);
    return updatedInquiry;
  }

  // Email logs
  async createEmailLog(log: Omit<EmailLog, 'id' | 'sentAt'>): Promise<EmailLog> {
    const id = this.currentId++;
    const emailLog: EmailLog = {
      ...log,
      id,
      sentAt: new Date(),
    };
    this.emailLogs.set(id, emailLog);
    return emailLog;
  }

  async getEmailLogsByUser(userId: number): Promise<EmailLog[]> {
    return Array.from(this.emailLogs.values()).filter(log => log.userId === userId);
  }

  // Documents
  async createDocument(document: Omit<Document, 'id' | 'downloadCount' | 'createdAt'>): Promise<Document> {
    const id = this.currentId++;
    const doc: Document = {
      ...document,
      id,
      downloadCount: 0,
      createdAt: new Date(),
    };
    this.documents.set(id, doc);
    return doc;
  }

  async getDocumentsByUser(userId: number): Promise<Document[]> {
    return Array.from(this.documents.values()).filter(doc => doc.userId === userId);
  }

  async incrementDownloadCount(id: number): Promise<void> {
    const document = this.documents.get(id);
    if (document) {
      document.downloadCount = (document.downloadCount || 0) + 1;
      this.documents.set(id, document);
    }
  }
}

export const storage = new MemStorage();
