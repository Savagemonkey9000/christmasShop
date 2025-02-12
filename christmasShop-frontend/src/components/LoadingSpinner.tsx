import React from 'react';
import { Loader } from 'lucide-react';

export const LoadingSpinner: React.FC = () => (
  <div className="flex items-center justify-center min-h-[50vh]">
    <Loader className="animate-spin text-green-700" size={32} />
  </div>
); 