import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Bg from "./Bg.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Bg />
  </StrictMode>
);
