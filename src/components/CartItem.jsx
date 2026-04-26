import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';

export default function CartItem({ item, onUpdateQuantity, onRemove }) {
  return (
    <div className="flex gap-3 py-3 border-b border-gray-100 dark:border-gray-700 last:border-0 group">
      <div className="flex-1">
        <div className="flex justify-between items-start mb-1">
          <h4 className="font-medium text-gray-900 dark:text-gray-100 text-sm line-clamp-2">{item.name}</h4>
          <button 
            onClick={() => onRemove(item.id)}
            className="text-gray-400 hover:text-danger dark:hover:text-danger transition-colors p-1 opacity-0 group-hover:opacity-100 focus:opacity-100 rounded-md hover:bg-red-50 dark:hover:bg-red-900/20"
            title="Remove item"
          >
            <Trash2 size={16} />
          </button>
        </div>
        
        <div className="flex justify-between items-end mt-2">
          <div className="flex items-center gap-2 bg-gray-50 dark:bg-gray-800 rounded-lg p-1 border border-gray-200 dark:border-gray-600">
            <button 
              onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
              className="p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-colors"
            >
              <Minus size={14} />
            </button>
            <span className="w-6 text-center text-sm font-medium text-gray-900 dark:text-gray-100">
              {item.quantity}
            </span>
            <button 
              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
              className="p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-colors"
            >
              <Plus size={14} />
            </button>
          </div>
          
          <div className="text-right">
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-0.5">${item.price.toFixed(2)} each</p>
            <p className="font-semibold text-gray-900 dark:text-gray-100">${(item.price * item.quantity).toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
