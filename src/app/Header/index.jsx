import "typeface-montserrat";
import { data } from "../../data/project.js";

function Header() {
  return (
    <div className="header font-montserrat flex md:justify-between justify-center items-center text-custom-green font-semibold mt-5" id="top">
      <a href="https://www.linkedin.com/in/damien-da-cunha-942367127/" target="_blank" rel="noreferrer" className="hover:scale-110 transform duration-300">
        <span className="font-Alt text-custom-yellow my-5 font-bold text-2xl md:text-xl flex-wrap xl:text-2xl xl:mx-10 mx-4 hover:text-custom-green transform duration-300 bg-left-bottom bg-gradient-to-r from-custom-green to-custom-yellow bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] ease-in-out">
          Damien Da Cunha
        </span>
      </a>
      <nav className="m-5 md:flex md:flex-wrap justify-end flex-row hidden">
        {data.map((item, index) => {
          return (
            <a
              key={index}
              href={"#" + item.id}
              className="xl:text-base text-xs xl:m-5 m-2 hover:scale-110 hover:text-custom-red transform duration-300 bg-left-bottom bg-gradient-to-r from-custom-green to-custom-red bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] ease-in-out"
            >
              {item.nav}
            </a>
          );
        })}
      </nav>
    </div>
  );
}

export default Header;
