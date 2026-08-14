import { useEffect } from "react";

function AddedToCartModal({ show, setShow }) {
  
  useEffect(() => {
  if(show) {const timer = setTimeout(() => {
    setShow(false);
  }, 1000);
  return ()=> clearTimeout(timer)}
  }, [show]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/30 backdrop-blur-sm animate-fadeIn">
      <div className="flex flex-col items-center gap-3 rounded-2xl bg-white dark:bg-slate-800 px-10 py-8 shadow-2xl animate-popIn">
        <svg
          className="h-16 w-16"
          viewBox="0 0 52 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="26"
            cy="26"
            r="24"
            stroke="#22c55e"
            strokeWidth="3"
            className="animate-circle"
            fill="none"
          />
          <path
            d="M15 27L22.5 34.5L37 18"
            stroke="#22c55e"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-check"
            fill="none"
          />
        </svg>

        <p className="text-[15px] font-semibold text-slate-700 dark:text-slate-100">
          Added to cart
        </p>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes popIn {
          0% { opacity: 0; transform: scale(0.75); }
          60% { opacity: 1; transform: scale(1.05); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes circleDraw {
          from { stroke-dasharray: 151; stroke-dashoffset: 151; }
          to { stroke-dasharray: 151; stroke-dashoffset: 0; }
        }
        @keyframes checkDraw {
          from { stroke-dasharray: 32; stroke-dashoffset: 32; }
          to { stroke-dasharray: 32; stroke-dashoffset: 0; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        .animate-popIn {
          animation: popIn 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .animate-circle {
          animation: circleDraw 0.4s ease-out forwards;
        }
        .animate-check {
          animation: checkDraw 0.3s ease-out 0.35s forwards;
          stroke-dasharray: 32;
          stroke-dashoffset: 32;
        }
      `}</style>
    </div>
  );
}

export default AddedToCartModal;
