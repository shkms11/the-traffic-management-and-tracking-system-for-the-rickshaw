import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import App from "./app/App";

import { worker } from "./mocks/browser";

async function enableMocking() {
  if (import.meta.env.DEV) {
    await worker.start();
  }
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>,
  );
});
