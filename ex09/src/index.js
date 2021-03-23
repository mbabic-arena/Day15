// Only change code below this
const product = (...args) => {
  // Only change code above this

  return args.reduce((a, b) => a * b, 1);
};
console.log(product(1, 2));
console.log(product(4, 3, 10, 2));
console.log(product(7));
console.log(product()); // Change this line
module.exports = product;
