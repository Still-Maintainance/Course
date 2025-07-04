import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import HomePage from "./HomePage/HomePage";
import CartPage from "./Cart/CartPage";
import OrderPage from "./Order/OrderPage";
import Notifications from "./Notification";
import Explore from "./Explore";

function App() {
  const [cart, setCart] = useState(() => {
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
  });

  // Update localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // 🔁 Listen for cart changes in other tabs
  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === "cart") {
        const updatedCart = JSON.parse(event.newValue || "[]");
        setCart(updatedCart);
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage cart={cart} setCart={setCart} />} />
        <Route path="/cart" element={<CartPage cart={cart} setCart={setCart} />} />
        <Route path="/order" element={<OrderPage cart={cart}  />} />
        <Route path="/notifications" element={< Notifications />} />
         <Route path="/explore" element={< Explore />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
