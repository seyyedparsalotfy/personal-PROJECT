import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { MMa, ExampleComponent } from "./App";
import reportWebVitals from "./reportWebVitals";
import "tachyons";
import "animate.css";

ReactDOM.render(
  <div>
    <MMa />
    <ExampleComponent />
  </div>,
  document.getElementById("root"),
);

reportWebVitals();
