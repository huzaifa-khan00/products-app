import { useEffect, useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartItemContext";

function CartItem({
  item,
  itemQuantity,
  onIncrease,
  onDecrease,
  onRemove,
}) {

  let [isLess, setIsLess] = useState(false);
  let [isEmpty, setIsEmpty] = useState(false);
  let {cartItems, setCartItems} = useContext(CartContext);

  return (
    <div className="flex items-center gap-4 backdrop-blur-md bg-white/70 dark:bg-slate-800/50 border border-white/40 dark:border-slate-700/40 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
      <img
        src={item.image}
        alt={item.name}
        className="w-20 h-20 object-cover rounded-xl bg-slate-200 dark:bg-slate-700"
      />

      <div className="flex-1">
        <h3 className="text-base font-medium text-gray-900 dark:text-white">
          {item.name}
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          {item.category}
        </p>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
          Unit price: ${item.price}
        </p>
      </div>

      <div className="flex items-center gap-2 rounded-full border border-slate-300 dark:border-slate-600 px-2 py-1">
        {isLess && (
          <span className="flex items-center gap-1 text-xs text-red-500 whitespace-nowrap">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-3.5 w-3.5 shrink-0"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
              />
            </svg>
            Min quantity is 1
          </span>
        )}
        <button
          onClick={() => {
            if (item.quantity < 2) {
              setIsLess(true);
              setTimeout(() => {
                setIsLess(false);
              }, 1500);
            } else onDecrease(item.id);
          }}
          className="h-7 w-7 flex items-center justify-center rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
        >
          −
        </button>
        <span className="w-6 text-center text-sm font-medium text-gray-900 dark:text-white">
          {item.quantity}
        </span>
        <button
          onClick={() => onIncrease(item.id)}
          className="h-7 w-7 flex items-center justify-center rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
        >
          +
        </button>
      </div>

      <div className="w-24 text-right">
        <p className="text-xs text-slate-400 dark:text-slate-500">Subtotal</p>
        <p className="font-semibold text-gray-900 dark:text-white">
          ${(item.price * item.quantity).toFixed(2)}
        </p>
      </div>

      <button
        onClick={() => onRemove(item.id)}
        className="h-9 w-9 flex items-center justify-center rounded-full text-red-500 hover:bg-red-50 dark:hover:bg-red-950/40 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
}

export default CartItem;
