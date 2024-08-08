import { Link } from "react-router-dom";
import Header from "../Header/header_alt";

function Error404() {
  return (
    <div>
      <Header />
      <div className="flex justify-center flex-col items-center text-center text-custom-green">
        <h1 className="fontAlt text-9xl m-10">Erreur 404</h1>
        <h2 className="m-12 text-3xl">Oups! La page que vous demandez n'existe pas</h2>
        <Link
          to="/"
          className="text-4xl m-20 hover:scale-110 hover:text-custom-yellow transform duration-300 bg-left-bottom bg-gradient-to-r from-custom-green to-custom-yellow bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px]  ease-out"
        >
          Retourner sur la page d'acceuil
        </Link>
      </div>
    </div>
  );
}

export default Error404;
