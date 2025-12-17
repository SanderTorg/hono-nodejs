import type { Product } from "./types.js";

const ExampleProduct: Product = {
  id: 1,
  name: "Sample Product",
  price: 19.99,
  inStock: true,
};

const Shorts: Product = {
  id: 2,
  name: "Blue Shorts",
  price: 29.99,
  inStock: true,
};

const Jersey: Product = {
  id: 3,
  name: "Red Jersey",
  price: 39.99,
  inStock: false,
};

export let products: Product[] = [ExampleProduct, Shorts, Jersey];
