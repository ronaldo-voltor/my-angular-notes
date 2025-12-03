import type { Product } from "./func-destructuring";
import { calcularImpuesto } from "./func-destructuring";

const shoppingCart: Product[] = [
  { description: "iPhone 13", price: 699 },
  { description: "MacBook Pro", price: 999 },
];



const resultado = calcularImpuesto({ products: shoppingCart, tax: 0.15 });
const [totalProductos, tax] = resultado;
const totalAPagar = totalProductos + tax;
console.log(`Total productos: ${totalProductos}, Impuesto: ${tax}`);
console.log(`Total a pagar: ${totalAPagar}`);
