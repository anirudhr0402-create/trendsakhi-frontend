export default function FilterSidebar() {
  return (
    <div className="w-64 bg-white p-5 rounded-xl shadow h-fit">

      <h2 className="font-bold text-lg mb-4">Filters</h2>

      {/* Category */}
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Category</h3>
        <div className="flex flex-col gap-1 text-sm">
          <label><input type="checkbox" /> Sarees</label>
          <label><input type="checkbox" /> Kurtis</label>
          <label><input type="checkbox" /> Lehangas</label>
        </div>
      </div>

      {/* Price */}
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Price</h3>
        <div className="flex flex-col gap-1 text-sm">
          <label><input type="checkbox" /> Under ₹1000</label>
          <label><input type="checkbox" /> ₹1000 - ₹3000</label>
          <label><input type="checkbox" /> Above ₹3000</label>
        </div>
      </div>

      {/* Fabric */}
      <div>
        <h3 className="font-semibold mb-2">Fabric</h3>
        <div className="flex flex-col gap-1 text-sm">
          <label><input type="checkbox" /> Silk</label>
          <label><input type="checkbox" /> Cotton</label>
          <label><input type="checkbox" /> Georgette</label>
        </div>
      </div>
    </div>
  );
}