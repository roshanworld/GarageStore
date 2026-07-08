

function Navbar() {
  return (
    <>
    <div className= "flex justify-end align">
        <nav>
            <ul className="flex text-amber-500 justify-end gap-5">
               <li className=" hover:text-amber-700">HOME</li>
               <li className=" hover:text-amber-700">ABOUT</li>
               <li className=" hover:text-amber-700">SERVICES</li>
               <li className=" hover:text-amber-700">REVIEW</li>

               <li className=" hover:text-amber-700">CONTACT</li>
            </ul>
        </nav>
    </div>
    </>
  )
}

export default Navbar