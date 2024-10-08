import React, { useEffect, useState } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Header from "./Header";
import Card from "./Card";
import Aos from "aos";
import "aos/dist/aos.css";
const sliders = [
  "/image/one.png",
  "/image/two.png",
  "/image/api.png",
  "/image/knldge.png",
];
const slideup = [
  { url: "/image/html.png", percent: "85%" },
  { url: "/image/css3.png", percent: "90%" },
  { url: "/image/boot.png", percent: "70%" },
  { url: "/image/reactjs.png", percent: "95%" },
  { url: "/image/node.png", percent: "75%" },
  { url: "/image/tailwind.svg", percent: "80%" },
  { url: "/image/ant.png", percent: "60%" },
];
const icons = [
  { url: "/image/lowh1.png", name: "Frontend" },
  { url: "/image/lowh2.png", name: "Backend" },
  { url: "/image/lowh3.png", name: "Integration" },
  { url: "/image/lowh4.png", name: "Deployment" },
];
const project = [
  {
    url: "/image/vinutana.png",
    name: "Vinutana ",
    discription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam similique odio mollitia voluptatem voluptatum iure distinctio repellendus, sunt nisi natus eos ratione magni rerum qui harum! Fugit similique magni provident.",
  },
  {
    url: "/image/vdit.jpg",
    name: "KLS VDIT BUS TRACKING APP ",
    discription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam similique odio mollitia voluptatem voluptatum iure distinctio repellendus, sunt nisi natus eos ratione magni rerum qui harum! Fugit similique magni provident.",
  },
];
const user = {
  name: "Swathi V Joshi",
  email: "swathivasudevjoshi@gmail.com",
  imageUrl: "/image/Swathi Photo.jpeg",
};

const navigation = [
  { name: "HOME", href: "", current: true },
  { name: "PROJECTS", href: "#project", current: false },
  { name: "ABOUT", href: "#about", current: false },
  { name: "MEDIA", href: "#", current: false },
  { name: "CONTACT", href: "#", current: false },
];

