import { useEffect, useRef, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartItemContext";

function CheckoutPage() {
  let [isLoading, setIsLoading] = useState(true);
  let navigate = useNavigate();
  let orderNumber = useRef(Math.floor(Math.random() * 100000));
  let { cartItems, setCartItems } = useContext(CartContext);
  let user = JSON.parse(window.localStorage.getItem('user'));

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      console.log(user.address.city)
      setCartItems([]);
    }, 2000);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900 px-4">
      <div className="w-full max-w-md rounded-3xl border border-white/40 dark:border-slate-700/50 bg-white/80 dark:bg-slate-800/70 backdrop-blur-xl shadow-2xl ring-1 ring-black/5 p-10 flex flex-col items-center text-center">
        {isLoading && (
          <svg
            className="animate-spin h-14 w-14 text-indigo-600 dark:text-indigo-400 mb-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            />
          </svg>
        )}

        {!isLoading && (
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-8 w-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          </div>
        )}

        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-2">
          {isLoading ? "Placing your order..." : "Order Placed!"}
        </h2>

        <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
          {isLoading
            ? "This will only take a moment."
            : "Thanks for your purchase — a confirmation has been sent to your email."}
        </p>

        {!isLoading && (
          <div className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 py-3 px-4 mb-6">
            <p className="text-xs text-slate-400 dark:text-slate-500 uppercase tracking-wide mb-1">
              Order Number
            </p>
            <p className="font-mono text-sm text-slate-700 dark:text-slate-200">
              {`ORD-${orderNumber.current}`}
            </p>
          </div>
        )}

        {!isLoading && (
          <div className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 py-3 px-4 mb-6 text-left">
            <p className="text-xs text-slate-400 dark:text-slate-500 uppercase tracking-wide mb-1">
              Delivering To
            </p>
            <p className="text-sm text-slate-700 dark:text-slate-200">
             {!isLoading && user.address.city ? `${user?.address?.city}, ${user?.address?.district}` : "No Deliery Location Provided!"} 
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {user?.address?.postcode}
            </p>
          </div>
        )}

        {!isLoading && (
          <button
            onClick={() => navigate("/products")}
            className="w-full bg-indigo-600 text-white py-3 rounded-full font-semibold hover:bg-indigo-700 hover:scale-[1.02] transition-all"
          >
            Continue Shopping
          </button>
        )}
      </div>
    </div>
  );
}

export default CheckoutPage;
