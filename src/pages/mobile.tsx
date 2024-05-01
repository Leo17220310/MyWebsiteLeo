import React, { useRef, useState } from "react";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
import { Button } from "@/components/ui/button";
import { StickyScroll } from "@/components/ui/scroll-reveal";
import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGridItem";
import Gist from "react-gist";

interface SidebarContent {
  title: string;
  gistId: string;
}

function MobileDevices() {
  const pythonProjectsRef = useRef<HTMLDivElement>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarContent, setSidebarContent] = useState<SidebarContent | null>(
    null
  );

  const handleContactMeClick = () => {
    window.location.href = "mailto:leoradtke@outlook.de";
  };

  const handleItemClick = (item: SidebarContent) => {
    setSidebarContent(item);
    setSidebarOpen(true);
  };

  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };

  const words = [
    {
      text: "Programmer",
      className: "text-blue-300 text-4xl",
    },
  ];
  const content = [
    {
      title: "Get Summary",
      description:
        "Explore our dynamic platform! Utilizing Octo AI API, we merge text and images from PDFs seamlessly. With 5000 lines of code, continual improvements ensure optimal user experience. My best Website. Here's the Link: https://summarizer.kuehnle.me/",
      content: (
        <>
          <p>
            Explore our dynamic platform! Utilizing Octo AI API, we merge text
            and images from PDFs seamlessly. With 5000 lines of code, continual
            improvements ensure optimal user experience. My best Website. Here's
            the Link:{" "}
            <a href="https://ai-tool.kuehnle.me/">
              https://ai-tool.kuehnle.me/
            </a>
          </p>
          <img
            src="\screenWebsiteSummary.png"
            className="w-96 h-100 mx-auto mt-4"
            alt="Your first image alt text"
          />
        </>
      ),
    },
    {
      title: "Old Portfolio",
      description:
        "Welcome to my old portfolio, a labor of love hosted on GitHub. Crafted as a fun project to refine my HTML and CSS skills, it showcases my journey in web development. Explore its pages to witness the evolution of my abilities and the projects I've undertaken. Though it's a relic of the past, it remains a testament to my dedication to mastering the craft. Here's the Link: https://leo17220310.github.io/Portfolio/ .",
      content: (
        <>
          <p>
            Welcome to my old portfolio, a labor of love hosted on GitHub.
            Crafted as a fun project to refine my HTML and CSS skills, it
            showcases my journey in web development. Explore its pages to
            witness the evolution of my abilities and the projects I've
            undertaken. Though it's a relic of the past, it remains a testament
            to my dedication to mastering the craft. Here's the Link:{" "}
            <a href="https://leo17220310.github.io/Portfolio/">
              https://leo17220310.github.io/Portfolio/
            </a>
          </p>
          <img
            src="\Portfolio.png"
            className="w-full object-cover mt-4"
            alt="Your second image alt text"
          />
        </>
      ),
    },
  ];

  const items = [
    {
      title: "Scrape API of NFT market",
      description:
        "My Python program utilizes an API to conduct NFT analysis within the NFT market. Click on this field to show a code snippet. ",
      header: (
        <img src="\api.png" className="w-full h-auto" alt="Header Image" />
      ),
      gistId: "2eb584a08d225bff5c9481ab5733ec7d",
    },
    {
      title: "Ceaser encryption",
      description:
        "This code can proficiently encrypt a text file, enabling instant encryption upon request.",
      header: (
        <img
          src="\ceaserimage.png"
          className="w-full h-auto"
          alt="Header Image"
        />
      ),
      gistId: "0d02ac3114b97b95a6786138945c3114",
    },
    {
      title: "Christmas Tree",
      description:
        "This code creates a christmas tree with the turtle function.",
      header: (
        <img
          src="\christmas.png"
          className="w-full h-auto"
          alt="Header Image"
        />
      ),
      gistId: "82262b2154f2c7047b538828beab9b78",
    },
    // Weitere Elemente hier einfügen...
  ];

  return (
    <>
      {/* Hintergrund */}
      <div style={{ backgroundColor: "black", minHeight: "100vh" }}>
        {/* Hier können weitere Inhalte eingefügt werden, die auf dem schwarzen Hintergrund erscheinen sollen */}
      </div>
      {/* Sidebar */}
      <div
        className="fixed top-0 left-0 bg-white h-full z-30 overflow-hidden"
        style={{ width: sidebarOpen ? "75%" : "0", transition: "width 0.5s ease" }}
        onClick={handleSidebarClose}
      >
        {/* Sidebar-Inhalt hier einfügen */}
        {sidebarContent && (
          <div>
            <button onClick={handleSidebarClose}>Close Sidebar</button>
            <a className="mt-[300px] ">Click Here to close</a>
            {/* Hier den Inhalt der Sidebar einfügen */}
            <p>{sidebarContent.title}</p>
            <Gist id={sidebarContent.gistId} />
          </div>
        )}
      </div>
      {/* Weißer Kreis */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-[20rem] h-[20rem] mt-[-100px] bg-white rounded-full flex justify-center items-center">
        <div className="text-4xl font-bold text-black ml-[20px]">
          <h1>
            Hi, I'm Leo !{" "}
            <span className="text-indigo-600 ">
              {" "}
              <TypewriterEffectSmooth words={words} />{" "}
            </span>{" "}
          </h1>
        </div>
      </div>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 text-white py-4 font-bold text-[19px] ml-[10px] mr-[10px]  ">
        <ul className="flex space-x-5">
          <li className="cursor-pointer hover:text-blue-300 text-sm ">Home</li>
          <li className="cursor-pointer hover:text-blue-300 text-sm ">Web-Development</li>
          <li className="cursor-pointer hover:text-blue-300 text-sm">Python-Projects</li>
          <li className="cursor-pointer hover:text-blue-300  text-sm">Experience</li>
        </ul>
      </nav>
      {/* Social Media Icons */}
      <nav className="fixed top-0 right-0 text-white flex flex-col gap-4 m-4 mt-[45px]">
        <a
          href="https://github.com/Leo17220310"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="github.png" alt="Git Repo" className="h-[40px]" />
        </a>

        <a
          href="https://www.instagram.com/leo22031017/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="instagram.png" alt="Instagram" className="h-[40px]" />
        </a>

        <a href="tel:+49 15143131349" className="inline-block md:hidden">
          <img src="phone-call.png" alt="Call" className="h-11" />
        </a>
      </nav>
      {/* Über mich */}
      <div className="mt-[-350px] ml-[20px] mr-[20px] p-4 border-2 border-white rounded-lg shadow-lg">
        <p className="text-white">
          Leo ist 14 Jahre alt und programmiert seit seinem 10. Lebensjahr. Er ist
          versiert in mehreren Programmiersprachen, darunter Python, <br />
          und hat Erfahrung in der Webentwicklung (Backend und Frontend). <br />
          Speziell arbeitet er mit React, TypeScript, JavaScript, HTML und
          CSS und Python.
        </p>
      </div>
      <div className="mt-8 ml-[20px]">
        <Button
          className="text-black"
          variant="outline"
          onClick={handleContactMeClick}
        >
          Kontaktiere mich
        </Button>
      </div>

      <h2 className="font-bold text-center mt-20 text-3xl text-indigo-600 underline">
        Web-Development
      </h2>
      <div className="p-10 mx-auto mt-4 mb-[240px]" style={{ maxWidth: "1000px" }}>
        <StickyScroll content={content} />
      </div>
      <div className="container mx-auto mt-8">
        {/* Hier kann zusätzlicher Inhalt eingefügt werden */}
      </div>
      {/* Portfolio */}
      <section className="container mx-auto mt-20">
        <h2 className="font-bold text-3xl text-center text-indigo-600 underline">
          Python-Projekte
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg"
              onClick={() => handleItemClick(item)}
            >
              <div>{item.header}</div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <footer className="container mx-auto mt-20">
        {/* Hier kann der Footer eingefügt werden */}
      </footer>
    </>
  );
}

export default MobileDevices;
