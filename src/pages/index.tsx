import { useEffect, useRef, useState } from "react";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
import { Button } from "@/components/ui/button";
import React from "react";
import { StickyScroll } from "../components/ui/scroll-reveal";
import Image from "next/image";

export default function Home() {
  // TYPEWRITER EFFECT
  const webDevelopmentRef = useRef(null);

  const words = [
    {
      text: "Programmer",
      className: "text-indigo-600",
    },
  ];

  // CONTACT ME BUTTON FUNCTION
  const handleContactMeClick = () => {
    window.location.href = "mailto:leoradtke@outlook.de";
  };

  const content = [
    {
      title: "Get Summary",
      description:
        "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
      content: (
        <div className="h-full w-full">
          <img
            src="\screenWebsiteSummary.png"
            className="w-96 h-100"
            alt="Your first image alt text"
          />
        </div>
      ),
    },
    {
      title: "Altes Portfolio",
      description:
        "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
      content: (
        <div className="h-full w-full">
          <img
            src="\programmer-image.jpg"
            className="h-full w-full object-cover"
            alt="Your second image alt text"
          />
        </div>
      ),
    },
  ];
  
  

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

      <div
        ref={webDevelopmentRef}
        className="custom-margin text-4xl font-bold text-white web-development-heading"
      >
        <h2>Web-Development</h2>
      </div>

      <div className="p-10">
        <StickyScroll content={content} />
      </div>

      <div className="python-Heading text-white font-bold text-4xl">
        <h3>Python-Projects</h3>
      </div>
    </>
  );
}
