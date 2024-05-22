const Pricing = () => {
    const handleContactMeClick = () => {
        window.location.href = "mailto:leo.radtke.info@gmail.com";
      };
    

  return (
    <>
    
        <div className="overflow-hidden bg-gray-100 p-6 md:p-16 rounded-xl shadow-lg dark:bg-neutral-800 m-[200px] ">
          <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="mx-auto max-w-2xl mb-8 lg:mb-14 text-center">
              <h2 className="text-3xl lg:text-4xl text-gray-800 font-mediumbold dark:text-neutral-200">
                Affordable and Custom{" "}
                <span className="text-blue-300 font-bold"> Websites</span> for
                Individuals –{" "}
                <span className="text-blue-300 font-bold">Contact me</span> for
                Your Perfect Solution!
              </h2>
            </div>

            <div className="relative xl:w-10/12 xl:mx-auto shadow-xl shadow-gray-200">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                <div>
                  <div className="p-4 relative z-10 bg-white border rounded-xl md:p-10 dark:bg-neutral-900 dark:border-neutral-800">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-neutral-200">
                      Normal
                    </h3>
                    <div className="text-sm text-gray-500 dark:text-neutral-500">
                      Everything you need on your website. Negotiable price depending on the size of the website
                    </div>

                    <div className="mt-5">
                      <span className="text-6xl font-bold text-gray-800 dark:text-neutral-200">
                       29
                      </span>
                      <span className="text-lg font-bold text-gray-800 dark:text-neutral-200">
                        .99 
                      </span>
                    
                      <span className="ms-3 text-gray-500 dark:text-neutral-500">
                        Euros / monthly
                      </span>
                    </div>

                    <div className="mt-5 grid sm:grid-cols-2 gap-y-2 py-4 first:pt-0 last:pb-0 sm:gap-x-6 sm:gap-y-0">
                      <ul className="space-y-2 text-sm sm:text-base">
                        <li className="flex space-x-3">
                          <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                            <svg
                              className="flex-shrink-0 size-3.5"
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
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          </span>
                          <span className="text-gray-800 dark:text-neutral-200">
                            Server Hosting
                          </span>
                        </li>

                        <li className="flex space-x-3">
                          <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                            <svg
                              className="flex-shrink-0 size-3.5"
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
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          </span>
                          <span className="text-gray-800 dark:text-neutral-200">
                            Domain
                          </span>
                        </li>

                        <li className="flex space-x-3">
                          <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                            <svg
                              className="flex-shrink-0 size-3.5"
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
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          </span>
                          <span className="text-gray-800 dark:text-neutral-200">
                            Professionel Website
                          </span>
                        </li>
                      </ul>

                      <ul className="space-y-2 text-sm sm:text-base">
                        
                      

                        <li className="flex space-x-3">
                        <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                            <svg
                              className="flex-shrink-0 size-3.5"
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
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          </span>
                          <span className="text-gray-800 dark:text-neutral-200">
                            <span className="font-bold text-blue-300"> 100 free</span> changes after completion
                          </span>
                        </li>

                        
                      </ul>
                    </div>

                    <div className="mt-5 grid grid-cols-2 gap-x-4 py-4 first:pt-0 last:pb-0">
                      <div>
                        <p className="text-sm text-gray-500 dark:text-neutral-500">
                         You can cancel your monthly contract at any time.
                        </p>
                    
                      </div>

                      <div className="flex justify-end">
                        <button
                          type="button"
                          onClick={handleContactMeClick}
                          className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-800 dark:text-white dark:hover:bg-neutral-800"
                        >
                          Contact Me
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="shadow-xl shadow-gray-200 p-5 relative z-10 bg-white border rounded-xl md:p-10 dark:bg-neutral-900 dark:border-neutral-800 dark:shadow-gray-900/20">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-neutral-200">
                     Expanded
                    </h3>
                    <div className="text-sm text-gray-500 dark:text-neutral-500">
                      Everything you need on your website. Negotiable price depending on the size of the website
                    </div>
                    <span className="absolute top-0 end-0 rounded-se-xl rounded-es-xl text-xs font-medium bg-gray-800 text-white py-1.5 px-3 dark:bg-white dark:text-neutral-800">
                      Exclusive
                    </span>

                    <div className="mt-5">
                      <span className="text-6xl font-bold text-gray-800 dark:text-neutral-200">
                        59
                      </span>
                      <span className="text-lg font-bold text-gray-800 dark:text-neutral-200">
                        .99
                      </span>
                      <span className="ms-3 text-gray-500 dark:text-neutral-500">
                        Euros / monthly
                      </span>
                    </div>

                    <div className="mt-5 grid sm:grid-cols-2 gap-y-2 py-4 first:pt-0 last:pb-0 sm:gap-x-6 sm:gap-y-0">
                      <ul className="space-y-2 text-sm sm:text-base">
                        <li className="flex space-x-3">
                          <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                            <svg
                              className="flex-shrink-0 size-3.5"
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
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          </span>
                          <span className="text-gray-800 dark:text-neutral-200">
                            Server Hosting
                          </span>
                        </li>

                        <li className="flex space-x-3">
                          <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                            <svg
                              className="flex-shrink-0 size-3.5"
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
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          </span>
                          <span className="text-gray-800 dark:text-neutral-200">
                            Domain
                          </span>
                        </li>

                        <li className="flex space-x-3">
                          <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                            <svg
                              className="flex-shrink-0 size-3.5"
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
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          </span>
                          <span className="text-gray-800 dark:text-neutral-200">
                            Professionel Website
                          </span>
                        </li>
                      </ul>

                      <ul className="space-y-2 text-sm sm:text-base">
                        <li className="flex space-x-3">
                        <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                            <svg
                              className="flex-shrink-0 size-3.5"
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
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          </span>
                          <span className="text-gray-800 dark:text-neutral-200">
                            SSL Certificate
                          </span>
                        </li>
                        <li className="flex space-x-3">
                          <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                            <svg
                              className="flex-shrink-0 size-3.5"
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
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          </span>
                          <span className="text-gray-800 dark:text-neutral-200">
                            24/7 Support
                          </span>
                        </li>

                        <li className="flex space-x-3">
                          <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                            <svg
                              className="flex-shrink-0 size-3.5"
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
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          </span>
                          <span className="text-gray-800 dark:text-neutral-200">
                            1 free month
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div className="mt-5 grid grid-cols-2 gap-x-4 py-4 first:pt-0 last:pb-0">
                      <div>
                        <p className="text-sm text-gray-500 dark:text-neutral-500">
                        You can cancel your monthly contract at any time.
                        </p>
                      </div>

                      <div className="flex justify-end">
                        <button
                          type="button"
                          onClick={handleContactMeClick }
                          className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-800 dark:text-white dark:hover:bg-neutral-800"
                        >
                          Contact Me 
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 start-1/2 -translate-x-1/2 w-full h-[280px] bg-gradient-to-r from-blue-100 via-white to-blue-100 dark:from-blue-900/40 dark:via-transparent dark:to-blue-900/40"></div>
            </div>
          </div>
        </div>
    </>
  );
};

export default Pricing;
