function AlreadyInCartModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
      <div className="w-full max-w-sm backdrop-blur-md bg-white/90 dark:bg-slate-800/90 border border-white/40 dark:border-slate-700/40 rounded-2xl p-6 shadow-xl text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
          </svg>
        </div>

        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          Item already in cart
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
          This product is already in your cart. You can adjust its quantity from the cart page.
        </p>

        <button
          onClick={onClose}
          className="w-full bg-indigo-600 text-white py-2.5 rounded-full font-semibold hover:bg-indigo-700 hover:scale-[1.02] transition-all"
        >
          Got it
        </button>
      </div>
    </div>
  );
}

export default AlreadyInCartModal;
