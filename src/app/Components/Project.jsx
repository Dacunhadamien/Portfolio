import React from "react";
import logogithub from "../../images/github.webp";
import { MdOpenInNew } from "react-icons/md";
import { GoClock } from "react-icons/go";

const Project = (props) => {
  return (
    <div
      className={"md:hover:scale-105 transform duration-500 ease-in-out flex justify-center my-10 py-4 shadow-xl size-10/12 rounded-3xl flex-col items-center " + props.bgcolor + props.txtcolor}
      id={props.id}
    >
      {/* Titre et sous-titre de la carte */}
      <div className="flex flex-col justify-center items-center">
        <h2 className="font-bold m-5 font-Alt text-2xl md:text-5xl text-center">{props.title}</h2>
        <h3 className="md:text-xl text-lg italic text-center lg:size-full size-3/4">{props.description}</h3>
      </div>
      <div className="flex flex-col lg:flex-row md:justify-between items-center mt-5 mx-5">
        {/* Screenshot du site correspondant au Project */}
        <div className="flex flex-col justify-center items-center size-11/12 lg:size-2/4 group">
          {/* Si le Project a une url, on créer un lien avec un icone au survol */}
          {props.url ? (
            <a href={props.url} target="_blank" rel="noreferrer" className="flex justify-center items-center flex-start rounded-3xl group relative md:my-10">
              <img src={props.cover} alt={"Image de " + props.title} className="rounded-3xl group-hover:blur transition duration-500 ease-in-out shadow-xl"></img>
              <MdOpenInNew className="opacity-0 absolute size-20 lg:size-32 group-hover:opacity-100 transition duration-500 ease-in-out" />
            </a>
          ) : (
            /* Si le Project n'a pas d'url, on créer une div avec une autre icone au survol, ainsi qu'un texte explicatif */
            <div className="flex flex-col justify-center items-center">
              <div className="flex justify-center items-center flex-col rounded-3xl group relative md:my-10">
                <img src={props.cover} alt={"Image de " + props.title} className="rounded-3xl group-hover:blur transition duration-500 ease-in-out shadow-xl"></img>
                <div className="absolute flex flex-col justify-center items-center">
                  <GoClock className={"opacity-0 size-20 lg:size-32 group-hover:opacity-100 group-hover:scale-110 transition duration-500 ease-in-out " + props.cardtxtcolor} />
                </div>
              </div>
              <p className="md:my-0 my-5 italic font-light">Ce site n'est actuellement pas consultable</p>
            </div>
          )}
        </div>
        {/*Compétences acquises et difficultées rencontrées*/}
        <div className="flex flex-col lg:flex-row justify-center items-center lg:w-1/2 my-10">
          {/*Compétences acquises*/}
          <div className="md:hover:scale-105 transform duration-500 ease-in-out flex justify-center items-center flex-col md:w-1/2 mb-5">
            <h3 className="font-semibold text-base md:text-lg text-center font-Alt my-3">Compétences apprises</h3>
            {/*On récupère les compétences dans l'object skills*/}
            <div className="flex flex-row lg:flex-col">
              {props.skills.map((logos, index) => {
                return (
                  <a href={logos.url} key={index} target="_blank" rel="noreferrer">
                    <img key={index} src={logos.logo} alt={"Logo de la compétence " + index} className="xl:size-16 size-12 m-3 hover:scale-110 transition duration-300"></img>
                  </a>
                );
              })}
            </div>
          </div>
          {/*Difficultées rencontrées*/}
          <div className={"hover:scale-105 transform duration-500 ease-in-out flex my-2 mx-5 justify-start flex-wrap flex-col lg:w-1/2 rounded-3xl shadow-xl p-4 bg-white " + props.cardtxtcolor}>
            <h3 className="font-semibold text-lg lg:text-xl text-center font-Alt p-2.5 my-2">Difficultées rencontrées</h3>
            {/*On récupère les difficultées dans l'object difficulties*/}
            <div className="flex flex-col flex-wrap">
              {props.difficulties.map((difficulties, index) => {
                return (
                  <p key={index} className="p-2.5 my-2 text-xs md:text-base">
                    {difficulties}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/* Lien vers le repo GitHub du Project */}
      <div>
        <a href={props.github} target="_blank" rel="noreferrer">
          <img src={logogithub} alt="Logo de GitHub" className=" size-16 lg:size-20 hover:scale-125 transition duration-500 ease-in-out"></img>
        </a>
      </div>
    </div>
  );
};

export default Project;
