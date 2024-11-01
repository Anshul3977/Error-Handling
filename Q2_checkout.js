const cart = [];

function checkout() {
  if (cart.length === 0) throw new Error("Cart is empty. Add items before checkout.");
  console.log("Checkout successful.");
}

try {
  checkout();
} catch (error) {
  console.error(error.message);
}
