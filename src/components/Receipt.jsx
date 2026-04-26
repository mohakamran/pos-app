import React, { forwardRef } from 'react';

const Receipt = forwardRef(({ cart, subtotal, discount, tax, total }, ref) => {
  const date = new Date().toLocaleString();
  const discountAmount = (subtotal * discount) / 100;

  return (
    <div className="hidden">
      <div id="printable-receipt" ref={ref} className="bg-white text-black p-8 font-mono text-sm mx-auto max-w-sm">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold mb-1">MODERN POS</h2>
          <p className="text-gray-600">123 Commerce St.</p>
          <p className="text-gray-600">Tech City, TX 75001</p>
          <p className="text-gray-600 mt-2">{date}</p>
        </div>

        <div className="border-t border-b border-dashed border-gray-400 py-4 mb-4">
          <table className="w-full">
            <thead>
              <tr className="text-left">
                <th className="pb-2 font-semibold w-1/2">Item</th>
                <th className="pb-2 font-semibold text-center w-1/4">Qty</th>
                <th className="pb-2 font-semibold text-right w-1/4">Price</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td className="py-1 break-words pr-2">{item.name}</td>
                  <td className="py-1 text-center">{item.quantity}</td>
                  <td className="py-1 text-right">${(item.price * item.quantity).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col gap-1 mb-6">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          {discount > 0 && (
            <div className="flex justify-between">
              <span>Discount ({discount}%)</span>
              <span>-${discountAmount.toFixed(2)}</span>
            </div>
          )}
          <div className="flex justify-between">
            <span>Tax (10%)</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-bold text-lg mt-2 pt-2 border-t border-dashed border-gray-400">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="font-bold">THANK YOU!</p>
          <p className="text-xs text-gray-500 mt-1">Please come again</p>
        </div>
      </div>
    </div>
  );
});

export default Receipt;
