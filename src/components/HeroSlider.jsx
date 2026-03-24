import {useEffect,useState} from "react";

const slides=[
{title:"Amazing New Designs",sub:"Winter Collection",img:"https://images.unsplash.com/photo-1490481651871-ab68de25d43d"},
{title:"Elegant Styles",sub:"Trending Now",img:"https://images.unsplash.com/photo-1529139574466-a303027c1d8b"},
{title:"Fashion Redefined",sub:"New Arrivals",img:"https://images.unsplash.com/photo-1512436991641-6745cdb1723f"}
];

export default function HeroSlider(){
const [c,setC]=useState(0);

useEffect(()=>{
const i=setInterval(()=>setC(p=>(p+1)%slides.length),3000);
return()=>clearInterval(i);
},[]);

return(
<div className="relative h-[80vh] bg-pista overflow-hidden">

{slides.map((s,i)=>(
<div key={i} className={`absolute w-full h-full flex items-center justify-between px-12 transition-opacity duration-700 ${c===i?'opacity-100':'opacity-0'}`}>
<div>
<p className="text-gray-600">{s.sub}</p>
<h1 className="text-5xl font-bold text-pistatext">{s.title}</h1>
<button className="mt-6 border px-6 py-2 rounded">Shop Collection</button>
</div>
<img src={s.img} className="h-[450px] rounded-xl"/>
</div>
))}

<div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3">
{slides.map((_,i)=>(
<div key={i} onClick={()=>setC(i)} className={`w-3 h-3 rounded-full cursor-pointer ${c===i?'bg-pistadark scale-125':'bg-gray-300'}`}/>
))}
</div>

</div>
)}
