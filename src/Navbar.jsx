 import { useRef, useState } from "react";

function Navbar() {
  const audioRef = useRef(null);
  const [isOn, setIsOn] = useState(false);

  const toggleAudio = () => {
    if (!isOn) {
      audioRef.current.play();
      setIsOn(true);
    } else {
      audioRef.current.pause();
      setIsOn(false);
    }
  };

  return (
  <>

  <div className="flex justify-between items-center ">
   
        <nav>
          <ul className="flex text-amber-500 gap-5">
            <li className="hover:text-amber-700">HOME</li>
            <li className="hover:text-amber-700">ABOUT</li>
            <li className="hover:text-amber-700">SERVICES</li>
            <li className="hover:text-amber-700">REVIEW</li>
            <li className="hover:text-amber-700">CONTACT</li>
          </ul>
        </nav>
        </div>
      
      <div className="">
             <button
          onClick={toggleAudio}
          className="px-4 py-2 bg-black text-white rounded"
        >
          {isOn ? "🔊" : "🔇"}
        </button>

        <audio ref={audioRef} loop>
          <source src="/musicforest.mp3" type="audio/mpeg" />
        </audio>
      </div>
  </>
    
        
      
    
  );
}

export default Navbar;
