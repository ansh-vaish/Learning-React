import { createRoot } from "react-dom/client";
import "./index.css";
import Text from "./components/text.jsx";
import PassGen from "./components/PassGen.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <PassGen />
    <Text />
  </>
);
