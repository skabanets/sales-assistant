import { createRoot } from "react-dom/client";

import { App } from "./components";

import "./index.css";
import "modern-normalize/modern-normalize.css";

createRoot(document.getElementById("root")!).render(
  <>
    <App />
  </>
);
