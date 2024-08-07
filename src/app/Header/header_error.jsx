import "typeface-montserrat";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header font-montserrat flex justify-between items-center text-custom-green font-semibold mt-14" id="top">
      <Link to="/" className="hover:scale-110 transform duration-300">
        <span className="font-Alt font-bold text-2xl mx-10 hover:text-custom-yellow transform duration-300 bg-left-bottom bg-gradient-to-r from-custom-green to-custom-yellow bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px]  ease-out">
          Damien Da Cunha
        </span>
      </Link>
    </div>
  );
}

export default Header;
