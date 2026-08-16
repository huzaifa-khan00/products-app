function LoginSuccess({user}) {
  return (
    <div
      className="
        fixed top-5 left-1/2 -translate-x-1/2 z-50
        flex items-center gap-3
        px-4 py-3
        min-w-[280px]
        rounded-xl
        bg-white dark:bg-slate-800
        border border-gray-200 dark:border-slate-700
        shadow-lg
        text-gray-800 dark:text-white
        animate-[slideDown_0.4s_ease-out]
      "
    >
      {/* Animated green tick */}
      <div className="flex-shrink-0 w-9 h-9 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
        <svg
          viewBox="0 0 24 24"
          className="w-6 h-6 text-green-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            d="M5 12.5L9.5 17L19 7"
            strokeDasharray="20"
            strokeDashoffset="20"
          >
            <animate
              attributeName="stroke-dashoffset"
              from="20"
              to="0"
              dur="0.4s"
              fill="freeze"
            />
          </path>
        </svg>
      </div>

      {/* Message */}
      <div className="leading-tight">
        <p className="text-sm font-semibold">{user?.name === 'Guest' ? "Logged in as Guest" : user?.name === "Already Logged in" ? user?.name : `Logged In as ${user?.name}`}</p>
      </div>
    </div>
  );
}

export default LoginSuccess;
