function sortProductsByPrice(products) {
  for (let i = 0; i < products.length; i++) {
    for (let j = 0; j < products.length - i - 1; j++) {
      if (products[j].price > products[j + 1].price) {
        let result = products[j];
        products[j] = products[j + 1];
        products[j + 1] = result;
      }
    }
  }
  return products;
}

// Test case
const products = [
  { name: "Apple", price: 1.2 },
  { name: "Banana", price: 0.8 },
  { name: "Cherry", price: 2.5 },
  { name: "Date", price: 1.5 },
];
console.log(sortProductsByPrice(products));

// Output: [
//   { name: 'Banana', price: 0.8 },
//   { name: 'Apple', price: 1.2 },
//   { name: 'Date', price: 1.5 },
//   { name: 'Cherry', price: 2.5 }
// ]

/**
 * - You are given an array of product objects, where each object contains a `name` and a `price`.
- Write a function `sortProductsByPrice(products)` that sorts this array of products in ascending order based on their price **using the bubble sort algorithm**.
- Return the sorted array
 */
