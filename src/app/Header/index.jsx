import "typeface-montserrat";

function Header() {
  return (
    <div className="header font-montserrat flex md:justify-between justify-center items-center text-custom-green font-semibold mt-5" id="top">
      <a href="https://github.com/Dacunhadamien" className="hover:scale-110 transform duration-300">
        <span className="font-Alt font-bold text-2xl mx-10 hover:text-custom-yellow transform duration-300 bg-left-bottom bg-gradient-to-r from-custom-green to-custom-yellow bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px]  ease-out">
          Damien Da Cunha
        </span>
      </a>
      <nav className="m-5 md:flex justify-end flex-row hidden">
        <a
          href="#HTML/CSS"
          className=" m-5 hover:scale-110 hover:text-custom-red transform duration-300 bg-left-bottom bg-gradient-to-r from-custom-green to-custom-red bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px]  ease-out"
        >
          HTML/CSS
        </a>
        <a
          href="#JS"
          className=" m-5 hover:scale-110 hover:text-custom-red transform duration-300 bg-left-bottom bg-gradient-to-r from-custom-green to-custom-red bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px]  ease-out"
        >
          JavaScript
        </a>
        <a
          href="#SEO"
          className=" m-5 hover:scale-110 hover:text-custom-red transform duration-300 bg-left-bottom bg-gradient-to-r from-custom-green to-custom-red bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px]  ease-out"
        >
          SEO et accessibilité
        </a>
        <a
          href="#REACT"
          className=" m-5 hover:scale-110 hover:text-custom-red transform duration-300 bg-left-bottom bg-gradient-to-r from-custom-green to-custom-red bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px]  ease-out"
        >
          React
        </a>
        <a
          href="#BACKEND"
          className=" m-5 hover:scale-110 hover:text-custom-red transform duration-300 bg-left-bottom bg-gradient-to-r from-custom-green to-custom-red bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px]  ease-out"
        >
          Node.js
        </a>
        <a
          href="mailto:damien.dacunha64@gmail.com"
          className="button  m-5 text-custom-yellow hover:scale-110 hover:text-custom-red transform duration-300 bg-left-bottom bg-gradient-to-r from-custom-yellow to-custom-red bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px]  ease-out"
        >
          Contactez moi !
        </a>
      </nav>
    </div>
  );
}

export default Header;
