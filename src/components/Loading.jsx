export default function Loading() {
    
  return (
    <div className="flex h-[50vh] w-full flex-col items-center justify-center gap-4 bg-transparent">
      {/* 3-Dot Glowing Container */}
      <div className="flex items-center space-x-3">
        {/* Dot 1 */}
        <div className="h-4 w-4 animate-bounce rounded-full bg-indigo-500 dark:bg-indigo-400 shadow-[0_0_12px_rgba(99,102,241,0.8)] [animation-delay:-0.3s]"></div>
        {/* Dot 2 */}
        <div className="h-4 w-4 animate-bounce rounded-full bg-indigo-400 dark:bg-indigo-300 shadow-[0_0_12px_rgba(129,140,248,0.8)] [animation-delay:-0.15s]"></div>
        {/* Dot 3 */}
        <div className="h-4 w-4 animate-bounce rounded-full bg-indigo-300 dark:bg-indigo-200 shadow-[0_0_12px_rgba(165,180,252,0.8)]"></div>
      </div>
      
      {/* Optional Loading Text */}
      <p className="animate-pulse text-sm font-medium tracking-wide text-indigo-500 dark:text-indigo-300">
        Fetching products...
      </p>
    </div>
  );
}