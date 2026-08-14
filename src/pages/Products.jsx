import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import Loading from "../components/Loading";
import Search from "../components/Search.jsx";
import BackBtn from "../components/BackBtn.jsx";
import { useNavigate, useSearchParams } from "react-router-dom";
import NotFound from "../components/NotFound.jsx";

function Products() {
  let [products, setProducts] = useState([]);
  let navigate = useNavigate();
  let [query, setQuery] = useSearchParams();
  let currentSearch = query.get("query");
  let [isLoading, setIsLoading] = useState(true);

  let fetchProducts = async () => {
    let response;

    try {
      currentSearch
        ? (response = await axios.get(
            `https://dummyjson.com/products/search?q=${currentSearch}`,
          ))
        : (response = await axios.get(`https://dummyjson.com/products/`));
      setProducts(response.data.products);
      console.log("No Error");
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, [currentSearch]);

  return (
    <>
      <BackBtn text={"Back to Home"} />
      <Search />
      <div className="text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
        <section className="text-center py-20 px-5">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-3">
            Discover Our Collection
          </h1>
          <p className="text-base text-slate-500 dark:text-slate-400">
            Handpicked products, curated just for you.
          </p>
        </section>

        <section className="pb-20 px-5 max-w-6xl mx-auto">
          {products.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  image={product.thumbnail}
                  category={product.category}
                />
              ))}
            </div>
          ) : isLoading === false && products.length === 0 ? (
            <div className="text-center py-20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 200 200"
                className="w-32 h-32 mx-auto text-slate-300 dark:text-slate-600"
              >
                <circle
                  cx="85"
                  cy="85"
                  r="55"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="10"
                />
                <line
                  x1="125"
                  y1="125"
                  x2="170"
                  y2="170"
                  stroke="currentColor"
                  strokeWidth="12"
                  strokeLinecap="round"
                />
                <line
                  x1="65"
                  y1="85"
                  x2="105"
                  y2="85"
                  stroke="currentColor"
                  strokeWidth="8"
                  strokeLinecap="round"
                />
              </svg>
              <h2 className="text-xl font-semibold text-slate-700 dark:text-slate-200 mt-4">
                No products found
              </h2>
              <p className="text-slate-500 dark:text-slate-400 mt-1">
                We couldn't find anything matching your search. Try a different
                keyword.
              </p>
            </div>
          ) : (
            <Loading />
          )}
        </section>
      </div>
    </>
  );
}

export default Products;
