import "typeface-montserrat";

function Header() {
  return (
    <div className="header font-montserrat flex justify-center md:justify-start items-center text-white font-semibold py-14 bg-custom-green" id="top">
      <a href="https://www.linkedin.com/in/damien-da-cunha-942367127/" target="_blank" rel="noreferrer" className="hover:scale-110 transform duration-300">
        <span className="font-Alt font-bold text-2xl mx-10 hover:text-custom-yellow transform duration-300 bg-left-bottom bg-gradient-to-r from-custom-green to-custom-yellow bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px]  ease-out">
          Damien Da Cunha
        </span>
      </a>
    </div>
  );
}

export default Header;
