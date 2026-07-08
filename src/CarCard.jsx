function CarCard() {
  return (
    <section className="py-12 px-6">

      <h1 className="text-4xl text-center text-white logo-font mb-10">
        CAR
      </h1>

      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          <img
            className="w-full h-64 object-cover rounded-xl shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
            src="https://plus.unsplash.com/premium_photo-1664303847960-586318f59035?q=80&w=1974&auto=format&fit=crop"
            alt="Car"
          />

          <img
            className="w-full h-64 object-cover rounded-xl shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
            src="https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1172&auto=format&fit=crop"
            alt="Car"
          />

          <img
            className="w-full h-64 object-cover rounded-xl shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
            src="https://images.unsplash.com/photo-1617898529288-7f3efcf8e299?q=80&w=1170&auto=format&fit=crop"
            alt="Car"
          />

        </div>

      </div>

    </section>
  );
}

export default CarCard;