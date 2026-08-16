import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import LoginSuccess from "../components/LoginSuccess.jsx";

function HomePage() {
  let user = JSON.parse(window.localStorage.getItem("user"));
  let navigate = useNavigate();
  let [showLogin, setShowLogin] = useState(false);
  let location = useLocation();

  useEffect(() => {
    !user && navigate("/");
  }, []);

  useEffect(() => {
    let timer;
    let secondTimer;
    if (user && location.state?.justLoggedIn) {
      timer = setTimeout(() => {
        setShowLogin(true);
        secondTimer = setTimeout(() => {
          setShowLogin(false) 
          user.isFirstLogin = false;
          navigate(location.pathname, { replace: true, state: {} });
          window.localStorage.setItem("user", JSON.stringify(user));
          user = JSON.parse(window.localStorage.getItem("user"))
        }, 1500);
      }, 500);
    }

    return () => {
      clearTimeout(timer);
      clearTimeout(secondTimer);
    };
  }, []);

  return (
    <div className="text-gray-600 dark:text-slate-300">
      {showLogin && user?.isFirstLogin ? <LoginSuccess user={user}/> : !user?.isFirstLogin && showLogin ? <LoginSuccess user={{name: "Already Logged in"}}/> : null}
      {/* Hero */}
      <section className="text-center py-24 px-5 bg-gray-50 dark:bg-slate-900/50">
        <h2 className="text-4xl md:text-5xl font-medium text-gray-900 dark:text-white mb-4">
          Hey <span className="text-indigo-500">{user?.name ? user.name : "Guest"}!</span>
        </h2>
        <h1 className="text-4xl md:text-5xl font-medium text-gray-900 dark:text-white mb-4"> Welcome to Our Store</h1>
        <p className="text-lg mb-8 max-w-xl mx-auto">
          Find the best products at the best prices, all in one place.
        </p>
        <button className="bg-indigo-500 dark:bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-600 dark:hover:bg-indigo-700 hover:scale-105 transition-all focus:outline-none">
          Shop Now
        </button>
      </section>

      {/* Why Shop With Us */}
      <section className="py-20 px-5 container mx-auto">
        <h2 className="text-2xl font-medium text-gray-900 dark:text-white text-center mb-12">
          Why Shop With Us
        </h2>
        <div className="flex flex-wrap gap-8 justify-center">
          <div className="w-full sm:w-64 text-center p-6 backdrop-blur-md bg-white/60 dark:bg-slate-800/40 border border-white/40 dark:border-slate-700/40 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              Fast Delivery
            </h3>
            <p>Get your orders delivered quickly and reliably.</p>
          </div>
          <div className="w-full sm:w-64 text-center p-6 backdrop-blur-md bg-white/60 dark:bg-slate-800/40 border border-white/40 dark:border-slate-700/40 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              Quality Products
            </h3>
            <p>We only offer products that meet our quality standards.</p>
          </div>
          <div className="w-full sm:w-64 text-center p-6 backdrop-blur-md bg-white/60 dark:bg-slate-800/40 border border-white/40 dark:border-slate-700/40 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              Secure Checkout
            </h3>
            <p>Your payments and data are always protected.</p>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 px-5 bg-gray-50 dark:bg-slate-900/50">
        <h2 className="text-2xl font-medium text-gray-900 dark:text-white text-center mb-12">
          Featured Categories
        </h2>
        <div className="flex flex-wrap gap-4 justify-center container mx-auto">
          <div className="w-full sm:w-40 text-center py-8 backdrop-blur-md bg-white/70 dark:bg-slate-800/50 border border-white/40 dark:border-slate-700/40 rounded-2xl shadow-sm hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-gray-900 dark:text-white font-medium">
              Electronics
            </h3>
          </div>
          <div className="w-full sm:w-40 text-center py-8 backdrop-blur-md bg-white/70 dark:bg-slate-800/50 border border-white/40 dark:border-slate-700/40 rounded-2xl shadow-sm hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-gray-900 dark:text-white font-medium">
              Fashion
            </h3>
          </div>
          <div className="w-full sm:w-40 text-center py-8 backdrop-blur-md bg-white/70 dark:bg-slate-800/50 border border-white/40 dark:border-slate-700/40 rounded-2xl shadow-sm hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-gray-900 dark:text-white font-medium">
              Home & Living
            </h3>
          </div>
          <div className="w-full sm:w-40 text-center py-8 backdrop-blur-md bg-white/70 dark:bg-slate-800/50 border border-white/40 dark:border-slate-700/40 rounded-2xl shadow-sm hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-gray-900 dark:text-white font-medium">
              Beauty
            </h3>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-20 px-5">
        <h2 className="text-2xl font-medium text-gray-900 dark:text-white mb-4">
          Ready to start shopping?
        </h2>
        <p className="mb-8">
          Browse our full collection and find something you'll love.
        </p>
        <button className="bg-indigo-500 dark:bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-600 dark:hover:bg-indigo-700 hover:scale-105 transition-all focus:outline-none">
          View All Products
        </button>
      </section>
    </div>
  );
}

export default HomePage;
