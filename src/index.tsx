import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import Home from "./pages/home/home";
import TodoProvider from "./Context/TodoProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <TodoProvider>
    <Home />
  </TodoProvider>
);
