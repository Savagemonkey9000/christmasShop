import React, { useState, useEffect } from "react";
import { productService } from "../services/productService";
import "../styles/ProductList.css";

interface Product {
  name: string;
  price: number;
  description: string;
  image: string;
  stock: number;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const loadProducts = async () => {
      try {
        console.log("Fetching products...");
        const data = await productService.getAllProducts();
        console.log("Received products:", data);
        setProducts(data);
      } catch (error) {
        console.error("Error in loadProducts:", error);
        setError("Failed to load products");
      }
    };

    loadProducts();
  }, []);

  console.log("Current products state:", products);

  return (
    <div className="product-grid">
      {error && <p className="error-message">{error}</p>}
      {products.length === 0 && <p>Loading products...</p>}
      {products.map((product, index) => (
        <div key={index} className="product-card">
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
          />
          <h3>{product.name}</h3>
          <p className="price">${product.price}</p>
          <p className="description">{product.description}</p>
          <p className="stock">In stock: {product.stock}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
