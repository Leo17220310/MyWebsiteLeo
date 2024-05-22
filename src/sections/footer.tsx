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

  const handleImpressum = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
                <p>
                  <a
                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200"
                    onClick={handleImpressum}
                  >
                    Impressum & Privacy
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

            <div className="ml-[-270px] ">
              <a
                className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
                href="https://www.google.de/"
                target="_blank"
              >
                <svg
                  className="flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                </svg>
              </a>
              <a
                className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
                href="https://www.instagram.com/leo22031017/"
                target="_blank"
              >
                <img src="instagram.png" className="w-5 h-5" alt="Instagram" />
              </a>

         
            </div>
          </div>
        </div>
      </footer>

      {isModalOpen && (
        <>
          <div className="bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40 ">
            <button
              type="button"
              className=" flex justify-center items-center size-7 text-sm font-semibold rounded-lg border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-transparent dark:hover:bg-neutral-700"
              onClick={closeModal} // Add this onClick handler
            >
              <span className="sr-only">Close</span>
              <svg
                className="flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
            <div className="text-blue-300 text-3xl font-bold text-center mb-4 hover:underline hover:text-blue-300">
              Imprint
            </div>
            <div className="text-center">
              <p className="mb-4">Name: Leo Radtke</p>
              <p className="mb-4">Address: Bachstraße 96, 22083 Hamburg</p>
              <p className="mb-4">Contact: leo.radtke.info@gmail.com</p>
              <p className="mb-4">
                Professional Information: I offer services in the field of
                website development.
              </p>
              <p className="mb-4">
                Disclaimer: The information provided on this website is for
                general informational purposes only. I do not make any
                representations or warranties of any kind, express or implied,
                about the completeness, accuracy, reliability, or suitability of
                the information.
              </p>
              <p className="mb-4">
                Copyright: All content, including text, images, and graphics, on
                this website is copyrighted and may not be reproduced, modified,
                or distributed without my express written consent.
              </p>
              <p>
                Privacy Policy: This website does not collect or store any
                personally identifiable information of its visitors.
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Footer;
