import githubwhite from "../../images/github_white.png";
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
          <div className="flex items-center justify-center flex-col m-5 text-l size-1/2 text-center">
            <p>
              Je suis un <span className="font-semibold text-custom-yellow">ancien ingénieur du son</span> et compositeur reconvertit en{" "}
              <span className="font-semibold text-custom-yellow">développeur full-stack</span>, et ceci est le résumé de mon travail.
            </p>
          </div>
          <div className="flex justify-center items-center flex-row p-3"></div>
          <span className="md:text-xl text-center animate-pulse">Accédez à mes répos GitHub ci dessous :</span>
          <a href="https://github.com/Dacunhadamien" target="_blank" rel="noreferrer" className=" flex justify-center items-center flex-col">
            <img src={githubwhite} alt="Logo GitHub" className="size-20 m-10 hover:scale-125 transition duration-500 "></img>
          </a>
          <h2 className="font-Alt text-xl text-white mt-10 size-10/12 text-center">Rendez-vous en bas de la page pour plus de liens et d'informations</h2>
          <a href="#bot">
            <FaArrowDown className="border-8 md:size-20 size-16 border-double border-white text-custom-yellow rounded-3xl hover:text-custom-red my-20 hover:scale-125 transform duration-300" />
          </a>
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
        <div className="flex flex-col justify-center items-center">
          <a href="#top">
            <FaArrowUp className="border-8 md:size-20 size-16 border-double border-black text-custom-yellow rounded-3xl hover:text-custom-red mt-20 mb-10 hover:scale-125 transform duration-300" />
          </a>
          <h2 className="text-2xl text-black mb-10 italic">Retour en haut !</h2>
        </div>
      </div>
      <div className="text-white flex justify-center object-center flex-col text-center pt-10 pb-5 bg-black" id="bot">
        <p className="md:text-xl text-sm size-11/12 font-semibold text-custom-yellow font-Alt">Cliquez ci dessous pour découvrir mes compétences en cours d'acquisition :</p>
        <Link to="/Wip" className="flex justify-center ">
          <TiPencil className="font-Alt md:size-20 size-16 mt-10 hover:scale-125 hover:text-custom-red transform duration-300 ease-out border-8 border-double rounded-3xl border-custom-yellow" />
        </Link>
      </div>
    </div>
  );
}

export default Home;
