// Lightweight types for in-memory storage
export type User = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  dateOfBirth?: string;
  ssn?: string;
  mobilePhone?: string;
  createdAt: Date;
  updatedAt: Date;
};

export type InsertUser = Omit<User, 'id' | 'createdAt' | 'updatedAt'>;

export type InvestmentApplication = {
  id: number;
  userId: number;
  investmentAmount: number;
  investmentType: string;
  accreditationStatus: string;
  riskTolerance: string;
  investmentGoals: string;
  liquidityNeeds: string;
  status: string;
  submittedAt: Date;
};

export type InsertInvestmentApplication = Omit<InvestmentApplication, 'id' | 'submittedAt'>;

export type DealSubmission = {
  id: number;
  userId: number;
  merchantBusinessName: string;
  requestedAmount: number;
  businessRevenue: number;
  timeInBusiness: number;
  creditScore: number;
  industry: string;
  useOfFunds: string;
  status: string;
  submittedAt: Date;
};

export type InsertDealSubmission = Omit<DealSubmission, 'id' | 'submittedAt'>;

export type MerchantApplication = {
  id: number;
  userId: number;
  legalCompanyName: string;
  businessStartDate: string;
  industry: string;
  requestedAmount: number;
  monthlyRevenue: number;
  businessDescription: string;
  status: string;
  submittedAt: Date;
};

export type InsertMerchantApplication = Omit<MerchantApplication, 'id' | 'submittedAt'>;

export type ContactInquiry = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  inquiryType: string;
  message: string;
  status: string;
  submittedAt: Date;
};

export type InsertContactInquiry = Omit<ContactInquiry, 'id' | 'submittedAt'>;

export type EmailLog = {
  id: number;
  userId?: number;
  recipient: string;
  subject: string;
  templateUsed: string;
  sentAt: Date;
  status: string;
};

export type Document = {
  id: number;
  userId: number;
  title: string;
  type: string;
  downloadCount: number;
  createdAt: Date;
};

export type ESignature = {
  id: number;
  userId: number;
  documentTitle: string;
  applicationType: string;
  applicationId: number;
  signedAt: Date;
  ipAddress: string;
  userAgent: string;
};

export type InsertESignature = Omit<ESignature, 'id' | 'signedAt'>;

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

// Lightweight in-memory storage implementation
export class MemStorage implements IStorage {
  private users: Map<number, User> = new Map();
  private investmentApplications: Map<number, InvestmentApplication> = new Map();
  private dealSubmissions: Map<number, DealSubmission> = new Map();
  private merchantApplications: Map<number, MerchantApplication> = new Map();
  private contactInquiries: Map<number, ContactInquiry> = new Map();
  private emailLogs: Map<number, EmailLog> = new Map();
  private documents: Map<number, Document> = new Map();
  private eSignatures: Map<number, ESignature> = new Map();
  
  private userIdCounter = 1;
  private applicationIdCounter = 1;
  private dealIdCounter = 1;
  private merchantIdCounter = 1;
  private contactIdCounter = 1;
  private emailIdCounter = 1;
  private documentIdCounter = 1;
  private signatureIdCounter = 1;

  // User operations
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    for (const user of this.users.values()) {
      if (user.email === email) {
        return user;
      }
    }
    return undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const user: User = {
      ...insertUser,
      id: this.userIdCounter++,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.users.set(user.id, user);
    return user;
  }

  async updateUser(id: number, updates: Partial<User>): Promise<User> {
    const user = this.users.get(id);
    if (!user) throw new Error('User not found');
    
    const updatedUser = { ...user, ...updates, updatedAt: new Date() };
    this.users.set(id, updatedUser);
    return updatedUser;
  }

  async getAllUsers(): Promise<User[]> {
    return Array.from(this.users.values());
  }

  // Investment applications
  async createInvestmentApplication(application: InsertInvestmentApplication & { userId: number }): Promise<InvestmentApplication> {
    const app: InvestmentApplication = {
      ...application,
      id: this.applicationIdCounter++,
      submittedAt: new Date(),
    };
    this.investmentApplications.set(app.id, app);
    return app;
  }

  async getInvestmentApplicationsByUser(userId: number): Promise<InvestmentApplication[]> {
    return Array.from(this.investmentApplications.values())
      .filter(app => app.userId === userId);
  }

  async getAllInvestmentApplications(): Promise<InvestmentApplication[]> {
    return Array.from(this.investmentApplications.values());
  }

  async updateInvestmentApplication(id: number, updates: Partial<InvestmentApplication>): Promise<InvestmentApplication> {
    const app = this.investmentApplications.get(id);
    if (!app) throw new Error('Application not found');
    
    const updatedApp = { ...app, ...updates };
    this.investmentApplications.set(id, updatedApp);
    return updatedApp;
  }

