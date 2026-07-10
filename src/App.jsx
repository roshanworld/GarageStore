import Background from "./Background";
import Color from "./Color";
import Navbar from "./Navbar";

function App() {
  return (
    <>

          <div className="h-screen">
                  <div className="bg-black flex justify-center py-2 ">
        
        <img
          src="https://plus.unsplash.com/premium_photo-1679826780040-c48444660e21?w=150&h=150&fit=crop&auto=format"
          alt="Car Wash Logo"
          className="h-16 object-contain"
          // className="w-full h-auto object-cover"
        />




      </div>
      <div className="bg-black flex justify-center">
        <Navbar />
      </div>

      <Background />
      <Color />
          </div>
      


    </>
  );
}

export default App;
