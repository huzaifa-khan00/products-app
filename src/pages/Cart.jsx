import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartItemContext";
import CartItem from "../components/CartItem";
import { useNavigate } from "react-router-dom";

function Cart() {
  let { cartItems, setCartItems } = useContext(CartContext);
  let [isEmpty, setIsEmpty] = useState(false);
  let navigate = useNavigate();

  let subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  let onIncrease = (id) => {
    setCartItems(cartItems.map((item)=> item.id === id ? {...item, quantity: item.quantity + 1} : 
    item));
  };

  let onDecrease = (id) => {
    setCartItems(cartItems.map((item)=> item.id === id ? {...item, quantity: item.quantity - 1}
    : item
  ));
  };

  let onRemove = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  useEffect(()=> {
    cartItems.length === 0 ? setIsEmpty(true) : setIsEmpty(false);
  },[cartItems])

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 transition-colors duration-300">
      <section className="text-center py-16 px-5">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-3">
          Your Cart
        </h1>
        <p className="text-base text-slate-500 dark:text-slate-400">
          {isEmpty ? 'start browsing to add something.' : 'Review your items before checkout.'}
        </p>
      </section>

      <section className="px-5 max-w-4xl mx-auto pb-10 space-y-4">
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            itemQuantity={item.quantity}
            item={item}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onRemove={onRemove}
          />
        ))}
      </section>
        {isEmpty ? <div className="text-center py-24 px-5">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-24 h-24 mx-auto text-slate-300 dark:text-slate-600"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 1.887-4.788 2.227-7.401.075-.578-.397-1.09-.98-1.09H5.106M7.5 14.25L5.106 5.099M6 18.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
    />
    <line x1="4" y1="4" x2="20" y2="20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
  <h2 className="text-xl font-semibold text-slate-700 dark:text-slate-200 mt-4">
    Your cart is empty
  </h2>
  <p className="text-slate-500 dark:text-slate-400 mt-1">
    Looks like you haven't added anything yet.
  </p>
</div>
:
      <section className="max-w-4xl mx-auto px-5 pb-20">
        <div className="backdrop-blur-md bg-white/70 dark:bg-slate-800/50 border border-white/40 dark:border-slate-700/40 rounded-2xl p-6 shadow-sm space-y-3">
          <div className="flex items-center justify-between text-slate-600 dark:text-slate-300">
            <span>Subtotal</span>
            <span className="font-medium">${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex items-center justify-between text-slate-600 dark:text-slate-300">
            <span>Shipping</span>
            <span className="font-medium">$0.00</span>
          </div>
          <div className="border-t border-slate-200 dark:border-slate-700 pt-3 flex items-center justify-between">
            <span className="text-lg font-medium text-gray-900 dark:text-white">
              Total
            </span>
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              ${subtotal.toFixed(2)}
            </span>
          </div>
        </div>

        <button onClick={()=> navigate("/checkout")} className="mt-4 w-full bg-indigo-600 text-white py-3 rounded-full font-semibold hover:bg-indigo-700 hover:scale-[1.02] transition-all">
          Checkout
        </button>
      </section>
}
    </div>
      
  );
}

export default Cart;
