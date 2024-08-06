import React from "react";
import logogithub from "../../images/github.png";

const Project = (props) => {
  return (
    <div className={"flex justify-center my-10 py-8 shadow-xl size-11/12 rounded-3xl flex-col items-center " + props.bgcolor + props.txtcolor} id={props.id}>
      <h2 className="font-bold m-5 text-5xl">{props.title}</h2>
      <p className="text-xl italic">{props.description}</p>
      <div className="flex justify-between items-center m-5">
        <a href={props.github} className="flex justify-center items-center flex-start rounded-3xl size-2/4 group">
          <img src={props.cover} alt={"Image de " + props.title} className="rounded-3xl group-hover:blur transition duration-300 ease-in-out relative shadow-xl"></img>
          <img
            src={logogithub}
            alt="Logo GitHub"
            className=" opacity-0 absolute size-32 group-hover:opacity-100 transition duration-300 ease-in-out group-hover:scale-125 group-hover:animate-bounce"
          ></img>
        </a>
        <div className="flex flex-row justify-center items-center w-1/2">
          <div className="flex justify-center items-center flex-col w-1/2">
            <h3 className="font-semibold text-xl italic my-3">Compétences apprises :</h3>
            {props.skills.map((logos, index) => {
              return <img key={index} src={logos} alt="Logo de la compétence" className="size-16 m-3 hover:scale-110 transition duration-300"></img>;
            })}
          </div>
          <div className={"flex justify-start flex-col w-1/2 rounded-3xl shadow-xl p-4 bg-white " + props.cardtxtcolor}>
            <h3 className="font-semibold text-xl italic p-2.5 my-2">Difficultées rencontrées :</h3>
            {props.difficulties.map((difficulties, index) => {
              return (
                <p key={index} className="p-2.5 my-2">
                  {difficulties}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
