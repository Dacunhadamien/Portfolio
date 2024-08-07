import githubwhite from "../../images/github_white.png";
import Project from "../Components/Project";
import { data } from "../../data/project";
import { FaArrowUp } from "react-icons/fa";
import Header from "../Header/index";
function Home() {
  return (
    <div>
      <Header></Header>
      <div className="flex justify-center flex-col items-center">
        <div className="font-montserrat flex justify-center items-center flex-col bg-cover bg-center size-11/12 text-white rounded-3xl shadow-xl my-10 bg-backgroundImage bg-black">
          <h1 className="mg:text-8xl text-6xl text-center m-12 font-Alt brightness-100">
            Bienvenue sur<br></br> mon portfolio !
          </h1>
          <div className="flex items-center justify-center flex-col m-5 text-l size-1/2 text-center">
            <p>
              Je suis un <span className="text-custom-yellow">ancien ingénieur du son</span> et compositeur reconvertit en <span className="text-custom-yellow">développeur full-stack</span>, et ceci
              est le résumé de mon travail.
            </p>
          </div>
          <div className="flex justify-center items-center flex-row p-3"></div>
          <span className="text-xl text-center animate-pulse">Accédez à mes répos GitHub ci dessous :</span>
          <a href="https://github.com/Dacunhadamien" target="_blank" rel="noreferrer" className=" flex justify-center items-center flex-col">
            <img src={githubwhite} alt="Logo GitHub" className="size-20 m-10 hover:scale-125 transition duration-500 "></img>
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
    </div>
  );
}

export default Home;
