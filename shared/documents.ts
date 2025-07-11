// Legal document templates for InvestoFund platform
// All documents are professionally drafted and compliant with financial regulations

export interface DocumentTemplate {
  id: string;
  title: string;
  category: 'investor' | 'merchant' | 'broker' | 'platform' | 'compliance';
  description: string;
  content: string;
  requiredFields: string[];
  legalNotice: string;
}

export const legalDocuments: DocumentTemplate[] = [
  // INVESTOR DOCUMENTS
  {
    id: 'profit-sharing-agreement',
    title: 'InvestoFund Profit Sharing Agreement',
    category: 'investor',
    description: 'Primary legal agreement between InvestoFund LLC and investors for MCA profit participation',
    requiredFields: ['investorName', 'investmentAmount', 'riskPreference', 'investmentType'],
    legalNotice: 'This is a legally binding contract. Please review with legal counsel before signing.',
    content: `
INVESTOFUND LLC PROFIT SHARING AGREEMENT

This Profit Sharing Agreement ("Agreement") is entered into on [DATE] between InvestoFund LLC, a [STATE] limited liability company ("Company"), and [INVESTOR_NAME] ("Investor").

RECITALS
WHEREAS, Company operates a platform facilitating investments in merchant cash advances ("MCAs");
WHEREAS, Investor desires to participate in Company's profit-sharing program;
WHEREAS, Company agrees to share profits from MCA investments subject to the terms herein;

NOW, THEREFORE, the parties agree as follows:

1. INVESTMENT STRUCTURE
   a) Investment Amount: $[INVESTMENT_AMOUNT]
   b) Investment Type: [INVESTMENT_TYPE] (Direct Deal Participation or Portfolio Blend)
   c) Risk Preference: [RISK_PREFERENCE] (Factor Rate Range: [FACTOR_RATE_RANGE])
   d) Minimum Deal Term: 25 days
   e) Maximum Deal Term: 18 months

2. PROFIT SHARING TERMS
   a) Direct Deal Participation: 
      - Investor receives 50% of net profits after broker commission (typically 15%)
      - Expected returns: 20.8% per deal on average
      - Full control over individual deal selection
   
   b) Portfolio Blend (InvestoBlend™):
      - Investor receives proportional share after 10% management fee
      - Target returns: 18.7% annually
      - Professional deal diversification and management

3. DEAL PARAMETERS
   a) Factor Rates: 1.15x to 1.49x of advance amount
   b) Funding Range: $2,000 to $2,000,000 per deal
   c) Payment Frequencies: Daily, weekly, bi-weekly, or monthly
   d) Industries: All sectors including high-risk businesses under 1 year

4. RISK DISCLOSURES
   a) MCA investments carry substantial risk of loss
   b) Past performance does not guarantee future results
   c) No FDIC insurance or government protection
   d) Merchant default may result in partial or total loss
   e) Economic conditions may affect collection rates

5. FEES AND EXPENSES
   a) No upfront fees for investment participation
   b) Broker commissions deducted from gross profits
   c) Management fees apply only to Portfolio Blend option
   d) Wire transfer costs borne by investor

6. PAYMENT TERMS
   a) Profit distributions made within 5 business days of collection
   b) Reinvestment options available for compound growth
   c) Principal returned upon deal completion or default resolution

7. TERM AND TERMINATION
   a) Agreement effective until all investments conclude
   b) Either party may terminate with 30 days written notice
   c) Existing investments continue under original terms

8. COMPLIANCE AND REGULATIONS
   a) Investor represents accredited investor status if required
   b) Company maintains all necessary licenses and registrations
   c) Agreement subject to federal and state securities laws

9. DISPUTE RESOLUTION
   a) Binding arbitration in [JURISDICTION]
   b) Governed by [STATE] law
   c) Prevailing party entitled to attorney fees

10. MISCELLANEOUS
    a) Agreement constitutes entire understanding
    b) Modifications require written consent
    c) Severability clause applies

IN WITNESS WHEREOF, the parties execute this Agreement.

INVESTOFUND LLC                    INVESTOR

_________________________         _________________________
[AUTHORIZED_SIGNATORY]            [INVESTOR_NAME]
Title: [TITLE]                    Date: [DATE]
Date: [DATE]

ELECTRONIC SIGNATURE ACKNOWLEDGMENT
This document has been executed electronically and is legally binding.
IP Address: [IP_ADDRESS]
Timestamp: [TIMESTAMP]
Document Hash: [DOCUMENT_HASH]
`
  },

  {
    id: 'investor-risk-disclosure',
    title: 'Risk Disclosure Statement for MCA Investments',
    category: 'investor',
    description: 'Comprehensive risk disclosure document for MCA investment participation',
    requiredFields: ['investorName', 'acknowledgmentDate'],
    legalNotice: 'Required disclosure under federal securities regulations.',
    content: `
RISK DISCLOSURE STATEMENT
MERCHANT CASH ADVANCE INVESTMENTS

IMPORTANT: READ THIS DISCLOSURE CAREFULLY BEFORE INVESTING

TO: [INVESTOR_NAME]
DATE: [ACKNOWLEDGMENT_DATE]

This Risk Disclosure Statement outlines the material risks associated with investing in Merchant Cash Advances ("MCAs") through InvestoFund LLC.

PRINCIPAL RISKS:

1. LOSS OF PRINCIPAL
   - You may lose some or all of your investment
   - MCAs are unsecured advances to merchants
   - No guarantee of repayment exists

2. MERCHANT DEFAULT RISK
   - Merchants may fail to make payments
   - Business closure or bankruptcy affects collections
   - Economic downturns increase default rates

3. REGULATORY RISK
   - MCA regulations vary by state
   - Regulatory changes may affect operations
   - Compliance costs may impact returns

4. LIQUIDITY RISK
   - Investments are illiquid until deal completion
   - No secondary market exists
   - Early withdrawal may not be possible

5. CONCENTRATION RISK
   - Portfolio may be concentrated in specific industries
   - Geographic concentration increases risk
   - Limited diversification in individual deals

6. OPERATIONAL RISK
   - Platform technology failures possible
   - Third-party service provider risks
   - Key personnel dependency

7. FACTOR RATE VARIATIONS
   - Returns vary based on factor rates (1.15x-1.49x)
   - Higher factor rates indicate higher risk
   - Market conditions affect rate determination

8. COLLECTION RISKS
   - Collection efforts may be unsuccessful
   - Legal costs reduce net returns
   - Time delays in collection processes

9. TAX IMPLICATIONS
   - Profits subject to ordinary income tax
   - No tax-deferred investment status
   - Consult tax advisor for specific implications

10. NO FDIC INSURANCE
    - Investments not insured by FDIC
    - No government guarantee of returns
    - No investor protection fund coverage

INVESTMENT SUITABILITY:
- Suitable only for sophisticated investors
- Should represent small portion of portfolio
- Must be able to afford total loss
- Understand all terms and conditions

BEFORE INVESTING, CONSIDER:
□ Your financial situation and objectives
□ Your risk tolerance and investment timeline
□ Diversification of your overall portfolio
□ Professional advice from qualified advisors

ACKNOWLEDGMENT:
I acknowledge that I have read, understood, and agree to this Risk Disclosure Statement. I understand the risks associated with MCA investments and accept full responsibility for my investment decisions.

_________________________         _________________________
[INVESTOR_NAME]                   Date: [ACKNOWLEDGMENT_DATE]

Electronic Signature Verification:
IP Address: [IP_ADDRESS]
Timestamp: [TIMESTAMP]
`
  },

  // MERCHANT DOCUMENTS
  {
    id: 'merchant-funding-agreement',
    title: 'Merchant Cash Advance Agreement',
    category: 'merchant',
    description: 'Primary funding agreement between InvestoFund and merchants seeking capital',
    requiredFields: ['merchantName', 'advanceAmount', 'factorRate', 'paymentTerm'],
    legalNotice: 'Legally binding commercial agreement with specific repayment obligations.',
    content: `
MERCHANT CASH ADVANCE AGREEMENT

This Merchant Cash Advance Agreement ("Agreement") is entered into on [DATE] between InvestoFund LLC ("Funder") and [MERCHANT_NAME] ("Merchant").

ADVANCE TERMS:
- Advance Amount: $[ADVANCE_AMOUNT]
- Factor Rate: [FACTOR_RATE]x
- Total Payback Amount: $[TOTAL_PAYBACK]
- Payment Term: [PAYMENT_TERM] days
- Payment Frequency: [PAYMENT_FREQUENCY]
- Daily/Weekly Payment: $[PAYMENT_AMOUNT]

MERCHANT INFORMATION:
- Legal Business Name: [LEGAL_BUSINESS_NAME]
- DBA: [DBA_NAME]
- Federal Tax ID: [TAX_ID]
- Business Address: [BUSINESS_ADDRESS]
- Industry: [INDUSTRY_TYPE]
- Time in Business: [TIME_IN_BUSINESS]
- Monthly Revenue: $[MONTHLY_REVENUE]

ADVANCE STRUCTURE:
This transaction constitutes the purchase of a portion of Merchant's future receivables, not a loan. The advance is based on Merchant's daily credit card and ACH processing volume.

PAYMENT TERMS:
1. Automatic Collections: Merchant authorizes automatic withdrawal of agreed percentage of daily receipts
2. Payment Percentage: [COLLECTION_PERCENTAGE]% of daily gross receipts
3. Minimum Payment: $[MINIMUM_DAILY_PAYMENT] per business day
4. Maximum Payment: $[MAXIMUM_DAILY_PAYMENT] per business day

MERCHANT REPRESENTATIONS:
Merchant represents and warrants:
- All information provided is accurate and complete
- Business is in good standing and operational
- No pending bankruptcies or legal proceedings
- Authorization to enter this agreement
- Will maintain business operations during term

FUNDER OBLIGATIONS:
- Fund advance within 1-2 business days of agreement execution
- Provide clear payment schedule and terms
- Maintain confidentiality of merchant information
- Comply with all applicable regulations

MERCHANT OBLIGATIONS:
- Maintain merchant processing accounts
- Provide daily sales reports if requested
- Notify Funder of material business changes
- Comply with all payment obligations
- Maintain business insurance

EVENTS OF DEFAULT:
- Failure to make required payments for 3 consecutive days
- Bankruptcy filing or business closure
- Material adverse change in business operations
- Breach of representations or warranties
- Failure to maintain processing accounts

REMEDIES:
Upon default, Funder may:
- Accelerate remaining balance
- Exercise rights to collect receivables
- Pursue legal remedies
- Apply additional fees and costs

FEES:
- Origination Fee: [ORIGINATION_FEE]% (if applicable)
- Late Payment Fee: $[LATE_FEE] per occurrence
- NSF Fee: $[NSF_FEE] per occurrence
- Default Fee: [DEFAULT_FEE]% of outstanding balance

GOVERNING LAW:
This Agreement is governed by [STATE] law and subject to jurisdiction of [COUNTY] courts.

ENTIRE AGREEMENT:
This Agreement constitutes the complete understanding between parties and supersedes all prior negotiations.

MERCHANT ACKNOWLEDGMENT:
I acknowledge receipt of this Agreement and understand all terms and conditions.

INVESTOFUND LLC                    MERCHANT

_________________________         _________________________
[AUTHORIZED_SIGNATORY]            [MERCHANT_NAME]
Title: [TITLE]                    Title: [MERCHANT_TITLE]
Date: [DATE]                      Date: [DATE]

Electronic Signature Record:
IP Address: [IP_ADDRESS]
Timestamp: [TIMESTAMP]
Document Hash: [DOCUMENT_HASH]
`
  },

  // BROKER/ISO DOCUMENTS
  {
    id: 'iso-commission-agreement',
    title: 'Independent Sales Organization Commission Agreement',
    category: 'broker',
    description: 'Agreement governing ISO/broker relationships and commission structures',
    requiredFields: ['isoName', 'commissionRate', 'territoryRestrictions'],
    legalNotice: 'Independent contractor agreement with specific performance obligations.',
    content: `
INDEPENDENT SALES ORGANIZATION COMMISSION AGREEMENT

This Agreement is entered into on [DATE] between InvestoFund LLC ("Company") and [ISO_NAME] ("ISO").

ISO INFORMATION:
- Legal Name: [ISO_LEGAL_NAME]
- DBA: [ISO_DBA]
- Federal Tax ID: [ISO_TAX_ID]
- Business Address: [ISO_ADDRESS]
- Contact Person: [ISO_CONTACT]
- Phone: [ISO_PHONE]
- Email: [ISO_EMAIL]

APPOINTMENT:
Company hereby appoints ISO as an independent sales organization to market and originate merchant cash advance opportunities subject to the terms herein.

COMMISSION STRUCTURE:
- Base Commission Rate: [COMMISSION_RATE]%
- Volume Bonus Tier 1: [TIER1_VOLUME] - [TIER1_RATE]%
- Volume Bonus Tier 2: [TIER2_VOLUME] - [TIER2_RATE]%
- Volume Bonus Tier 3: [TIER3_VOLUME] - [TIER3_RATE]%
- Renewal Commission: [RENEWAL_RATE]%

PAYMENT TERMS:
- Commissions paid within 5 business days of funding
- Volume bonuses calculated monthly
- Payment via ACH transfer or check
- 1099 issued annually for tax reporting

ISO OBLIGATIONS:
1. Originate quality merchant applications
2. Verify merchant information accuracy
3. Maintain professional conduct
4. Comply with all applicable regulations
5. Submit complete application packages
6. Provide ongoing merchant support

COMPANY OBLIGATIONS:
1. Process applications within 24 hours
2. Provide competitive pricing
3. Fund approved deals promptly
4. Pay commissions as agreed
5. Provide marketing materials
6. Offer training and support

QUALITY STANDARDS:
- Minimum approval rate: 70%
- Maximum default rate: 15%
- Complete application submission required
- Bank statement verification mandatory
- Credit check authorization required

TERRITORIAL RESTRICTIONS:
[TERRITORY_RESTRICTIONS]

TERM AND TERMINATION:
- Initial term: 12 months
- Automatic renewal unless terminated
- Either party may terminate with 30 days notice
- Post-termination commission rights preserved

COMPLIANCE REQUIREMENTS:
- Maintain all required licenses
- Follow fair lending practices
- Comply with state and federal regulations
- Maintain client confidentiality
- Report suspicious activities

INTELLECTUAL PROPERTY:
- Company retains all proprietary information
- ISO may use approved marketing materials
- Non-disclosure obligations survive termination
- Return all materials upon termination

INDEMNIFICATION:
ISO indemnifies Company against:
- Misrepresentations to merchants
- Regulatory violations
- Breach of agreement terms
- Fraudulent activities

DISPUTE RESOLUTION:
- Good faith negotiation required
- Binding arbitration if necessary
- [STATE] law governs agreement
- Venue in [COUNTY], [STATE]

INDEPENDENT CONTRACTOR STATUS:
ISO is an independent contractor, not an employee. ISO responsible for own taxes, insurance, and business expenses.

ENTIRE AGREEMENT:
This Agreement constitutes the complete understanding between parties.

INVESTOFUND LLC                    ISO

_________________________         _________________________
[AUTHORIZED_SIGNATORY]            [ISO_NAME]
Title: [TITLE]                    Title: [ISO_TITLE]
Date: [DATE]                      Date: [DATE]

Electronic Signature Verification:
IP Address: [IP_ADDRESS]
Timestamp: [TIMESTAMP]
Document Hash: [DOCUMENT_HASH]
`
  },

  // PLATFORM DOCUMENTS
  {
    id: 'platform-terms-of-service',
    title: 'InvestoFund Platform Terms of Service',
    category: 'platform',
    description: 'Comprehensive terms governing platform usage for all user types',
    requiredFields: ['effectiveDate'],
    legalNotice: 'These terms are legally binding and govern all platform usage.',
    content: `
INVESTOFUND PLATFORM TERMS OF SERVICE

Effective Date: [EFFECTIVE_DATE]
Last Updated: [LAST_UPDATED]

ACCEPTANCE OF TERMS
By accessing or using the InvestoFund platform, you agree to be bound by these Terms of Service ("Terms").

1. PLATFORM OVERVIEW
InvestoFund LLC operates a digital platform connecting investors with merchant cash advance opportunities. The platform facilitates:
- Investment opportunity presentation
- Due diligence document sharing
- Electronic signature processing
- Payment processing and distribution
- Investor relations management

2. USER CATEGORIES AND ACCESS
a) Investors: Individuals or entities investing in MCA opportunities
b) Merchants: Businesses seeking cash advances
c) ISOs/Brokers: Independent sales organizations originating deals
d) Platform Administrators: InvestoFund staff and authorized personnel

3. ACCOUNT REGISTRATION
- Users must provide accurate, complete information
- Verify identity through required documentation
- Maintain account security and confidentiality
- Promptly update information changes
- Comply with eligibility requirements

4. INVESTOR PROVISIONS
a) Accreditation Requirements:
   - Must meet accredited investor standards if required
   - Provide verification documentation
   - Acknowledge investment risks
   
b) Investment Minimums:
   - Direct Deal Participation: $5,000 minimum
   - Portfolio Blend: $25,000 minimum
   - Maximum investment limits may apply

c) Risk Acknowledgment:
   - Substantial risk of loss exists
   - No guaranteed returns
   - Past performance not indicative of future results

5. MERCHANT PROVISIONS
a) Eligibility Requirements:
   - Operating business for minimum time period
   - Minimum monthly revenue thresholds
   - Satisfactory credit and business history
   
b) Documentation Requirements:
   - Business registration and licensing
   - Financial statements and bank records
   - Processing statements and tax returns
   - Personal guarantees may be required

c) Funding Terms:
   - Factor rates range 1.15x to 1.49x
   - Terms from 25 days to 18 months
   - Daily, weekly, bi-weekly, or monthly payments

6. ISO/BROKER PROVISIONS
a) Licensing Requirements:
   - Maintain all required state and federal licenses
   - Comply with applicable regulations
   - Provide proof of insurance coverage
   
b) Quality Standards:
   - Submit complete, accurate applications
   - Maintain minimum approval rates
   - Adhere to ethical business practices

7. PLATFORM FEES
a) Investor Fees:
   - No upfront investment fees
   - Management fees for Portfolio Blend option
   - Wire transfer costs
   
b) Merchant Fees:
   - Origination fees may apply
   - Late payment and default fees
   - Third-party processing costs
   
c) ISO Fees:
   - No platform usage fees
   - Commission-based compensation only

8. INTELLECTUAL PROPERTY
- InvestoFund retains all platform IP rights
- Users granted limited license for intended use
- Prohibited from copying or distributing content
- Respect third-party intellectual property rights

9. PRIVACY AND DATA PROTECTION
- Personal information handled per Privacy Policy
- Industry-standard security measures implemented
- Data sharing limited to business purposes
- Users control account information access

10. PROHIBITED ACTIVITIES
Users may not:
- Provide false or misleading information
- Engage in fraudulent activities
- Violate applicable laws or regulations
- Interfere with platform operations
- Reverse engineer platform technology

11. DISCLAIMERS
- Platform provided "as is" without warranties
- No guarantee of system availability
- Investment results not guaranteed
- Third-party content not endorsed

12. LIMITATION OF LIABILITY
InvestoFund's liability limited to actual damages not exceeding fees paid. No liability for consequential, indirect, or punitive damages.

13. INDEMNIFICATION
Users indemnify InvestoFund against claims arising from their platform use, including legal fees and costs.

14. TERMINATION
- Either party may terminate account with notice
- Immediate termination for Terms violations
- Surviving obligations continue post-termination

15. GOVERNING LAW
These Terms governed by [STATE] law. Disputes subject to binding arbitration in [JURISDICTION].

16. MODIFICATIONS
InvestoFund may modify Terms with notice. Continued use constitutes acceptance of changes.

17. CONTACT INFORMATION
For questions regarding these Terms:
InvestoFund LLC
[COMPANY_ADDRESS]
Email: legal@investofund.com
Phone: [COMPANY_PHONE]

ELECTRONIC ACCEPTANCE:
By clicking "I Accept" or using the platform, you acknowledge reading and agreeing to these Terms.

Acceptance Date: [ACCEPTANCE_DATE]
IP Address: [IP_ADDRESS]
User Agent: [USER_AGENT]
`
  },

  {
    id: 'privacy-policy',
    title: 'InvestoFund Privacy Policy',
    category: 'platform',
    description: 'Comprehensive privacy policy governing data collection and usage',
    requiredFields: ['effectiveDate'],
    legalNotice: 'CCPA, GDPR, and financial privacy regulation compliant.',
    content: `
INVESTOFUND PRIVACY POLICY

Effective Date: [EFFECTIVE_DATE]
Last Updated: [LAST_UPDATED]

INTRODUCTION
InvestoFund LLC ("we," "our," "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your information.

1. INFORMATION WE COLLECT

a) Personal Information:
   - Name, address, phone number, email
   - Social Security number or Tax ID
   - Date of birth and identification documents
   - Financial information and bank details
   - Employment and income information

b) Business Information (Merchants):
   - Company name and business structure
   - Business address and contact information
   - Financial statements and tax returns
   - Bank statements and processing records
   - Credit reports and business history

c) Technical Information:
   - IP addresses and device information
   - Browser type and operating system
   - Platform usage data and preferences
   - Cookies and tracking technologies

2. HOW WE COLLECT INFORMATION

- Direct submission through platform forms
- Document uploads and verification
- Third-party data providers and credit agencies
- Automatic collection through platform usage
- Public records and business databases

3. USE OF INFORMATION

We use your information to:
- Process investment and funding applications
- Verify identity and conduct due diligence
- Facilitate transactions and payments
- Communicate important updates
- Comply with legal and regulatory requirements
- Improve platform functionality
- Prevent fraud and maintain security

4. INFORMATION SHARING

We may share information with:
- Investors and merchants for deal facilitation
- Service providers and business partners
- Regulatory authorities as required
- Legal proceedings when necessary
- Affiliates for business purposes

We do not sell personal information to third parties.

5. DATA SECURITY

Security measures include:
- Encryption of sensitive data
- Secure server infrastructure
- Access controls and authentication
- Regular security audits
- Employee training on data protection

6. DATA RETENTION

We retain information:
- As long as accounts remain active
- For 7 years after relationship termination
- As required by legal obligations
- Until specific deletion requests processed

7. YOUR RIGHTS

You have the right to:
- Access your personal information
- Correct inaccurate information
- Request deletion of information
- Opt-out of marketing communications
- Restrict certain processing activities

8. CALIFORNIA PRIVACY RIGHTS (CCPA)

California residents have additional rights including:
- Right to know what information is collected
- Right to delete personal information
- Right to opt-out of information sales
- Right to non-discrimination

9. EUROPEAN PRIVACY RIGHTS (GDPR)

EU residents have rights including:
- Data access and portability
- Right to rectification
- Right to erasure
- Right to restrict processing
- Right to object to processing

10. COOKIES AND TRACKING

We use cookies for:
- Authentication and security
- Platform functionality
- Performance analytics
- User preferences

You can control cookies through browser settings.

11. THIRD-PARTY LINKS

Our platform may contain links to third-party websites. We are not responsible for their privacy practices.

12. CHILDREN'S PRIVACY

Our platform is not intended for users under 18. We do not knowingly collect information from minors.

13. INTERNATIONAL TRANSFERS

Information may be transferred internationally with appropriate safeguards in place.

14. CHANGES TO POLICY

We may update this Privacy Policy with notice to users. Continued use constitutes acceptance.

15. CONTACT INFORMATION

For privacy questions or requests:
InvestoFund LLC
Privacy Officer
[COMPANY_ADDRESS]
Email: privacy@investofund.com
Phone: [PRIVACY_PHONE]

DATA PROTECTION OFFICER (if applicable):
[DPO_NAME]
Email: dpo@investofund.com

ACKNOWLEDGMENT:
By using our platform, you acknowledge reading and understanding this Privacy Policy.

Acceptance Date: [ACCEPTANCE_DATE]
IP Address: [IP_ADDRESS]
`
  },

  // COMPLIANCE DOCUMENTS
  {
    id: 'aml-compliance-policy',
    title: 'Anti-Money Laundering Compliance Policy',
    category: 'compliance',
    description: 'AML/BSA compliance procedures for financial transactions',
    requiredFields: ['effectiveDate'],
    legalNotice: 'Required compliance documentation under federal banking regulations.',
    content: `
ANTI-MONEY LAUNDERING COMPLIANCE POLICY

Document Version: 2.0
Effective Date: [EFFECTIVE_DATE]
Review Date: [REVIEW_DATE]

PURPOSE
This policy establishes InvestoFund LLC's Anti-Money Laundering (AML) and Bank Secrecy Act (BSA) compliance program to detect and prevent money laundering activities.

1. REGULATORY FRAMEWORK
- Bank Secrecy Act (BSA)
- USA PATRIOT Act
- FinCEN regulations
- State money transmission laws
- OFAC sanctions requirements

2. COMPLIANCE OFFICER
AML Compliance Officer: [COMPLIANCE_OFFICER_NAME]
Responsibilities:
- Oversee AML program implementation
- Conduct risk assessments
- Ensure regulatory reporting
- Provide staff training
- Monitor compliance effectiveness

3. CUSTOMER IDENTIFICATION PROGRAM (CIP)

a) Individual Customers:
   - Full legal name
   - Date of birth
   - Physical address
   - Government-issued ID verification

b) Business Customers:
   - Legal business name
   - Principal business address
   - Employer Identification Number
   - Articles of incorporation or formation

4. CUSTOMER DUE DILIGENCE (CDD)

Enhanced Due Diligence required for:
- High-value transactions ($10,000+)
- Foreign entities or persons
- Politically Exposed Persons (PEPs)
- High-risk business types
- Unusual transaction patterns

Documentation includes:
- Source of funds verification
- Business purpose documentation
- Beneficial ownership information
- Risk assessment completion

5. SUSPICIOUS ACTIVITY MONITORING

Red flags requiring investigation:
- Large cash transactions
- Rapid movement of funds
- Transactions with high-risk countries
- Structuring to avoid reporting
- Unusual business activity patterns

6. REPORTING REQUIREMENTS

a) Currency Transaction Reports (CTR):
   - Filed for cash transactions over $10,000
   - Within 15 days of transaction

b) Suspicious Activity Reports (SAR):
   - Filed for suspicious activities $5,000+
   - Within 30 days of detection

7. OFAC SANCTIONS SCREENING

All customers screened against:
- Specially Designated Nationals (SDN) list
- Blocked Persons List
- Sectoral Sanctions Identifications List
- Real-time screening for transactions

8. RECORD KEEPING

Required records maintained for 5 years:
- Customer identification information
- Transaction records and documentation
- SAR and CTR filings
- Training records
- Risk assessments

9. TRAINING PROGRAM

All employees receive:
- Initial AML training within 30 days
- Annual refresher training
- Updates on regulatory changes
- Specific role-based training

10. INDEPENDENT TESTING

Annual independent review includes:
- Program effectiveness assessment
- Policy and procedure evaluation
- Staff training adequacy
- Record keeping compliance

11. HIGH-RISK CUSTOMERS

Additional monitoring for:
- Money service businesses
- Foreign shell companies
- Cash-intensive businesses
- Non-cooperative jurisdictions

12. TECHNOLOGY SYSTEMS

AML monitoring systems:
- Transaction monitoring software
- Watch list screening
- Case management systems
- Regulatory reporting tools

13. PENALTIES AND ENFORCEMENT

Violations may result in:
- Civil monetary penalties
- Criminal prosecution
- Regulatory sanctions
- Reputational damage

14. POLICY UPDATES

This policy reviewed and updated:
- Annually or as needed
- Upon regulatory changes
- Following examination findings
- After system implementations

APPROVAL:
This policy is approved by InvestoFund LLC Board of Directors.

_________________________
[CEO_NAME], Chief Executive Officer
Date: [APPROVAL_DATE]

_________________________
[COMPLIANCE_OFFICER_NAME], AML Compliance Officer
Date: [APPROVAL_DATE]
`
  }
];

// Document generation utilities
export const generateDocument = (
  templateId: string, 
  fieldValues: Record<string, string>
): string => {
  const template = legalDocuments.find(doc => doc.id === templateId);
  if (!template) {
    throw new Error(`Template not found: ${templateId}`);
  }

  let content = template.content;
  
  // Replace all field placeholders with actual values
  Object.entries(fieldValues).forEach(([field, value]) => {
    const placeholder = `[${field.toUpperCase()}]`;
    content = content.replace(new RegExp(placeholder, 'g'), value);
  });

  return content;
};

export const getDocumentsByCategory = (category: DocumentTemplate['category']) => {
  return legalDocuments.filter(doc => doc.category === category);
};

export const getAllDocuments = () => {
  return legalDocuments;
};