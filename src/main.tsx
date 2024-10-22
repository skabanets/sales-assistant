import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { App } from "./components";
import ThemeContextProvider from "./context/ThemeContext";

import { store } from "./redux/store";
import "./index.css";
import "modern-normalize/modern-normalize.css";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <ThemeContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeContextProvider>
  </Provider>
);
