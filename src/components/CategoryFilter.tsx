
import React from 'react';
import { categories, Category } from '@/lib/data';

interface CategoryFilterProps {
  selectedCategory: Category;
  onSelectCategory: (category: Category) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ selectedCategory, onSelectCategory }) => {
  return (
    <div className="reveal mb-10 flex flex-wrap gap-2">
      {categories.map((category, index) => (
        <button
          key={category.value}
          onClick={() => onSelectCategory(category.value)}
          className={`transition-all duration-300 px-4 py-2 rounded-full text-sm font-medium ${
            selectedCategory === category.value
              ? 'bg-primary text-primary-foreground shadow-md'
              : 'bg-secondary hover:bg-secondary/80 text-foreground'
          }`}
          style={{ transitionDelay: `${index * 50}ms` }}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
