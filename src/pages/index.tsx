import { MutableRefObject, useEffect, useRef } from "react";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
import { Button } from "@/components/ui/button";
import { StickyScroll } from "../components/ui/scroll-reveal";
import { Menubar, MenubarTrigger, MenubarMenu } from "@/components/ui/menubar";
import { RefObject } from "react";

export default function Home() {
  // Refs für die Verweise zu den Abschnitten der Seite
  const webDevelopmentRef = useRef<HTMLDivElement>(null);
  const pythonProjectsRef = useRef<HTMLDivElement>(null);

  // Scroll-Funktion für das Scrollen zu einem bestimmten Abschnitt der Seite
  const scrollToRef = (ref: RefObject<HTMLDivElement> | null) => {
    if (ref && ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop - window.innerHeight / 4,
        behavior: "smooth",
      });
    }
  };

  const words = [
    {
      text: "Programmer",
      className: "text-yellow-200",
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
        className="mt-[300px] text-4xl font-bold text-white underline text-center"
      >
        <h2>Web-Development</h2>
      </div>

      <div className="p-10 mx-auto mt-[0px]" style={{ maxWidth: "1000px" }}>
        <StickyScroll content={content} />
      </div>

      <div
        ref={pythonProjectsRef}
        className="ml-[830px] mt-[100px] text-white font-bold text-4xl mb-[500px] "
      >
        <h3 className="underline">Python-Projects</h3>
      </div>

      <Menubar className="fixed  mt-[-2170px] ml-[1200px] pr-10 text-white ">
        <MenubarMenu>
          <MenubarTrigger className="text-lg">
            <a href="#top">Home</a>
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger
            className="text-lg"
            onClick={() => scrollToRef(webDevelopmentRef)}
          >
            <a href="#webDevelopment">Web-Development</a>
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger
            className="text-lg"
            onClick={() => scrollToRef(pythonProjectsRef)}
          >
            Python-Projects
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="text-lg">Experience</MenubarTrigger>
        </MenubarMenu>
      </Menubar>
    </>
  );
}
