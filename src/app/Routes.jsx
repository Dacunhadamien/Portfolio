import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Error404 from "./Pages/Error404";
import Wip from "./Pages/Wip";
import About from "./Pages/About.jsx";

const AppRoutes = () => {
  return (
    <Routes>
      {/*Route de la page d'accueil */}
      <Route path="/" element={<Home />} />
      {/*Route de la page d'erreur 404 */}
      <Route path="/*" element={<Error404 />} />
      {/*Route de la page Apprentissage */}
      <Route path="/Wip" element={<Wip />} />
      <Route path="/About" element={<About />} />
    </Routes>
  );
};

export default AppRoutes;
