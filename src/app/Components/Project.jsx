import React from "react";
import logogithub from "../../images/github.webp";
import { GoDesktopDownload } from "react-icons/go";
import { GoClock } from "react-icons/go";

const Project = (props) => {
  return (
    <div
      className={"md:hover:scale-105 transform duration-500 ease-in-out flex justify-center my-10 py-8 shadow-xl size-10/12 rounded-3xl flex-col items-center " + props.bgcolor + props.txtcolor}
      id={props.id}
    >
      <h2 className="font-bold m-5 font-Alt text-2xl md:text-5xl text-center">{props.title}</h2>
      <h3 className="md:text-xl text-lg italic text-center md:size-full size-3/4">{props.description}</h3>
      <div className="flex flex-col md:flex-row md:justify-between items-center m-5">
        <div className="flex flex-col justify-center items-center size-11/12 md:size-2/4 group">
          <a href={props.url} target="_blank" rel="noreferrer" className="flex justify-center items-center flex-start rounded-3xl group relative my-10">
            <img src={props.cover} alt={"Image de " + props.title} className="rounded-3xl group-hover:blur transition duration-500 ease-in-out shadow-xl"></img>
            <GoDesktopDownload className={props.url ? "opacity-0 absolute size-20 md:size-32 group-hover:opacity-100 transition duration-500 ease-in-out" : "hidden"} />
            <div className={props.url ? "hidden" : "absolute flex flex-col justify-center items-center"}>
              <GoClock className={"opacity-0 absolute size-20 md:size-32 group-hover:opacity-100 transition duration-500 ease-in-out " + props.cardtxtcolor} />
            </div>
          </a>
          <p className={props.url ? "hidden" : "italic md:opacity-0 md:group-hover:opacity-100 transform duration-500"}>Désolé, ce projet n'est pas encore hébergé</p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center md:w-1/2 my-10">
          <div className="md:hover:scale-105 transform duration-500 ease-in-out flex justify-center items-center flex-col md:w-1/2">
            <h3 className="font-semibold text-lg md:text-xl text-center font-Alt my-3">Compétences apprises</h3>
            <div className="flex flex-row md:flex-col">
              {props.skills.map((logos, index) => {
                return (
                  <a href={logos.url} key={index} target="_blank" rel="noreferrer">
                    <img key={index} src={logos.logo} alt={"Logo de la compétence " + index} className="md:size-16 size-10 m-3 hover:scale-110 transition duration-300"></img>
                  </a>
                );
              })}
            </div>
          </div>
          <div className={"hover:scale-105 transform duration-500 ease-in-out flex my-5 justify-start flex-wrap flex-col md:w-1/2 rounded-3xl shadow-xl p-4 bg-white " + props.cardtxtcolor}>
            <h3 className="font-semibold text-lg md:text-xl text-center font-Alt p-2.5 my-2">Difficultées rencontrées</h3>
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
      <div>
        <a href={props.github} target="_blank" rel="noreferrer">
          <img src={logogithub} alt="Logo de GitHub" className=" size-16 md:size-20 hover:scale-125 transition duration-500 ease-in-out"></img>
        </a>
      </div>
    </div>
  );
};

export default Project;
