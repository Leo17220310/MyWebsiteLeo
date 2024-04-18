import React, { useRef } from "react";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
import { Button } from "@/components/ui/button";
import { StickyScroll } from "../components/ui/scroll-reveal";
import { RefObject } from "react";
import { BentoGrid, BentoGridItem } from "../components/ui/BentoGridItem";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export default function Home() {
  // Refs für die Verweise zu den Abschnitten der Seite
  const webDevelopmentRef = useRef<HTMLDivElement>(null);
  const pythonProjectsRef = useRef<HTMLDivElement>(null);

  // Scroll-Funktion für das Scrollen zu einem bestimmten Abschnitt der Seite
  const scrollToRef = (ref: RefObject<HTMLDivElement> | null) => {
    if (ref && ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop - window.innerHeight / 15,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" }); // Wenn ref null ist, scrollt zur Spitze der Seite
    }
  };

  const words = [
    {
      text: "Programmer",
      className: "text-blue-300",
    },
  ];

  // CONTACT ME BUTTON FUNCTION
  const handleContactMeClick = () => {
    window.location.href = "mailto:leoradtke@outlook.de";
  };

  const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
  );

  const items = [
    {
      title: "The Dawn of Innovation",
      description: "Explore the birth of groundbreaking ideas and inventions.",
      header: <Skeleton />,
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Digital Revolution",
      description: "Dive into the transformative power of technology.",
      header: <Skeleton />,
      icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Art of Design",
      description: "Discover the beauty of thoughtful and functional design.",
      header: <Skeleton />,
      icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Power of Communication",
      description:
        "Understand the impact of effective communication in our lives.",
      header: <Skeleton />,
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Pursuit of Knowledge",
      description: "Join the quest for understanding and enlightenment.",
      header: <Skeleton />,
      icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    },
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

      <div
        className="p-10  30mt-[50px] ml-[450px]"
        style={{ maxWidth: "1000px" }}
      >
        <BentoGrid className="max-w-4xl mx-auto">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            />
          ))}
        </BentoGrid>
      </div>
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
