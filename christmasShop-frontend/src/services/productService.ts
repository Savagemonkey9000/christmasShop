import { Product } from "../types/productModel";

const BASE_URL = "http://localhost:3001/api";

export const productService = {
  async getAllProducts(): Promise<Product[]> {
    try {
      const response = await fetch(`${BASE_URL}/products`);
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  },

  async getProductByName(name: string): Promise<Product> {
    try {
      const response = await fetch(`${BASE_URL}/products`);
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const products = await response.json();
      const product = products.find((p: Product) => p.name === name);
      if (!product) {
        throw new Error("Product not found");
      }
      return product;
    } catch (error) {
      console.error("Error fetching product:", error);
      throw error;
    }
  },
};
