import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState } from "react";

/* Création d'un UserState pour la gestion de la Slide active */
const Slider = ({ logo }) => {
  const [slide, setSlide] = useState(0);
  const NextSlide = () => {
    setSlide(slide === logo.length - 1 ? 0 : slide + 1);
  };
  const PrevSlide = () => {
    setSlide(slide === 0 ? logo.length - 1 : slide - 1);
  };
  return (
    <div className="flex justify-center items-center flex-col relative mt-0 md:mt-10 w-full md:h-[42rem] sm:h-[46rem] h-[54rem]">
      {/*Création d'une Slide par objet présent dans newskills.js */}
      {logo.map((item, index) => {
        return (
          /*Si la slide n'est pas active, elle est en display:none */
          <div
            key={index}
            className={
              slide === index
                ? item.bgcolor +
                  item.txtcolor +
                  " z-10 top-0 flex flex-col items-center shadow-[0_35px_60px_-15px_rgba(0,0,0,0.7)] p-5 rounded-3xl w-10/12 h-auto hover:scale-105 transform duration-700 ease-in-out absolute"
                : "hidden"
            }
          >
            {/*Affichage du logo, avec lien vers le site concerné */}
            <div className="flex flex-row items-center justify-center w-8/12 md:w-5/12 p-5">
              <a href={item.url} target="_blank" rel="noreferrer">
                <img src={item.logo} alt={`Logo ${index}`} className="block size-2/5 m-auto hover:scale-110 transform duration-300 ease-in-out"></img>
              </a>
            </div>
            {/*Paragraphe de description*/}
            <div className="flex justify-center w-10/12 p-5 items-center flex-col rounded-3xl transform duration-300 ease-in-out">
              <h2 className=" text-sm md:text-base font-Alt mt-2 mb-5 text-center">{"Qu'est ce que " + item.name + " ?"}</h2>
              <p className=" text-xs lg:text-sm font-montserrat mt-2 mb-5 text-center">{item.what}</p>
              <h2 className=" text-sm md:text-base font-Alt mt-2 mb-5 text-center">{"Pourquoi " + item.name + " est-il intéressant pour votre projet ?"}</h2>
              <p className=" text-xs lg:text-sm font-montserrat mt-2 mb-5 text-center">{item.why}</p>
              {/*Flèches de navigation et compte de slide active */}
              <div className="flex flex-row justify-between items-center w-8/12 my-5">
                <FaChevronLeft className={`${logo.length === 1 ? "hidden" : "block size-[1rem] md:size-[3rem] rounded-3xl hover:scale-110 transform duration-300 ease-in-out"}`} onClick={PrevSlide} />
                <p className={`active-slide ${logo.length === 1 ? "hidden" : "block text-center font-Alt text-xl mt-2 mb-5 md:mt-2"}`}>
                  {slide + 1}/{logo.length}
                </p>
                <FaChevronRight
                  className={` ${logo.length === 1 ? "hidden" : "block size-[1rem] md:size-[3rem] rounded-3xl  hover:scale-110 transform duration-300 ease-in-out"}`}
                  onClick={NextSlide}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
