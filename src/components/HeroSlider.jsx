import { useEffect, useState } from "react";

const slides = [
  {
    title: "Bridal Elegance",
    subtitle: "Traditional Sarees",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c",
  },
  {
    title: "Winter Collection",
    subtitle: "Stay Warm",
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246",
  },
  {
    title: "Modern Styles",
    subtitle: "Trendy Wear",
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const i = setInterval(() => {
      setCurrent((p) => (p + 1) % slides.length);
    }, 4000);
    return () => clearInterval(i);
  }, [current]);

  return (
    <div className="relative w-full h-screen overflow-hidden">

      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute w-full h-full transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img src={s.image} className="w-full h-full object-cover" />

          <div className="absolute inset-0 bg-[#4F7C6B]/20"></div>

          <div className="absolute left-16 top-1/2 -translate-y-1/2 text-white">
            <p>{s.subtitle}</p>
            <h1 className="text-6xl font-bold">{s.title}</h1>
            <button className="mt-6 bg-pistaDark px-6 py-3 rounded">
              Shop Now
            </button>
          </div>
        </div>
      ))}

      {/* DOTS */}
      <div className="absolute right-10 top-1/2 flex flex-col gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full ${
              current === i ? "bg-pistaDark" : "bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
}