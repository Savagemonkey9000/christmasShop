import React from 'react';
import { useProducts } from '../hooks/useProducts';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { ErrorMessage } from '../components/ErrorMessage';
import { ProductGrid } from '../components/ProductGrid';
import { EmptyState } from '../components/EmptyState';

export const HomePage: React.FC = () => {
  const { products, isLoading, error } = useProducts();

  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error.message} />;
  if (!products?.length) return <EmptyState />;

  return (
    <div className="container mx-auto px-4 py-8">
      <ProductGrid products={products} />
    </div>
  );
};