import CarCard from './CarCard'
import Info from './Info'
import Worker from './Worker'
import Review from './Review'
import Footer from './Footer'


export default function Color() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-blue-950">
      <CarCard />
      <Info />
      <Worker />
      <Review />
      <Footer />
    </div>
  );
}