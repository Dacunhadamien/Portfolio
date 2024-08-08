import "typeface-montserrat";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header font-montserrat flex justify-center md:justify-between items-center text-white py-14 bg-custom-green" id="top">
      <a href="https://www.linkedin.com/in/damien-da-cunha-942367127/" target="_blank" rel="noreferrer" className="hover:scale-110 transform duration-300">
        <span className="font-Alt font-bold text-2xl mx-10 hover:text-custom-yellow transform duration-300 bg-left-bottom bg-gradient-to-r from-custom-green to-custom-yellow bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px]  ease-out">
          Damien Da Cunha
        </span>
      </a>
      <Link
        to="/"
        className="md:block hidden text-base md:text-lg mx-16 hover:scale-110 text-white hover:text-custom-yellow transform duration-300 bg-left-bottom bg-gradient-to-r from-custom-green to-custom-yellow bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px]  ease-out text-center"
      >
        Page d'acceuil
      </Link>
    </div>
  );
}

export default Header;
