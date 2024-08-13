import "typeface-montserrat";
import linkedIn from "../../images/linkedin.webp";
function Footer() {
  return (
    <div className="bg-black py-3 flex md:flex-row flex-col md:justify-between justify-center text-center items-center text-base font-montserrat text-custom-green font-semibold md:mt-5 ">
      {/*Lien vers le GitHub du Portfolio */}
      <div className="flex items-center">
        <a
          href="https://github.com/Dacunhadamien/Portfolio"
          target="_blank"
          rel="noreferrer"
          className="button  my-5 mx-10 text-custom-yellow hover:scale-110 hover:text-custom-red transform duration-300 ease-in-out"
        >
          <span className="bg-left-bottom bg-gradient-to-r from-custom-yellow to-custom-red bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transform duration-300 ease-in-out">
            Accédez ici au GitHub de ce site !
          </span>
        </a>
      </div>
      {/*Navbar avec accès à la carte mentale de compétences, un section mailto et un lien vers le LinkedIn en version mobile */}
      <nav className="flex flex-col items-center md:flex-row">
        {/*Carte mentale de compétences */}
        <a
          href="https://miro.com/app/board/uXjVKs7kHHI=/"
          target="_blank"
          rel="noreferrer"
          className="my-5 mx-10 text-custom-yellow hover:scale-110 hover:text-custom-red transform duration-300 ease-in-out"
        >
          <span className="bg-left-bottom bg-gradient-to-r from-custom-yellow to-custom-red bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transform duration-300 ease-in-out ">
            Carte mentale de compétences
          </span>
        </a>
        {/*Envoi d'un mail vers mon adresse */}
        <a href="mailto:damien.dacunha64@gmail.com" className="button  my-5 mx-10 text-custom-yellow hover:scale-110 hover:text-custom-red transform duration-300 ease-in-out">
          <span className="bg-left-bottom bg-gradient-to-r from-custom-yellow to-custom-red bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transform duration-300  ease-in-out">
            Contactez moi !
          </span>
        </a>
        {/*Lien vers le LinkedIn en version mobile seulement */}
        <a href="https://www.linkedin.com/in/damien-da-cunha-942367127/" aria-label="logo_linkedIn" target="_blank" rel="noreferrer" className="w-1/6 my-5 md:hidden">
          <img src={linkedIn} alt="Logo de LinkedIn"></img>
        </a>
      </nav>
    </div>
  );
}

export default Footer;
