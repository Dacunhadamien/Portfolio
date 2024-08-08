import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Error404 from "./Pages/Error404";
import Wip from "./Pages/Wip";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/*" element={<Error404 />} />
      <Route path="/Wip" element={<Wip />} />
    </Routes>
  );
};

export default AppRoutes;
