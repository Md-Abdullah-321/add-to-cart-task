import { FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";
import { getCartAndTotal } from "../helper/JSONConverter";

function Navbar() {
  return (
    <div className="flex flex-col md:flex-row justify-around items-center bg-secondaryColor w-full md:h-20 overflow-hidden flex-wrap p-2 md:p-0 gap-5 md:gap-0">
      <nav className="flex gap-2 md:gap-5 flex-wrap justify-center">
        <Link className="hover:text-primaryColor font-semibold">MENU</Link>
        <Link className="hover:text-primaryColor font-semibold">REWARDS</Link>
        <Link className="hover:text-primaryColor font-semibold">LOCATION</Link>
        <Link className="hover:text-primaryColor font-semibold">
          GIFT CARDS
        </Link>
        <Link className="hover:text-primaryColor font-semibold">LOGIN</Link>
      </nav>
      <div className="flex items-center gap-10">
        <div className="flex justify-center items-center">
          <span className="text-primaryColor bg-white text-sm px-1">
            {getCartAndTotal().length}
          </span>
          <FaShoppingBag className="text-primaryColor text-3xl"></FaShoppingBag>
        </div>
        <button className="bg-primaryColor text-white py-1 px-2 rounded-md font-semibold">
          ORDER NOW
        </button>
      </div>
    </div>
  );
}

export default Navbar;
