// IMPORTS
import Head from 'next/head';
import Intruduction from "../../src/sections/intruduction"
import Socials from "../../src/sections/socials"
import BgAnimation from "../../src/sections/backgroundAnimation"
import WebDev from "../../src/sections/webdev"
import NavBar from "../components/ui/floating-navbar"


export default function Home() {
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
      <div>
        <WebDev />
      </div>

      <div>
       <NavBar navItems={[]} />
      </div>
  

     
    </>
  );
}
