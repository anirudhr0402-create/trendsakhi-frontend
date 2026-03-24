export default function Coupons(){

const coupons=[
{name:"SUMMER25",discount:"25%"},
{name:"WINTER20",discount:"20%"},
{name:"NEWUSER35",discount:"35%"}
];

const copy=(text)=>navigator.clipboard.writeText(text);

return(
<div className="p-10 grid grid-cols-3 gap-6">
{coupons.map(c=>(
<div key={c.name} className="border p-6 rounded shadow cursor-pointer"
onClick={()=>copy(c.name)}>
<h2 className="font-bold">{c.name}</h2>
<p>{c.discount} OFF</p>
</div>
))}
</div>
)}