const userNavigation = [{ name: "Your Profile", href: "#" }];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Navbar() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);
  // const [currentIndex, setCurrentIndex] = useState(0);

  // UseEffect to update index every few seconds
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex((prev) => (prev + 1) % slideup.length);
  //   }, 3000);

  //   return () => clearInterval(interval);
  // }, []);
  return (
    <div>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-gray-950">
          <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="hidden md:block">
                  <div className="flex items-baseline space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        aria-current={item.current ? "page" : undefined}
                        className={classNames(
                          item.current
                            ? "bg-gray-700 text-white font-semibold text-xs p-1"
                            : "text-gray-300 font-semibold hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="">
                <div className="flex items-center md:ml-6">
                  <Menu as="div" className="relative">
                    <div>
                      <MenuButton className="relative flex max-w-xs xs:mx-star items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="absolute -inset-1.5  " />
                        <span className="sr-only invisible sm:bolck md-block">
                          Open user menu
                        </span>

                        <span
                          className="text-white text-sm font-hanuman px-2 pt-1 font-semibold"
                          data-aos="fade-out"
                          data-aos-duration="2000"
                        >
                          SWATHI V JOSHI
                        </span>
                        <img
                          alt=""
                          src={user.imageUrl}
                          className="h-8 w-8 rounded-full md-start"
                        />
                      </MenuButton>
                    </div>
                    <MenuItems
                      transition
                      className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                    >
                      {userNavigation.map((item) => (
                        <MenuItem key={item.name}>
                          <a
                            href={item.href}
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                          >
                            {item.name}
                          </a>
                        </MenuItem>
                      ))}
                    </MenuItems>
                  </Menu>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                {/* Mobile menu button */}
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon
                    aria-hidden="true"
                    className="block h-6 w-6 group-data-[open]:hidden"
                  />
                  <XMarkIcon
                    aria-hidden="true"
                    className="hidden h-6 w-6 group-data-[open]:block"
                  />
                </DisclosureButton>
              </div>
            </div>
          </div>

          <DisclosurePanel className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  aria-current={item.current ? "page" : undefined}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
            <div className="border-t border-gray-700 pb-3 pt-4">
              <div className="flex items-center px-5">
                <div>
                  <img
                    alt=""
                    src={user.imageUrl}
                    className="h-10 w-10 rounded-full"
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium leading-none text-white">
                    {user.name}
                  </div>
                  <div className="text-sm font-medium leading-none text-gray-400">
                    {user.email}
                  </div>
                </div>
              </div>
              <div className="mt-3 space-y-1 px-2">
                {userNavigation.map((item) => (
                  <DisclosureButton
                    key={item.name}
                    as="a"
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                  >
                    {item.name}
                  </DisclosureButton>
                ))}
              </div>
            </div>
          </DisclosurePanel>
        </Disclosure>
        <div style={{ height: "100vh" }}>
          <header
            className="shadow"
            style={{
              background:
                "linear-gradient(120deg, black, rgb(2, 17, 41), black)",
              height: "50%",
            }}
          >
            <div className=" px-28 py-10">
              <span className="text-slate-600  text-2xl">
                I'm{" "}
                <span
                  className=" text-4xl  font-serif text-white font-thin  leading-10 "
                  style={{ textShadow: "1px 1px 3px  white" }}
                >
                  Swathi V Joshi,{" "}
                  <span
                    className="text-slate-600  text-2xl"
                    style={{ textShadow: "0px 0px 0px " }}
                  >
                    And I'm a
                  </span>
                  <br></br> Full-Stack Developer
                  <br></br>
                  <span
                    className="text-slate-700  text-sm font-Milonga tracking-wide"
                    style={{ textShadow: "0px 0px 0px " }}
                  >
                    Crafting creative and functional websites....
                  </span>
                </span>
              </span>
              <br></br>
              <div className="flex ">
                <button className="bg-slate-700 mr-5 rounded p-2 mt-10 text-white">
                  Know More
                </button>
                <button className="bg-slate-700 rounded p-2 mt-10 text-white">
                  Resume
                </button>
              </div>
            </div>
            <div className="mx-auto max-w-xs sm:px-6 -mt-32 lg:px-8">
              <div className="flex justify-center align-top bg-slate-950  overflow-hidden shadow-lg shadow-slate-900 rounded-full sm:p-0 xs:p-0">
                <div className="flex w-full animate-slideShow">
                  {sliders.map((s, index) => (
                    <img
                      key={index}
                      className="p-12 object-cover" // Set equal width and height
                      src={s}
                      alt={`Slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="flex justify-around w-full rounded-full mt-10">
              {icons.map((icon, index) => (
                <div key={index} className="text-center">
                  <img
                    className="h-32 w-32 object-contain  rounded-2xl bg-slate-300 shadow-lg shadow-slate-800 p-8"
                    src={icon.url}
                    alt={`Icon ${index + 1}`}
                    data-aos="flip-left"
                  />
                  <div className="mt-2 text-slate-950 text-lg o font-Milonga">
                    {icon.name}
                  </div>
                </div>
              ))}
            </div>
          </header>
        </div>
        <main>
          <section id="project">
            <div data-aos="fade-right" data-aos-duration="3000">
              <span className="text-2xl text-white font-bold text-center bg-slate-900 px-6 py-1 rounded-r-2xl">
                PROJECTS
              </span>
            </div>
            <div className="mx-auto max-w-8xl px-96 sm:px-6 lg:px-8  animate-bg">
              <Card className="">{project}</Card>
            </div>
          </section>
          <section id="about" className="mt-10">
            <div
              className="my-5"
              data-aos="fade-right"
              data-aos-duration="3000"
            >
              <span className="text-2xl text-white font-bold text-center bg-slate-900 px-6 py-1 rounded-r-2xl">
                ABOUT
              </span>
            </div>
            <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 ">
              <div className="flex justify-evenly">
                <div
                  className=" w-1/2 font-medium text-lg tracking-wider font-hanuman text-justify p-10  rounded-xl leading-10 "
                  // style={{
                  //   background:
                  //     "linear-gradient(120deg, black, rgb(2, 17, 41), black)",
                  // }}
                >
                  <span className="text-white align-center text-center text-xl">
                    <center>About Me</center>
                  </span>
                  <div className=" opacity-80 m-2 p-9 text-black align-self-center ">
                    Hello! I'm Swathi V Joshi, a dedicated Full-Stack Developer
                    with a passion for crafting innovative and efficient web
                    applications. With a strong background in both front-end and
                    back-end development, I thrive on transforming ideas into
                    functional and user-friendly digital solutions.
                  </div>
                </div>

                <div
                  className="w-1/3 rounded-xl p-10 relative overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(120deg, black, rgb(2, 17, 41), black)",
                  }}
                >
                  <span className="text-white text-center text-xl">
                    <center>Skill</center>
                  </span>
                  <div className="relative bg-white opacity-80 mt-4 py-56 text-black rounded-3xl overflow-hidden">
                    {/* Slide-up container */}
                    <div className="absolute mx-3 h-full top-0 left-0 flex flex-col animate-slideUp">
                      {slideup.map((item, index) => (
                        <div
                          key={index}
                          className="w-full object-cover mt-10 p-20 shadow-lg rounded-2xl shadow-slate-700"
                        >
                          {/* Image */}
                          <img
                            src={item.url}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-auto"
                          />

                          <div className="text-center mt-4 text-xl text-black">
                            {item.percent}
                          </div>

                          <div className="relative mt-2 bg-gray-200 h-4 rounded">
                            <div
                              className="bg-green-500 h-4 rounded"
                              style={{
                                width: item.percent,
                              }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* <div
                  className="w-1/3 rounded-xl"
                  style={{
                    background:
                      "linear-gradient(120deg, black, rgb(2, 17, 41), black)",
                  }}
                >
                  <div className="relative overflow-hidden h-64"></div>
                </div> */}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Navbar;
