import { useState } from "react";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const copyToClipboard = (text: string) => {
    const tempInput = document.createElement("input");
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    alert("Snapchat-Benutzername wurde in die Zwischenablage kopiert: " + text);
  };

  return (
    <footer className="mt-auto bg-gray-900 w-full dark:bg-neutral-950">
      <div className="flex flex-col items-center w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 lg:pt-20 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-center w-full">
          <div className="col-span-full lg:col-span-1">
            <a
              className="flex-none text-xl font-semibold text-white"
              href="#"
              aria-label="Brand"
            ></a>
          </div>

          <div className="col-span-1">
            <h4 className="font-semibold text-gray-100">Products</h4>
            <div className="mt-3 grid space-y-3">
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200"
                  href="https://summarizer.kuehnle.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Summarizer Website
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200"
                  href="https://leo17220310.github.io/Portfolio/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Portfolio Website
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200"
                  href="https://leo-radtke.me/"
                  target="_blank"
                  rel="noopener noreferrer" 
                >
                  This Website
                </a>
              </p>
            </div>
          </div>

          <div className="col-span-1">
            <h4 className="font-semibold text-gray-100">Socials</h4>
            <div className="mt-3 grid space-y-3">
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200"
                  href="https://www.instagram.com/leo22031017/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </p>
              <p>
                <button
                  className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200"
                  onClick={() => copyToClipboard("leo220317")}
                >
                  Snapchat
                </button>
              </p>
            </div>
          </div>

          <div className="col-span-1">
            <h4 className="font-semibold text-gray-100">Contact</h4>
            <div className="mt-3 grid space-y-3">
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200"
                  href="mailto:leo.radtke.info@gmail.com"
                >
                  Management E-mail
                </a>
              </p>
            </div>
          </div>

          <div className="col-span-1">
            <h4 className="font-semibold text-gray-100">
              Website-Development & Support
            </h4>
            <div className="mt-3 grid space-y-3">
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200"
                  href="#"
                >
                  Linktree
                </a>
                <span className="inline ms-1 text-xs bg-blue-700 text-white py-1 px-2 rounded-lg ml-[10px]">
                  Coming Soon
                </span>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200"
                  href="mailto:leo.radtke.info@gmail.com"
                >
                  Contact
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mt-10 w-full">
          <p className="text-sm text-gray-400 dark:text-neutral-400 text-center">
           <a href="https://www.flaticon.com/search?word=instagram">Icon credits: Freepik (Instagram)</a>and <a href="https://www.flaticon.com/search?word=github">Pixel perfect (GitHub) - Flaticon</a> 
          </p>
        </div>

        <div className="flex flex-col items-center mt-10 w-full">
          <p className="text-sm text-gray-400 dark:text-neutral-400 text-center">
            All content on this website is copyrighted © 2024 Leo Radtke.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
