import { Heart, ShoppingCart } from "lucide-react";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-lg transition p-3 group">

      {/* Image */}
      <div className="relative overflow-hidden rounded-xl">
        <img
          src={product.image}
          className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
        />

        {/* Wishlist */}
        <Heart className="absolute top-2 right-2 bg-white p-1 rounded-full cursor-pointer" />
      </div>

      {/* Details */}
      <div className="mt-3">
        <h3 className="font-semibold text-gray-700">{product.name}</h3>

        <div className="flex items-center gap-2 mt-1">
          <span className="font-bold text-pistadark">₹{product.price}</span>
          <span className="line-through text-gray-400 text-sm">
            ₹{product.oldPrice}
          </span>
          <span className="text-green-600 text-sm">
            ({product.discount}% OFF)
          </span>
        </div>

        {/* Button */}
        <button className="mt-3 w-full flex items-center justify-center gap-2 bg-pistadark text-white py-2 rounded-lg hover:opacity-90">
          <ShoppingCart size={16} />
          Add to Cart
        </button>
      </div>
    </div>
  );
}