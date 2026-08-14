import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "../context/ThemeContext.jsx";
import { CartProvider } from "../context/CartItemContext.jsx";

createRoot(document.getElementById("root")).render(

    <BrowserRouter>
      <ThemeProvider>
        <CartProvider>
        <App />
        </CartProvider>
      </ThemeProvider>
    </BrowserRouter>

);
