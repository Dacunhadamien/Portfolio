import { Link } from "react-router-dom";
import Header from "../Header/index.jsx";

function About() {
  return (
    <div>
      {/*Ajout du Header avec retour sur la page d'accueil et Apprentissage */}
      <Header page={"À propos"} link={""} linkname={"Accueil"} link2={"Wip"} linkname2={"Apprentissage"} />
      <div className="flex justify-center flex-col items-center">
        <div className="hover:scale-105 transform duration-500 ease-in-out font-montserrat flex justify-center items-center flex-col bg-cover bg-center size-11/12 text-white rounded-3xl shadow-xl mt-10 mb-20 bg-backgroundImage bg-black">
          {/*Titre de la page */}
          <h2 className="mg:text-8xl text-5xl text-center m-12 font-Alt">À propos</h2>
          {/*Paragraphe de description */}
          <div className="m-5 md:text-l text-sm md:size-1/2 size-2/3 text-center flex flex-col">
            <p className="my-5">
              Bonjour, et bienvenue sur mon portfolio. Je suis Da Cunha Damien, et à la suite d'un BTS Audiovisuel en alternance ainsi que de 8 années en tant qu'ingénieur du son et compositeur, j'ai
              décidé de me reconvertir en développeur Web.
            </p>
            <p className="my-5">
              Durant six mois, j'ai suivis la formation{" "}
              <a
                href="https://openclassrooms.com/fr/paths/899-developpeur-web?utm_source=google&utm_medium=cpc&utm_campaign=display_google_fr_fr_b2c_prospecting_perf-max-track-developpement_230117_00_adgroup-is-&utm_source=google&utm_medium=cpc&gad_source=1&gclid=Cj0KCQjwiOy1BhDCARIsADGvQnCY1-RnmvQal8jnvNQBk46xocV_zYpABCiFFDvVafaicO5S-nMyR-oaArM7EALw_wcB"
                className="text-custom-yellow underline"
              >
                Openclassroom de développeur Web
              </a>
              , sur laquelle j'ai pu faire mes armes en réalisant divers projets.
            </p>
            <p className="my-5">Ces projets m'ont permis d'accéder à de nombreuses compétences, tel que HTML, CSS, Javascript ou encore React.</p>
            <p className="my-5">
              Vous pouvez retrouver la liste de ces projets en vous rendant sur la{" "}
              <Link to={"/"} className="text-custom-yellow underline">
                page d'acceuil.
              </Link>
            </p>
            <p className="my-10">
              Vous pouvez également me contacter via{" "}
              <a href="https://www.linkedin.com/in/damien-da-cunha-942367127/" target="_blank" rel="noreferrer" className="text-custom-yellow underline">
                {" "}
                LinkedIn
              </a>{" "}
              ou en{" "}
              <a href="mailto:damien.dacunha64@gmail.com" className="text-custom-yellow underline">
                m'envoyant un mail
              </a>
            </p>
            <p className="my-5">Je vous souhaite une agréable visite sur mon portfolio !</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
