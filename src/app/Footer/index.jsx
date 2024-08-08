import githubwhite from "../../images/github_white.webp";
import "typeface-montserrat";
function Footer() {
  return (
    <div className="footer bg-black py-3">
      <div className="header flex justify-between items-center md:text-base text-sm font-montserrat flex-row text-custom-green font-semibold ">
        <div className="flex flex-col md:flex-row items-center">
          <a href="https://github.com/Dacunhadamien">
            <img src={githubwhite} alt="Logo GitHub" className="w-12 h-12 mx-10 my-5 hover:scale-125 transition duration-300 ease-in-out"></img>
          </a>
          <a
            href="https://github.com/Dacunhadamien/Portfolio"
            target="_blank"
            rel="noreferrer"
            className="button  my-5 mx-10 text-custom-yellow hover:scale-110 hover:text-custom-red transform duration-300 bg-left-bottom bg-gradient-to-r from-custom-yellow to-custom-red bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px]  ease-out"
          >
            Accédez ici au GitHub de ce site !
          </a>
        </div>
        <nav className="m-5 flex flex-col md:flex-row">
          <a
            href="https://miro.com/app/board/uXjVKs7kHHI=/"
            target="_blank"
            rel="noreferrer"
            className="button  my-5 mx-10 text-custom-yellow hover:scale-110 hover:text-custom-red transform duration-300 bg-left-bottom bg-gradient-to-r from-custom-yellow to-custom-red bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px]  ease-out"
          >
            Carte mentale de compétences
          </a>
          <a
            href="mailto:damien.dacunha64@gmail.com"
            className="button  my-5 mx-10 text-custom-yellow hover:scale-110 hover:text-custom-red transform duration-300 bg-left-bottom bg-gradient-to-r from-custom-yellow to-custom-red bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px]  ease-out"
          >
            Contactez moi !
          </a>
        </nav>
      </div>
    </div>
  );
}

export default Footer;
