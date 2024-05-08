
const Socials= () => {


  return (
    <>
    
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

 
      
    </>
  );
};

export default Socials;
