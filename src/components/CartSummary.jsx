import React from 'react';
import { Trash2, Printer, Tag } from 'lucide-react';

export default function CartSummary({ cart, subtotal, discount, setDiscount, tax, total, onClear, onPrint }) {
  const isCartEmpty = cart.length === 0;

  return (
    <div className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 p-4 shrink-0 transition-colors duration-200">
      
      <div className="mb-4">
        <div className="flex items-center gap-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl px-3 py-2">
          <Tag size={16} className="text-gray-400" />
          <input 
            type="number"
            min="0"
            max="100"
            value={discount || ''}
            onChange={(e) => setDiscount(parseFloat(e.target.value) || 0)}
            placeholder="Discount %"
            disabled={isCartEmpty}
            className="w-full bg-transparent text-sm outline-none text-gray-900 dark:text-gray-100 disabled:opacity-50"
          />
          {discount > 0 && <span className="text-xs font-medium text-emerald-500">-{discount}%</span>}
        </div>
      </div>

      <div className="space-y-2 mb-6 text-sm">
        <div className="flex justify-between text-gray-600 dark:text-gray-400">
          <span>Subtotal</span>
          <span className="font-medium text-gray-900 dark:text-gray-100">${subtotal.toFixed(2)}</span>
        </div>
        {discount > 0 && (
          <div className="flex justify-between text-emerald-600 dark:text-emerald-400">
            <span>Discount ({discount}%)</span>
            <span className="font-medium">-${((subtotal * discount) / 100).toFixed(2)}</span>
          </div>
        )}
        <div className="flex justify-between text-gray-600 dark:text-gray-400">
          <span>Tax (10%)</span>
          <span className="font-medium text-gray-900 dark:text-gray-100">${tax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-lg font-bold text-gray-900 dark:text-gray-100 pt-3 border-t border-gray-100 dark:border-gray-700">
          <span>Total</span>
          <span className="text-accent dark:text-accent-dark">${total.toFixed(2)}</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={onClear}
          disabled={isCartEmpty}
          className="flex items-center justify-center gap-2 py-3 rounded-xl bg-red-50 hover:bg-red-100 text-danger dark:bg-red-900/20 dark:hover:bg-red-900/40 dark:text-red-400 font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Trash2 size={18} />
          Clear
        </button>
        <button
          onClick={onPrint}
          disabled={isCartEmpty}
          className="flex items-center justify-center gap-2 py-3 rounded-xl bg-accent hover:bg-emerald-600 dark:bg-accent-dark dark:hover:bg-emerald-500 text-white font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm shadow-emerald-500/20"
        >
          <Printer size={18} />
          Checkout
        </button>
      </div>
    </div>
  );
}
