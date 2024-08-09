import githubwhite from "../../images/github_white.webp";
import Project from "../Components/Project";
import { data } from "../../data/project";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import Header from "../Header/index";
import { Link } from "react-router-dom";
import { TiPencil } from "react-icons/ti";
function Home() {
  return (
    <div>
      <Header></Header>
      <div className="flex justify-center flex-col items-center">
        <div className="md:hover:scale-105 transform duration-500 ease-in-out font-montserrat flex justify-center items-center flex-col bg-cover bg-center size-11/12 text-white rounded-3xl shadow-xl my-10 bg-backgroundImage bg-black">
          <h1 className="mg:text-8xl text-6xl text-center m-12 font-Alt">
            Bienvenue sur<br></br> mon portfolio !
          </h1>
          <div className="m-5 text-l size-1/2 text-center">
            <p>
              Je suis un <span className="font-semibold text-custom-yellow">ancien ingénieur du son</span> et compositeur reconvertit en{" "}
              <span className="font-semibold text-custom-yellow">développeur full-stack</span>, et ceci est le résumé de mon travail.
            </p>
          </div>
          <div className="flex justify-center items-center flex-col p-3 mt-5">
            <span className="md:text-xl font-Alt text-center">Accédez à mes répos GitHub ci dessous :</span>
            <a href="https://github.com/Dacunhadamien" target="_blank" rel="noreferrer" className=" flex justify-center items-center flex-col ">
              <img src={githubwhite} alt="Logo GitHub" className="size-20 m-10 hover:scale-125 transition duration-500 "></img>
            </a>
          </div>
          <h2 className="font-Alt md:text-xl text-white my-10 size-10/12 text-center">Découvrir mes compétences en cours d'acquisition ici :</h2>
          <Link to="/Wip" className="flex justify-center ">
            <TiPencil className="font-Alt md:size-20 size-16 hover:scale-125 hover:text-custom-yellow transform duration-500 ease-in-out border-8 border-double rounded-3xl border-custom-yellow" />
          </Link>
          <div className="flex flex-col items-center justify-center">
            <h2 className="font-Alt md:text-xl text-white my-10 size-10/12 text-center">Vous trouverez les différents projets ci-dessous :</h2>

            <a href="#HTML/CSS">
              <FaArrowDown className="md:size-16 animate-bounce size-12 text-custom-yellow rounded-3xl hover:text-custom-red my-10 hover:scale-110 transform duration-500" />
            </a>
          </div>
        </div>
        {data.map((items, index) => (
          <Project
            key={index}
            title={items.title}
            description={items.description}
            cover={items.cover}
            id={items.id}
            bgcolor={items.bgcolor}
            txtcolor={items.txtcolor}
            github={items.github}
            difficulties={items.difficulties}
            skills={items.skills}
            cardtxtcolor={items.cardtextcolor}
          ></Project>
        ))}
        <div className="flex flex-col items-center justify-center group">
          <a href="#top">
            <FaArrowUp className="border-8 md:size-20 size-16 border-double border-black text-custom-yellow rounded-3xl group-hover:text-custom-red my-10 group-hover:scale-125 transform duration-300" />
          </a>
          <h2 className="text-2xl text-black mb-10 italic group-hover:text-custom-red group-hover:scale-125 transform duration-300">Retour en haut !</h2>
        </div>
      </div>
      <div className="text-white flex justify-center items-center flex-col text-center pt-10 pb-5 bg-black" id="bot">
        <p className="md:text-xl text-center text-sm size-11/12 font-semibold text-custom-yellow font-Alt">Cliquez ci dessous pour découvrir mes compétences en cours d'acquisition :</p>
        <Link to="/Wip" className="flex justify-center ">
          <TiPencil className="font-Alt md:size-20 size-16 mt-10 hover:scale-125 hover:text-custom-red transform duration-300 ease-out border-8 border-double rounded-3xl border-custom-yellow" />
        </Link>
      </div>
    </div>
  );
}

export default Home;
