import { useState } from "react";
import { useSearchParams } from "react-router-dom";

function Search() {
let [searchTerm, setSearchTerm] = useSearchParams();

  return (
    <div className="mb-10 mt-6 flex justify-center px-4">
      <div className="relative w-full max-w-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 dark:text-slate-400 pointer-events-none z-10"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
        <input
        onChange={(e) =>  {setSearchTerm({query: e.target.value})
      }}
          type="text"
          placeholder="Search products..."
          className="w-full rounded-full border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 backdrop-blur-md pl-11 pr-4 py-3 text-slate-800 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-400 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-800 transition-all shadow-sm"
        />
      </div>
    </div>
  );
}

export default Search;
