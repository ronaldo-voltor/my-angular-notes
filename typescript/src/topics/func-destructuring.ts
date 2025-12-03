export interface Product {
  description: string;
  price: number;
}

interface TaxOptions {
  products: Product[];
  tax: number;
}

const phone = {
  description: "iPhone 13",
  price: 699,
};

const laptop = {
  description: "MacBook Pro",
  price: 999,
};

export const calcularImpuesto = (options: TaxOptions): [number, number] => {
  // desestructuración del objeto options
  const { products, tax } = options;
  let total = 0;
  // desestructuración para obtener el price de cada producto
  products.forEach(({ price }) => {
    total += price;
  });

  return [total, total * tax];
};

// const shoppingCart = [phone, laptop];
// const taxRate = 0.1;

// const resultado = calcularImpuesto({ products: shoppingCart, tax: taxRate });

// // desestructuración del array resultado
// const [total, tax] = resultado;
// const totalAPagar = total + tax;
// console.log(`Total: ${total}, Tax: ${tax}`);
// console.log(`Total a pagar: ${totalAPagar}`);
