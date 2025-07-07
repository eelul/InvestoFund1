export const BRAND_COLORS = {
  teal: "#4ECDC4",
  blue: "#2B4A66", 
  bluLight: "#3A5A77",
  dark: "#1E2B37",
  gray: "#6B7280",
  light: "#F8FAFC",
  card: "#FFFFFF",
  border: "#D1D5DB"
} as const;

export const INVESTMENT_TIERS = [
  { value: "5000-25000", label: "$5K - $25K", min: 5000, max: 25000 },
  { value: "25000-100000", label: "$25K - $100K", min: 25000, max: 100000 },
  { value: "100000-500000", label: "$100K - $500K", min: 100000, max: 500000 },
  { value: "500000+", label: "$500K+", min: 500000, max: 1000000 },
] as const;

export const BUSINESS_TYPES = [
  "Restaurant/Food Service",
  "Retail Store", 
  "Auto Repair",
  "Beauty/Salon",
  "Professional Services",
  "Healthcare",
  "Construction",
  "Other"
] as const;

export const YEARS_IN_BUSINESS = [
  "Less than 1 year",
  "1-2 years", 
  "3-5 years",
  "5+ years"
] as const;

export const MONTHLY_REVENUE_RANGES = [
  "$5,000 - $15,000",
  "$15,000 - $30,000",
  "$30,000 - $50,000", 
  "$50,000+"
] as const;

export const FUNDING_RANGES = [
  "$2K - $25K",
  "$25K - $100K",
  "$100K - $500K",
  "$500K - $2M"
] as const;

export const INQUIRY_TYPES = [
  "Investment opportunities",
  "ISO partnership", 
  "Business funding",
  "General inquiry"
] as const;

export const CALCULATOR_DEFAULTS = {
  standard: {
    investment: 25000,
    factorRate: 1.37, // Updated to mid-range of 1.25-1.49
    termDays: 45
  },
  portfolio: {
    investment: 50000,
    dealCount: 4,
    avgFactorRate: 1.37 // Updated to mid-range of 1.25-1.49
  },
  iso: {
    dealAmount: 25000,
    factorRate: 1.37, // Updated to mid-range of 1.25-1.49
    commissionRate: 0.15
  }
} as const;

export const EMAIL_TYPES = {
  INVESTOR_WELCOME: "investor_welcome",
  INVESTOR_DOC_SIGNATURE: "investor_doc_signature", 
  INVESTOR_DEAL_MATCHED: "investor_deal_matched",
  INVESTOR_PAYOUT: "investor_payout",
  BROKER_DEAL_CONFIRMATION: "broker_deal_confirmation",
  BROKER_DEAL_STATUS: "broker_deal_status",
  MERCHANT_APPLICATION_CONFIRMATION: "merchant_application_confirmation",
  CONTACT_INQUIRY_CONFIRMATION: "contact_inquiry_confirmation"
} as const;

export const DOCUMENT_TYPES = {
  PSA: "psa", // Profit Sharing Agreement
  ISO_PACKET: "iso_packet",
  RISK_DISCLOSURE: "risk_disclosure", 
  INVESTOR_WELCOME: "investor_welcome",
  COMMISSION_STRUCTURE: "commission_structure",
  TERMS_OF_SERVICE: "terms_of_service",
  PRIVACY_POLICY: "privacy_policy"
} as const;
