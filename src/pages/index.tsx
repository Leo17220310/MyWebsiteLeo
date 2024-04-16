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
        "Explore our dynamic platform! Utilizing Octo AI API, we merge text and images from PDFs seamlessly. With 5000 lines of code, continual improvements ensure optimal user experience.My best Website. Here's the Link: https://ai-tool.kuehnle.me/",
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
      title: "Old Portfolio",
      description:
        "Welcome to my old portfolio, a labor of love hosted on GitHub. Crafted as a fun project to refine my HTML and CSS skills, it showcases my journey in web development. Explore its pages to witness the evolution of my abilities and the projects I've undertaken. Though it's a relic of the past, it remains a testament to my dedication to mastering the craft. Here's the Link: https://leo17220310.github.io/Portfolio/ .",
      content: (
        <div className="h-full w-full">
          <img
            src="\Portfolio.png"
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

      <div className="mt-[300px] ml-[210px] text-5xl font-bold text-white">
        <h1>
          Hi, I'm Leo !{" "}
          <span className="text-indigo-600 ">
            {" "}
            <TypewriterEffectSmooth words={words} />{" "}
          </span>{" "}
        </h1>
      </div>

      <div className="mt-[-200px] ml-[210px] text-white font-bold">
        <p className="text-white-700 text-sm sm:text-base font-bold ">
          Create your Program like a pro.
        </p>
      </div>

      <div className="text-white  mt-[200px] ml-[210px]">
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
        <Button variant="outline" onClick={handleContactMeClick}>
          Contact Me
        </Button>
      </div>

      <div className="w-[400px] h-[400px] mt-[-400px] ml-[1200px]">
        <img src="\programmer-image.jpg" className="small-logo" />
      </div>

      <div
        ref={webDevelopmentRef}
        className="mt-[281px] ml-[200px] text-4xl font-bold text-white underline"
      >
        <h2>Web-Development</h2>
      </div>

      <div className="p-10">
        <StickyScroll content={content} />
      </div>

      <div className="m-[200px] text-white font-bold text-4xl">
        <h3>Python-Projects</h3>
      </div>

    </>
  );
}
