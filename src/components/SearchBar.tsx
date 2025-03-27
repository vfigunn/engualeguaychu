
import React, { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';

interface SearchBarProps {
  onSearch: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  const clearSearch = () => {
    setSearchTerm('');
    onSearch('');
  };

  useEffect(() => {
    // Add a delay before animation to ensure the component is rendered
    const timer = setTimeout(() => {
      document.querySelector('.search-bar')?.classList.add('active');
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className={`search-bar reveal mb-6 relative rounded-full transition-all duration-300 ${
        isFocused ? 'shadow-md bg-white' : 'bg-secondary/80'
      }`}
    >
      <div className="flex items-center px-4 h-12">
        <Search size={20} className="text-muted-foreground" />
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Search shops..."
          className="w-full px-3 py-2 bg-transparent focus:outline-none"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        {searchTerm && (
          <button
            onClick={clearSearch}
            className="p-1 rounded-full hover:bg-secondary transition-colors"
            aria-label="Clear search"
          >
            <X size={16} />
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
