import { TypeAnimation } from "react-type-animation";
import React from "react";
import "./App.css";
import "animate.css";

var audio = document.getElementById("myAudio");
var clickCount = 0;

document.addEventListener("click", function () {
  clickCount++;

  if (clickCount === 1) {
    audio.play();
    setTimeout(function () {
      clickCount = 0;
    }, 4000);
  }
});

export const MMa = () => {
  return (
    <div class="M">
      <div class="animate__animated animate__slideInLeft">
        <TypeAnimation
          class="M"
          style={{
            whiteSpace: "pre-line",
            fontFamily: "Rockwell",
          }}
          sequence={[
            "My skills:\n Html \n Css \n Java script \n es6 to es10 \n React \n Developer enviroment \n rest full Api \n Boot strap \n css Grid \n design responsive \n Git.Github",
            9000,
            "",
          ]}
          speed={{ type: "keyStrokeDelayInMs", value: 150 }}
          repeat={Infinity}
        />
      </div>
    </div>
  );
};
export const ExampleComponent = () => {
  return (
    <div class="text">
      <div class="animate__animated animate__slideInLeft">
        <TypeAnimation
          sequence={[
            "Hello",
            1000,
            "im seyyed parsa lotfy",
            1000,
            "im seyyed parsa lotfy im developer.",
            1000,
            "im seyyed parsa lotfy im web designer.",
            2000,
            "im seyyed parsa lotfy im full stack developer.",
            2000,
          ]}
          speed={10}
          style={{ fontSize: "200%" }}
          repeat={Infinity}
        />
      </div>
    </div>
  );
};
