import React from 'react';
import { ActivityCategory } from '../types/types';

interface CategoryFilterProps {
  categories: ActivityCategory[];
  activeCategory: string | null;
  onSelectCategory: (categoryId: string | null) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ 
  categories, 
  activeCategory, 
  onSelectCategory 
}) => {
  return (
    <div className="mb-6 overflow-x-auto pb-2">
      <div className="flex gap-2 min-w-max">
        <button
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
            activeCategory === null
              ? 'bg-blue-500 text-white shadow-md'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
          onClick={() => onSelectCategory(null)}
        >
          All
        </button>
        
        {categories.map((category) => (
          <button
            key={category.id}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              activeCategory === category.id
                ? 'bg-blue-500 text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => onSelectCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;