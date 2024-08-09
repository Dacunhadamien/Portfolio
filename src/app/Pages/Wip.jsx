import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header/header_alt.jsx";
import { data } from "../../data/newskills.js";
import Slider from "../Components/Slider.jsx";
import { FaArrowUp } from "react-icons/fa";

function Wip() {
  return (
    <div>
      <Header />
      <div className="flex flex-col justify-center items-center">
        <h1 className="md:text-6xl text-3xl text-center my-20 font-Alt text-custom-green">Compétences en cours d'acquisition</h1>
        <Slider logo={data} />
        <div className="hidden md:flex flex-col items-center justify-center group">
          <a href="#top">
            <FaArrowUp
              aria-label="arrowup_icon"
              className="border-8 md:size-20 size-16 border-double border-black text-custom-yellow rounded-3xl group-hover:text-custom-red my-10 group-hover:scale-125 transform duration-300"
            />
          </a>
          <h2 className="text-2xl text-black mb-10 italic group-hover:text-custom-red group-hover:scale-125 transform duration-300">Retour en haut !</h2>
        </div>
        <Link
          to="/"
          className="text-xl md:hidden m-20 hover:scale-110 text-custom-green hover:text-custom-yellow transform duration-300 bg-left-bottom bg-gradient-to-r from-custom-green to-custom-yellow bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px]  ease-out text-center"
        >
          Retourner sur la page d'acceuil
        </Link>
      </div>
    </div>
  );
}

export default Wip;
