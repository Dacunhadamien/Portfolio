import "typeface-montserrat";
function Footer() {
  return (
    <div className="footer bg-black py-3">
      <div className="header flex md:flex-row flex-col md:justify-between justify-center text-center items-center text-base font-montserrat text-custom-green font-semibold m-5 ">
        <div className="flex items-center">
          <a
            href="https://github.com/Dacunhadamien/Portfolio"
            target="_blank"
            rel="noreferrer"
            className="button  my-5 mx-10 text-custom-yellow hover:scale-110 hover:text-custom-red transform duration-300 bg-left-bottom bg-gradient-to-r from-custom-yellow to-custom-red bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] ease-in-out-out"
          >
            Accédez ici au GitHub de ce site !
          </a>
        </div>
        <nav className="flex flex-col md:flex-row">
          <a
            href="https://miro.com/app/board/uXjVKs7kHHI=/"
            target="_blank"
            rel="noreferrer"
            className="button  my-5 mx-10 text-custom-yellow hover:scale-110 hover:text-custom-red transform duration-300 bg-left-bottom bg-gradient-to-r from-custom-yellow to-custom-red bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] ease-in-out-out"
          >
            Carte mentale de compétences
          </a>
          <a href="mailto:damien.dacunha64@gmail.com" className="button  my-5 mx-10 text-custom-yellow hover:scale-110 hover:text-custom-red transform duration-300 ease-in-out">
            <span className="bg-left-bottom bg-gradient-to-r from-custom-yellow to-custom-red bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transform duration-300  ease-in-out-out">
              Contactez moi !
            </span>
          </a>
        </nav>
      </div>
    </div>
  );
}

export default Footer;
