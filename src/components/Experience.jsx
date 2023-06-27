import { Transition } from "@headlessui/react";
import colorSharp from "../assets/color-sharp.png";
import colorSharp2 from "../assets/color-sharp2.png";
import { Link } from "react-scroll";
import { FaLongArrowAltRight } from "react-icons/fa";

const experienceList = [
  {
    id: 1,
    title: "Integration Engeneer",
    date: "November 2020 - Present",
    location: "Barcelona, Spain",
    tasks: [
      "Creates recipes to automate the internal processes of companies and integrate their applications through the workato platform.",
      "Develop custom SDK connectors in Ruby from scratch.",
      "Creates scripts in Javascript for filtering and obtaining data.",
      "Developments with good testing practices (Unit tests, Integration Tests)",
      "Function development in python on the Google Cloud Platform.",
      "Project maintenance and documentation.",
    ],
    direction: "right",
  },
  {
    id: 2,
    title: "Project Coordinator | Full Stack Developer",
    date: "August 2022 - November 2022",
    location: "Asunción, Paraguay",
    tasks: [
      "Design practical solutions to solve problems",
      "Participates in code reviews and testing",
      "Coordinates and Collaborates with the development team employing tools like Slack – Jira – Bitbucket",
      "Developed a web application to manage all internal company processes, using the MERN stack",
      "Employs agile methodologies, follow the Scrum framework for the successful completion of time lines and projects",
    ],
    direction: "left",
  },
];

const Experience = () => {


  return (
    <section
      name="Experience"
      className="relative  md:mt-20 mt-40 h-screen"
      id="Experience"
    >
      <div className=" context-container ">
        <div className="experience-bx  p-7 md:p-20">
          <Transition
            show={scrollY > 950 ? true : false}
            enter="transition-opacity duration-1000"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-1000"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            className={`mt-10 mb-10 md:mt-0 md:mb-0`}
          > 
            <Link
              to="Experience"
              className="text-6xl text-transparent bg-clip-text font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
            >
              Experience
            </Link>
       
            <div className="flex flex-col md:flex-row  timeline-container h-auto ">
              <div className="w-full md:w-1/2  mt-20 md:mt-[70px] mr-20  h-fit p-5 rounded-lg shadow-md shadow-indigo-500 hover:shadow-pink-500  duration-300">
                <div className="flex justify-between text-xs mb-5 font-bold text-gray-400">
                  <p className=" top-0">11/2022 - Present </p>
                  <p>Barcelona, Spain</p>
                </div>
                <span className="text-2xl md:text-3xl text-center  mr:0 md:mr-10 text-transparent bg-clip-text font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                  Integrtation Engeneer
                </span>
                <div className="hidden md:flex flex-col max-w-lg">
                  {experienceList[0].tasks.map((task, index) => (
                    <div
                      className=" flex w-full  items-center gap-2 mt-5 text-left text-sm font-semibold text-gray-300 scale-100 hover:scale-105 duration-300 hover:cursor-zoom-in"
                      key={index}
                    >
                      <FaLongArrowAltRight className=" min-w-fit inline mr-2" />
                      <p className="">{task}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="line hidden md:flex ">
                
              </div>
              <div className="w-full md:w-1/2  mt-20 md:mt-[290px] ml-0 md:ml-20  h-fit p-5 rounded-lg shadow-md shadow-indigo-500 hover:shadow-pink-500 duration-300">
                <div className="flex justify-between text-xs mb-5 font-bold text-gray-400">
                  <p className=" top-0">08/2022 -10/2022 </p>
                  <p>Asuncion, Paraguay</p>
                </div>
                <span className="text-2xl md:text-3xl text-center mr-0 md:mr-10 text text-transparent bg-clip-text font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                  Full Stack Developer <br />
                </span>

                <div className="hidden md:flex flex-col max-w-lg justify-center items-cenbter">
                  {experienceList[1].tasks.map((task, index) => (
                    <div
                      className=" flex  items-center gap-2 mt-5 text-left text-sm font-semibold text-gray-300 scale-100 hover:scale-105 duration-300 hover:cursor-zoom-in"
                      key={index}
                    >
                      <FaLongArrowAltRight className="min-w-fit inline mr-2" />
                      <p className="">{task}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
      <img className="background-image-left hidden md:flex mt-[300px]" src={colorSharp} alt="Image" />
      <img
        className="skill-background-image-rigth hidden md:flex mt-[300px]"
        src={colorSharp2}
        alt="Image"
      />
    </section>
  );
};

export default Experience;
