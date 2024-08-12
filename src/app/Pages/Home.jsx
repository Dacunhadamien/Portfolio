import githubwhite from "../../images/github_white.webp";
import Project from "../Components/Project";
import { data } from "../../data/project";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import Header from "../Header/index";
import { Link } from "react-router-dom";
import { FaHourglassStart } from "react-icons/fa";
function Home() {
  return (
    <div>
      <Header></Header>
      <div className="flex justify-center flex-col items-center">
        <div className="hover:scale-105 transform duration-500 ease-in-out font-montserrat flex justify-center items-center flex-col bg-cover bg-center size-11/12 text-white rounded-3xl shadow-xl my-10 bg-backgroundImage bg-black">
          <h2 className="mg:text-8xl text-5xl text-center m-12 font-Alt">
            Damien Da Cunha<br></br> Développeur web junior
          </h2>
          <div className="m-5 text-l size-1/2 text-center">
            <p>
              Je suis un <span className="font-semibold text-custom-yellow">ancien ingénieur du son</span> et compositeur reconvertit en{" "}
              <span className="font-semibold text-custom-yellow">développeur web junior</span>, et ceci est le résumé de mon travail.
            </p>
          </div>
          <div className="flex justify-center items-center flex-col p-3 mt-5">
            <span className="md:text-xl font-Alt text-center">Accédez à mes répos GitHub ci dessous :</span>
            <a href="https://github.com/Dacunhadamien" target="_blank" rel="noreferrer" className=" flex justify-center items-center flex-col ">
              <img src={githubwhite} alt="Logo GitHub" className="size-20 m-10 hover:scale-110 transition duration-500 "></img>
            </a>
          </div>
          <div className="flex flex-col items-center justify-center border-t-2 md:w-[42rem] w-[20rem]">
            <a href="#HTML/CSS" className="py-5">
              <FaArrowDown aria-label="arrowdown_icon" className="md:size-16 animate-bounce size-12 text-custom-yellow hover:text-custom-red my-6 hover:scale-110 transform duration-500" />
            </a>
          </div>
        </div>
        <nav className="m-5 flex flex-wrap justify-end flex-row text-custom-green font-semibold">
          {data.map((item, index) => {
            return (
              <a
                key={index}
                href={"#" + item.id}
                className="md:text-lg text-sm m-5 hover:scale-110 hidden sm:flex hover:text-custom-yellow transform duration-300 bg-left-bottom bg-gradient-to-r from-custom-green to-custom-yellow bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] ease-in-out"
              >
                {item.nav}
              </a>
            );
          })}
        </nav>
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
            url={items.url}
          ></Project>
        ))}
        <div className="flex flex-col items-center justify-center group">
          <a href="#top">
            <FaArrowUp
              aria-label="arrowup_icon"
              className="animate-bounce md:size-20 size-16  text-custom-yellow rounded-3xl group-hover:text-custom-red my-10 group-hover:scale-110 transform duration-300"
            />
          </a>
        </div>
      </div>
      <div className="text-custom-yellow flex justify-center items-center flex-col text-center pt-10 pb-5 bg-black md:hidden" id="bot">
        <p className="md:text-xl text-center text-sm size-11/12 font-semibold font-Alt">Cliquez ci dessous pour découvrir mes compétences en cours d'acquisition :</p>
        <Link to="/Wip" className="flex justify-center ">
          <FaHourglassStart
            aria-label="pencil_icon"
            className="font-Alt md:size-20 size-16 mt-10 hover:scale-125 hover:text-custom-red transform duration-300 ease-out rounded-3xl border-custom-yellow"
          />
        </Link>
      </div>
    </div>
  );
}

export default Home;
