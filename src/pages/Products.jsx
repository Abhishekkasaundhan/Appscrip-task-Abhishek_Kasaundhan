import React, { useState } from 'react';
import ProductFilter from '../components/product/ProductFilter';
import ProductGrid from '../components/product/ProductGrid';

const Products = () => {
  const [filters, setFilters] = useState({
    category: '',
    price: '',
    // Add more filter states as needed
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Filters */}
        <div className="w-full md:w-1/4">
          <ProductFilter filters={filters} setFilters={setFilters} />
        </div>
        
        {/* Product Grid */}
        <div className="w-full md:w-3/4">
          <ProductGrid filters={filters} />
        </div>
      </div>
    </div>
  );
};

export default Products;