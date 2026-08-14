import { useNavigate } from "react-router-dom";

function ProductCard({ id, title, price, image, category }) {
  let navigate = useNavigate();

  return (
    <div 
      onClick={() => navigate(`/product-details/${id}`)}
      className="group cursor-pointer rounded-2xl overflow-hidden backdrop-blur-md bg-white/60 dark:bg-slate-800/50 border border-white/40 dark:border-slate-700/50 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      <div className="overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" 
        />
      </div>
      <div className="p-4">
        <h3 className="text-xs uppercase tracking-wide text-indigo-500 dark:text-indigo-300 font-semibold mb-1">
          {category}
        </h3>
        <h2 className="text-base font-medium text-gray-800 dark:text-slate-100 mb-2 line-clamp-1">
          {title}
        </h2>
        <p className="text-lg font-bold text-gray-900 dark:text-white">
          ${price}
        </p>
      </div>
    </div>
  );
}

export default ProductCard;