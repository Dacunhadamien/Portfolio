import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Error404 from "./Pages/Error404";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/*" element={<Error404 />} />
    </Routes>
  );
};

export default AppRoutes;
