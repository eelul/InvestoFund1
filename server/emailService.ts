import { MailService } from '@sendgrid/mail';
import { DOCUMENT_TEMPLATES, getDocumentById, personalizeDocument } from '@shared/documents';

// Email service for document delivery
export class EmailService {
  private mailService: MailService;

  constructor() {
    this.mailService = new MailService();
    if (process.env.SENDGRID_API_KEY) {
      this.mailService.setApiKey(process.env.SENDGRID_API_KEY);
    }
  }

  async sendDocumentPacket(options: {
    to: string;
    firstName: string;
    lastName: string;
    company?: string;
    documentIds: string[];
    personalData?: Record<string, string>;
  }): Promise<boolean> {
    try {
      if (!process.env.SENDGRID_API_KEY) {
        console.log('SendGrid API key not configured - email would be sent to:', options.to);
        return true; // Return true for development
      }

      const documents = options.documentIds
        .map(id => getDocumentById(id))
        .filter(Boolean);

      if (documents.length === 0) {
        throw new Error('No valid documents found');
      }

      // Generate HTML email content
      const emailHtml = this.generateEmailTemplate({
        firstName: options.firstName,
        lastName: options.lastName,
        company: options.company,
        documents: documents as any[]
      });

      // Create attachments
      const attachments = documents.map(doc => {
        const content = options.personalData 
          ? personalizeDocument(doc as any, options.personalData)
          : doc!.content;
        
        const filename = `${doc!.title.toLowerCase().replace(/\s+/g, '-')}.${doc!.format === 'html' ? 'html' : 'txt'}`;
        
        return {
          content: Buffer.from(content).toString('base64'),
          filename,
          type: doc!.format === 'html' ? 'text/html' : 'text/plain',
          disposition: 'attachment'
        };
      });

      await this.mailService.send({
        to: options.to,
        from: 'documents@investofund.com',
        subject: `InvestoFund Document Package - ${documents.map(d => d!.title).join(', ')}`,
        html: emailHtml,
        attachments
      });

      return true;
    } catch (error) {
      console.error('Email sending error:', error);
      return false;
    }
  }

  async sendWelcomeEmail(options: {
    to: string;
    firstName: string;
    lastName: string;
    userType: 'investor' | 'iso' | 'merchant';
  }): Promise<boolean> {
    try {
      if (!process.env.SENDGRID_API_KEY) {
        console.log('Welcome email would be sent to:', options.to);
        return true;
      }

      const templates = {
        investor: {
          subject: 'Welcome to InvestoFund - Your Investment Journey Begins',
          content: this.getInvestorWelcomeTemplate(options.firstName)
        },
        iso: {
          subject: 'Welcome to InvestoFund - Partner Program',
          content: this.getISOWelcomeTemplate(options.firstName)
        },
        merchant: {
          subject: 'Welcome to Green Harvest Funding - Fast Business Capital',
          content: this.getMerchantWelcomeTemplate(options.firstName)
        }
      };

      const template = templates[options.userType];

      await this.mailService.send({
        to: options.to,
        from: 'welcome@investofund.com',
        subject: template.subject,
        html: template.content
      });

      return true;
    } catch (error) {
      console.error('Welcome email error:', error);
      return false;
    }
  }

  async sendPaymentInstructions(options: {
    to: string;
    firstName: string;
    lastName: string;
    amount: number;
    investmentType: string;
    referenceNumber: string;
  }): Promise<boolean> {
    try {
      if (!process.env.SENDGRID_API_KEY) {
        console.log('Payment instructions would be sent to:', options.to);
        return true;
      }

      const emailHtml = this.getPaymentInstructionsTemplate(options);

      await this.mailService.send({
        to: options.to,
        from: 'payments@investofund.com',
        subject: `Investment Payment Instructions - Reference ${options.referenceNumber}`,
        html: emailHtml
      });

      return true;
    } catch (error) {
      console.error('Payment instructions email error:', error);
      return false;
    }
  }

