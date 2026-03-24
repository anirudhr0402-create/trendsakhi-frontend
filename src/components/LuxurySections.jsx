export default function LuxurySections() {
  return (
    <div className="bg-luxuryBg py-20 px-10 space-y-20">

      {/* SECTION 1 - Bridal */}
      <div className="grid md:grid-cols-2 gap-10 items-center">

        <img
          src="https://images.unsplash.com/photo-1610030469983-98e550d6193c"
          className="w-full h-[500px] object-cover rounded-2xl"
        />

        <div>
          <h2 className="text-4xl font-bold text-darkText mb-4">
            Bridal Collection
          </h2>
          <p className="text-lightText mb-6">
            Discover timeless elegance with our handcrafted wedding sarees.
          </p>
          <button className="bg-gold text-white px-6 py-3 rounded hover:bg-goldDark">
            Explore
          </button>
        </div>
      </div>

      {/* SECTION 2 - Reverse Layout */}
      <div className="grid md:grid-cols-2 gap-10 items-center">

        <div>
          <h2 className="text-4xl font-bold text-darkText mb-4">
            Everyday Elegance
          </h2>
          <p className="text-lightText mb-6">
            Light, breathable sarees perfect for daily wear.
          </p>
          <button className="bg-gold text-white px-6 py-3 rounded hover:bg-goldDark">
            Shop Now
          </button>
        </div>

        <img
          src="https://images.unsplash.com/photo-1603252109303-2751441dd157"
          className="w-full h-[500px] object-cover rounded-2xl"
        />
      </div>

    </div>
  );
}