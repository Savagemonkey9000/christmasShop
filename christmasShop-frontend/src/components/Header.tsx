import React from 'react';
import { Gift } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  return (
    <header className="bg-green-700 text-white py-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 flex items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Gift size={24} />
          <h1 className="text-2xl font-bold">Christmas Shop</h1>
        </Link>
      </div>
    </header>
  );
};