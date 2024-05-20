import Head from 'next/head';
import Intruduction from "../../src/sections/intruduction"
import Socials from "../../src/sections/socials"
import BgAnimation from "../../src/sections/backgroundAnimation"
import WebDev from "../../src/sections/webdev"
import NavBar from "../components/ui/floating-navbar"
import Python from "../sections/python"
import Language from "../sections/language"
import Footer from "../sections/footer"
import React from "react";
import Experience from "../sections/experience";
import { useEffect, useState } from "react";
import Linie from "../sections/linie";

export default function Home() {

  const scrollToWebDev = () => {
    const webDevSection = document.getElementById("web-dev-section");
    if (webDevSection) {
      webDevSection.scrollIntoView({ behavior: "smooth" });
    }
  };


  const scrollToHome = () => {
    const html = document.querySelector('html');
    if (html) {
      html.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToPython = () => {
    const python = document.getElementById("python-section");
    if (python) {
      python.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToExperience = () => {
    const python = document.getElementById("experience-section");
    if (python) {
      python.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <>
    {/* RESPONSIVE */}    
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>



      {/* <div>
        <Language />
      </div> */}
  


    {/* HOME INTRUDUCTION  */}
      <div> 
        <Intruduction />
      </div>

  

      {/* SOCIAL BAR */}
      <div>
       <Socials />
      </div>


      {/* BACKGROUND ANIMATION  */}
      <div>
        <BgAnimation/>
      </div>

      {/* WEB DEV INFORMATION */}
      <div id="web-dev-section"  > 
        <WebDev />
      </div>

      <div className='mt-[-100px]'>
        <Linie></Linie>
      </div>

      <div  className='mb-[200px]' id="experience-section">
        <Experience />
      </div>

      <div className='mt-[-150px]'>
        <Linie></Linie>
      </div>


      <div>
        {/* Home-Schaltfläche hinzugefügt */}
        <button onClick={scrollToHome}>Go to Home</button>
      </div>

      <div>
        {/* Navbar hinzugefügt */}
       <NavBar navItems={[]} scrollToWebDev={scrollToWebDev} scrollToHome={scrollToHome} scrollToPython={scrollToPython} scrollToExperience={scrollToExperience}/> 
      </div>

      <div className='mt-[-180px]' id="python-section">
        <Python></Python>
      </div>

    

      <div>
        <Footer />
      </div>
  
    </>
  );
}
