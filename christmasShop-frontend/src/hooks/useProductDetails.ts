import { useState, useEffect } from 'react';
import { Product } from '../types/productModel';
import { productService } from '../services/productService';

export function useProductDetails(name: string | undefined) {
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!name) {
        setError(new Error('Product name is required'));
        setIsLoading(false);
        return;
      }

      try {
        const data = await productService.getProductByName(decodeURIComponent(name));
        setProduct(data);
      } catch (e) {
        setError(e instanceof Error ? e : new Error('Failed to load product'));
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [name]);

  return { product, isLoading, error };
} 