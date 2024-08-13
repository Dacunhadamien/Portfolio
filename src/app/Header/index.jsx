import "typeface-montserrat";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div className="header font-montserrat flex md:justify-between justify-center items-center text-custom-green font-semibold py-10" id="top">
      {/*Indication de la page actuelle avec @page*/}
      <h1 className="font-Alt text-4xl mx-16 bg-left-bottom bg-gradient-to-r text-custom-yellow from-custom-yellow to-custom-green bg-[length:100%_2px] bg-no-repeat">{props.page}</h1>
      {/*Liens vers la page Apprentissage/Acceuil et LinkedIn */}
      <div className="flex flex-row justify-center items-center text-xl">
        {/*@link = lien vers / ou /Wip 
           @linkname = nom du lien affiché */}
        <Link
          to={"/" + props.link}
          className="font-Alt mx-16 md:block hidden hover:scale-110 hover:text-custom-yellow transform duration-300 bg-left-bottom bg-gradient-to-r from-custom-yellow to-custom-green bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] ease-in-out"
        >
          {props.linkname}
        </Link>
        <a
          href="https://www.linkedin.com/in/damien-da-cunha-942367127/"
          target="_bla
        nk"
          rel="noreferrer"
          className="hover:scale-110 transform duration-300"
        >
          <span className="font-Alt my-5 font-bold flex-wrap mx-10 md:block hidden hover:text-custom-yellow transform duration-300 bg-left-bottom bg-gradient-to-r from-custom-yellow to-custom-green bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] ease-in-out">
            Contact
          </span>
        </a>
      </div>
    </div>
  );
}

export default Header;
