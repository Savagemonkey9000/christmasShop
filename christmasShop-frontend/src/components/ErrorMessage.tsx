import React from 'react';

interface ErrorMessageProps {
  message: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => (
  <div className="container mx-auto px-4 py-8 text-center">
    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
      <h2 className="text-xl font-semibold text-red-700 mb-2">Error</h2>
      <p className="text-red-600">{message}</p>
    </div>
  </div>
); 