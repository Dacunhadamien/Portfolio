import githubwhite from "../../images/github_white.png";
import "typeface-montserrat";
function Footer() {
  return (
    <div className="footer bg-black py-3">
      <div className="header flex justify-between items-center font-montserrat flex-row text-custom-green font-semibold">
        <nav className="m-5">
          <a href="mailto:damien.dacunha64@gmail.com" className="button m-5 hover:text-custom-red transition duration-300 text-custom-yellow">
            Contactez moi !
          </a>
        </nav>
        <a href="https://github.com/Dacunhadamien">
          <img src={githubwhite} alt="Logo GitHub" className="w-12 h-12 m-5 hover:scale-125 transition duration-300 ease-in-out"></img>
        </a>
      </div>
    </div>
  );
}

export default Footer;
