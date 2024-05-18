import Head from 'next/head';
import Intruduction from "../../src/sections/intruduction"
import Socials from "../../src/sections/socials"
import BgAnimation from "../../src/sections/backgroundAnimation"
import WebDev from "../../src/sections/webdev"
import NavBar from "../components/ui/floating-navbar"
import Python from "../sections/python"


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


  return (
    <>
    {/* RESPONSIVE */}    
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>


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
      <div id="web-dev-section"> 
        <WebDev />
      </div>

      <div>
        {/* Home-Schaltfläche hinzugefügt */}
        <button onClick={scrollToHome}>Go to Home</button>
      </div>

      <div>
        {/* Navbar hinzugefügt */}
       <NavBar navItems={[]} scrollToWebDev={scrollToWebDev} scrollToHome={scrollToHome} /> 
      </div>

      <div className='mb-[200px]'>
        <Python></Python>
      </div>
  
    </>
  );
}
