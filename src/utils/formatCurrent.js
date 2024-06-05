export function formatPrice(productPrice) {
  // Ensure the price is a number
  let price = Number(productPrice);
  
  // Check if the conversion is successful
  if (isNaN(price)) {
      return "Invalid price";
  }

  // Format the price to USD
  let formattedPrice = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
  }).format(price);

  return formattedPrice;
}