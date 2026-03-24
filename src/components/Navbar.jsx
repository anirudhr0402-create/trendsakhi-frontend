import {useState} from "react";
import {Search,Heart,ShoppingCart} from "lucide-react";

export default function Navbar(){
const [open,setOpen]=useState(null);

return(
<div className="bg-white shadow px-10 py-4 flex justify-between items-center relative">

<h1 className="text-2xl font-bold text-pistadark">TrendSakhi</h1>

<div className="flex gap-8 font-medium text-gray-700">

<div onMouseEnter={()=>setOpen('home')} onMouseLeave={()=>setOpen(null)}>Home</div>

<div onMouseEnter={()=>setOpen('products')} onMouseLeave={()=>setOpen(null)} className="relative cursor-pointer">
Products

{open==='products' && (
<div className="absolute left-0 top-8 w-[600px] bg-white shadow-xl p-6 grid grid-cols-3 gap-6 z-50">
<div>
<h3 className="font-semibold mb-2">Clothing</h3>
<p>Dresses</p><p>Tops</p><p>Ethnic Wear</p><p>Winter</p>
</div>
<div>
<h3 className="font-semibold mb-2">Accessories</h3>
<p>Bags</p><p>Jewellery</p><p>Watches</p><p>Belts</p>
</div>
<div>
<img src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b" className="rounded-xl"/>
</div>
</div>
)}
</div>

<div onMouseEnter={()=>setOpen('coupons')} onMouseLeave={()=>setOpen(null)} className="relative cursor-pointer">
Coupons

{open==='coupons' && (
<div className="absolute left-0 top-8 w-[400px] bg-white shadow-xl p-6 grid grid-cols-2 gap-4 z-50">
<div className="bg-pista p-4 rounded">
<h4 className="font-semibold">FLAT50</h4>
<p>Flat 50% OFF</p>
</div>
<div className="bg-pista p-4 rounded">
<h4 className="font-semibold">B1G1</h4>
<p>Buy 1 Get 1</p>
</div>
<div className="bg-pista p-4 rounded">
<h4 className="font-semibold">NEW20</h4>
<p>20% New User</p>
</div>
</div>
)}
</div>

<div>Contact</div>

</div>

<div className="flex items-center gap-5">
<div className="flex items-center border rounded-full px-3 py-1">
<Search size={16}/>
<input className="outline-none px-2 text-sm" placeholder="Search..."/>
</div>
<Heart/>
<ShoppingCart/>
</div>

</div>
)}
