import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useProductDetails } from '../hooks/useProductDetails';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { ErrorMessage } from '../components/ErrorMessage';
import { ProductDetails } from '../components/ProductDetails';

export const ProductDetailsPage: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const { product, isLoading, error } = useProductDetails(name);
  
  if (!name) return <Navigate to="/" replace />;
  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error.message} />;
  if (!product) return <ErrorMessage message="Product not found" />;

  return (
    <div className="container mx-auto px-4 py-8">
      <ProductDetails product={product} />
    </div>
  );
};