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



      <div className="flex items-center justify-between px-4 py-3 w-full">
  <nav>
    <ul className="flex justify-center flex-wrap gap-4 text-amber-500 sm:flex sm:justify-center">
      <li>HOME</li>
      <li>ABOUT</li>
      <li>SERVICES</li>
      <li>REVIEW</li>
      <li>CONTACT</li>
    </ul>
  </nav>

  <button
    onClick={toggleAudio}
    className="px-3 py-2 bg-black text-white rounded"
  >
    {isOn ? "🔊" : "🔇"}
  </button>
</div>
  </>
    
        
      
    
  );
}

export default Navbar;
