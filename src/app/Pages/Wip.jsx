import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header/header_alt.jsx";
import { data } from "../../data/newskills.js";
import Slider from "../Components/Slider.jsx";

function Wip() {
  return (
    <div>
      <Header />
      <div className="flex flex-col justify-center items-center">
        <h1 className="md:text-6xl text-3xl text-center my-20 font-Alt text-custom-green">Compétences en cours d'acquisition</h1>
        <Slider logo={data} />
        <Link
          to="/"
          className="text-xl md:text-3xl m-20 hover:scale-110 text-custom-green hover:text-custom-red transform duration-300 bg-left-bottom bg-gradient-to-r from-custom-green to-custom-red bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px]  ease-out animate-pulse text-center"
        >
          Retourner sur la page d'acceuil
        </Link>
      </div>
    </div>
  );
}

export default Wip;
