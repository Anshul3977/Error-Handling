function addToCart(name, price, quantity) {
    if (!name) throw new Error("Product name is required.");
    if (typeof price !== 'number' || price <= 0) throw new Error("Invalid product price.");
    if (!Number.isInteger(quantity) || quantity <= 0) throw new Error("Invalid quantity.");
    console.log(`Added ${quantity} of ${name} to the cart at $${price} each.`);
  }
  
  try {
    addToCart("Laptop", 1000, 2);
    addToCart("", 1000, 2);
  } catch (error) {
    console.error(error.message);
  }
  