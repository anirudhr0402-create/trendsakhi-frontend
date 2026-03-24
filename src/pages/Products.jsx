import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import FilterSidebar from "../components/FilterSidebar";

const sampleProducts = [
  {
    name: "Banarasi Silk Saree",
    price: 2999,
    oldPrice: 5999,
    discount: 50,
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c",
  },
  {
    name: "Kanjivaram Saree",
    price: 3999,
    oldPrice: 7999,
    discount: 50,
    image: "https://images.unsplash.com/photo-1603252109303-2751441dd157",
  },
  {
    name: "Designer Saree",
    price: 1999,
    oldPrice: 3999,
    discount: 50,
    image: "https://images.unsplash.com/photo-1583391733956-6c77a5c8c98d",
  },
];

export default function Products() {
  const { category } = useParams();

  return (
    <div className="pt-24 px-10 bg-gray-50 min-h-screen">

      {/* Top Bar */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold capitalize">{category}</h1>

        {/* Sorting */}
        <select className="border px-3 py-2 rounded">
          <option>Sort by</option>
          <option>Price Low to High</option>
          <option>Price High to Low</option>
          <option>Newest</option>
        </select>
      </div>

      <div className="flex gap-8">

        {/* Sidebar */}
        <FilterSidebar />

        {/* Products */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sampleProducts.map((p, i) => (
            <ProductCard key={i} product={p} />
          ))}
        </div>

      </div>
    </div>
  );
}