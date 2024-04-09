import { Inter } from "next/font/google";
//import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const words = [
    {
      text: "Hi I'm ",
      className:"text-white"
      
    },
    {
      text: "Leo",
      className: "text-blue-500",
    },
    {
      text: ", Web Developer and Programmer",
      className:"text-white"
    },
  ];

  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <div className="custom-margin text-5xl font-bold text-white">
        <h1>Hallo Ich bin Leo </h1>
      </div>
      <div className="custom-margin-image">
        <img src="/leologo.png" className="small-logo" />
      </div>
    </>
  );
}
