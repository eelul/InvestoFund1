export interface DocumentTemplate {
  id: string;
  title: string;
  type: 'investment' | 'merchant' | 'iso';
  content: string;
  requiredFields: string[];
}

export const DOCUMENT_TEMPLATES: DocumentTemplate[] = [
  {
    id: 'investment-agreement',
    title: 'Investment Agreement & Profit Sharing Contract',
    type: 'investment',
    content: `
INVESTMENT AGREEMENT & PROFIT SHARING CONTRACT
INVESTOFUND LLC

AGREEMENT DATE: {{currentDate}}
INVESTOR: {{fullName}}
EMAIL: {{email}}
INVESTMENT AMOUNT: {{investmentAmount}}
INVESTMENT TYPE: {{investmentType}}

1. INVESTMENT TERMS
This Investment Agreement ("Agreement") is entered into between InvestoFund LLC ("Company") and {{fullName}} ("Investor") for an investment of {{investmentAmount}} in merchant cash advance opportunities.

2. INVESTMENT TYPE
{{#if investmentTypePortfolio}}
PORTFOLIO BLEND INVESTMENT: Your investment will be allocated across multiple pre-qualified merchant cash advance deals to diversify risk and optimize returns. Expected return: 18-25% annually.
{{else}}
DIRECT DEAL PARTICIPATION: Your investment will be directed toward specific merchant cash advance opportunities as they become available. Expected return: 20-30% per deal.
{{/if}}

3. PROFIT SHARING
- Company Fee: 5% of gross returns
- Investor Share: 95% of net profits after company fee
- Payment Schedule: Monthly distributions as deals are collected

4. RISK DISCLOSURE
Merchant cash advance investments carry inherent risks including:
- Business default risk
- Economic downturn impact
- Regulatory changes
- No guarantee of returns

5. LEGAL COMPLIANCE
- This investment is offered only to accredited investors as defined by SEC regulations
- Investor confirms accredited status: {{accreditedStatus}}
- Investment subject to all applicable federal and state securities laws

6. WIRE TRANSFER INSTRUCTIONS
Bank: First National Bank of America
Routing: 123456789
Account: 987654321
Reference: INV-{{applicationId}}

By signing below, Investor acknowledges reading, understanding, and agreeing to all terms of this Investment Agreement.

INVESTOR SIGNATURE: _______________________
PRINT NAME: {{fullName}}
DATE: {{currentDate}}

COMPANY SIGNATURE: _______________________
InvestoFund LLC Representative
DATE: {{currentDate}}
    `,
    requiredFields: ['fullName', 'email', 'investmentAmount', 'investmentType', 'accreditedStatus', 'applicationId']
  },
  {
    id: 'merchant-funding-agreement',
    title: 'Merchant Cash Advance Agreement',
    type: 'merchant',
    content: `
MERCHANT CASH ADVANCE AGREEMENT
INVESTOFUND

AGREEMENT DATE: {{currentDate}}
BUSINESS NAME: {{businessName}}
BUSINESS OWNER: {{ownerName}}
EMAIL: {{email}}
FUNDING AMOUNT: {{requestedFunding}}

1. ADVANCE TERMS
InvestoFund ("Funder") agrees to provide {{businessName}} ("Merchant") with a merchant cash advance of {{requestedFunding}} in exchange for the purchase of future receivables.

2. REPAYMENT TERMS
- Factor Rate: 1.15 - 1.49 (based on risk assessment)
- Advance Range: $2,000 - $2,000,000
- Term Length: 25 days - 18 months (estimated)
- Payment Options: Daily, weekly, bi-weekly, or monthly
- Collection Method: ACH or credit card holdback
- Same-day approval and funding in as fast as 1 business day

3. BUSINESS INFORMATION
- Business Type: {{businessType}}
- Years in Business: {{yearsInBusiness}}
- Monthly Revenue: {{monthlyRevenue}}
- Business Address: {{businessAddress}}

4. COLLECTION METHOD
Merchant agrees to one of the following payment structures:
- Daily: Percentage of daily credit card sales or ACH deposits
- Weekly: Set weekly ACH withdrawals from business account
- Bi-weekly: Payments every two weeks via ACH
- Monthly: Traditional monthly payment structure via ACH
- Provide sales reports if requested for verification

5. REPRESENTATIONS AND WARRANTIES
Merchant represents that:
- All business information provided is accurate
- Business is in good standing
- No pending bankruptcies or liens
- Authorized to enter this agreement

6. DEFAULT CONDITIONS
Events of default include:
- Failure to maintain agreed collection percentage
- Business closure without notice
- Providing false information
- Filing for bankruptcy

MERCHANT SIGNATURE: _______________________
PRINT NAME: {{ownerName}}
TITLE: Business Owner
DATE: {{currentDate}}

FUNDER SIGNATURE: _______________________
InvestoFund Representative
DATE: {{currentDate}}
    `,
    requiredFields: ['businessName', 'ownerName', 'email', 'requestedFunding', 'businessType', 'yearsInBusiness', 'monthlyRevenue', 'businessAddress']
  },
  {
    id: 'iso-commission-agreement',
    title: 'ISO Commission & Partnership Agreement',
    type: 'iso',
    content: `
ISO COMMISSION & PARTNERSHIP AGREEMENT
INVESTOFUND

AGREEMENT DATE: {{currentDate}}
ISO/BROKER: {{fullName}}
COMPANY: {{companyName}}
EMAIL: {{email}}

1. PARTNERSHIP TERMS
InvestoFund ("Company") appoints {{fullName}} ("ISO") as an Independent Sales Organization to source and submit merchant cash advance opportunities.

2. COMMISSION STRUCTURE
- Base Commission: 2-4% of funded amount
- Volume Bonuses: Additional 1-2% for high performers
- Monthly Volume Tiers:
  - Tier 1: $100K+ monthly volume = 3% base
  - Tier 2: $250K+ monthly volume = 4% base
  - Tier 3: $500K+ monthly volume = 5% base

3. SUBMISSION REQUIREMENTS
ISO agrees to:
- Submit complete deal packages
- Verify all merchant information
- Follow company underwriting guidelines
- Maintain quality submission standards

4. PAYMENT TERMS
- Commissions paid monthly
- Payment within 30 days of deal funding
- Direct deposit or check payment available
- 1099 issued annually for tax purposes

5. COMPLIANCE
- ISO must maintain proper licensing
- Follow all applicable state and federal regulations
- Adhere to company compliance policies
- No misrepresentation of terms or company

6. TERRITORY
- Nationwide authorization (US only)
- No exclusive territory grants
- Multiple ISO programs allowed

ISO SIGNATURE: _______________________
PRINT NAME: {{fullName}}
DATE: {{currentDate}}

COMPANY SIGNATURE: _______________________
Green Harvest Funding Representative
DATE: {{currentDate}}
    `,
    requiredFields: ['fullName', 'companyName', 'email']
  }
];

