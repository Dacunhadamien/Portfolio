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
    <div className="flex flex-col items-center shadow-[0_35px_60px_-15px_rgba(0,0,0,0.7)] p-10 rounded-3xl w-10/12 bg-custom-green hover:scale-105 transform duration-300 ease-in-out">
      <div className="flex flex-row items-center justify-between">
        <FaChevronLeft className={`${logo.length === 1 ? "hidden" : "block size-1/6 md:size-1/5 text-white rounded-3xl hover:scale-110 transform duration-300 ease-in-out"}`} onClick={PrevSlide} />
        <div className="size-1/2 md:size-1/3 flex justify-center items-center m-5 p-5 md:m-10 md:p-10">
          {logo.map((picture, index) => {
            return (
              <div className="flex flex-col justify-center items-center">
                <img key={`${index}`} src={picture.logo} alt={`Logo ${index}`} className={slide === index ? "block size-1/2 md:size-auto" : "hidden"}></img>
                <p key={index} className={slide === index ? " text-base md:text-xl text-white font-Alt mt-2" : "hidden"}>
                  {picture.name}
                </p>
              </div>
            );
          })}
        </div>
        <FaChevronRight className={` ${logo.length === 1 ? "hidden" : "block size-1/6 md:size-1/5 text-white rounded-3xl hover:scale-110 transform duration-300 ease-in-out"}`} onClick={NextSlide} />
      </div>
      <p className={`active-slide ${logo.length === 1 ? "hidden" : "block font-Alt text-xl mt-0 md:mt-5 text-white"}`}>
        {slide + 1}/{logo.length}
      </p>
    </div>
  );
};

export default Slider;
