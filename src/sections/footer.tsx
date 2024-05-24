import { useState } from "react";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const copyToClipboard = (text: string) => {
    var tempInput = document.createElement("input");
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    alert("Snapchat-Benutzername wurde in die Zwischenablage kopiert: " + text);
  };




  return (
    <>
      <footer className="mt-auto bg-gray-900 w-full dark:bg-neutral-950">
        <div className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 lg:pt-20 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-center">
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
                  >
                    Summarizer Website
                  </a>
                </p>
                <p>
                  <a
                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200"
                    href="https://leo17220310.github.io/Portfolio/"
                    target="_blank"
                  >
                    Portfolio Website
                  </a>
                </p>
                <p>
                  <a
                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200"
                    href="https://leo-radtke.de/"
                    target="_blank"
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
                  >
                    Instagram
                  </a>
                </p>
                <p>
                  <a
                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200"
                    onClick={() => copyToClipboard("leo220317")}
                  >
                    Snapchat
                  </a>
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
                    href="#pricing-section"
                  >
                    Get your Website
                  </a>
                </p>
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

          <div className="bottom-0 left-0">
            <div className="ml-[-270px] ">
              <p className="text-sm text-gray-400 dark:text-neutral-400 mb-[-70px]">
                All content on this website is copyrighted © 2024 Leo Radtke.
              </p>
            </div>

        
              <a
                className="size-10 inline-flex ml-[-260px] items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
                href="https://www.instagram.com/leo22031017/"
                target="_blank"
              >
              </a>

          </div>
            </div>
      </footer>

    </>
  );
};

export default Footer;
