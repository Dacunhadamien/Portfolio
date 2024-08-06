import logo from "../../images/github.png";
import "typeface-montserrat";

function Header() {
  return (
    <div className="header font-montserrat flex justify-between items-center text-custom-green font-semibold">
      <a href="https://github.com/Dacunhadamien">
        <img src={logo} alt="Logo GitHub" className="w-12 h-12 my-5 mx-10 hover:scale-125 transition duration-300 ease-in-out "></img>
      </a>
      <nav className="m-5 flex justify-end flex-row">
        <a href="#HTML/CSS" className=" m-5 hover:scale-110 hover:text-custom-red transition duration-300">
          HTML/CSS
        </a>
        <a href="#JS" className=" m-5 hover:scale-110 hover:text-custom-red transition duration-300">
          JavaScript
        </a>
        <a href="#REACT" className=" m-5 hover:scale-110 hover:text-custom-red transition duration-300">
          React
        </a>
        <a href="#BACKEND" className=" m-5 hover:scale-110 hover:text-custom-red transition duration-300">
          Node.js
        </a>
        <a href="#SEO" className=" m-5 hover:scale-110 hover:text-custom-red transition duration-300">
          SEO et accessibilité
        </a>
        <a href="mailto:damien.dacunha64@gmail.com" className="button  m-5 text-custom-yellow hover:text-custom-red transition duration-300">
          Contactez moi !
        </a>
      </nav>
    </div>
  );
}

export default Header;
