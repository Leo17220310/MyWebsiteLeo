
import Intruduction from "../../src/sections/intruduction"
import BgAnimation from "../../src/sections/backgroundAnimation"
import WebDev from "../../src/sections/webdev"
import NavBar from "../components/ui/floating-navbar"
import Python from "../sections/python"
import Language from "../sections/language"
import Footer from "../sections/footer"
import React, { Component } from "react";
import Experience from "../sections/experience";
import Pricing from "../sections/pricing";


export default function Home() {

 // Check if device is desktop or mobile
  
  // useEffect(() => {
  //   const checkDevice = () => {
  //     if (window.innerWidth < 1024) {
  //        window.location.href = "https://leo17220310.github.io/Portfolio/";
  //     }
  //   };

  //   checkDevice();
  //   window.addEventListener('resize', checkDevice);

  //   return () => {
  //     window.removeEventListener('resize', checkDevice);
  //   };
  // }, []);



  // Scroll to different Sections
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
  


      {/* Language not avialble */}

      {/* <div>
        <Language />
      </div> */}
  


      {/* HOME INTRUDUCTION  */}
       <div className='mb-[200px]'> 
        <Intruduction />
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



      {/* Python Experience Section */}
        <div className='mb-[200px]' id="python-section">
        <Python></Python>
      </div>  

     {/* Pricing */}
       <div className='mb-[200px]' id="pricing-section">
       <Pricing></Pricing>
      </div> 
      
   
      {/* Home Navbar Item */}
      <div>
        <button onClick={scrollToHome}></button>
      </div>
      
      {/* Navbar */}
       <div>
       <NavBar navItems={[]} scrollToWebDev={scrollToWebDev} scrollToHome={scrollToHome} scrollToPython={scrollToPython} scrollToExperience={scrollToExperience} scrollToPricing={scrollToPricing}/> 
      </div> 

      {/* Footer */}
      <div>
        <Footer />
      </div>
  
    </>
  );
}

