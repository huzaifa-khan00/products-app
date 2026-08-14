import { useEffect, useState, useContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Loading from "../components/Loading";
import BackBtn from "../components/BackBtn";
import NotFound from "../components/NotFound";
import { CartContext } from "../../context/CartItemContext";
import AlreadyInCartModal from '../components/AlreadyInCartModal.jsx'
import AddedToCartModal from "../components/AddedToCartModal.jsx";

function Product() {
  let [productData, setProductData] = useState(null);
  let { prodId } = useParams();
  let navigate = useNavigate();
  let [isError, setIsError] = useState(false);
  let { cartItems, setCartItems } = useContext(CartContext);
  let [quantity, setQuantity] = useState(1);
  let [prevProduct, setPrevProduct] = useState([]);
  let [showModal, setShowModal] = useState(false);
  let [isAdded, setIsAdded] = useState(false);

  let fetchProductDetails = async () => {
    try {
      let response = await axios.get(
        `https://dummyjson.com/products/${prodId}`,
      );
      setProductData(response.data);
    } catch (error) {
      console.error(error);
      setIsError(true);
    }
  };

  useEffect(() => {
    fetchProductDetails();
  }, []);

  return isError ? (
    <NotFound />
  ) : !productData ? (
    <Loading />
  ) : (
    <>
      <BackBtn text={"Back to Products"} />
      <div className="bg-gray-100 dark:bg-slate-900 min-h-screen transition-colors duration-300">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap -mx-4">
            {/* Product Images */}
            <div className="w-full md:w-1/2 px-4 mb-8">
              <div className="rounded-2xl overflow-hidden shadow-md backdrop-blur-md bg-white/40 dark:bg-slate-800/40 border border-white/40 dark:border-slate-700/40 p-2">
                <img
                  src={productData?.thumbnail}
                  alt={productData?.title}
                  className="w-full h-auto rounded-xl mb-4"
                />
                <div className="flex gap-4 py-4 justify-center overflow-x-auto">
                  {productData?.images?.slice(0, 3).map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div className="w-full md:w-1/2 px-4">
              <div className="backdrop-blur-md bg-white/60 dark:bg-slate-800/50 border border-white/40 dark:border-slate-700/40 rounded-2xl p-6 shadow-sm">
                <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">
                  {productData?.title}
                </h2>
                <p className="text-gray-600 dark:text-slate-400 mb-4">
                  {productData?.brand}
                </p>

                <div className="mb-4">
                  <span className="text-2xl font-bold mr-2 text-gray-900 dark:text-white">
                    ${productData?.price}
                  </span>
                </div>

                <div className="flex items-center mb-4">
                  {[...Array(Math.round(productData?.rating || 0))].map(
                    (_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-6 text-yellow-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ),
                  )}
                  <span className="ml-2 text-gray-600 dark:text-slate-400">
                    {productData?.rating} ({productData?.reviews?.length || 0}{" "}
                    reviews)
                  </span>
                </div>

                <p className="text-gray-700 dark:text-slate-300 mb-6">
                  {productData?.description}
                </p>

                <div className="mb-6">
                  <label
                    htmlFor="quantity"
                    className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-1"
                  >
                    Quantity:
                  </label>
                  <input onChange={(e)=> setQuantity(Number(e.target.value))}
                    type="number"
                    id="quantity"
                    name="quantity"
                    min="1"
                    defaultValue="1"
                    className="w-16 text-center rounded-md border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>

                <div className="flex space-x-4 mb-6">
                  <button
                    onClick={() => {
                      let newItem = {
                        id: productData?.id,
                        name: productData?.title,
                        category: productData?.category,
                        price: productData?.price,
                        image: productData?.thumbnail,
                        quantity: typeof quantity === 'object' ? 1 : quantity
                      };
                      cartItems.some((prod)=> prod.id === newItem.id) ? setShowModal(true)
                      :
                      setCartItems([...cartItems, newItem])
                      setIsAdded(true);
                    }}
                    className="bg-indigo-600 flex gap-2 items-center text-white px-6 py-2 rounded-full hover:bg-indigo-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all"
                  >
                    Add to Cart
                  </button>
                  <button className="bg-gray-200 dark:bg-slate-700 flex gap-2 items-center text-gray-800 dark:text-slate-100 px-6 py-2 rounded-full hover:bg-gray-300 dark:hover:bg-slate-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all">
                    Wishlist
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal && <AlreadyInCartModal onClose={() => {
        setIsAdded(false);
        setShowModal(false)
      }} />}
      {!showModal && isAdded && <AddedToCartModal show={isAdded} setShow={setIsAdded}/>}
    </>
  );
}

export default Product;
