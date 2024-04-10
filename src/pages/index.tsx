import { useState } from "react";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
import { Button } from "@/components/ui/button";



export default function Home() {
  // TYPEWRITER EFFECT
  const words = [
    {
      text: "Programmer",
      className: "text-indigo-600",
    },
  ];

  // CONTACT ME BUTTON FUNKTION 
  const handleContactMeClick = () => {
    window.location.href = "mailto:leoradtke@outlook.de";
  };



  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <div className="custom-margin text-5xl font-bold text-white">
        <h1>
          Hi, I'm Leo,{" "}
          <span className="text-indigo-600 ">
            {" "}
            <TypewriterEffectSmooth words={words} />{" "}
          </span>{" "}
        </h1>
      </div>

      <div className="custom-margin-little-text text-white ">
        <p className="text-white-700 text-sm sm:text-base font-bold ">
          Create your Program like a pro.
        </p>
      </div>

      <div className="text-white custom-new-text">
        <p>
          Leo is 14 years old and has been programming since he was 10. <br />
          He is proficient in several programming languages, including Python, <br />
          and has experience in web development (backend and frontend). <br />
          Specifically, he works with React, TypeScript, JavaScript, HTML and CSS and Python.
        </p>
      </div>

      <div className="custom-button">
        <Button variant="outline" onClick={handleContactMeClick}>Contact Me</Button>
      </div>

      <div className="custom-margin-image-2">
        <img src="\programmer-image.jpg" className="small-logo" />
      </div>

    </>
  );

}
