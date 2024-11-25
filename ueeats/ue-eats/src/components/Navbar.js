
import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
// import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  const handlelogout=()=>{
    console.log("this is my name")
  }
  return (
    <nav className="bg-gray-800 p-4 fixed w-full overflow-hidden">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">UNI EATS</div>
        <div>
        <Link to="/hero" className="text-white px-4"> {/* Corrected link to Login */}
            Home
          </Link>
          <Link to="/team" className="text-white px-4"> {/* Corrected link to Login */}
            Items
          </Link>
          <Link to="/Comment" className="text-white px-4"> {/* Corrected link to Login */}
            Comments
          </Link>
          <Link to="/Loginn" className="text-white px-4"> {/* Corrected link to Login */}
            Login
          </Link>
          <Link to="/Singupp" className="text-white px-4"> {/* Corrected link to Login */}
            Singup
          </Link>
          <Link to="/orderr" className="text-white px-4"> {/* Corrected link to Login */}
            Order
          </Link>
          <Link to="/Contactt" className="text-white px-4"> {/* Corrected link to Login */}
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
