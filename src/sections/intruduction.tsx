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
    <>
      <div className="hidden md:block">
        <div className={`${styles.content} ${showContent ? styles.show : ""}`}>
          <div className="mt-[200px] ml-[210px] sm:mt-[300px] sm:ml-[210px] text-5xl font-bold text-black ">
            <h1>
              Hi, I am Leo!
              <span className="text-indigo-600">
                <TypewriterEffectSmooth words={words} />
              </span>
            </h1>
          </div>
          <div
            className={`${styles.content} ${showContent ? styles.show : ""}`}
          >
            <div className="mt-[-200px] ml-[210px] text-black font-bold">
              <p className="text-white-700 text-sm sm:text-base font-medium">
                Welcome to Leos{" "}
                <span className="text-blue-300 font-bold">Portfolio.</span>
              </p>
            </div>
            <div className="text-black mt-[200px] ml-[210px] sm:mt-[200px] sm:ml-[210px]">
              <p>
                Leo is 14 years old and has been programming since he was 10.{" "}
                <br />
                He is proficient in several programming languages, including
                Python, <br />
                and has experience in web development (backend and frontend).{" "}
                <br />
                Specifically, he works with React, TypeScript, JavaScript, HTML,
                CSS, and Python.
              </p>
            </div>
            <div className={`${styles.buttonContainer}`}>
              <div className="mt-[30px] ml-[210px]">
                <Button
                  className={`text-black rounded-full hover:bg-blue-200 hover:shadow-xl hover:shadow-blue-300 ${
                    showContent ? styles.slideIn : ""
                  }`}
                  variant="outline"
                  onClick={handleContactMeClick}
                >
                  Contact Me
                </Button>
              </div>
            </div>
          </div>

          <div
            className={`ml-[340px] mt-[44px] ${
              showContent ? styles.slideIn : ""
            }`}
          >
            <a href="https://github.com/Leo17220310">
              <img src="/git.png" alt="Git" width={30} height={30} />
            </a>
          </div>

          <div
            className={`ml-[390px] mt-[-29px] ${
              showContent ? styles.slideIn : ""
            }`}
          >
            <a href="https://www.instagram.com/leo22031017/">
              <img src="/instaa.png" alt="Git" width={30} height={30} />
            </a>
          </div>

          <div
            className={`w-[700px] h-[800px] mt-[-410px] ml-[1100px] ${
              showContent ? styles.slideIn : ""
            }`}
          >
            <img
              src="/coder.png"
              className="small-logo "
              alt="Coder Image"
              width={700}
              height={600}
            />
          </div>
        </div>
      </div>{" "}
      <div className="block md:hidden">
        <div className={`${styles.content} ${showContent ? styles.show : ""}`}>
          <div className="mt-[100px] text-center text-5xl font-bold text-black ">
            <h1>
              Hi, I am Leo!
              <span className="text-indigo-600 flex justify-center ">
                <TypewriterEffectSmooth words={words} />
              </span>
            </h1>
          </div>
          <div
            className={`${styles.content} ${showContent ? styles.show : ""}`}
          >
            <div className="mt-[-200px] ml-[210px] text-black font-bold ">
              <p className="text-white-700 text-sm sm:text-base font-medium ml-[-90px]">
                Welcome to Leos{" "}
                <span className="text-blue-300 font-bold">Portfolio.</span>
              </p>
            </div>
          </div>
        </div>

     

        <div className="text-black mt-[200px] ml-[60px] mr-[50px] sm:mt-[200px] sm:ml-[210px] mb-4 ">
        <hr className="mb-4"></hr>
          <p >
            Leo is 14 years old and has been programming since he was 10. <br />
            He is proficient in several programming languages, including Python,{" "}
            <br />
            and has experience in web development (backend and frontend). <br />
            Specifically, he works with React, TypeScript, JavaScript, HTML,
            CSS, and Python.
          </p>
        </div>
        <hr className="block md:hidden"></hr>
        <div>
          <div className="mt-[40px] ml-[60px] md:hidden block">
            <Button
              className={`text-black rounded-full hover:bg-blue-200 hover:shadow-xl hover:shadow-blue-300 ${
                showContent ? styles.slideIn : ""
              }`}
              variant="outline"
              onClick={handleContactMeClick}
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>
      
      <div
        className={`ml-[200px] mt-[-35px] ${showContent ? styles.slideIn : ""}`}
      >
        <a href="https://github.com/Leo17220310">
          <img src="/git.png" alt="Git" width={30} height={30} />
        </a>
      </div>
      <div
        className={`ml-[250px] mt-[-29px]  ${showContent ? styles.slideIn : ""}`}
      >
        <a href="https://www.instagram.com/leo22031017/">
          <img src="/instaa.png" alt="Git" width={30} height={30} />
        </a>
      </div>
    
      <div className=" block md:hidden">
   
        <span className="ml-[175px] mt-[60px] mb-4 inline-flex justify-center items-center size-[62px] rounded-full border-4 border-blue-200 bg-blue-200 text-blue-300 dark:bg-yellow-700 dark:border-yellow-600 dark:text-yellow-100">
          <svg className="flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
          </svg>
        </span>
           
        <p className="p-4 m-[10px] border-4 mt-[-10px]  border-blue-300">
          Open this Website on the Desktop to see the full version. At the
          moment the website is not yet ready on both screen sizes. But it is
          coming soon. <span className="font-bold text-blue-300"> Stay tuned! :) </span> 
        </p>
      </div>{" "}
    </>
  );
};

export default Intruductions;
