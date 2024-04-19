import React, { useRef, useState, useEffect } from "react";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
import { Button } from "@/components/ui/button";
import { StickyScroll } from "../components/ui/scroll-reveal";
import { RefObject } from "react";
import { BentoGrid, BentoGridItem } from "../components/ui/BentoGridItem";
import Gist from "react-gist";

interface SidebarContent {
  title: string;
  gistId: string;
}

export default function Home() {
  const webDevelopmentRef = useRef<HTMLDivElement>(null);
  const pythonProjectsRef = useRef<HTMLDivElement>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarContent, setSidebarContent] = useState<SidebarContent | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (sidebarOpen && target.closest && !target.closest(".sidebar")) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [sidebarOpen]);

  const scrollToRef = (ref: RefObject<HTMLDivElement> | null) => {
    if (ref && ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop - window.innerHeight / 10.9,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleItemClick = (item: SidebarContent) => {
    setSidebarContent(item);
    setSidebarOpen(true);
  };

  const words = [
    {
      text: "Programmer",
      className: "text-blue-300",
    },
  ];

  const handleContactMeClick = () => {
    window.location.href = "mailto:leoradtke@outlook.de";
  };

  const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
  );

  const items = [
    {
      title: "Scrape API of NFT market",
      description:
        "My Python program utilizes an API to conduct NFT analysis within the NFT market. Click on this field to show a code snippet ",
      header: (
        <img
          src="\api.png"
          className="w-[400px] h-[] mt-[40px]"
          alt="Header Image"
        />
      ),
      gistId: "2eb584a08d225bff5c9481ab5733ec7d",
    },
    {
      title: "Ceaser encryption ",
      description:
        "This code can proficiently encrypt a text file, enabling instant encryption upon request.",
      header: (
        <img
          src="\ceaserimage.png"
          className="w-[300px] h-[] mt-[-5px]"
          alt="Header Image"
        />
      ),
      gistId: "your-gist-id-for-ceaser-encryption",
    },

    {
      title: "text",
      description:
        "This code can proficiently encrypt a text file, enabling instant encryption upon request.",
      header: (
        <img
          src="\ceaserimage.png"
          className="w-[300px] h-[] mt-[-5px]"
          alt="Header Image"
        />
      ),
      gistId: "your-gist-id-for-ceaser-encryption",
    },
    // Weitere Elemente hier einfügen...
  ];
  

  const content = [
    {
      title: "Get Summary",
      description:
        "Explore our dynamic platform! Utilizing Octo AI API, we merge text and images from PDFs seamlessly. With 5000 lines of code, continual improvements ensure optimal user experience. My best Website. Here's the Link: https://ai-tool.kuehnle.me/",
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

      <div className="p-10 mx-auto mt-[100px]" style={{ maxWidth: "1000px" }}>
        <StickyScroll content={content} />
      </div>

      <div
        ref={pythonProjectsRef}
        className="ml-[830px] mt-[150px] text-white font-bold text-4xl "
      >
        <h3 className="underline">Python-Projects</h3>
      </div>

      {/* Hier das BentoGrid einfügen */}
      <div
        className="p-10  30mt-[50px] ml-[450px]"
        style={{ maxWidth: "1000px" }}
      >
        <BentoGrid className="max-w-4xl mx-auto">
          {items.map((item, i) => (
            <div
              key={i}
              className={
                i === 3 || i === 6
                  ? "md:col-span-2 cursor-pointer"
                  : "cursor-pointer"
              }
              onClick={(e) => {
                e.stopPropagation(); // Klickereignis stoppen
                handleItemClick(item); // Aktualisiert: handleItemClick aufrufen, um die Seitenleiste zu öffnen
              }}
            >
              <BentoGridItem
                title={item.title}
                description={item.description}
                header={item.header}
                className={i === 3 || i === 6 ? "md:col-span-2" : ""}
              />
            </div>
          ))}
        </BentoGrid>
      </div>

      {/* Hier die Seitenleiste einfügen */}
      {sidebarOpen && (
        <div
          className="bg-white fixed left-0 top-0 h-full w-1/4 overflow-y-auto"
          style={{ width: "25%" }}
        >
          <div className="mt-[10px] ml-[400px]">
            <button
              className="flex items-center px-3 py-2 bg-white rounded-full hover:bg-gray-200"
              onClick={() => setSidebarOpen(false)} // Schließe die Seitenleiste beim Klick auf den Button
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 text-gray-600" // Geändert auf w-8 und h-8 für größeres Symbol
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 9.293a1 1 0 011.414 0l4 4a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 111.414 1.414l-4 4z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          {/* Dynamischer Seitenleisteninhalt */}
          {sidebarContent && (
            <>
              <h3 className="font-bold mt-[-40px] ml-4 text-2xl">
                {sidebarContent.title}
              </h3>
              <div className="gist mt-4">
                <Gist id={sidebarContent.gistId} />
              </div>
            </>
          )}
        </div>
      )}
      <nav className="fixed top-0 left-0 right-0 text-white flex items-center justify-center py-4 font-bold text-[19px] ">
        <ul className="flex space-x-11">
          <li
            className="cursor-pointer hover:text-blue-300 shadow-xl"
            onClick={() => scrollToRef(null)}
          >
            Home
          </li>
          <li
            className="cursor-pointer hover:text-blue-300 shadow-xl"
            onClick={() => scrollToRef(webDevelopmentRef)}
          >
            Web-Development
          </li>
          <li
            className="cursor-pointer hover:text-blue-300 shadow-xl"
            onClick={() => scrollToRef(pythonProjectsRef)}
          >
            Python-Projects
          </li>
          <li
            className="cursor-pointer hover:text-blue-300 shadow-xl"
            onClick={() => scrollToRef(null)}
          >
            Experience
          </li>
        </ul>
      </nav>
    </>
  );
}
