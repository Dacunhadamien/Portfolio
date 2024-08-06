import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Error404 from "./Pages/Error404";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/*" element={<Error404 />} />
    </Routes>
  );
};

export default AppRoutes;
