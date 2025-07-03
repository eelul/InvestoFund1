import { pgTable, text, serial, integer, boolean, timestamp, decimal, varchar, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// User management
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  firstName: text("first_name"),
  lastName: text("last_name"),
  phone: text("phone"),
  userType: text("user_type").notNull(), // 'investor', 'iso', 'merchant'
  accreditedInvestor: boolean("accredited_investor").default(false),
  stripeCustomerId: text("stripe_customer_id"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Investment applications
export const investmentApplications = pgTable("investment_applications", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id),
  investmentAmount: decimal("investment_amount", { precision: 12, scale: 2 }).notNull(),
  investmentType: text("investment_type").notNull(), // 'single', 'portfolio'
  accreditedStatus: boolean("accredited_status").default(false),
  documentsAgreed: boolean("documents_agreed").default(false),
  paymentIntentId: text("payment_intent_id"),
  status: text("status").default("pending"), // 'pending', 'approved', 'funded', 'rejected'
  createdAt: timestamp("created_at").defaultNow(),
});

// ISO/Broker deal submissions
export const dealSubmissions = pgTable("deal_submissions", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id),
  isoName: text("iso_name").notNull(),
  merchantBusinessName: text("merchant_business_name").notNull(),
  requestedAmount: decimal("requested_amount", { precision: 12, scale: 2 }).notNull(),
  factorRate: decimal("factor_rate", { precision: 4, scale: 2 }),
  estimatedCommission: decimal("estimated_commission", { precision: 12, scale: 2 }),
  dealFiles: jsonb("deal_files"), // Array of file metadata
  qualityChecklist: jsonb("quality_checklist"), // Checkbox states
  status: text("status").default("submitted"), // 'submitted', 'reviewing', 'approved', 'funded', 'rejected'
  createdAt: timestamp("created_at").defaultNow(),
});

// Merchant funding applications
export const merchantApplications = pgTable("merchant_applications", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id),
  businessName: text("business_name").notNull(),
  businessType: text("business_type").notNull(),
  yearsInBusiness: text("years_in_business").notNull(),
  monthlyRevenue: text("monthly_revenue").notNull(),
  requestedFunding: text("requested_funding").notNull(),
  ownerName: text("owner_name").notNull(),
  businessAddress: text("business_address").notNull(),
  documentsUploaded: jsonb("documents_uploaded"), // Array of file metadata
  preQualificationResults: jsonb("pre_qualification_results"), // Estimated amounts and rates
  status: text("status").default("submitted"), // 'submitted', 'reviewing', 'approved', 'funded', 'rejected'
  createdAt: timestamp("created_at").defaultNow(),
});

// Contact inquiries
export const contactInquiries = pgTable("contact_inquiries", {
  id: serial("id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  inquiryType: text("inquiry_type").notNull(),
  message: text("message").notNull(),
  status: text("status").default("new"), // 'new', 'responded', 'closed'
  createdAt: timestamp("created_at").defaultNow(),
});

// Email automation logs
export const emailLogs = pgTable("email_logs", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id),
  emailType: text("email_type").notNull(), // 'investor_welcome', 'iso_confirmation', etc.
  recipientEmail: text("recipient_email").notNull(),
  subject: text("subject").notNull(),
  sentAt: timestamp("sent_at").defaultNow(),
  status: text("status").default("sent"), // 'sent', 'failed', 'bounced'
});

// Document management
export const documents = pgTable("documents", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id),
  documentType: text("document_type").notNull(), // 'psa', 'iso_packet', 'risk_disclosure', etc.
  fileName: text("file_name").notNull(),
  filePath: text("file_path"),
  downloadCount: integer("download_count").default(0),
  createdAt: timestamp("created_at").defaultNow(),
});

// Insert schemas
export const insertUserSchema = createInsertSchema(users).pick({
  email: true,
  firstName: true,
  lastName: true,
  phone: true,
  userType: true,
  accreditedInvestor: true,
});

export const insertInvestmentApplicationSchema = createInsertSchema(investmentApplications).pick({
  investmentAmount: true,
  investmentType: true,
  accreditedStatus: true,
  documentsAgreed: true,
});

export const insertDealSubmissionSchema = createInsertSchema(dealSubmissions).pick({
  isoName: true,
  merchantBusinessName: true,
  requestedAmount: true,
  factorRate: true,
  estimatedCommission: true,
  dealFiles: true,
  qualityChecklist: true,
});

export const insertMerchantApplicationSchema = createInsertSchema(merchantApplications).pick({
  businessName: true,
  businessType: true,
  yearsInBusiness: true,
  monthlyRevenue: true,
  requestedFunding: true,
  ownerName: true,
  businessAddress: true,
  documentsUploaded: true,
  preQualificationResults: true,
});

export const insertContactInquirySchema = createInsertSchema(contactInquiries).pick({
  firstName: true,
  lastName: true,
  email: true,
  phone: true,
  inquiryType: true,
  message: true,
});

// Types
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertInvestmentApplication = z.infer<typeof insertInvestmentApplicationSchema>;
export type InvestmentApplication = typeof investmentApplications.$inferSelect;
export type InsertDealSubmission = z.infer<typeof insertDealSubmissionSchema>;
export type DealSubmission = typeof dealSubmissions.$inferSelect;
export type InsertMerchantApplication = z.infer<typeof insertMerchantApplicationSchema>;
export type MerchantApplication = typeof merchantApplications.$inferSelect;
export type InsertContactInquiry = z.infer<typeof insertContactInquirySchema>;
export type ContactInquiry = typeof contactInquiries.$inferSelect;
export type EmailLog = typeof emailLogs.$inferSelect;
export type Document = typeof documents.$inferSelect;