  private generateEmailTemplate(options: {
    firstName: string;
    lastName: string;
    company?: string;
    documents: any[];
  }): string {
    return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>InvestoFund Document Package</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #1A5959; color: white; padding: 20px; text-align: center; }
        .content { padding: 30px 20px; }
        .document-list { background: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0; }
        .footer { background: #f1f1f1; padding: 15px; text-align: center; font-size: 12px; color: #666; }
        .logo { font-size: 24px; font-weight: bold; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="logo">InvestoFund</div>
            <p>Your Document Package is Ready</p>
        </div>
        
        <div class="content">
            <h2>Hello ${options.firstName} ${options.lastName},</h2>
            
            <p>Thank you for your interest in InvestoFund. Please find your requested documents attached to this email.</p>
            
            <div class="document-list">
                <h3>Documents Included:</h3>
                <ul>
                    ${options.documents.map(doc => `<li><strong>${doc.title}</strong> - ${doc.description}</li>`).join('')}
                </ul>
            </div>
            
            <p>These documents contain important information about our investment opportunities and processes. Please review them carefully and don't hesitate to contact us if you have any questions.</p>
            
            <p><strong>Next Steps:</strong></p>
            <ul>
                <li>Review all attached documents thoroughly</li>
                <li>Consider consulting with your financial advisor</li>
                <li>Contact us to schedule a consultation if interested</li>
                <li>Complete your application when ready to proceed</li>
            </ul>
            
            <p>Our team is here to help you through every step of the process.</p>
            
            <p>Best regards,<br>
            The InvestoFund Team<br>
            Email: info@investofund.com<br>
            Phone: (555) 123-4567</p>
        </div>
        
        <div class="footer">
            <p>This email contains confidential and proprietary information. Please do not share these documents with unauthorized parties.</p>
            <p>© 2024 InvestoFund LLC. All rights reserved.</p>
        </div>
    </div>
</body>
</html>`;
  }

  private getInvestorWelcomeTemplate(firstName: string): string {
    return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Welcome to InvestoFund</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #1A5959; color: white; padding: 20px; text-align: center; }
        .content { padding: 30px 20px; }
        .highlight { background: #e8f5e5; padding: 15px; border-radius: 5px; margin: 20px 0; }
        .cta-button { background: #1A5959; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; display: inline-block; margin: 20px 0; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Welcome to InvestoFund!</h1>
        </div>
        
        <div class="content">
            <h2>Hello ${firstName},</h2>
            
            <p>Welcome to InvestoFund, where sophisticated investors discover high-yield alternative investment opportunities in the Merchant Cash Advance market.</p>
            
            <div class="highlight">
                <h3>What's Next?</h3>
                <ul>
                    <li><strong>Review Your Documents:</strong> Check your email for our complete investor packet</li>
                    <li><strong>Schedule a Consultation:</strong> Speak with our investment team about opportunities</li>
                    <li><strong>Start Investing:</strong> Begin with as little as $5,000</li>
                </ul>
            </div>
            
            <p>Our platform connects you with carefully vetted MCA deals, typically returning 15-30% annually with deal terms averaging 45-60 days.</p>
            
            <a href="#" class="cta-button">Access Your Investor Portal</a>
            
            <p>Questions? Our investor relations team is here to help:</p>
            <ul>
                <li>Email: investors@investofund.com</li>
                <li>Phone: (555) 123-4567</li>
                <li>Schedule a call: investofund.com/consultation</li>
            </ul>
            
            <p>Welcome aboard!</p>
            
            <p>Best regards,<br>
            The InvestoFund Team</p>
        </div>
    </div>
</body>
</html>`;
  }

  private getISOWelcomeTemplate(firstName: string): string {
    return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Welcome to InvestoFund Partner Program</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #1A5959; color: white; padding: 20px; text-align: center; }
        .content { padding: 30px 20px; }
        .highlight { background: #e8f5e5; padding: 15px; border-radius: 5px; margin: 20px 0; }
        .commission-box { background: #f0f8ff; padding: 15px; border: 2px solid #1A5959; border-radius: 5px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Welcome to the InvestoFund Partner Program!</h1>
        </div>
        
        <div class="content">
            <h2>Hello ${firstName},</h2>
            
            <p>Congratulations on joining InvestoFund as a preferred ISO partner. We're excited to help you grow your business with our fast funding and competitive commission structure.</p>
            
            <div class="commission-box">
                <h3>Your Commission Structure</h3>
                <ul>
                    <li><strong>Base Commission:</strong> 15% of Net Receivable Profit</li>
                    <li><strong>Fast Funding:</strong> 24-48 hour turnaround</li>
                    <li><strong>Deal Range:</strong> $5,000 - $250,000</li>
                    <li><strong>Payment:</strong> 5-7 days after collection</li>
                </ul>
            </div>
            
            <div class="highlight">
                <h3>Getting Started Checklist</h3>
                <ul>
                    <li>✓ Review your ISO Agreement (attached)</li>
                    <li>✓ Access your broker portal credentials</li>
                    <li>✓ Download submission templates</li>
                    <li>✓ Submit your first deal</li>
                </ul>
            </div>
            
            <p><strong>Your Support Team:</strong></p>
            <ul>
                <li>Submissions: submissions@investofund.com</li>
                <li>Partner Support: support@investofund.com</li>
                <li>Emergency Line: (555) 123-URGENT</li>
            </ul>
            
            <p>We're here to help you succeed. Let's fund some deals!</p>
            
            <p>Best regards,<br>
            InvestoFund Partner Relations Team</p>
        </div>
    </div>
</body>
</html>`;
  }

  private getMerchantWelcomeTemplate(firstName: string): string {
    return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Welcome to Green Harvest Funding</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #2E7D32; color: white; padding: 20px; text-align: center; }
        .content { padding: 30px 20px; }
        .highlight { background: #e8f5e5; padding: 15px; border-radius: 5px; margin: 20px 0; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Welcome to Green Harvest Funding!</h1>
        </div>
        
        <div class="content">
            <h2>Hello ${firstName},</h2>
            
            <p>Thank you for your interest in Green Harvest Funding. We understand that growing businesses need fast, flexible capital solutions.</p>
            
            <div class="highlight">
                <h3>What Makes Us Different</h3>
                <ul>
                    <li><strong>Fast Approval:</strong> 24-hour decisions</li>
                    <li><strong>Quick Funding:</strong> 1-3 days to receive funds</li>
                    <li><strong>Flexible Repayment:</strong> Based on your daily sales</li>
                    <li><strong>No Fixed Monthly Payments:</strong> Payments adjust with your revenue</li>
                </ul>
            </div>
            
            <p><strong>Next Steps:</strong></p>
            <ol>
                <li>Gather your required documents (bank statements, ID, voided check)</li>
                <li>Complete your application online</li>
                <li>Receive your funding decision within 24 hours</li>
                <li>Get funded and grow your business</li>
            </ol>
            
            <p>Our team is standing by to help with any questions:</p>
            <ul>
                <li>Phone: (555) 123-FUND</li>
                <li>Email: merchants@greenharvest.com</li>
                <li>Apply online: greenharvest.com/apply</li>
            </ul>
            
            <p>Let's help your business thrive!</p>
            
            <p>Best regards,<br>
            Green Harvest Funding Team</p>
        </div>
    </div>
</body>
</html>`;
  }

  private getPaymentInstructionsTemplate(options: {
    firstName: string;
    lastName: string;
    amount: number;
    investmentType: string;
    referenceNumber: string;
  }): string {
    return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Investment Payment Instructions</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #1A5959; color: white; padding: 20px; text-align: center; }
        .content { padding: 30px 20px; }
        .payment-box { background: #f0f8ff; padding: 20px; border: 2px solid #1A5959; border-radius: 5px; margin: 20px 0; }
        .warning { background: #fff3cd; padding: 15px; border: 1px solid #ffeaa7; border-radius: 5px; margin: 20px 0; }
        .reference { font-size: 24px; font-weight: bold; color: #1A5959; text-align: center; padding: 10px; background: #f8f9fa; border-radius: 5px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Investment Payment Instructions</h1>
        </div>
        
        <div class="content">
            <h2>Hello ${options.firstName} ${options.lastName},</h2>
            
            <p>Thank you for your investment application. Please find your wire transfer instructions below to complete your ${options.investmentType} investment.</p>
            
            <div class="reference">
                Reference Number: ${options.referenceNumber}
            </div>
            
            <div class="payment-box">
                <h3>Wire Transfer Instructions</h3>
                <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                        <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #ddd;">Amount:</td>
                        <td style="padding: 8px; border-bottom: 1px solid #ddd;">$${options.amount.toLocaleString()}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #ddd;">Beneficiary:</td>
                        <td style="padding: 8px; border-bottom: 1px solid #ddd;">InvestoFund LLC</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #ddd;">Bank Name:</td>
                        <td style="padding: 8px; border-bottom: 1px solid #ddd;">JPMorgan Chase Bank</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #ddd;">Account Number:</td>
                        <td style="padding: 8px; border-bottom: 1px solid #ddd;">XXXX-XXXX-XXXX-1234</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #ddd;">Routing Number:</td>
                        <td style="padding: 8px; border-bottom: 1px solid #ddd;">021000021</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #ddd;">Reference:</td>
                        <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold; color: #1A5959;">${options.referenceNumber}</td>
                    </tr>
                </table>
            </div>
            
            <div class="warning">
                <h3>⚠️ Important Instructions</h3>
                <ul>
                    <li><strong>Include Reference Number:</strong> Always include "${options.referenceNumber}" in the wire description</li>
                    <li><strong>Exact Amount:</strong> Send exactly $${options.amount.toLocaleString()} to avoid processing delays</li>
                    <li><strong>Notify Us:</strong> Email confirmation to payments@investofund.com after sending</li>
                    <li><strong>Business Days:</strong> Allow 1-2 business days for funds to be received and processed</li>
                </ul>
            </div>
            
            <p><strong>What Happens Next:</strong></p>
            <ol>
                <li>Send wire transfer with reference number</li>
                <li>Email us confirmation at payments@investofund.com</li>
                <li>We'll confirm receipt within 24 hours</li>
                <li>Your capital will be deployed into the next available deal</li>
                <li>You'll receive deal details and documentation</li>
            </ol>
            
            <p>Questions about this payment or your investment?</p>
            <ul>
                <li>Email: payments@investofund.com</li>
                <li>Phone: (555) 123-4567</li>
                <li>Reference: ${options.referenceNumber}</li>
            </ul>
            
            <p>Thank you for choosing InvestoFund!</p>
            
            <p>Best regards,<br>
            InvestoFund Investor Relations Team</p>
        </div>
    </div>
</body>
</html>`;
  }
}

export const emailService = new EmailService();