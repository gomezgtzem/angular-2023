import { Product, taxCalculation } from "./06-function-destructuring";

const shoppingCart: Product[] = [
  { description: "Nokia A1", price: 100 },
  { description: "Sansung Galaxy A10", price: 169 },
  { description: "iPad", price: 250 },
  { description: "Mouse", price: 25 },
  { description: "Keyboard", price: 26 },
  { description: "Monitor", price: 300 },
  { description: "Speakers", price: 128 },
  { description: "Router", price: 227 },
  { description: "RAM", price: 118 },
];
//Tax = 0.16
const [total, tax] = taxCalculation({
  products: shoppingCart,
  tax: 0.16,
});

console.log("Total: ", total);
console.log("Tax: ", tax);
