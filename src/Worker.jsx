

function Worker() {
  return (
    <>
  <div className="py-12">

  <h1 className="text-4xl text-center text-white logo-font mb-10">
    Workers Profile
  </h1>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

    <div className="bg-slate-800 rounded-xl overflow-hidden shadow-lg">
      <img
        className="w-full h-64 object-cover"
        src="https://images.unsplash.com/photo-1561037404-61cd46aa615b?q=80&w=600&auto=format&fit=crop"
        alt="Worker"
      />

      <div className="p-4">
        <h2 className="text-xl font-bold text-white">Rahul Kumar</h2>
        <p className="text-gray-400">Car Wash Expert</p>
      </div>
    </div>

    <div className="bg-slate-800 rounded-xl overflow-hidden shadow-lg">
      <img
        className="w-full h-64 object-cover"
        src="https://images.unsplash.com/photo-1561037404-61cd46aa615b?q=80&w=600&auto=format&fit=crop"
        alt="Worker"
      />

      <div className="p-4">
        <h2 className="text-xl font-bold text-white">Aman Singh</h2>
        <p className="text-gray-400">Detailing Specialist</p>
      </div>
    </div>

    <div className="bg-slate-800 rounded-xl overflow-hidden shadow-lg">
      <img
        className="w-full h-64 object-cover"
        src="https://images.unsplash.com/photo-1561037404-61cd46aa615b?q=80&w=600&auto=format&fit=crop"
        alt="Worker"
      />

      <div className="p-4">
        <h2 className="text-xl font-bold text-white">Vikas Sharma</h2>
        <p className="text-gray-400">Repair Technician</p>
      </div>
    </div>

  </div>

</div>
    </>


  )
}

export default Worker