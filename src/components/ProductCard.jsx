import React from 'react';
import { Plus } from 'lucide-react';

export default function ProductCard({ product, onAdd }) {
  return (
    <div 
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden cursor-pointer group border border-gray-100 dark:border-gray-700 flex flex-col h-full"
      onClick={() => onAdd(product)}
    >
      <div className="relative h-40 overflow-hidden bg-gray-100 dark:bg-gray-700">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute top-2 right-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-2 py-1 rounded-lg shadow-sm text-sm font-semibold text-primary dark:text-indigo-400">
          ${product.price.toFixed(2)}
        </div>
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-1 uppercase tracking-wider font-medium">{product.category}</p>
        <h3 className="text-gray-900 dark:text-gray-100 font-semibold mb-2 line-clamp-2">{product.name}</h3>
        <div className="mt-auto">
          <button 
            className="w-full flex items-center justify-center gap-2 bg-gray-50 hover:bg-primary hover:text-white dark:bg-gray-700 dark:hover:bg-primary text-gray-700 dark:text-gray-200 py-2 rounded-xl transition-colors text-sm font-medium"
            onClick={(e) => {
              e.stopPropagation();
              onAdd(product);
            }}
          >
            <Plus size={16} /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
