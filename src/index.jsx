import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./app/Header";
import Footer from "./app/Footer";
import AppRoutes from "./app/Routes";
import "./css/style.css";
import "./css/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Router>
      <Header />
      <AppRoutes />
      <Footer />
    </Router>
  </>
);
