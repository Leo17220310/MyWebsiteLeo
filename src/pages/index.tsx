import { useEffect, useState } from "react";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
import { Button } from "@/components/ui/button";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const words = [
    {
      text: "Programmer",
      className: "text-indigo-600",
    },
  ];

  const [, setShowTypewriter] = useState(false);

  useEffect(() => {
    // Show typewriter effect after component mounts
    setShowTypewriter(true);
  }, []);

  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <div className="custom-margin text-5xl font-bold text-white">
        <h1>
          Hi,I'm Leo,{" "}
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
          My name is Leo and I am 14 years old.<br />I have been programming
          since I was 10 <br></br>and have been influenced in many areas of computer
          science.<br />I started with game programming, I continued with
          Python and many <br />programming languages.<br />After that I started
          with the backend and frontend of web development. <br></br> React, Typescript,
          JavaScript, HTML, CSS are common things I work with.
        </p>
      </div>

      <div className="custom-button">
        <Button variant="outline">Contact Me</Button>
      </div>

      
      <div className="custom-margin-image-2">
        <img src="\programmer-image.jpg" className="small-logo" />
      </div>



    </>
  );
}