export function getDocumentTemplate(id: string): DocumentTemplate | undefined {
  return DOCUMENT_TEMPLATES.find(template => template.id === id);
}

export function processDocumentTemplate(template: DocumentTemplate, data: Record<string, any>): string {
  let processedContent = template.content;
  
  // Add current date
  data.currentDate = new Date().toLocaleDateString();
  
  // Replace template variables
  Object.keys(data).forEach(key => {
    const regex = new RegExp(`{{${key}}}`, 'g');
    processedContent = processedContent.replace(regex, data[key] || '[NOT PROVIDED]');
  });
  
  // Handle conditional blocks (simple implementation)
  const portfolioRegex = /{{#if investmentTypePortfolio}}([\s\S]*?){{else}}([\s\S]*?){{\/if}}/;
  if (data.investmentType === 'portfolio') {
    processedContent = processedContent.replace(portfolioRegex, '$1');
  } else {
    processedContent = processedContent.replace(portfolioRegex, '$2');
  }
  
  return processedContent;
}

export function validateDocumentData(template: DocumentTemplate, data: Record<string, any>): string[] {
  const missingFields: string[] = [];
  
  template.requiredFields.forEach(field => {
    if (!data[field] || data[field] === '') {
      missingFields.push(field);
    }
  });
  
  return missingFields;
}