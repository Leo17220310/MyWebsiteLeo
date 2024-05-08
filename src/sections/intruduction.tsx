

import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
import { Button } from "@/components/ui/button";

const Intruductions= () => {

  // WORDS
  const words = [
    {
      text: "Programmer",
      className: "text-blue-300",
    },
  ];

  //CONTACT BUTTON FUNKTION

  const handleContactMeClick = () => {
    window.location.href = "mailto:leoradtke@outlook.de";
  };

  return (
    <>
 
  


      <div className="mt-[200px] ml-[210px] sm:mt-[300px] sm:ml-[210px] text-5xl font-bold text-black">
        {" "}
        <h1>
          Hi, I'm Leo !{" "}
          <span className="text-indigo-600 ">
            {" "}
            <TypewriterEffectSmooth words={words} />{" "}
          </span>{" "}
        </h1>
      </div>

      <div className="mt-[-200px] ml-[210px] text-black font-bold">
        {" "}
        <p className="text-white-700 text-sm sm:text-base font-bold ">
          Create your <span>Application</span> like a pro.
        </p>
      </div>

      <div className="text-black  mt-[200px] ml-[210px] sm:mt-[200px] sm:ml-[210px] ">
        {" "}
        <p>
          Leo is 14 years old and has been programming since he was 10. <br />
          He is proficient in several programming languages, including Python,{" "}
          <br />
          and has experience in web development (backend and frontend). <br />
          Specifically, he works with React, TypeScript, JavaScript, HTML and
          CSS and Python.
        </p>
      </div>

      <div className="mt-[30px] ml-[210px]">
        <Button
          className="text-black"
          variant="outline"
          onClick={handleContactMeClick}
        >
          Contact Me
        </Button>
      </div>

      <div className="w-[550px] h-[450px] mt-[-500px] ml-[0px] sm:mt-[-350px] sm:ml-[1100px]">
        <img src="\coder.png" className="small-logo" />
      </div>

      
    </>
  );
};

export default Intruductions;
