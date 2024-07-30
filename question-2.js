function findProductPrice(products, name) {
  let left = 0;
  let right = products.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (products[mid].name === name) {
      return products[mid].price;
    } else if (products[mid].name < name) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

// Test case
const products = [
  { name: "Apple", price: 1.2 },
  { name: "Banana", price: 0.8 },
  { name: "Cherry", price: 2.5 },
];

console.log(findProductPrice(products, "Banana")); // Output: 0.8
console.log(findProductPrice(products, "Durian")); // Output: -1

/**
 * - You are given a sorted array of product objects, where each object contains a `name` and a `price`.
- Write a function `findProductPrice(products, name)` that takes this array and a product name and returns the price of the product with the given name **using the binary search algorithm**.
- If no product with the given name is found, return `-1`.
 */
