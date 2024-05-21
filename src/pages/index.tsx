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
import Pricing from "../sections/pricing";

export default function Home() {

  useEffect(() => {
    const checkDevice = () => {
      if (window.innerWidth < 1024) {
        alert("Diese Website ist nur auf PCs verfügbar. Bitte besuchen Sie uns auf einem Desktop-Gerät.");
        // Alternativ können Sie auch eine Weiterleitung durchführen
         window.location.href = "https://leo17220310.github.io/Portfolio/";
      }
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    return () => {
      window.removeEventListener('resize', checkDevice);
    };
  }, []);

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

  const scrollToPricing = () => {
    const python = document.getElementById("pricing-section");
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
      <div className='mb-[200px]'> 
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

      <div   id="experience-section">
        <Experience />
      </div>

      {/* WEB DEV INFORMATION */}
      <div id="web-dev-section" className='mb-[200px] mt-[200px]'  > 
        <WebDev />
      </div>

      <div className='mb-[200px]' id="python-section">
        <Python></Python>
      </div>


     
      <div className='mb-[200px]' id="pricing-section">
       <Pricing></Pricing>
      </div>
      
   

      <div>
        {/* Home-Schaltfläche hinzugefügt */}
        <button onClick={scrollToHome}>Go to Home</button>
      </div>

      <div>
        {/* Navbar hinzugefügt */}
       <NavBar navItems={[]} scrollToWebDev={scrollToWebDev} scrollToHome={scrollToHome} scrollToPython={scrollToPython} scrollToExperience={scrollToExperience} scrollToPricing={scrollToPricing}/> 
      </div>

     
     

    

      <div>
        <Footer />
      </div>
  
    </>
  );
}
