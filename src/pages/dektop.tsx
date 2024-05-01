import React, { useRef, useState, useEffect } from "react";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
import { Button } from "@/components/ui/button";
import { StickyScroll } from "../components/ui/scroll-reveal";
import { RefObject } from "react";
import { BentoGrid, BentoGridItem } from "../components/ui/BentoGridItem";
import Gist from "react-gist";
import { BackgroundGradient } from "../components/ui/experience";
import Image from "next/image";
import ReactDOM from 'react-dom';

interface SidebarContent {
  title: string;
  gistId: string;
}

export default function Home() {
  const webDevelopmentRef = useRef<HTMLDivElement>(null);
  const pythonProjectsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarContent, setSidebarContent] = useState<SidebarContent | null>(
    null
  );

  // Use EFFECT
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

  // NAVBAR
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

  // ITEM CLICK
  const handleItemClick = (item: SidebarContent) => {
    setSidebarContent(item);
    setSidebarOpen(true);
  };
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

  // ITEMS CONST
  const items = [
    {
      title: "Scrape API of NFT market",
      description:
        "My Python program utilizes an API to conduct NFT analysis within the NFT market. Click on this field to show a code snippet. ",
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
      gistId: "0d02ac3114b97b95a6786138945c3114",
    },

    {
      title: "Christmas Tree ",
      description:
        "This code creates a christmas tree with the turtle function.",
      header: (
        <img
          src="\christmas.png"
          className="w-[200px] h-[145px] mt-[-5px] ml-[30px]"
          alt="Header Image"
        />
      ),
      gistId: "82262b2154f2c7047b538828beab9b78",
    },
    // Weitere Elemente hier einfügen...
  ];
  // CONTENT CONST
  const content = [
    {
      title: "Get Summary",
      description:
        "Explore our dynamic platform! Utilizing Octo AI API, we merge text and images from PDFs seamlessly. With 5000 lines of code, continual improvements ensure optimal user experience. My best Website. Here's the Link: https://summarizer.kuehnle.me/",
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
        "Welcome to my old portfolio, a labor of love hosted on GitHub. Crafted as a fun project to refine my HTML and CSS skills, it showcases my journey in web development. Explore its pages to witness the evolution of my abilities and the projects I've undertaken. Though it's a relic of the past, it remains a testament to my dedication to mastering the craft. Here's the Link: https://leo17220310.github.io/Portfolio/",
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
        <Button
          className="text-black"
          variant="outline"
          onClick={handleContactMeClick}
        >
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

      <div
        className="p-10  mt-[200px] ml-[450px]"
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

      <div ref={experienceRef}>
        <h3 className="font-bold text-white underline text-4xl text-center mt-[300px]">
          Experience
        </h3>
      </div>

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
      <div className="mt-[200px] ">
        <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
          <Image
            src={`/gamedev.png`}
            alt="jordans"
            height="400"
            width="400"
            className="object-contain"
          />
          <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
            Game development
          </p>

          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            My journey in game development started at the age of 10. Armed with
            curiosity, I delved into programming using C#. I crafted numerous
            games, from 3D platformers to 2D jump and runs. Each project was a
            blend of trial, error, and triumph, fueling my passion for creating
            immersive digital experiences.
          </p>
        </BackgroundGradient>
      </div>

      <div className="mt-[-680px] ml-[540px] ]">
        <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
          <Image
            src={`/webdevelopment.png`}
            alt="jordans"
            height="400"
            width="400"
            className="object-contain"
          />
          <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
            Web-Development
          </p>

          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            After diving into game development, I transitioned to web
            development. I honed my skills in HTML, CSS, and JavaScript,
            mastering the fundamentals. Progressing further, I built larger
            applications using TypeScript, React, HTML, and Tailwind CSS.
            Additionally, I gained experience working with various APIs,
            enhancing my versatility in creating dynamic web solutions.
          </p>
        </BackgroundGradient>
      </div>

      <div className="mt-[-665px] ml-[1070px] ]">
        <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
          <Image
            src={`/pyhton.png`}
            alt="jordans"
            height="400"
            width="400"
            className="object-contain"
          />
          <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
            Python
          </p>

          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Following my journey in web development, I ventured into Python.
            With Python, I delved into analyzing the NFTGO market, conducting
            API scrapes, and mastering the language's fundamentals. Python
            quickly became my forte, as I adeptly wielded it to create various
            applications, from simple loops to more complex projects.
          </p>
        </BackgroundGradient>
      </div>

      <nav className="fixed top-0 left-0 right-0 text-white ml-[650px]  py-4 font-bold text-[19px] ">
        <ul className="flex space-x-11">
          <li
            className="cursor-pointer hover:text-blue-300 "
            onClick={() => scrollToRef(null)}
          >
            Home
          </li>
          <li
            className="cursor-pointer hover:text-blue-300 "
            onClick={() => scrollToRef(webDevelopmentRef)}
          >
            Web-Development
          </li>
          <li
            className="cursor-pointer hover:text-blue-300"
            onClick={() => scrollToRef(pythonProjectsRef)}
          >
            Python-Projects
          </li>
          <li
            className="cursor-pointer hover:text-blue-300 "
            onClick={() => scrollToRef(experienceRef)}
          >
            Experience
          </li>
        </ul>

        <a
          href="https://github.com/Leo17220310"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="github.png"
            alt="Git Repo"
            className="h-[40px] ml-[1000px] mt-[-30px]"
          ></img>
        </a>

        <a href="https://www.instagram.com/leo22031017/" target="_blank" rel="noopener noreferrer">
          <img
            src="instagram.png"
            alt="Instagram"
            className="h-[40px] ml-[1060px] mt-[-40px]"
          ></img>
        </a>

        <a href="tel:+49 15143131349" className="inline-block md:hidden">
          <img
            src="phone-call.png"
            alt="Call"
            className="h-40 ml-1120 mt-[-40px]"
          />
        </a>

        <a
          href="#"
          onClick={() => {
            window.location.href = "mailto:leoradtke@outlook.de";
            return false;
          }}
        >
          <img
            src="gmail.png"
            alt="Gmail"
            className="h-[45px] ml-[1120px] mt-[-42px]"
          />
        </a>
      </nav>

      <div className="flex justify-center items-center bottom-0 left-0 w-full bg-black text-white py-100">
        <h3 className="text-center">Credits:</h3>
        <div className="flex flex-wrap justify-center">
          <a
            href="https://www.flaticon.com/search?word=email"
            className="hover:underline mx-4"
          >
            Icon Credit: Pixel perfect - Flaticon
          </a>
          <a
            href="https://www.flaticon.com/search?word=phone"
            className="hover:underline mx-4"
          >
            Icon Credit: iconmas - Flaticon
          </a>
          <a
            href="https://www.flaticon.com/search?word=instagram"
            className="hover:underline mx-4"
          >
            Icon Credit: Freepik - Flaticon
          </a>
          <a
            href="https://www.flaticon.com/search?word=github&k=1714497903038&sign-up=google"
            className="hover:underline mx-4"
          >
            Icon Credit: Dave Gandy - Flaticon
          </a>
        </div>
      </div>

      <div
      className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      style={{ pointerEvents: "none" }}
    >
      <div
        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 dar:opacity-70 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        style={{
          clipPath:
            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
        }}
      />
    </div>
    </>
  );
}





// LINKS FOR CREDITS: 


//https://www.flaticon.com/search?word=email
//https://www.flaticon.com/search?word=phone
//https://www.flaticon.com/search?word=social%20media
//https://www.flaticon.com/search?word=github&k=1714497903038&sign-up=google
