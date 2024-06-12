'use strict';
const prices = [42.42, 10, 28.2234, 3.2, 5, 12];
const priceObject = prices.map((price) => {
  const newObject = {
    price,
    salePrice: price / 2,
  };
  return newObject;
});
console.log('Price objects', priceObject);
const formatPrice = prices.map((price) => {
  return price.toFixed(2);
});
console.log('Formatted prices', formatPrice);