  // Deal submissions
  async createDealSubmission(submission: InsertDealSubmission & { userId: number }): Promise<DealSubmission> {
    const deal: DealSubmission = {
      ...submission,
      id: this.dealIdCounter++,
      submittedAt: new Date(),
    };
    this.dealSubmissions.set(deal.id, deal);
    return deal;
  }

  async getDealSubmissionsByUser(userId: number): Promise<DealSubmission[]> {
    return Array.from(this.dealSubmissions.values())
      .filter(deal => deal.userId === userId);
  }

  async getAllDealSubmissions(): Promise<DealSubmission[]> {
    return Array.from(this.dealSubmissions.values());
  }

  async updateDealSubmission(id: number, updates: Partial<DealSubmission>): Promise<DealSubmission> {
    const deal = this.dealSubmissions.get(id);
    if (!deal) throw new Error('Deal not found');
    
    const updatedDeal = { ...deal, ...updates };
    this.dealSubmissions.set(id, updatedDeal);
    return updatedDeal;
  }

  // Merchant applications
  async createMerchantApplication(application: InsertMerchantApplication & { userId: number }): Promise<MerchantApplication> {
    const app: MerchantApplication = {
      ...application,
      id: this.merchantIdCounter++,
      submittedAt: new Date(),
    };
    this.merchantApplications.set(app.id, app);
    return app;
  }

  async getMerchantApplicationsByUser(userId: number): Promise<MerchantApplication[]> {
    return Array.from(this.merchantApplications.values())
      .filter(app => app.userId === userId);
  }

  async getAllMerchantApplications(): Promise<MerchantApplication[]> {
    return Array.from(this.merchantApplications.values());
  }

  async updateMerchantApplication(id: number, updates: Partial<MerchantApplication>): Promise<MerchantApplication> {
    const app = this.merchantApplications.get(id);
    if (!app) throw new Error('Application not found');
    
    const updatedApp = { ...app, ...updates };
    this.merchantApplications.set(id, updatedApp);
    return updatedApp;
  }

  // Contact inquiries
  async createContactInquiry(inquiry: InsertContactInquiry): Promise<ContactInquiry> {
    const contact: ContactInquiry = {
      ...inquiry,
      id: this.contactIdCounter++,
      submittedAt: new Date(),
    };
    this.contactInquiries.set(contact.id, contact);
    return contact;
  }

  async getAllContactInquiries(): Promise<ContactInquiry[]> {
    return Array.from(this.contactInquiries.values());
  }

  async updateContactInquiry(id: number, updates: Partial<ContactInquiry>): Promise<ContactInquiry> {
    const contact = this.contactInquiries.get(id);
    if (!contact) throw new Error('Contact not found');
    
    const updatedContact = { ...contact, ...updates };
    this.contactInquiries.set(id, updatedContact);
    return updatedContact;
  }

  // Email logs
  async createEmailLog(log: Omit<EmailLog, 'id' | 'sentAt'>): Promise<EmailLog> {
    const emailLog: EmailLog = {
      ...log,
      id: this.emailIdCounter++,
      sentAt: new Date(),
    };
    this.emailLogs.set(emailLog.id, emailLog);
    return emailLog;
  }

  async getEmailLogsByUser(userId: number): Promise<EmailLog[]> {
    return Array.from(this.emailLogs.values())
      .filter(log => log.userId === userId);
  }

  async getAllEmailLogs(): Promise<EmailLog[]> {
    return Array.from(this.emailLogs.values());
  }

  // Documents
  async createDocument(document: Omit<Document, 'id' | 'downloadCount' | 'createdAt'>): Promise<Document> {
    const doc: Document = {
      ...document,
      id: this.documentIdCounter++,
      downloadCount: 0,
      createdAt: new Date(),
    };
    this.documents.set(doc.id, doc);
    return doc;
  }

  async getDocumentsByUser(userId: number): Promise<Document[]> {
    return Array.from(this.documents.values())
      .filter(doc => doc.userId === userId);
  }

  async incrementDownloadCount(id: number): Promise<void> {
    const doc = this.documents.get(id);
    if (doc) {
      doc.downloadCount++;
      this.documents.set(id, doc);
    }
  }

  // E-signatures
  async createESignature(signature: InsertESignature & { userId: number }): Promise<ESignature> {
    const sig: ESignature = {
      ...signature,
      id: this.signatureIdCounter++,
      signedAt: new Date(),
    };
    this.eSignatures.set(sig.id, sig);
    return sig;
  }

  async getESignaturesByUser(userId: number): Promise<ESignature[]> {
    return Array.from(this.eSignatures.values())
      .filter(sig => sig.userId === userId);
  }

  async getESignaturesByApplication(applicationId: number, applicationType: string): Promise<ESignature[]> {
    return Array.from(this.eSignatures.values())
      .filter(sig => sig.applicationId === applicationId && sig.applicationType === applicationType);
  }

  async getAllESignatures(): Promise<ESignature[]> {
    return Array.from(this.eSignatures.values());
  }
}

export const storage = new MemStorage();