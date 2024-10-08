import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { initialState, setupStore } from "./store/store.ts";
import App from "./App.tsx";
import "./index.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider
      store={setupStore({
        game: initialState,
      })}
    >
      <App />
    </Provider>
  </StrictMode>
);
