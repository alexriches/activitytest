import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-600">
              Find your perfect activities and discover new interests
            </p>
          </div>
          
          <div className="flex items-center text-sm text-gray-500">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 mx-1" />
            <span>for activity enthusiasts</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;