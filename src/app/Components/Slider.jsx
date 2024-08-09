import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState } from "react";

const Slider = ({ logo }) => {
  const [slide, setSlide] = useState(0);
  const NextSlide = () => {
    setSlide(slide === logo.length - 1 ? 0 : slide + 1);
  };
  const PrevSlide = () => {
    setSlide(slide === 0 ? logo.length - 1 : slide - 1);
  };
  return (
    <div className="flex justify-center items-center flex-col relative mt-0 md:mt-10 w-full md:h-[74rem] h-[67rem]">
      {logo.map((item, index) => {
        return (
          <div
            key={index}
            className={
              slide === index
                ? item.bgcolor +
                  item.txtcolor +
                  " z-10 top-0 flex flex-col items-center shadow-[0_35px_60px_-15px_rgba(0,0,0,0.7)] p-10 rounded-3xl w-10/12 h-auto hover:scale-105 transform duration-700 ease-in-out absolute"
                : item.bgcolor + item.txtcolor + " hidden"
            }
          >
            <div className="flex flex-row items-center justify-between">
              <FaChevronLeft className={`${logo.length === 1 ? "hidden" : "block size-1/12 sm:size-1/6 rounded-3xl hover:scale-110 transform duration-300 ease-in-out"}`} onClick={PrevSlide} />
              <div className="size-1/3 md:size-1/2 lg:size-1/3 flex justify-center items-center p-5 md:m-10 md:p-10">
                <div className="flex flex-col justify-center items-center">
                  <a href={item.url} target="_blank" rel="noreferrer">
                    <img src={item.logo} alt={`Logo ${index}`} className="block size-auto m-auto hover:scale-110 transform duration-300 ease-in-out"></img>
                  </a>
                </div>
              </div>
              <FaChevronRight className={` ${logo.length === 1 ? "hidden" : "block size-1/12 sm:size-1/6 rounded-3xl hover:scale-110 transform duration-300 ease-in-out"}`} onClick={NextSlide} />
            </div>
            <div className="flex justify-center w-10/12 p-5 items-center flex-col shadow-xl rounded-3xl md:hover:scale-105 transform duration-300 ease-in-out">
              <h2 className=" text-base md:text-lg  font-Alt mt-2 mb-5 text-center">{"Qu'est ce que " + item.name + " ?"}</h2>
              <p className=" text-sm lg:text-base font-montserrat mt-2 mb-5 text-center">{item.what}</p>
              <h2 className=" text-base md:text-lg font-Alt mt-2 mb-5 text-center">{"Pourquoi " + item.name + " est-il intéressant pour votre projet ?"}</h2>
              <p className=" text-sm lg:text-base font-montserrat mt-2 mb-5 text-center">{item.why}</p>
              <div className="flex flex-row justify-between items-center w-10/12 my-10">
                <FaChevronLeft
                  className={`${logo.length === 1 ? "hidden" : "block size-[1.5rem] md:size-[4rem] rounded-3xl hover:scale-110 transform duration-300 ease-in-out"}`}
                  onClick={PrevSlide}
                />
                <p className={`active-slide ${logo.length === 1 ? "hidden" : "block text-center font-Alt text-xl mt-2 mb-5 md:mt-2"}`}>
                  {slide + 1}/{logo.length}
                </p>
                <FaChevronRight
                  className={` ${logo.length === 1 ? "hidden" : "block size-[1.5rem] md:size-[4rem] rounded-3xl  hover:scale-110 transform duration-300 ease-in-out"}`}
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
