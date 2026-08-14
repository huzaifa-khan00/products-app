import { useEffect } from "react";

function LoginSuccess(user) {

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 100"
      width="320"
      height="100"
      fill="none"
    >
      <circle
        cx="50"
        cy="50"
        r="32"
        stroke="currentColor"
        strokeWidth="4"
        strokeDasharray="201"
        strokeDashoffset="201"
      >
        <animate
          attributeName="stroke-dashoffset"
          from="201"
          to="0"
          dur="0.5s"
          fill="freeze"
        />
      </circle>

      <path
        d="M34 50L45 61L67 38"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="45"
        strokeDashoffset="45"
      >
        <animate
          attributeName="stroke-dashoffset"
          from="45"
          to="0"
          dur="0.35s"
          begin="0.45s"
          fill="freeze"
        />
      </path>

      <text x="95" y="45" fill="currentColor" fontSize="18" fontWeight="600">
        Logged in
      </text>

      <text x="95" y="68" fill="currentColor" fontSize="14">
        Welcome, {user.user.name}
      </text>
    </svg>
  );
}

export default LoginSuccess;