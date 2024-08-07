import React from "react";
import logogithub from "../../images/github.png";

const Project = (props) => {
  return (
    <div className={"flex justify-center my-10 py-8 shadow-xl size-11/12 rounded-3xl flex-col items-center " + props.bgcolor + props.txtcolor} id={props.id}>
      <h2 className="font-bold m-5 font-Alt text-2xl md:text-5xl text-center">{props.title}</h2>
      <h3 className="md:text-xl text-lg italic text-center md:size-full size-3/4">{props.description}</h3>
      <div className="flex flex-col md:flex-row md:justify-between items-center m-5">
        <a href={props.github} target="_blank" rel="noreferrer" className="flex justify-center items-center flex-start rounded-3xl size-11/12 md:size-2/4 group">
          <img src={props.cover} alt={"Image de " + props.title} className="rounded-3xl group-hover:blur transition duration-300 ease-in-out relative shadow-xl"></img>
          <img
            src={logogithub}
            alt="Logo de GitHub"
            className=" opacity-0 absolute size-20 md:size-32 group-hover:opacity-100 transition duration-300 ease-in-out group-hover:scale-125 animate-bounce"
          ></img>
        </a>
        <div className="flex flex-col md:flex-row justify-center items-center md:w-1/2 my-10">
          <div className="flex justify-center items-center flex-col md:w-1/2">
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
          <div className={"flex my-5 justify-start flex-wrap flex-col md:w-1/2 rounded-3xl shadow-xl p-4 bg-white " + props.cardtxtcolor}>
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
    </div>
  );
};

export default Project;
