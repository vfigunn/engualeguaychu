
import React, { useState, useEffect } from 'react';
import SearchBar from '@/components/SearchBar';
import CategoryFilter from '@/components/CategoryFilter';
import ShopGrid from '@/components/ShopGrid';
import { shops, Category } from '@/lib/data';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');

  useEffect(() => {
    // Initialize animations after component mounts
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach((el) => {
      setTimeout(() => {
        el.classList.add('active');
      }, 100);
    });

    // Add scroll reveal animation
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal:not(.active)');
      reveals.forEach((reveal) => {
        const revealTop = reveal.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (revealTop < windowHeight - 100) {
          reveal.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const handleCategorySelect = (category: Category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 px-6 container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12 reveal">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">City Shop Haven</h1>
          <p className="text-xl text-muted-foreground">
            Discover the unique shops and businesses that make our city special.
          </p>
        </div>

        <div className="max-w-xl mx-auto mb-12">
          <SearchBar onSearch={handleSearch} />
        </div>

        <div className="max-w-4xl mx-auto mb-8">
          <CategoryFilter
            selectedCategory={selectedCategory}
            onSelectCategory={handleCategorySelect}
          />
        </div>

        <ShopGrid
          shops={shops}
          searchTerm={searchTerm}
          selectedCategory={selectedCategory}
        />
      </main>
      <Footer />
    </>
  );
};

export default Index;
