import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function RegistrationForm() {
  let [isSubmit, setIsSubmit] = useState(false);
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let nameTimerRef = useRef(null);
  let emailTimerRef = useRef(null);
  let passwordTimerRef = useRef(null);
  let userAccount = {
    name: name,
    email: email,
    password: password,
  };
  let [isData, setIsData] = useState(false);
  let [isEvent, setIsEvent] = useState(false);
  let navigate = useNavigate();

  // A single function to update any field dynamically
  const handleChange = (e) => {
    let n = e.target.name;
    let v = e.target.value;
    if (n === "fullName") {
      setName(v);
    } else if (n === "email") {
      setEmail(v);
    } else {
      setPassword(v);
    }
  };

  useEffect(() => {
    window.localStorage.setItem("user1", JSON.stringify(userAccount));
    setIsData(JSON.parse(window.localStorage.getItem("user1")));
  }, [userAccount.name, userAccount.email, userAccount.password]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-slate-900/50 backdrop-blur-sm animate-fadeIn overflow-hidden">
      {/* decorative ambient glow, matches indigo accent used across the site */}
      <div className="pointer-events-none absolute -top-32 -left-24 h-72 w-72 rounded-full bg-indigo-500/30 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-32 -right-24 h-72 w-72 rounded-full bg-indigo-400/20 blur-[100px]" />

      <div className="relative w-full max-w-md rounded-3xl border border-white/40 dark:border-slate-700/50 bg-white/80 dark:bg-slate-800/70 backdrop-blur-xl shadow-2xl ring-1 ring-black/5 p-8 animate-popIn">
        <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>

        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-1 text-center">
          Almost there
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 text-center">
          Just a few details before you check out.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setTimeout(() => {
              isData && navigate("/home", { replace: true });
              setIsEvent(false);
            }, 2000);
          }}
          className="space-y-4"
        >
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-1.5"
            >
              Full Name
            </label>
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-slate-400 dark:text-slate-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <input
                onChange={(e) => {
                  nameTimerRef.current && clearTimeout(nameTimerRef.current);
                  nameTimerRef.current = setTimeout(() => {
                    handleChange(e);
                  }, 2000);
                }}
                type="text"
                id="fullName"
                name="fullName"
                placeholder="John Doe"
                className="w-full rounded-xl border border-slate-200 dark:border-slate-600 bg-white/70 dark:bg-slate-700/60 text-gray-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 pl-10 pr-3 py-2.5 shadow-sm transition-colors focus:border-indigo-400 focus:bg-white dark:focus:bg-slate-700 focus:outline-none focus:ring-4 focus:ring-indigo-200/60 dark:focus:ring-indigo-900/40"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-1.5"
            >
              Email
            </label>
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-slate-400 dark:text-slate-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              <input
                onChange={(e) => {
                  emailTimerRef.current && clearTimeout(emailTimerRef.current);
                  emailTimerRef.current = setTimeout(() => {
                    handleChange(e);
                  }, 2000);
                }}
                type="email"
                id="email"
                name="email"
                placeholder="john@example.com"
                className="w-full rounded-xl border border-slate-200 dark:border-slate-600 bg-white/70 dark:bg-slate-700/60 text-gray-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 pl-10 pr-3 py-2.5 shadow-sm transition-colors focus:border-indigo-400 focus:bg-white dark:focus:bg-slate-700 focus:outline-none focus:ring-4 focus:ring-indigo-200/60 dark:focus:ring-indigo-900/40"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-1.5"
            >
              Password
            </label>
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-slate-400 dark:text-slate-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                />
              </svg>
              <input
                onChange={(e) => {
                  passwordTimerRef.current &&
                    clearTimeout(passwordTimerRef.current);
                  passwordTimerRef.current = setTimeout(() => {
                    handleChange(e);
                  }, 2000);
                }}
                type="password"
                id="password"
                name="password"
                placeholder="••••••••"
                className="w-full rounded-xl border border-slate-200 dark:border-slate-600 bg-white/70 dark:bg-slate-700/60 text-gray-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 pl-10 pr-3 py-2.5 shadow-sm transition-colors focus:border-indigo-400 focus:bg-white dark:focus:bg-slate-700 focus:outline-none focus:ring-4 focus:ring-indigo-200/60 dark:focus:ring-indigo-900/40"
              />
            </div>
          </div>

          <div
            onClick={() => {
              navigator.geolocation.getCurrentPosition(
                (success) => {
                  let lon = success.coords.longitude;
                  let lat = success.coords.latitude;
                  console.log("Got Loation", lon, lat);
                },
                (error) => {
                  error.PERMISSION_DENIED
                    ? console.log(error.message)
                    : console.log(error.POSITION_UNAVAILABLE)
                      ? console.log(error.message)
                      : console.log(error.message);
                },
              );
            }}
            className="w-full mt-2 bg-indigo-600 text-white py-2.5 rounded-full font-semibold shadow-md shadow-indigo-600/20 hover:bg-indigo-700 hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
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
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
            Share My Location
          </div>

          <button
            onClick={() => setIsEvent(true)}
            type="submit"
            className="w-full mt-2 bg-indigo-600 text-white py-2.5 rounded-full font-semibold shadow-md shadow-indigo-600/20 hover:bg-indigo-700 hover:scale-[1.02] transition-all"
          >
            {isEvent ? (
              <span className="flex items-center justify-center w-full">
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  />
                </svg>
              </span>
            ) : (
              "Continue"
            )}
          </button>
        </form>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes popIn {
          0% { opacity: 0; transform: scale(0.9) translateY(8px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        .animate-popIn {
          animation: popIn 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
      `}</style>
    </div>
  );
}

export default RegistrationForm;
