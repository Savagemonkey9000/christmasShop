import React from 'react';
import { Product } from '../types/productModel';

interface ProductDetailsProps {
  product: Product;
}

export const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl mx-auto">
    <div className="md:flex">
      <div className="md:w-1/2">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-[400px] object-cover"
        />
      </div>
      <div className="md:w-1/2 p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
        <p className="text-2xl font-bold text-green-700 mb-4">
          ${product.price.toFixed(2)}
        </p>
        <p className="text-gray-600 mb-6">{product.description}</p>
        <div className="mb-6">
          <span className="text-gray-700 font-semibold">Stock: </span>
          <span className={product.stock > 0 ? 'text-green-600' : 'text-red-600'}>
            {product.stock > 0 ? `${product.stock} items left` : 'Out of stock'}
          </span>
        </div>
        <button
          className={`w-full py-3 px-6 rounded-lg text-white transition-colors ${
            product.stock > 0
              ? 'bg-green-700 hover:bg-green-800'
              : 'bg-gray-400 cursor-not-allowed'
          }`}
          disabled={product.stock === 0}
        >
          {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
        </button>
      </div>
    </div>
  </div>
); 