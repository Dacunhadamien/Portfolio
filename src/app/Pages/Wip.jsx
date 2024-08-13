import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header/index.jsx";
import { data } from "../../data/newskills.js";
import Slider from "../Components/Slider.jsx";

function Wip() {
  return (
    <div>
      {/*Ajout du Header avec retour sur la page d'acceuil */}
      <Header page={"Apprentissage"} linkname={"Acceuil"} link={""} />
      {/*Ajout de la carte contenant le Slider, ainsi que le retour à la page d'acceuil en version mobile */}
      <div className="flex flex-col justify-center items-center mt-10">
        <Slider logo={data} />
        <div className="hidden md:flex flex-col items-center justify-center group my-8"></div>
        <Link
          to="/"
          className="text-xl font-Alt md:hidden m-12 hover:scale-110 text-custom-green hover:text-custom-yellow transform duration-300 bg-left-bottom bg-gradient-to-r from-custom-green to-custom-yellow bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px]  ease-out text-center"
        >
          Retourner sur la page d'acceuil
        </Link>
      </div>
    </div>
  );
}

export default Wip;
