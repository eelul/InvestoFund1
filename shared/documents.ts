// Document templates and content for InvestoFund platform

export interface DocumentTemplate {
  id: string;
  title: string;
  description: string;
  category: 'investor' | 'iso' | 'legal' | 'application';
  format: 'pdf' | 'txt' | 'html';
  requiresPersonalization: boolean;
  content: string;
}

export const DOCUMENT_TEMPLATES: DocumentTemplate[] = [
  {
    id: 'profit-sharing-agreement',
    title: 'Profit Sharing Agreement',
    description: 'The core legal agreement between InvestoFund LLC and its capital providers',
    category: 'investor',
    format: 'html',
    requiresPersonalization: true,
    content: `<!DOCTYPE html>
<html>
<head>
    <title>Profit Sharing Agreement</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; margin: 40px; }
        h1, h2 { color: #1A5959; }
        .signature-line { border-bottom: 1px solid #000; width: 300px; display: inline-block; }
        .date-placeholder { color: #666; background: #f0f0f0; padding: 2px 4px; }
    </style>
</head>
<body>
    <h1>PROFIT SHARING AGREEMENT</h1>
    
    <p>This Profit Sharing Agreement (the "Agreement") is made and entered into as of <span class="date-placeholder">[Date]</span> (the "Effective Date"), by and between:</p>
    
    <p><strong>InvestoFund LLC</strong>, a New York limited liability company (hereinafter, "InvestoFund" or the "Company"), with its principal place of business at <span class="date-placeholder">[Company Address]</span>;</p>
    
    <p><strong>AND</strong></p>
    
    <p><strong><span class="date-placeholder">[Capital Provider Name]</span></strong>, an individual or entity (hereinafter, "Capital Provider").</p>
    
    <h2>RECITALS</h2>
    
    <p><strong>WHEREAS</strong>, InvestoFund is engaged in the business of originating, funding, and managing Merchant Cash Advances ("MCAs") by purchasing future receivables from merchants;</p>
    
    <p><strong>WHEREAS</strong>, Capital Provider desires to provide capital to InvestoFund for the specific purpose of funding MCAs, in exchange for a share of the profits generated from such MCAs, in accordance with the terms herein;</p>
    
    <p><strong>AND WHEREAS</strong>, both parties acknowledge that this Agreement constitutes a profit-sharing arrangement, not a loan or debt instrument, and does not convey any ownership or management rights in InvestoFund to the Capital Provider.</p>
    
    <p><strong>NOW, THEREFORE</strong>, in consideration of the mutual covenants and promises herein contained, the parties agree as follows:</p>
    
    <h2>1. Capital Contribution and Purpose</h2>
    <p><strong>a.</strong> Capital Provider agrees to provide InvestoFund with a capital contribution in the amount of <span class="date-placeholder">[Amount, e.g., Ten Thousand Dollars ($10,000.00)]</span> (the "Contributed Capital").</p>
    <p><strong>b.</strong> The Contributed Capital shall be used solely for the purpose of funding one or more MCAs originated and underwritten by InvestoFund.</p>
    <p><strong>c.</strong> <strong>Return of Unused Capital:</strong> If any portion of the Contributed Capital is not deployed into a specific MCA within sixty (60) calendar days of its receipt by InvestoFund, that unused portion shall be returned to the Capital Provider within five (5) business days thereafter.</p>
    
    <h2>2. Profit Sharing</h2>
    <p><strong>a.</strong> In consideration for the Contributed Capital, Capital Provider shall be entitled to fifty percent (50%) of the "Net Receivable Profit" generated from each MCA that is directly funded by the Capital Provider's Contributed Capital.</p>
    <p><strong>b.</strong> "Net Receivable Profit" is defined for the purpose of this Agreement as: The Total Repayment received by InvestoFund from the Merchant, MINUS the original Advance Amount provided to the Merchant, MINUS any ISO Commission paid by InvestoFund related to that specific MCA.</p>
    <p><strong>c.</strong> The remaining fifty percent (50%) of the Net Receivable Profit will be retained by InvestoFund to cover all of its operational expenses.</p>
    
    <h2>3. Distributions to Capital Provider</h2>
    <p><strong>a.</strong> <strong>Distribution Event:</strong> Payments to the Capital Provider shall occur upon a "Distribution Event," which is defined as the full collection by InvestoFund of the Total Repayment from the Merchant for the specific MCA funded by the Capital Provider's Contributed Capital.</p>
    <p><strong>b.</strong> <strong>Distribution Schedule:</strong> InvestoFund shall disburse the Capital Provider's share of the Net Receivable Profit to the Capital Provider within five (5) to seven (7) business days following each Distribution Event.</p>
    
    <h2>4. Passive Role of Capital Provider</h2>
    <p><strong>a.</strong> Capital Provider acknowledges and agrees that this Agreement constitutes a passive investment. The Capital Provider shall have no right, power, or authority to manage, direct, control, or participate in the operations, management, or business decisions of InvestoFund.</p>
    <p><strong>b.</strong> InvestoFund shall maintain sole discretion and control over all aspects of its business operations, including but not limited to, underwriting, funding decisions, collections, and legal actions.</p>
    
    <h2>5. Representations and Warranties of Capital Provider</h2>
    <p><strong>a.</strong> Capital Provider represents and warrants that they are providing funds from legitimate sources and are not engaging in any unlawful activity.</p>
    <p><strong>b.</strong> Capital Provider understands and acknowledges that this is a high-risk investment and that the return of Contributed Capital and profits is contingent upon the successful collection of MCAs from merchants, which carries inherent risks, including merchant default.</p>
    <p><strong>c.</strong> Capital Provider understands that this is a private placement and the interest herein has not been registered under any securities laws.</p>
    
    <h2>6. Governing Law & Dispute Resolution</h2>
    <p><strong>a.</strong> This Agreement shall be governed by and construed in accordance with the laws of the State of New York, without regard to its conflict of laws principles.</p>
    <p><strong>b.</strong> Any dispute, controversy, or claim arising out of or relating to this Agreement shall first be subject to good faith negotiation. If negotiation fails, the parties agree to resolve the dispute through binding arbitration administered by a mutually agreed-upon service (e.g., JAMS or AAA) in New York, NY. The decision of the arbitrator(s) shall be final and binding upon both parties.</p>
    
    <h2>7. Entire Agreement</h2>
    <p>This Agreement constitutes the entire agreement between the Parties and supersedes all prior discussions, agreements, and understandings, whether oral or written.</p>
    
    <p><strong>IN WITNESS WHEREOF</strong>, the Parties hereto have executed this Agreement as of the Effective Date.</p>
    
    <div style="margin-top: 40px;">
        <p><strong>INVESTOFUND LLC</strong></p>
        <br><br>
        <p>By: <span class="signature-line"></span></p>
        <p>Name: <span class="date-placeholder">[Your Name]</span></p>
        <p>Title: <span class="date-placeholder">[Your Title, e.g., Managing Member]</span></p>
        <br><br>
        
        <p><strong>CAPITAL PROVIDER</strong></p>
        <br><br>
        <p>By: <span class="signature-line"></span></p>
        <p>Name: <span class="date-placeholder">[Capital Provider Name]</span></p>
        <p>Title: <span class="date-placeholder">[Capital Provider Title, if applicable]</span></p>
    </div>
</body>
</html>`
  },
  {
    id: 'investor-welcome-packet',
    title: 'Investor Welcome Packet',
    description: 'A friendly, non-binding explainer for prospective investors',
    category: 'investor',
    format: 'html',
    requiresPersonalization: false,
    content: `<!DOCTYPE html>
<html>
<head>
    <title>Welcome to InvestoFund</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; margin: 40px; }
        h1, h2 { color: #1A5959; }
        .logo { text-align: center; margin-bottom: 30px; font-size: 24px; font-weight: bold; color: #1A5959; }
        .example-box { background: #f8f9fa; padding: 20px; border-left: 4px solid #1A5959; margin: 20px 0; }
        .highlight { background: #e8f5e5; padding: 15px; border-radius: 5px; }
    </style>
</head>
<body>
    <div class="logo">[InvestoFund Logo]</div>
    
    <h1>Welcome to InvestoFund!</h1>
    
    <p>Thank you for your interest in joining our platform. This packet will guide you through our process and what you can expect as an investor seeking high-yield alternative investments. At InvestoFund LLC (hereinafter, "InvestoFund"), our mission is to connect savvy investors like you with short-term, high-potential Merchant Cash Advance (MCA) opportunities, creating a powerful engine for passive income.</p>
    
    <h2>HOW IT WORKS: THE INVESTOR JOURNEY</h2>
    
    <ol>
        <li><strong>You Contribute Capital:</strong> You make a capital contribution (starting at $5,000) to be deployed into our next available deal.</li>
        <li><strong>We Source & Vet Deals:</strong> Our expert team sources and performs rigorous due diligence on merchant applications submitted by our broker network.</li>
        <li><strong>Capital is Deployed:</strong> Your funds are used to purchase a portion of a merchant's future receivables at a discount. This is a commercial transaction, not a loan.</li>
        <li><strong>Receivables are Collected:</strong> Over an average of 45–60 days, we collect the purchased receivables from the merchant.</li>
        <li><strong>Profits are Split:</strong> Once the deal is complete, the net profits are split 50/50 between you and InvestoFund. Your principal and profits are returned to you.</li>
    </ol>
    
    <div class="example-box">
        <h2>EXAMPLE OF RETURNS</h2>
        <ul style="list-style: none; padding: 0;">
            <li><strong>Your Capital Contribution:</strong> $10,000</li>
            <li><strong>Total Receivables Purchased:</strong> $13,500</li>
            <li><strong>Gross Profit:</strong> $3,500</li>
            <li><strong>Net Receivable Profit (after commissions):</strong> ~$3,000</li>
            <li><strong>Your 50% Share:</strong> ~$1,500</li>
        </ul>
        <p><em>This example is for illustrative purposes only. Returns are not guaranteed. Please see our Profit Sharing Agreement for formal terms.</em></p>
    </div>
    
    <div class="highlight">
        <h2>PREMIUM & DIVERSIFIED PRODUCTS</h2>
        <p>For investors contributing $25,000 or more, we offer:</p>
        <ul>
            <li><strong>Diversified Portfolios:</strong> Spread your capital across multiple vetted MCA deals to mitigate risk.</li>
            <li><strong>Enhanced Profit Split:</strong> Benefit from a 55/45 profit split in your favor.</li>
        </ul>
    </div>
    
    <h2>FREQUENTLY ASKED QUESTIONS (FAQ)</h2>
    
    <p><strong>What is an MCA?</strong> It's a way for businesses to get capital by selling a portion of their future sales. It's faster and more flexible than a traditional loan.</p>
    
    <p><strong>What are the risks?</strong> The primary risk is merchant default. We mitigate this through careful underwriting and legal filings. Please review our full Risk Disclosure Summary.</p>
    
    <p><strong>Is my money locked up?</strong> Only for the short term of the deal (average 45 days). If we can't find a suitable deal within 60 days, we return your capital in full.</p>
    
    <h2>HAVE MORE QUESTIONS?</h2>
    
    <p>Our investor relations team is here to help.<br>
    Contact us at <strong>investors@investofund.com</strong> or call us at <strong>(555) 123-4567</strong>.</p>
</body>
</html>`
  },
  {
    id: 'risk-disclosure-summary',
    title: 'Risk Disclosure Summary',
    description: 'A plain-English summary of key investment risks to ensure transparency',
    category: 'investor',
    format: 'html',
    requiresPersonalization: false,
    content: `<!DOCTYPE html>
<html>
<head>
    <title>Risk Disclosure Summary</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; margin: 40px; }
        h1, h2 { color: #d32f2f; font-weight: bold; }
        .risk-item { background: #fff3e0; padding: 15px; margin: 15px 0; border-left: 4px solid #ff9800; }
        .disclaimer { background: #ffebee; padding: 20px; border: 2px solid #d32f2f; margin: 20px 0; }
    </style>
</head>
<body>
    <h1>SUMMARY OF KEY RISKS</h1>
    
    <p>This document provides a summary of the key risks associated with providing capital for Merchant Cash Advance (MCA) deals through InvestoFund LLC ("InvestoFund"). This is not an exhaustive list but covers the most critical factors. <strong>Investing in MCAs involves significant risk and is suitable only for investors who can bear the loss of their entire investment.</strong></p>
    
    <div class="risk-item">
        <h2>1. Merchant Default Risk</h2>
        <p><strong>What it is:</strong> The primary risk is that a merchant's business fails or they otherwise cease operations, making them unable to generate the future receivables that were purchased.</p>
        <p><strong>How we mitigate it:</strong> Rigorous due diligence, analysis of bank statements, UCC-1 filings to secure our position, and personal guarantees on covenants.</p>
    </div>
    
    <div class="risk-item">
        <h2>2. MCA Recharacterization Risk</h2>
        <p><strong>What it is:</strong> A court could potentially re-characterize an MCA transaction as a loan. If this happens, state usury laws (interest rate caps) could apply, potentially reducing the expected return or leading to penalties.</p>
        <p><strong>How we mitigate it:</strong> Our contracts are drafted by legal experts to ensure they are structured as the purchase of future assets, not a loan, with no fixed payment term.</p>
    </div>
    
    <div class="risk-item">
        <h2>3. Liquidity Risk</h2>
        <p><strong>What it is:</strong> Your capital is illiquid (locked in) for the duration of the MCA deal. You cannot withdraw your funds during this period.</p>
        <p><strong>How we mitigate it:</strong> We focus on short-term deals and commit to returning any capital that is not deployed within 60 days.</p>
    </div>
    
    <div class="risk-item">
        <h2>4. Economic Downturn Impact</h2>
        <p><strong>What it is:</strong> A broad economic recession could increase the rate of merchant defaults across all sectors, impacting the performance of your investment.</p>
        <p><strong>How we mitigate it:</strong> Industry diversification and increasingly stringent underwriting standards during times of economic uncertainty.</p>
    </div>
    
    <div class="disclaimer">
        <h2>IMPORTANT DISCLAIMER</h2>
        <p>The investment opportunities offered by InvestoFund are not securities registered with the U.S. Securities and Exchange Commission (SEC). Returns are not guaranteed. Past performance does not guarantee future returns. InvestoFund does not provide legal, financial, or tax advice. Please consult with your professional advisors before providing capital.</p>
    </div>
</body>
</html>`
  },
  {
    id: 'iso-information-packet',
    title: 'ISO Information Packet',
    description: 'An introductory packet for prospective brokers (ISOs)',
    category: 'iso',
    format: 'html',
    requiresPersonalization: false,
    content: `<!DOCTYPE html>
<html>
<head>
    <title>Partner with InvestoFund</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; margin: 40px; }
        h1, h2 { color: #1A5959; }
        .logo { text-align: center; margin-bottom: 30px; font-size: 24px; font-weight: bold; color: #1A5959; }
        .checklist { background: #f8f9fa; padding: 20px; border-radius: 5px; }
        .highlight { background: #e8f5e5; padding: 15px; border-radius: 5px; margin: 15px 0; }
    </style>
</head>
<body>
    <div class="logo">[InvestoFund Logo]</div>
    
    <h1>Partner with InvestoFund & Fund More Deals</h1>
    
    <p>Welcome to InvestoFund LLC ("InvestoFund")! This packet is for Independent Sales Organizations (ISOs) and brokers looking for a reliable funding partner that values speed, transparency, and rewarding quality submissions.</p>
    
    <div class="highlight">
        <h2>WHY PARTNER WITH INVESTOFUND?</h2>
        <ul>
            <li><strong>High Commissions:</strong> Earn a default of 15% commission on the deal's profit.</li>
            <li><strong>Fast Funding:</strong> Our streamlined process means we can get from submission to funding in as little as 48 hours.</li>
            <li><strong>Real-Time Feedback:</strong> Our broker portal gives you instant updates on your deal's status.</li>
            <li><strong>We Fund B-D Paper:</strong> We have an appetite for a wide range of deal types and sizes.</li>
        </ul>
    </div>
    
    <h2>COMMISSION STRUCTURE</h2>
    <ul>
        <li><strong>15% Base Commission:</strong> Paid from the "Net Receivable Profit" of each deal.</li>
        <li><strong>Net Receivable Profit Definition:</strong> The Total Repayment received from the Merchant, MINUS the original Advance Amount. Your commission is calculated from this gross profit.</li>
        <li><strong>Adjustments:</strong> Reduced commission may apply for incomplete submissions requiring significant underwriting work from our team.</li>
    </ul>
    
    <h2>DEAL SIZE & APPETITE</h2>
    <ul>
        <li><strong>Funding Range:</strong> $5,000 – $250,000</li>
        <li><strong>Industries:</strong> We fund most industries, including retail, restaurants, auto repair, and medical practices.</li>
    </ul>
    
    <div class="checklist">
        <h2>SUBMISSION CHECKLIST (FOR FULL 15% COMMISSION)</h2>
        <ul style="list-style: none;">
            <li>☐ Completed Application</li>
            <li>☐ 4 Months of Business Bank Statements</li>
            <li>☐ 4 Months of Merchant Processing Statements</li>
            <li>☐ Driver's License of Owner</li>
            <li>☐ Voided Check</li>
            <li>☐ Signed ISO Agreement</li>
        </ul>
    </div>
    
    <h2>GET STARTED TODAY</h2>
    <ol>
        <li>Review our ISO Agreement.</li>
        <li>Sign and return it to <strong>partnerships@investofund.com</strong>.</li>
        <li>Get access to our Broker Portal and start submitting deals!</li>
    </ol>
    
    <h2>CONTACTS</h2>
    <ul>
        <li><strong>Submissions Team:</strong> submissions@investofund.com</li>
        <li><strong>Broker Support:</strong> support@investofund.com</li>
    </ul>
</body>
</html>`
  },
  {
    id: 'iso-commission-structure',
    title: 'ISO Commission Structure Sheet',
    description: 'A clear, one-page reference for the ISO commission model',
    category: 'iso',
    format: 'html',
    requiresPersonalization: false,
    content: `<!DOCTYPE html>
<html>
<head>
    <title>ISO Commission Structure</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; margin: 40px; }
        h1, h2 { color: #1A5959; }
        table { width: 100%; border-collapse: collapse; margin: 20px 0; }
        th, td { border: 1px solid #ddd; padding: 12px; text-align: left; }
        th { background-color: #1A5959; color: white; }
        .calculation { background: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0; }
    </style>
</head>
<body>
    <h1>ISO COMMISSION STRUCTURE</h1>
    <p><strong>Effective Date:</strong> [Current Date]</p>
    
    <p>This document outlines the commission structure for ISO Brokers partnered with InvestoFund LLC ("InvestoFund"). Our goal is to reward high-quality, complete submissions that allow for fast and efficient funding.</p>
    
    <table>
        <thead>
            <tr>
                <th>Commission Tier</th>
                <th>Percentage & Basis</th>
                <th>Requirements & Notes</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>Platinum (Default)</strong></td>
                <td>15% of Net Receivable Profit</td>
                <td>Complete Submission: All required documents are included, legible, and verified by the ISO.</td>
            </tr>
            <tr>
                <td><strong>Gold</strong></td>
                <td>10% - 12% of Net Receivable Profit</td>
                <td>Partial Submission: Deal is missing non-critical documents that our team must source.</td>
            </tr>
            <tr>
                <td><strong>Standard</strong></td>
                <td>8% of Net Receivable Profit</td>
                <td>Minimal Submission: Application only, requiring full underwriting and document collection by our team.</td>
            </tr>
            <tr>
                <td><strong>Adjustments</strong></td>
                <td>Reduction/Clawback</td>
                <td>Applied to deals found to contain fraudulent information or that default within the first 14 days due to misrepresentation.</td>
            </tr>
        </tbody>
    </table>
    
    <div class="calculation">
        <h2>How "Net Receivable Profit" is Calculated:</h2>
        <p><strong>Step 1:</strong> (Advance Amount x Factor Rate) = Total Repayment</p>
        <p><strong>Step 2:</strong> (Total Repayment) - (Advance Amount) = Net Receivable Profit</p>
        <p><strong>Step 3:</strong> (Net Receivable Profit) x 0.15 = Your Commission (Platinum Tier)</p>
        
        <p>This model ensures we are aligned partners in the success of every deal. Commissions are paid within 5-7 business days following the full collection of the MCA.</p>
    </div>
</body>
</html>`
  },
  {
    id: 'iso-agreement',
    title: 'ISO Agreement',
    description: 'The binding legal agreement between InvestoFund LLC and its ISO partners',
    category: 'legal',
    format: 'html',
    requiresPersonalization: true,
    content: `<!DOCTYPE html>
<html>
<head>
    <title>Independent Sales Organization Agreement</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; margin: 40px; }
        h1, h2 { color: #1A5959; }
        .signature-line { border-bottom: 1px solid #000; width: 300px; display: inline-block; }
        .date-placeholder { color: #666; background: #f0f0f0; padding: 2px 4px; }
    </style>
</head>
<body>
    <h1>INDEPENDENT SALES ORGANIZATION AGREEMENT</h1>
    
    <p>This Independent Sales Organization Agreement (the "Agreement") is made effective as of <span class="date-placeholder">[Date of Signing]</span> (the "Effective Date"), by and between:</p>
    
    <p><strong>InvestoFund LLC</strong>, a New York limited liability company (hereinafter, "InvestoFund" or the "Company"), with its principal place of business at <span class="date-placeholder">[Your Company Address]</span>;</p>
    
    <p><strong>AND</strong></p>
    
    <p><strong><span class="date-placeholder">[ISO Company Name]</span></strong>, located at <span class="date-placeholder">[ISO Address]</span> (hereinafter, "ISO").</p>
    
    <p><strong>WHEREAS</strong>, InvestoFund is in the business of providing Merchant Cash Advances ("MCAs") to merchants, and ISO is engaged in the business of identifying and referring potential merchants suitable for MCAs.</p>
    
    <p><strong>NOW, THEREFORE</strong>, in consideration of the mutual covenants herein, the parties agree as follows:</p>
    
    <h2>1. Referral Services</h2>
    <p><strong>a.</strong> ISO shall identify and refer potential merchants ("Merchants") to InvestoFund. InvestoFund has sole and absolute discretion to approve or reject any referred Merchant.</p>
    <p><strong>b.</strong> ISO shall provide all requested documentation for each Merchant and ensure all information is accurate, complete, and obtained with the Merchant's full consent.</p>
    
    <h2>2. Compensation</h2>
    <p><strong>a.</strong> In consideration for successful referrals, InvestoFund shall pay ISO a commission as outlined in the official ISO Commission Structure Sheet. The default commission is fifteen percent (15%) of the "Net Receivable Profit" generated from each MCA successfully funded and collected.</p>
    <p><strong>b.</strong> "Net Receivable Profit" is defined as the Total Repayment received from a Merchant MINUS the original Advance Amount provided to that Merchant.</p>
    <p><strong>c.</strong> <strong>Payment of Commission:</strong> Commission shall be paid to ISO within five (5) to seven (7) business days following the full collection by InvestoFund of the Total Repayment from the Merchant.</p>
    
    <h2>3. Use of Name & Reputation</h2>
    <p><strong>a.</strong> ISO explicitly agrees that any misrepresentations, unethical practices, or illegal acts performed by ISO shall be the sole responsibility of ISO. ISO shall indemnify and hold harmless InvestoFund from any and all claims, damages, and expenses arising from ISO's actions.</p>
    
    <h2>4. Non-Circumvention</h2>
    <p><strong>a.</strong> Each Party agrees not to directly or indirectly circumvent, interfere with, or attempt to circumvent the relationship of the other Party with its Merchants, capital providers, or other business contacts during the term of this Agreement and for a period of two (2) years thereafter.</p>
    
    <h2>5. Confidentiality</h2>
    <p><strong>a.</strong> All information exchanged between the Parties related to business operations, underwriting criteria, or specific Merchant details shall be considered confidential and shall not be disclosed to any third party without express written consent. This obligation shall survive the termination of this Agreement.</p>
    
    <h2>6. Term and Termination</h2>
    <p><strong>a.</strong> Either Party may terminate this Agreement for convenience with thirty (30) days' written notice. Such termination shall not affect commissions due on deals already funded.</p>
    <p><strong>b.</strong> InvestoFund may terminate this Agreement immediately for cause, including fraud or material breach.</p>
    
    <h2>7. Governing Law & Dispute Resolution</h2>
    <p><strong>a.</strong> This Agreement shall be governed by the laws of the State of New York. Any dispute shall be resolved through binding arbitration in New York, NY.</p>
    
    <p><strong>IN WITNESS WHEREOF</strong>, the Parties have executed this Agreement.</p>
    
    <div style="margin-top: 40px;">
        <p><strong>INVESTOFUND LLC</strong></p>
        <br><br>
        <p>By: <span class="signature-line"></span></p>
        <p>Name: <span class="date-placeholder">[Your Name]</span></p>
        <p>Title: <span class="date-placeholder">[Your Title]</span></p>
        <br><br>
        
        <p><strong>ISO</strong></p>
        <br><br>
        <p>By: <span class="signature-line"></span></p>
        <p>Name: <span class="date-placeholder">[ISO Contact Name]</span></p>
        <p>Title: <span class="date-placeholder">[ISO Title]</span></p>
    </div>
</body>
</html>`
  },
  {
    id: 'terms-of-service',
    title: 'Terms of Service',
    description: 'General terms for website and platform use',
    category: 'legal',
    format: 'html',
    requiresPersonalization: false,
    content: `<!DOCTYPE html>
<html>
<head>
    <title>Terms of Service</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; margin: 40px; }
        h1, h2 { color: #1A5959; }
    </style>
</head>
<body>
    <h1>TERMS OF SERVICE</h1>
    
    <p>Welcome to InvestoFund LLC ("InvestoFund"). By accessing our website and using our platform, you agree to these Terms of Service.</p>
    
    <h2>1. Use of the Platform</h2>
    <p>You agree to use the InvestoFund platform for its intended purposes only and in compliance with all applicable laws. You may not use this site for any unlawful purpose.</p>
    
    <h2>2. Intellectual Property</h2>
    <p>All content on this site, including logos, text, graphics, and software, is the property of InvestoFund and is protected by copyright and other intellectual property laws.</p>
    
    <h2>3. Limitation of Liability</h2>
    <p>InvestoFund is not liable for any direct, indirect, or consequential damages arising from your use of this platform or from any investment decisions made based on information found here. All investments carry risk, and you should consult with professional advisors.</p>
    
    <h2>4. Jurisdiction</h2>
    <p>Any legal disputes related to these terms shall be governed by the laws of the State of New York. You agree to the exclusive jurisdiction of the state and federal courts located in New York, NY.</p>
    
    <h2>5. Consent to Communications</h2>
    <p>By creating an account or submitting a form, you consent to receive emails, text messages, and other communications from InvestoFund. You may opt out at any time by following the unsubscribe instructions in those communications.</p>
    
    <h2>6. Cookie Policy Notice</h2>
    <p>This website uses cookies to enhance user experience. By using our site, you consent to our use of cookies as described in our Privacy Policy.</p>
</body>
</html>`
  },
  {
    id: 'privacy-policy',
    title: 'Privacy Policy',
    description: 'Explains data handling practices for compliance and user trust',
    category: 'legal',
    format: 'html',
    requiresPersonalization: false,
    content: `<!DOCTYPE html>
<html>
<head>
    <title>Privacy Policy</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; margin: 40px; }
        h1, h2 { color: #1A5959; }
    </style>
</head>
<body>
    <h1>PRIVACY POLICY</h1>
    
    <p><strong>Last Updated:</strong> [Current Date]</p>
    
    <p>InvestoFund LLC ("InvestoFund," "we," "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share information about you.</p>
    
    <h2>1. Data We Collect</h2>
    <ul>
        <li><strong>Personal Information:</strong> Name, email, phone number, address.</li>
        <li><strong>Financial Information:</strong> Information submitted through investor questionnaires or deal submission forms.</li>
        <li><strong>Technical Information:</strong> IP address, browser type, usage data collected via cookies.</li>
    </ul>
    
    <h2>2. How We Use Your Data</h2>
    <ul>
        <li>To provide and manage our services.</li>
        <li>To process your applications and transactions.</li>
        <li>To communicate with you about your account and our services.</li>
        <li>To comply with legal obligations and for security purposes.</li>
        <li>To improve our platform and user experience.</li>
    </ul>
    
    <h2>3. Data Storage & Security</h2>
    <p>Your data is stored on secure, encrypted servers. We implement reasonable administrative, technical, and physical security measures to protect your information from unauthorized access and use.</p>
    
    <h2>4. Third-Party Tools</h2>
    <p>We may use third-party services such as Google Analytics, Zapier, Formspree, and DocuSign to facilitate our services. These services have their own privacy policies and are not controlled by InvestoFund.</p>
    
    <h2>5. Your Data Rights</h2>
    <p>You may have certain rights regarding your personal data, subject to local law. These may include the right to access, correct, or delete your data. To make a request, please contact us.</p>
    
    <h2>6. Data Deletion Request</h2>
    <p>You may request the deletion of your personal data by contacting us at privacy@investofund.com. We will comply with all lawful requests.</p>
    
    <h2>7. GDPR/CCPA Compliance</h2>
    <p>We are committed to complying with the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA). Residents of the EU and California have specific rights regarding their personal data, which we will honor.</p>
</body>
</html>`
  },
  {
    id: 'deal-submission-template',
    title: 'Merchant Funding Application',
    description: 'A standardized form for brokers to submit deals',
    category: 'application',
    format: 'html',
    requiresPersonalization: false,
    content: `<!DOCTYPE html>
<html>
<head>
    <title>Merchant Funding Application</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; margin: 40px; }
        h1, h2 { color: #1A5959; }
        .logo { text-align: center; margin-bottom: 30px; font-size: 24px; font-weight: bold; color: #1A5959; }
        .form-section { margin: 30px 0; padding: 20px; border: 1px solid #ddd; border-radius: 5px; }
        .form-row { margin: 15px 0; }
        .form-row label { display: inline-block; width: 200px; font-weight: bold; }
        .form-row input { border-bottom: 1px solid #000; width: 300px; }
        .checkbox { margin: 5px 0; }
    </style>
</head>
<body>
    <div class="logo">[InvestoFund Logo]</div>
    
    <h1>MERCHANT FUNDING APPLICATION</h1>
    
    <div class="form-row">
        <label>Submission Date:</label> <input type="text" name="submission_date">
    </div>
    <div class="form-row">
        <label>Broker/ISO Name:</label> <input type="text" name="broker_name">
    </div>
    <div class="form-row">
        <label>Broker Email:</label> <input type="text" name="broker_email">
    </div>
    
    <div class="form-section">
        <h2>SECTION 1: BUSINESS INFORMATION</h2>
        <div class="form-row">
            <label>Legal Business Name:</label> <input type="text" name="business_name">
        </div>
        <div class="form-row">
            <label>DBA (if any):</label> <input type="text" name="dba">
        </div>
        <div class="form-row">
            <label>Federal Tax ID (EIN):</label> <input type="text" name="tax_id">
        </div>
        <div class="form-row">
            <label>Business Address:</label> <input type="text" name="business_address">
        </div>
        <div class="form-row">
            <label>Business Phone:</label> <input type="text" name="business_phone">
        </div>
        <div class="form-row">
            <label>Type of Business:</label> <input type="text" name="business_type">
        </div>
        <div class="form-row">
            <label>Years in Business:</label> <input type="text" name="years_in_business">
        </div>
    </div>
    
    <div class="form-section">
        <h2>SECTION 2: OWNER INFORMATION</h2>
        <div class="form-row">
            <label>Owner's Full Name:</label> <input type="text" name="owner_name">
        </div>
        <div class="form-row">
            <label>Owner's Home Address:</label> <input type="text" name="owner_address">
        </div>
        <div class="form-row">
            <label>Owner's Cell Phone:</label> <input type="text" name="owner_phone">
        </div>
        <div class="form-row">
            <label>Owner's Email:</label> <input type="text" name="owner_email">
        </div>
    </div>
    
    <div class="form-section">
        <h2>SECTION 3: FUNDING & FINANCIALS</h2>
        <div class="form-row">
            <label>Requested Funding Amount:</label> $ <input type="text" name="funding_amount">
        </div>
        <div class="form-row">
            <label>Average Monthly Revenue:</label> $ <input type="text" name="monthly_revenue">
        </div>
        <div class="form-row">
            <label>Average Monthly Credit Card Sales:</label> $ <input type="text" name="cc_sales">
        </div>
    </div>
    
    <div class="form-section">
        <h2>NOTES</h2>
        <p>(Use this section for any additional information about the deal)</p>
        <textarea style="width: 100%; height: 100px; border: 1px solid #ddd;"></textarea>
    </div>
    
    <div class="form-section">
        <h2>SUBMISSION INSTRUCTIONS</h2>
        <p>Please email this completed form along with the required documents (4 months bank statements, 4 months processing statements, driver's license, voided check) to <strong>submissions@investofund.com</strong>.</p>
        
        <p>By submitting this application, the ISO represents and warrants that all information provided is true, accurate, and complete to the best of their knowledge and has been obtained with the full consent of the Merchant.</p>
    </div>
</body>
</html>`
  }
];

export function getDocumentById(id: string): DocumentTemplate | undefined {
  return DOCUMENT_TEMPLATES.find(doc => doc.id === id);
}

export function getDocumentsByCategory(category: string): DocumentTemplate[] {
  return DOCUMENT_TEMPLATES.filter(doc => doc.category === category);
}

export function personalizeDocument(template: DocumentTemplate, data: Record<string, string>): string {
  if (!template.requiresPersonalization) {
    return template.content;
  }
  
  let personalizedContent = template.content;
  
  // Replace placeholders with actual data
  Object.entries(data).forEach(([key, value]) => {
    const placeholder = `[${key}]`;
    personalizedContent = personalizedContent.replace(new RegExp(placeholder, 'g'), value);
  });
  
  return personalizedContent;
}