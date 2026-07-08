

function Info() {
  return (
    <>
<h1 className="text-2xl logo-font text-white text-center mb-8">
  PRICE
</h1>
<div className="flex flex-col gap-4">
   <div className="flex justify-center">
  <div className="w-[500px] bg-slate-800 rounded-xl p-5 flex justify-between items-center">

    {/* Service Name */}
    <div>
      <p className="text-2xl text-yellow-400 font-bold logo-font">
        WASHING
      </p>
      <p className="text-gray-400">
        Complete Exterior Wash
      </p>
    </div>

    {/* Price */}
    <button className="bg-red-500 hover:bg-red-400 transition-transform px-5 py-2 rounded-lg text-white font-semibold">
      ₹400
    </button>
    
  </div>
</div>
<div className="flex justify-center">
  <div className="w-[500px] bg-slate-800 rounded-xl p-5 flex justify-between items-center">

    {/* Service Name */}
    <div>
      <p className="text-2xl text-yellow-400 font-bold logo-font">
        Repair
      </p>
      <p className="text-gray-400">
Reliable repairs to keep your car running safely and smoothly.
      </p>
    </div>

    {/* Price */}
    <button className="bg-red-500 hover:bg-red-400 transition-transform px-5 py-2 rounded-lg text-white font-semibold">
      ₹400
    </button>
    
    
  </div>
</div>

<div className="flex justify-center">
  <div className="w-[500px] bg-slate-800 rounded-xl p-5 flex justify-between items-center">

    {/* Service Name */}
    <div>
      <p className="text-2xl text-yellow-400 font-bold logo-font">
        Premium Services
      </p>
      <p className="text-gray-400">
        Exterior + Interior Cleaning with Premium Foam Wash.
      </p>
    </div>

    {/* Price */}
    <button className="bg-red-500 hover:bg-red-400 transition-transform px-5 py-2 rounded-lg text-white font-semibold">
      ₹5000
    </button>
    
  </div>
</div>
</div>


    </>
  );
}

export default Info;
