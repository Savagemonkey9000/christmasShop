import { useState, useEffect } from 'react';
import { Product } from '../types/productModel';
import { productService } from '../services/productService';

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await productService.getAllProducts();
        setProducts(data);
      } catch (e) {
        setError(e instanceof Error ? e : new Error('Failed to load products'));
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { products, isLoading, error };
} 