// Payment utilities for manual payment processing

export const formatCurrency = (amount: number, currency = 'USD') => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount);
};

export const centsToDollars = (cents: number) => {
  return cents / 100;
};

export const dollarsToCents = (dollars: number) => {
  return Math.round(dollars * 100);
};

export const generatePaymentReference = (applicationId: number, prefix = 'INV') => {
  const timestamp = Date.now().toString().slice(-6);
  return `${prefix}-${applicationId}-${timestamp}`;
};

export const formatPaymentInstructions = (amount: number, reference: string) => {
  return {
    amount: formatCurrency(amount),
    reference,
    instructions: [
      "Please initiate a wire transfer to InvestoFund using the details provided in your confirmation email.",
      "Include the reference number in your wire transfer memo.",
      "Payment processing typically takes 1-3 business days.",
      "You will receive confirmation once payment is received and processed."
    ]
  };
};
