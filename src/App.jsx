import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Coupons from "./pages/Coupons";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <>
      <Navbar />

      {/* 🌿 GLOBAL THEME + SPACING */}
      <div className="pt-20 bg-pistaBg min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:category" element={<Products />} />
          <Route path="/coupons" element={<Coupons />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}