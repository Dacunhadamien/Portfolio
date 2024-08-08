import "typeface-montserrat";

function Header() {
  return (
    <div className="header font-montserrat flex md:justify-between justify-center items-center text-custom-green font-semibold mt-5" id="top">
      <a href="https://www.linkedin.com/in/damien-da-cunha-942367127/" target="_blank" rel="noreferrer" className="hover:scale-110 transform duration-300">
        <span className="font-Alt text-custom-yellow font-bold lg-text-xl flex-wrap xl:text-2xl xl:mx-10 mx-4 hover:text-custom-green transform duration-300 bg-left-bottom bg-gradient-to-r from-custom-green to-custom-yellow bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] ease-in-out">
          Damien Da Cunha
        </span>
      </a>
      <nav className="m-5 md:flex md:flex-wrap justify-end flex-row hidden">
        <a
          href="#HTML/CSS"
          className="xl:text-base text-xs xl:m-5 m-2 hover:scale-110 hover:text-custom-red transform duration-300 bg-left-bottom bg-gradient-to-r from-custom-green to-custom-red bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] ease-in-out"
        >
          HTML/CSS
        </a>
        <a
          href="#JS"
          className="xl:text-base text-xs xl:m-5 m-2 hover:scale-110 hover:text-custom-red transform duration-300 bg-left-bottom bg-gradient-to-r from-custom-green to-custom-red bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] ease-in-out"
        >
          JavaScript
        </a>
        <a
          href="#SEO"
          className="xl:text-base text-xs xl:m-5 m-2 hover:scale-110 hover:text-custom-red transform duration-300 bg-left-bottom bg-gradient-to-r from-custom-green to-custom-red bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] ease-in-out"
        >
          SEO et accessibilité
        </a>
        <a
          href="#REACT"
          className="xl:text-base text-xs xl:m-5 m-2 hover:scale-110 hover:text-custom-red transform duration-300 bg-left-bottom bg-gradient-to-r from-custom-green to-custom-red bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] ease-in-out"
        >
          React
        </a>
        <a
          href="#BACKEND"
          className="xl:text-base text-xs xl:m-5 m-2 hover:scale-110 hover:text-custom-red transform duration-300 bg-left-bottom bg-gradient-to-r from-custom-green to-custom-red bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] ease-in-out"
        >
          Node.js
        </a>
        <a
          href="mailto:damien.dacunha64@gmail.com"
          className="xl:text-base text-xs xl:m-5 m-2 text-custom-yellow hover:scale-110 hover:text-custom-red transform duration-300 bg-left-bottom bg-gradient-to-r from-custom-yellow to-custom-red bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] ease-in-out"
        >
          Contactez moi !
        </a>
      </nav>
    </div>
  );
}

export default Header;
