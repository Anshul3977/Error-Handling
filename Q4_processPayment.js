function processPayment(amount, cardNumber, expirationDate) {
    if (typeof amount !== 'number' || amount <= 0) throw new Error("Invalid payment amount.");
    if (!cardNumber || !/^\d{16}$/.test(cardNumber)) throw new Error("Invalid card number.");
    if (!expirationDate || new Date(expirationDate) <= new Date()) throw new Error("Invalid expiration date.");
    console.log("Payment processed successfully.");
  }
  
  try {
    processPayment(100, "1234567812345678", "2025-12-01");
    processPayment(-50, "1234567812345678", "2025-12-01");
  } catch (error) {
    console.error(error.message);
  }
  