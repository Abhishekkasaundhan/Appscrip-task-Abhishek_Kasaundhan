import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = ({ filters }) => {
  // Sample product data - replace with your actual data
  const products = [
    {
      id: 1,
      name: 'Product Name',
      price: 99.99,
      image: '/path/to/image.jpg',
    },
    // Add more products
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;