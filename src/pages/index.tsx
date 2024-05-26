import React, { useEffect } from "react";
import Intruduction from "../../src/sections/intruduction";
import BgAnimation from "../../src/sections/backgroundAnimation";
import WebDev from "../../src/sections/webdev";
import NavBar from "../components/ui/floating-navbar";
import Python from "../sections/python";
import Footer from "../sections/footer";
import ParticlesBackground from "@/components/ui/particles";
// import Language from "../sections/language"; // Uncomment if needed
// import Experience from "../sections/experience"; // Uncomment if needed
// import Pricing from "../sections/pricing"; // Uncomment if needed

export default function Home() {
  // Scroll to different Sections
  const scrollToWebDev = () => {
    const webDevSection = document.getElementById("web-dev-section");
    if (webDevSection) {
      webDevSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToHome = () => {
    const html = document.querySelector("html");
    if (html) {
      html.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToPython = () => {
    const pythonSection = document.getElementById("python-section");
    if (pythonSection) {
      pythonSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Language not available */}
      {/* <div>
        <Language />
      </div> */}

      {/* HOME INTRODUCTION */}
      <div>
        <Intruduction />
        <ParticlesBackground />
      </div>

      {/* BACKGROUND ANIMATION */}
      <div>
        <BgAnimation />
      </div>

      {/* WEB DEV INFORMATION */}
      <div id="web-dev-section" className="mt-[-300px]"> {/* Hier den Abstand anpassen */}
        <WebDev />
      </div>

      {/* Python Experience Section */}
      <div className="mb-20" id="python-section"> {/* Hier den Abstand anpassen */}
        <Python />
        </div>

      {/* Pricing */}
      {/* <div className='mb-20' id="pricing-section">
        <Pricing />
      </div> */}

      {/* Home Navbar Item */}
      <div>
        <button onClick={scrollToHome}>Home</button>
      </div>

      {/* Navbar */}
      <div>
        <NavBar
          navItems={[]}
          scrollToWebDev={scrollToWebDev}
          scrollToHome={scrollToHome}
          scrollToPython={scrollToPython}
        />
      </div>

      {/* Footer */}
      <div>
        <Footer />
      </div>
    </>
  );
}
