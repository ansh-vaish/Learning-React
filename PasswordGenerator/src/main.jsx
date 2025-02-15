import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import PassGen from "./components/PassGen.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <PassGen />

  </>
);
