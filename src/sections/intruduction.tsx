import React, { useEffect, useState } from "react";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
import { Button } from "@/components/ui/button";
import styles from "./Intruductions.module.css"; // Importiere das CSS-Modul

const Intruductions = () => {
  const [showContent, setShowContent] = useState(false);

  const words = [
    {
      text: "Software Developer ",
      className: "text-blue-300",
    },
    {
      text: "Problem Solver ",
      className: "text-green-300",
    },
    {
      text: "Developer :) ! ",
      className: "text-green-300",
    },
    {
      text: "Strategic Thinker ",
      className: "text-green-300",
    },
    {
      text: "Coder </>  ",
      className: "text-green-300",
    },
    {
      text: "Developer ",
      className: "text-green-300",
    },
    {
      text: "Self Motivated ",
      className: "text-green-300",
    },
    {
      text: "Web Developer </> ",
      className: "text-green-300",
    },
  ];

  const handleContactMeClick = () => {
    window.location.href = "mailto:leo.radtke.info@gmail.com";
  };

  useEffect(() => {
    // Setze showContent nach einer Verzögerung, um die Animation zu ermöglichen
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 100); // Ändere die Verzögerung nach Bedarf
    return () => clearTimeout(timer); // Aufräumen, wenn die Komponente unmontiert wird
  }, []);

  return (
   
    <div className={`${styles.content} ${showContent ? styles.show : ""}`}>
      <div className="mt-[200px] ml-[210px] sm:mt-[300px] sm:ml-[210px] text-5xl font-bold text-black">
        <h1>
          Hi, I am Leo!
          <span className="text-indigo-600"> 
            <TypewriterEffectSmooth words={words} />
          </span>
        </h1>
      </div>
      <div className={`${styles.content} ${showContent ? styles.show : ""}`}>
      <div className="mt-[-200px] ml-[210px] text-black font-bold">
        <p className="text-white-700 text-sm sm:text-base font-medium">
          Welcome to Leos{" "}
          <span className="text-blue-300 font-bold">Portfolio.</span>
        </p>
      </div>
      <div
        className="text-black mt-[200px] ml-[210px] sm:mt-[200px] sm:ml-[210px]"
      >
        <p>
          Leo is 14 years old and has been programming since he was 10. <br />
          He is proficient in several programming languages, including Python,{" "}
          <br />
          and has experience in web development (backend and frontend). <br />
          Specifically, he works with React, TypeScript, JavaScript, HTML,
          CSS, and Python.
        </p>
      </div>
      <div className={`${styles.buttonContainer}`}>
      <div className="mt-[30px] ml-[210px]">
        <Button
          className={`text-black rounded-full hover:bg-blue-200 hover:shadow-xl hover:shadow-blue-300 ${showContent ? styles.slideIn : ""}`}
          variant="outline"
          onClick={handleContactMeClick}
        >
          Contact Me
        </Button>
      </div>
      </div>
    </div>

    <div  className={`ml-[340px] mt-[44px] ${showContent ? styles.slideIn : ""}`}>
      <a href="https://github.com/Leo17220310">
        <img src="/git.png" alt="Git" width={30} height={30} />
        </a>
      </div>

      <div  className={`ml-[390px] mt-[-29px] ${showContent ? styles.slideIn : ""}`}>
      <a href="https://www.instagram.com/leo22031017/">
        <img src="/instaa.png" alt="Git" width={30} height={30} />
        </a>
      </div>
 
      <div className={`w-[700px] h-[800px] mt-[-410px] ml-[1100px] ${showContent ? styles.slideIn : ""}`}>
        <img
          src="/coder.png"
          className="small-logo "
          alt="Coder Image"
          width={700}
          height={600}
        />
      </div>
    </div>

  );
};

export default Intruductions;
