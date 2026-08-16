import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import axios from "axios";

function RegistrationForm() {
  let [isSubmit, setIsSubmit] = useState(false);
  let [name, setName] = useState("Guest");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [address, setAddress] = useState({
    city: "",
    district: "",
    postcode: "",
  });
  let nameTimerRef = useRef(null);
  let emailTimerRef = useRef(null);
  let passwordTimerRef = useRef(null);
  let userAccount = {
    name: name,
    email: email,
    password: password,
    isFirstLogin: true,
    address: address,
  };
  let [isData, setIsData] = useState(false);
  let [isEvent, setIsEvent] = useState(false);
  let navigate = useNavigate();
  let { theme, toggleTheme } = useContext(ThemeContext);
  let [isClicked, setIsClicked] = useState(false);
  let [emailErr, setEmailErr] = useState(false);
  let [passwordErr, setPasswordErr] = useState(false);
  let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  let [location, setLocation] = useState(null);
  let [isLoading, setIsLoading] = useState(false);
  let isFirstRender = useRef(true);

  function isFieldValid(fieldName, value) {
    if (fieldName === "email") return emailRegex.test(value);
    if (fieldName === "password") return passwordRegex.test(value);
    return true;
  }

  const handleChange = (e) => {
    let n = e.target.name;
    let v = e.target.value;

    if (n === "fullName") {
      setName(v);
    } else if (n === "email") {
      if (isFieldValid("email", v)) {
        setEmailErr(false);
        setEmail(v);
      } else {
        setEmailErr(true);
      }
    } else if (n === "password") {
      if (isFieldValid("password", v)) {
        setPassword(v);
        setPasswordErr(false);
      } else {
        setPasswordErr(true);
      }
    }
  };

  useEffect(() => {
    let existingUser = JSON.parse(window.localStorage.getItem("user"));
    if (existingUser) {
      navigate("/home", { replace: true, state:{justLoggedIn: true}});
    }
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    window.localStorage.setItem("user", JSON.stringify(userAccount));
    let user = JSON.parse(window.localStorage.getItem("user"));
    setIsData(user);
    console.log(user);
  }, [name, email, password, address]);

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
              isData && navigate("/home", { replace: true, state:{justLoggedIn: true}});
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
                  let valid = isFieldValid("email", e.target.value);
                  setEmailErr(!valid);

                  if (!isFieldValid("email", e.target.value)) {
                    handleChange(e);
                  } else {
                    emailTimerRef.current &&
                      clearTimeout(emailTimerRef.current);
                    emailTimerRef.current = setTimeout(() => {
                      handleChange(e);
                    }, 2000);
                  }
                }}
                type="email"
                id="email"
                name="email"
                placeholder="john@example.com"
                className="w-full rounded-xl border border-slate-200 dark:border-slate-600 bg-white/70 dark:bg-slate-700/60 text-gray-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 pl-10 pr-3 py-2.5 shadow-sm transition-colors focus:border-indigo-400 focus:bg-white dark:focus:bg-slate-700 focus:outline-none focus:ring-4 focus:ring-indigo-200/60 dark:focus:ring-indigo-900/40"
              />
            </div>
            {emailErr && (
              <p className="text-xs text-red-500 mt-1.5 ml-1">
                Please enter a valid email address (e.g., name@example.com).
              </p>
            )}
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
                  let valid = isFieldValid("password", e.target.value);
                  setPasswordErr(!valid);

                  if (!isFieldValid("password", e.target.value)) {
                    handleChange(e);
                  } else {
                    passwordTimerRef.current &&
                      clearTimeout(passwordTimerRef.current);
                    passwordTimerRef.current = setTimeout(() => {
                      handleChange(e);
                    }, 2000);
                  }
                }}
                type="password"
                id="password"
                name="password"
                placeholder="••••••••"
                className="w-full rounded-xl border border-slate-200 dark:border-slate-600 bg-white/70 dark:bg-slate-700/60 text-gray-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 pl-10 pr-3 py-2.5 shadow-sm transition-colors focus:border-indigo-400 focus:bg-white dark:focus:bg-slate-700 focus:outline-none focus:ring-4 focus:ring-indigo-200/60 dark:focus:ring-indigo-900/40"
              />
            </div>
            {passwordErr && (
              <p className="text-xs text-red-500 mt-1.5 ml-1">
                Must be 8+ characters with uppercase, lowercase, a number, and a
                special character.
              </p>
            )}
          </div>

          <div
            onClick={() => {
              setLocation(false);
              setIsLoading(true);
              navigator.geolocation.getCurrentPosition(
                async (success) => {
                  let lon = success.coords.longitude;
                  let lat = success.coords.latitude;
                  setLocation(lon ? { longitude: lon, latitude: lat } : false);
                  try {
                    let response = await axios.get(
                      `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json&zoom=18&addressdetails=1`,
                    );
                    let addr = response.data.address;
                    setAddress({
                      city: addr.city,
                      district: addr.city_district,
                      postcode: addr.postcode,
                    });
                    console.log(userAccount.address);
                  } catch (error) {
                    console.error(error);
                  }
                  setIsLoading(false);
                },
                (error) => {
                  error.PERMISSION_DENIED
                    ? console.log(error.message)
                    : console.log(error.POSITION_UNAVAILABLE)
                      ? console.log(error.message)
                      : console.log(error.message);
                  setIsLoading(false);
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
            {isLoading ? (
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
            ) : !isLoading && location ? (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="h-5 w-5 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                    strokeDasharray="30"
                    strokeDashoffset="30"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      from="30"
                      to="0"
                      dur="0.4s"
                      fill="freeze"
                      begin="0s"
                    />
                  </path>
                </svg>
                <span>Location shared</span>
              </>
            ) : (
              " Share My Location"
            )}
          </div>

          <button
            onClick={() => setIsEvent(true)}
            disabled={emailErr || passwordErr ? true : false}
            type="submit"
            className="w-full mt-2 bg-indigo-600 text-white py-2.5 rounded-full font-semibold shadow-md shadow-indigo-600/20 hover:bg-indigo-700 hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
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
