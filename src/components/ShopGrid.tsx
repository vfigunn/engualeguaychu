
import React, { useEffect, useState } from 'react';
import ShopCard from './ShopCard';
import { Shop, Category } from '@/lib/data';

interface ShopGridProps {
  shops: Shop[];
  searchTerm: string;
  selectedCategory: Category;
}

const ShopGrid: React.FC<ShopGridProps> = ({ shops, searchTerm, selectedCategory }) => {
  const [filteredShops, setFilteredShops] = useState<Shop[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    
    // Simulate loading time to show animation
    const timer = setTimeout(() => {
      let filtered = [...shops];

      if (selectedCategory !== 'all') {
        filtered = filtered.filter(shop => shop.category === selectedCategory);
      }

      if (searchTerm.trim() !== '') {
        const term = searchTerm.toLowerCase();
        filtered = filtered.filter(
          shop => shop.name.toLowerCase().includes(term) || 
                  shop.description.toLowerCase().includes(term)
        );
      }

      setFilteredShops(filtered);
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [shops, searchTerm, selectedCategory]);

  if (isLoading) {
    return (
      <div className="min-h-[300px] flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
      </div>
    );
  }

  if (filteredShops.length === 0) {
    return (
      <div className="min-h-[300px] flex items-center justify-center">
        <div className="text-center">
          <h3 className="text-xl font-medium mb-2">No shops found</h3>
          <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {filteredShops.map((shop, index) => (
        <ShopCard key={shop.id} shop={shop} index={index} />
      ))}
    </div>
  );
};

export default ShopGrid;
