import backgroundImage from "../../images/bckgrnd.jpg";
import githubwhite from "../../images/github_white.png";
import Project from "../Components/Project";
import { data } from "../../data/project";
import { FaArrowUp } from "react-icons/fa";
function Home() {
  return (
    <div className="flex justify-center flex-col items-center" id="top">
      <div
        className="home font-montserrat flex justify-center items-center flex-col bg-cover bg-center size-11/12 text-white rounded-3xl shadow-xl my-10"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <h1 className="text-8xl text-center m-12 font-Alt">
          Bienvenue sur<br></br> mon portfolio !
        </h1>
        <div className="flex items-center justify-center flex-col m-5 text-l size-1/2 text-center">
          <p>
            Je suis un <span className="text-custom-yellow">ancien ingénieur du son</span> et compositeur reconvertit en <span className="text-custom-yellow">développeur full-stack</span>, et ceci est
            le résumé de mon travail.
          </p>
          <p>Dans mes différents projets, j'ai eu la chances de développer des compétences, telles que :</p>
        </div>
        <div className="flex justify-center items-center flex-row p-3"></div>
        <span className="text-xl m-3">Accédez à mes répos GitHub ci dessous :</span>
        <a href="https://github.com/Dacunhadamien" className=" flex justify-center items-center flex-col">
          <img src={githubwhite} alt="Logo GitHub" className="w-12 h-12 m-10 hover:scale-125 transition duration-300 "></img>
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
      <a href="#top">
        <FaArrowUp size={70} className="border-4 border-dashed border-black text-custom-yellow rounded-3xl hover:animate-pulse my-20 hover:scale-125 transform duration-300" />
      </a>
    </div>
  );
}

export default Home;
