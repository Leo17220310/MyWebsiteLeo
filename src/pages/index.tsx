import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
import { Button } from "@/components/ui/button";
import Head from 'next/head';

export default function Home() {
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

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

      </Head>

  


      <div className="mt-[200px] ml-[210px] sm:mt-[300px] sm:ml-[210px] text-5xl font-bold text-black">
        {" "}
        <h1>
          Hi, I'm Leo !{" "}
          <span className="text-indigo-600 ">
            {" "}
            <TypewriterEffectSmooth words={words} />{" "}
          </span>{" "}
        </h1>
      </div>

      <div className="mt-[-200px] ml-[210px] text-black font-bold">
        {" "}
        <p className="text-white-700 text-sm sm:text-base font-bold ">
          Create your <span>Application</span> like a pro.
        </p>
      </div>

      <div className="text-black  mt-[200px] ml-[210px] sm:mt-[200px] sm:ml-[210px] ">
        {" "}
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

      <div className="w-[450px] h-[450px] mt-[-500px] ml-[0px] sm:mt-[-350px] sm:ml-[1100px]">
        <img src="\coder.png" className="small-logo" />
      </div>

      <nav className="fixed mt-[30px] top-0 left-0 right-0 text-white ml-[650px]  py-4 font-bold text-[19px] ">
        <a
          href="https://github.com/Leo17220310"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="github-blue-300.png"
            alt="Git Repo"
            className="h-[40px] ml-[1000px] mt-[-30px]"
          ></img>
        </a>

        <a
          href="https://www.instagram.com/leo22031017/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="insagram.png"
            alt="Instagram"
            className="h-[42px] ml-[1060px] mt-[-40px]"
          ></img>
        </a>

        <a
          href="#"
          onClick={() => {
            window.location.href = "mailto:leoradtke@outlook.de";
            return false;
          }}
        >
          <img
            src="mail-blue-300.png"
            alt="Gmail"
            className="h-[41px] ml-[1120px] mt-[-42px]"
          />
        </a>
      </nav>

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
