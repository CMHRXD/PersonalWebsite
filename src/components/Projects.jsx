import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/prj/ticket.png";
import projImg2 from "../assets/prj/mca.png";
import projImg3 from "../assets/prj/rb.png";
import { Link } from "react-scroll";
import { Transition } from "@headlessui/react";

export const Projects = () => {
  const projects = [
    {
      title: "Ticketing App",
      description: "Design & Development",
      imgUrl: projImg1,
      link: "https://github.com/CMHRXD/Ticketing-app",
      width: "max-w-[350px] ",
      shadow: "shadow-md hover:shadow-pink-500"
    },
    {
      title: "Clinic Management System",
      description: "Design & Development",
      imgUrl: projImg2,
      link: "https://github.com/CMHRXD/MCA_MERN_Frontend",
      width: "max-w-[350px] ",
      shadow: "shadow-md hover:shadow-pink-500"
    },
    {
      title: "Rubber Business",
      description: "Design & Development",
      imgUrl: projImg3,
      link: "https://github.com/CMHRXD/Rubber-Business-Frontend",
      width: "max-w-[350px] ",
      shadow: "shadow-md  hover:shadow-pink-500"
    },
  ];

  return (
    <section
      name="Projects"
      id="4"
      className={`project ${
        scrollY > 2100 ? "h-fit" : "h-screen"
      } md:h-screen mt-0 md:mt-[300px]`}
    >
      <div className="context-container">
        <Transition
          show={scrollY > 2100 ? true : false}
          enter="transition-opacity duration-1000"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-1000"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="flex flex-col items-center justify-center">
            <Link
              to="Projects"
              className="text-6xl text-transparent bg-clip-text font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mb-10"
            >
              Projects
            </Link>
            <p>
              I have worked on three principal projects that highlight my
              expertise in developing Full Stack Applications, check it out :)
            </p>

            <div className="">
              <div className="grid grid-flow-col md:grid-flow-row  grid-cols-1 md:grid-cols-3 md:grid-rows-1 grid-rows-3 gap-10 p-10">
                {projects.map((project, index) => {
                  return <ProjectCard key={index} {...project} />;
                })}
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </section>
  );
};
