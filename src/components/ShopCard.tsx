
import React, { useState } from 'react';
import { Shop } from '@/lib/data';

interface ShopCardProps {
  shop: Shop;
  index: number;
  onSelect: (shop: Shop) => void;
}

const ShopCard: React.FC<ShopCardProps> = ({ shop, index, onSelect }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'restaurantes':
        return 'bg-orange-100 text-orange-800';
      case 'indumentaria':
        return 'bg-blue-100 text-blue-800';
      case 'farmacia':
        return 'bg-green-100 text-green-800';
      case 'optica':
        return 'bg-yellow-100 text-yellow-800';
      case 'electrodomesticos':
        return 'bg-purple-100 text-purple-800';
      case 'educacion':
        return 'bg-red-100 text-red-800';
      case 'automotores':
        return 'bg-sky-100 text-sky-800';
      case 'comestibles':
        return 'bg-lime-100 text-lime-800';
      case 'servicios':
        return 'bg-amber-100 text-amber-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
    setIsLoaded(true);
  };

  return (
    <div 
      className={`glass-card rounded-2xl overflow-hidden transition-all duration-500 transform hover:translate-y-[-5px] hover:shadow-xl animation-delay-${index * 100} opacity-0 animate-fade-in cursor-pointer`}
      style={{ animationDelay: `${index * 50}ms` }}
      onClick={() => onSelect(shop)}
    >
      <div className="relative pt-[60%] overflow-hidden bg-gray-100">
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-10 h-10 border-4 border-primary/20 border-t-primary/80 rounded-full animate-spin"></div>
          </div>
        )}
        {!imageError ? (
          <img
            src={shop.logo}
            alt={`${shop.name} logo`}
            className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={handleImageLoad}
            onError={handleImageError}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
            <span className="text-2xl font-medium text-gray-400">{shop.name.charAt(0)}</span>
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-xl font-medium">{shop.name}</h2>
          <span className={`text-xs px-2 py-1 rounded-full font-medium ${getCategoryColor(shop.category)}`}>
            {shop.category.charAt(0).toUpperCase() + shop.category.slice(1)}
          </span>
        </div>
        <p className="text-sm text-gray-600 line-clamp-2">{shop.description}</p>
      </div>
    </div>
  );
};

export default ShopCard;
