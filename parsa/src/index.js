import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { MMa, ExampleComponent, Background } from "./App";
import reportWebVitals from "./reportWebVitals";
import "tachyons";
import "animate.css";

ReactDOM.render(
  <div>
    <MMa />
    <ExampleComponent />
    <Background />
  </div>,
  document.getElementById("root"),
);

reportWebVitals();
