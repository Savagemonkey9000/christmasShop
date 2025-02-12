import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Product } from '../types/productModel';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div 
      onClick={() => navigate(`/details/${encodeURIComponent(product.name)}`)}
      className="bg-white rounded-lg shadow-md border-2 border-red-100 hover:border-red-200 transition-all cursor-pointer overflow-hidden"
    >
      <img 
        src={product.image} 
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-green-700 font-bold mt-2">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
};
