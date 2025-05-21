import React from 'react';
import { Sparkles } from 'lucide-react';

interface HeaderProps {
  selectedCount: number;
}

const Header: React.FC<HeaderProps> = ({ selectedCount }) => {
  return (
    <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Sparkles className="h-6 w-6 text-blue-500 mr-2" />
          <h1 className="text-2xl font-bold text-gray-800">Activity</h1>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="text-sm font-medium text-gray-600">
            {selectedCount > 0 ? (
              <span>
                <span className="text-blue-500 font-semibold">{selectedCount}</span> activities selected
              </span>
            ) : (
              <span>Select activities you love</span>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;