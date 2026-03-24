import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="fixed top-0 left-0 w-full h-20 bg-white/70 backdrop-blur-md border-b border-borderLight z-50 px-10 flex justify-between items-center">

      {/* LOGO */}
      <h1
        className="text-2xl font-bold text-pistaDark cursor-pointer"
        onClick={() => navigate("/")}
      >
        TrendSakhi
      </h1>

      {/* MENU */}
      <div className="flex gap-8 items-center">

        <Link to="/" className="hover:text-pistaDark">Home</Link>

        {/* PRODUCTS */}
        <div
          className="relative"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <div className="cursor-pointer hover:text-pistaDark">
            Products
          </div>

          {/* MEGA MENU */}
          <div
            className={`absolute left-1/2 -translate-x-1/2 top-full
            bg-whiteSoft rounded-2xl p-8 grid grid-cols-4 gap-8 z-50
            w-[800px] max-w-[90vw]
            shadow-[0_20px_60px_rgba(0,0,0,0.15)]
            transition-all duration-300
            ${open
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-2 pointer-events-none"
            }`}
          >

            <div>
              <h3 className="font-bold mb-3">Ethnic</h3>
              <p onClick={()=>navigate('/products/Kurtis')} className="cursor-pointer hover:text-pistaDark">Kurtis</p>
              <p onClick={()=>navigate('/products/Sarees')} className="cursor-pointer hover:text-pistaDark">Sarees</p>
              <p onClick={()=>navigate('/products/Lehangas')} className="cursor-pointer hover:text-pistaDark">Lehangas</p>
            </div>

            <div>
              <h3 className="font-bold mb-3">Trending</h3>
              <p onClick={()=>navigate('/products/New designed Sarees')} className="cursor-pointer hover:text-pistaDark">New Designs</p>
              <p onClick={()=>navigate('/products/Matching sets')} className="cursor-pointer hover:text-pistaDark">Matching Sets</p>
            </div>

            <div>
              <h3 className="font-bold mb-3">Accessories</h3>
              <p onClick={()=>navigate('/products/Bags')} className="cursor-pointer hover:text-pistaDark">Bags</p>
              <p onClick={()=>navigate('/products/Accessories')} className="cursor-pointer hover:text-pistaDark">Accessories</p>
            </div>
          </div>
        </div>

        <div onClick={() => navigate("/coupons")} className="cursor-pointer hover:text-pistaDark">
          Coupons
        </div>

        <div onClick={() => navigate("/contact")} className="cursor-pointer hover:text-pistaDark">
          Contact
        </div>
      </div>
    </div>
  );
}