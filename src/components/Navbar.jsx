import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext.jsx";
import { CartContext} from "../../context/CartItemContext.jsx";

function Navbar() {
  let { theme, toggleTheme } = useContext(ThemeContext);
  let {cartItems, setCartItems} = useContext(CartContext);
      
  return (
    <>
      <nav className="navbar flex items-center justify-between px-10 py-4 sticky top-0 z-50 backdrop-blur-md bg-white/60 dark:bg-slate-900/60 border-b border-white/20 dark:border-slate-700/50 shadow-sm">
        <ul className="flex gap-8 list-none m-0 p-0">
          <li className="navbar-item">
            <NavLink
              to={"/home"}
              className="navbar-link no-underline text-[15px] font-medium text-gray-700 dark:text-slate-200 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
            >
              Home Page
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink
              to={"/about"}
              className="navbar-link no-underline text-[15px] font-medium text-gray-700 dark:text-slate-200 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
            >
              About
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink
              to={"/products"}
              className="navbar-link no-underline text-[15px] font-medium text-gray-700 dark:text-slate-200 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
            >
              Products
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink
              to={"/faq"}
              className="navbar-link no-underline text-[15px] font-medium text-gray-700 dark:text-slate-200 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
            >
              FAQs
            </NavLink>
          </li>
        </ul>

        <NavLink
          to={"/cart"}
          className="relative flex h-10 w-10 items-center justify-center rounded-full shadow-sm transition-all duration-200 hover:scale-105 ml-auto mr-3 backdrop-blur-sm bg-slate-100/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 hover:bg-slate-200/80 dark:hover:bg-slate-700/80"
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
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 1.887-4.788 2.227-7.401.075-.578-.397-1.09-.98-1.09H5.106M7.5 14.25L5.106 5.099M6 18.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>

          {
            // cart badge
            cartItems.length > 0 && <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">{cartItems.length}</span>
          }
        </NavLink>

        <button
          onClick={() => toggleTheme()}
          type="button"
          className={`flex h-10 w-10 items-center justify-center rounded-full shadow-sm transition-all duration-200 hover:scale-105 mr-4 backdrop-blur-sm ${
            theme === "light"
              ? "bg-slate-100/80 text-slate-700 hover:bg-slate-200/80"
              : "bg-slate-800/80 text-yellow-400 hover:bg-slate-700/80 shadow-[0_0_15px_rgba(250,204,21,0.4)]"
          }`}
        >
          {theme === "light" ? (
            <svg
              xmlns="http://w3.org"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://w3.org"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m0 13.5V21M4.22 4.22l1.58 1.58m12.42 12.42l1.58 1.58M3 12h2.25m13.5 0H21M5.8 18.2l1.58-1.58m12.42-12.42l1.58 1.58M12 7.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9z"
              />
            </svg>
          )}
        </button>
      </nav>
    </>
  );
}

export default Navbar;
