import { useState } from "react";

const Experience = () => {
  return (
    <>
      <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="grid lg:grid-cols-3 gap-y-8 lg:gap-y-0 lg:gap-x-6">
          <div className="lg:col-span-2">
            <div className="py-8 lg:pe-8">
              <div className="space-y-5 lg:space-y-8">
                <h1 className="text-3xl text-black font-bold underline">
                  Experience
                </h1>

                <div className="flex items-center gap-x-5">
                  <p className="text-xs sm:text-sm text-gray-800 dark:text-neutral-200">
                    May 20.5.2024
                  </p>
                </div>
                <p className="text-black text-xl">My Journey in Programming,</p>
                <p className="text-lg text-gray-800 dark:text-neutral-200">
                  I began my journey in programming at the age of 10, diving
                  into game development. My first projects were simple, yet
                  exciting, such as car racing and various 2D games. I primarily
                  used C# and experimented with different engines, including
                  Godot, Unity, Unreal Engine, and GameMaker Studio. This
                  endeavor lasted for about a year, and by the time I turned 11,
                  I was eager to delve deeper into programming.
                </p>

                <p className="text-lg text-gray-800 dark:text-neutral-200">
                  My next step was learning Python, where I wrote my first
                  Hello World program. I quickly moved on to creating larger
                  applications, starting with mastering loops. My interest then
                  shifted towards working with APIs in Python, which opened up
                  new possibilities for me.
                </p>
                <div className="text-center">
                  <div className="grid lg:grid-cols-2 gap-3">
                    <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
                      <figure className="relative w-full h-60">
                        <img
                          className="size-full absolute top-0 start-0 object-cover rounded-xl"
                          src="/ichprogrammier.png.jpg"
                          alt="Programming"
                          style={{ width: '100%', height: '100%' }}
                        />
                      </figure>
                      <figure className="relative w-full h-60">
                        <img
                          className="size-full absolute top-0 start-0 object-cover rounded-xl"
                          src="/progrtammieren.png.jpg"
                          alt="Programming"
                          style={{ width: '100%', height: '100%' }}
                        />
                      </figure>
                    </div>
                    <figure className="relative w-full h-72 sm:h-96 lg:h-full">
                      <img
                        className="size-full absolute top-0 start-0 object-cover rounded-xl"
                        src="/leooo.png"
                        alt="Programming"
                        style={{ width: '100%', height: '100%' }}
                      />
                    </figure>
                  </div>

                  <span className="mt-3 block text-sm text-center text-gray-500 dark:text-neutral-500">
                    Working process
                  </span>
                </div>

                <p className="text-lg text-gray-800 dark:text-neutral-200">
                  Soon after, I ventured into web development. I began with the
                  basics of CSS, HTML, and JavaScript, gaining a foundational
                  understanding of each. As my skills improved, I started
                  working with React, Tailwind CSS, and TypeScript. This allowed
                  me to develop more complex applications, such as a summarizer
                  website and various other projects for friends.
                </p>

                <p className="text-lg text-gray-800 dark:text-neutral-200">
                  Through these experiences, I have gained a comprehensive
                  understanding of both game development and web development,
                  continuously expanding my skills and knowledge in the world of
                  programming.
                </p>

                <blockquote className="text-center p-4 sm:px-7">
                  <p className="text-xl font-medium text-gray-800 lg:text-2xl lg:leading-normal xl:text-2xl xl:leading-normal dark:text-neutral-200">
                    About my life outside of programming
                  </p>
                  <p className="mt-5 text-gray-800 dark:text-neutral-200">
                    Leo Radtke
                  </p>
                </blockquote>

                <figure>
                  <img
                    className="w-[840px] h-[400px] object-cover rounded-xl"
                    src="/ichfreizeit.png.jpg"
                    alt="Leisure"
                    width={840}
                    height={400}
                  />
                </figure>

                <div className="space-y-3">
                  <p className="text-lg text-gray-800 dark:text-neutral-200">
                    Alongside my programming endeavors, my life is a dynamic
                    blend of passions and activities. I thrive on the soccer
                    field, leading my team with skill and determination.
                    Academically, I excel at my gymnasium, balancing studies
                    with my athletic pursuits.
                  </p>
                </div>

                <ul className="list-disc list-outside space-y-5 ps-5 text-lg text-gray-800 dark:text-neutral-200">
                  <li className="ps-2">
                    Off the field, I cherish time spent with friends, exploring
                    new experiences and creating lasting memories. At home, my
                    cat and dog provide constant companionship and joy.
                  </li>
                  <li className="ps-2">
                    In my leisure time, I enjoy diving into video games like
                    Fortnite and FIFA, finding relaxation and camaraderie in
                    virtual worlds. My life is a vibrant mosaic of interests,
                    relationships, and continuous growth.
                  </li>
                </ul>

                <p className="text-lg text-gray-800 dark:text-neutral-200">
                  Overall, my life is a vibrant tapestry woven with diverse
                  interests, meaningful relationships, and a constant thirst for
                  learning and growth. Each day brings new opportunities for
                  adventure, connection, and personal fulfillment, shaping me
                  into the person I aspire to be.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1 lg:w-full lg:h-full lg:bg-gradient-to-r lg:from-gray-50 lg:via-transparent lg:to-transparent dark:from-neutral-800">
            <div className="sticky top-0 start-0 py-8 lg:ps-8">
              <div className="group flex items-center gap-x-3 border-b border-gray-200 pb-8 mb-8 dark:border-neutral-700">
                <a
                  className="block flex-shrink-0"
                  href="https://www.instagram.com/leo22031017/"
                >
                  <img
                    className="size-10 rounded-full"
                    src="/ichfreizeit.png.jpg"
                    alt="Instagram"
                    width={40}
                    height={40}
                  />
                </a>

                <a
                  className="group grow block"
                  href="https://www.instagram.com/leo22031017/"
                >
                  <h5 className="group-hover:text-gray-600 text-sm font-semibold text-gray-800 dark:group-hover:text-neutral-400 dark:text-neutral-200">
                    leo22031017
                  </h5>
                  <p className="text-sm text-gray-500 dark:text-neutral-500">
                    Web-Dev
                  </p>
                </a>

                <div className="grow">
                  <div className="flex justify-end">
                    <button
                      type="button"
                      className="py-1.5 px-2.5 inline-flex items-center gap-x-2 text-xs font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                    >
                      <a href="https://www.instagram.com/leo22031017/">
                        Follow Instagram
                      </a>
                    </button>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h5 className="text-xl font-bold text-gray-800 dark:text-neutral-200 underline">
                  Websites
                </h5>
                <a
                  className="group flex items-center gap-x-6"
                  href="https://summarizer.kuehnle.me/"
                >
                  <div className="grow">
                    <span className="text-sm font-bold text-gray-800 group-hover:text-blue-600 dark:text-neutral-200 dark:group-hover:text-blue-500">
                      Summarizer AI Website :
                    </span>
                  </div>

                  <div className="flex-shrink-0 relative rounded-lg overflow-hidden size-20">
                    <img
                      className="size-full absolute top-0 start-0 object-cover rounded-lg"
                      src="/sreenweb.png"
                      alt="Summarizer AI Website"
                      width={80}
                      height={80}
                    />
                  </div>
                </a>

                <a
                  className="group flex items-center gap-x-6"
                  href="https://leo17220310.github.io/Portfolio/"
                >
                  <div className="grow">
                    <span className="text-sm font-bold text-gray-800 group-hover:text-blue-600 dark:text-neutral-200 dark:group-hover:text-blue-500">
                      My Old Portfolio :
                    </span>
                  </div>

                  <div className="flex-shrink-0 relative rounded-lg overflow-hidden size-20">
                    <img
                      className="size-full absolute top-0 start-0 object-cover rounded-lg"
                      src="/portfolio.png"
                      alt="Old Portfolio"
                      width={80}
                      height={80}
                    />
                  </div>
                </a>

                <a className="group flex items-center gap-x-6" href="#">
                  <div className="grow">
                    <span className="text-sm font-bold text-gray-800 group-hover:text-blue-600 dark:text-neutral-200 dark:group-hover:text-blue-500">
                      My Portfolio now :
                    </span>
                  </div>

                  <div className="flex-shrink-0 relative rounded-lg overflow-hidden size-20">
                    <img
                      className="size-full absolute top-0 start-0 object-cover rounded-lg"
                      src="/portnew.png"
                      alt="Current Portfolio"
                      width={80}
                      height={80}
                    />
                  </div>
                </a>
              
                <hr></hr>
                <br></br>
                <h5 className="text-xl font-bold text-gray-800 dark:text-neutral-200 underline">
                  GitHub Repositorys
                </h5>
                <br></br>
                
                <a
                  href="https://github.com/m-kuehnle/summarizer"
                  className="text-black hover:text-blue-600"
                  target="_blank"
                >
                  <span className="text-black font-medium">
                    Summarizer AI Website :
                    <br></br>
                  </span>{" "}
                  <br></br>
                  <span className="">https://github.com/m-kuehnle/summarizer/</span>{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
