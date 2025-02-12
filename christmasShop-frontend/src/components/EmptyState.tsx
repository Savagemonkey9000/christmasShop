import React from 'react';

export const EmptyState: React.FC = () => (
  <div className="container mx-auto px-4 py-8 text-center">
    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
      <h2 className="text-xl font-semibold text-yellow-700">No Products Available</h2>
      <p className="text-yellow-600 mt-2">Check back later for our Christmas collection!</p>
    </div>
  </div>
); 