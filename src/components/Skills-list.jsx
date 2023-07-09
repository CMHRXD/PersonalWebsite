import colorSharp from "../assets/color-sharp.png";
import colorSharp2 from "../assets/color-sharp2.png";
import {
  SiJavascript,
  SiCss3,
  SiHtml5,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiMicrosoftsqlserver,
  SiMongodb,
  SiRedis,
  SiDocker,
  SiKubernetes,
  SiGooglecloud,
  SiDigitalocean,
  SiNetlify,
  SiHeroku,
  SiRailway,
  SiTailwindcss,
  SiSqlite,
  SiSnowflake
} from "react-icons/si";
import SiPython from "../assets/icons/py-icon.svg";
import SiJava from "../assets/icons/java-icon.svg";
import SiC from "../assets/icons/c-icon.svg";
import SiWorkato from "../assets/icons/workato-logos.png";
import { Link } from "react-scroll";
import { PopOverComponent } from "./PopOverComponent";
import { Transition } from "@headlessui/react";

export const SkillsList = () => {
  const PL_list = [
    { name: "HTML", icon: <SiHtml5 className="w-10 h-10 text-orange-500" /> },
    { name: "CSS", icon: <SiCss3 className="w-10 h-10 text-blue-500" /> },
    {
      name: "JavaScript",
      icon: <SiJavascript className="w-10 h-10 text-yellow-300" />,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="w-10 h-10 text-blue-400" />,
    },
    {
      name: "Python",
      icon: <img src={SiPython} className="w-11 h-11"></img>,
    },
    {
      name: "Java",
      icon: <img src={SiJava} className="w-11 h-11"></img>,
    },
    {
      name: "C++",
      icon: <img src={SiC} className="w-11 h-11"></img>,
    },
  ];

  const DB_List = [
    {
      name: "Mysql",
      icon: (
        <SiMysql className="w-10 h-10 bg-white rounded-full text-blue-600 p-1" />
      ),
    },
    {
      name: "SQL Server",
      icon: (
        <SiMicrosoftsqlserver className="w-10 h-10 bg-white rounded-full text-red-600 p-1" />
      ),
    },
    {
      name: "SQLite",
      icon: (
        <SiSqlite className="w-10 h-10 bg-white rounded-full text-blue-600 p-1" />
      ),
    },
    {
      name: "Snowflake",
      icon: (
        <SiSnowflake className="w-10 h-10 bg-white rounded-full text-blue-600 p-1" />
      ),
    },
    {
      name: "MongoDB",
      icon: (
        <SiMongodb className="w-10 h-10 bg-white rounded-full text-green-600 p-1" />
      ),
    },
    {
      name: "Redis",
      icon: (
        <SiRedis className="w-10 h-10 bg-white rounded-full text-red-600 p-1" />
      ),
    },
  ];

  const Cloud_Deployment_List = [
    {
      name: "Google Cloud",
      icon: (
        <SiGooglecloud className="w-10 h-10 text-blue-600 bg-white rounded-full p-1" />
      ),
    },
    {
      name: "Workato",
      icon: (
        <img
          src={SiWorkato}
          className="w-10 h-10 text-blue-600 bg-white rounded-full p-1"
        />
      ),
    },
    {
      name: "Digital Ocean",
      icon: (
        <SiDigitalocean className="w-10 h-10 text-blue-600 bg-white rounded-full p-1" />
      ),
    },
    {
      name: "Netlify",
      icon: (
        <SiNetlify className="w-10 h-10 text-blue-600 bg-white rounded-full p-1" />
      ),
    },
    {
      name: "Heroku",
      icon: (
        <SiHeroku className="w-10 h-10 text-purple-600 bg-white rounded-full p-1" />
      ),
    },
    {
      name: "Railway",
      icon: (
        <SiRailway className="w-10 h-10 text-black bg-white rounded-full p-1" />
      ),
    },
  ];

  const ToolsFrameworksLibreires = [
    { name: "React", icon: <SiReact className="w-10 h-10 text-blue-600" /> },
    {
      name: "Node.js",
      icon: <SiNodedotjs className="w-10 h-10 text-green-600" />,
    },
    {
      name: "Express",
      icon: (
        <SiExpress className="w-10 h-10 bg-white rounded-full text-black p-1" />
      ),
    },
    {
      name: "Tailwind CSS",
      icon: (
        <SiTailwindcss className="w-10 h-10 bg-white rounded-full text-blue-600 p-1" />
      ),
    },
    {
      name: "Docker",
      icon: (
        <SiDocker className="w-10 h-10 bg-white rounded-full text-blue-600 p-1" />
      ),
    },
    {
      name: "Kubernete",
      icon: (
        <SiKubernetes className="w-10 h-10 text-blue-600 bg-white rounded-full p-1" />
      ),
    },
  ];

  return (
    <section name="Skills" className="skill h-screen" id="skills">
      <div className=" context-container">
        <div className="skill-bx ">
          <Link
            to="Skills"
            className="text-6xl text-transparent bg-clip-text font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
          >
            Skills
          </Link>
          <p className="">
            Over the years, I have diligently acquired a wide range of skills.
            It all began with mastering the fundamentals of programming
            languages, and from there, I studied various frameworks and tools
            that accelerated my progress toward achieving my goals. Both
            university education and professional experiences have equipped me
            with knowledge about diverse databases and cloud platforms,
            empowering me to handle data effectively and leverage cloud services
            efficiently.
          </p>
          <Transition
            show={scrollY > 170 ? true : false}
            enter="transition-opacity duration-1000"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-1000"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="hidden md:flex justify-center gap-10">
              {/* Programing Language*/}
              <div className="flex flex-col items-start">
                <h3 className="font-semibold text-xl">Programing Languages</h3>
                {PL_list.map((skill, index) => (
                  <div
                    className="flex flex-row items-center gap-2 mt-5"
                    key={index}
                  >
                    {skill.icon}
                    <h5 className="font-semibold text-lg">{skill.name}</h5>
                  </div>
                ))}
              </div>
              {/* Tools Frameworks Libreries*/}
              <div className="flex flex-col items-start">
                <h3 className="font-semibold text-xl">
                  Tools & Frameworks & Libreries
                </h3>
                {ToolsFrameworksLibreires.map((skill, index) => (
                  <div
                    className="flex flex-row items-center gap-2 mt-5"
                    key={index}
                  >
                    {skill.icon}
                    <h5 className="font-semibold text-lg">{skill.name}</h5>
                  </div>
                ))}
              </div>
              {/* Database */}
              <div className="flex flex-col items-start">
                <h3 className="font-semibold text-xl">Databases</h3>
                {DB_List.map((skill, index) => (
                  <div
                    className="flex flex-row items-center gap-2 mt-5"
                    key={index}
                  >
                    {skill.icon}
                    <h5 className="font-semibold text-lg">{skill.name}</h5>
                  </div>
                ))}
              </div>
              {/* Cloud Deployment*/}
              <div className="flex flex-col items-start">
                <h3 className="font-semibold text-xl">Cloud Tecnologies</h3>
                {Cloud_Deployment_List.map((skill, index) => (
                  <div
                    className="flex flex-row items-center gap-2 mt-5"
                    key={index}
                  >
                    {skill.icon}
                    <h5 className="font-semibold text-lg">{skill.name}</h5>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-center gap-5 justify-center w-full md:hidden">
              <PopOverComponent list={PL_list} title={"Programing Language"} />
              <PopOverComponent
                list={ToolsFrameworksLibreires}
                title={"Tools Frameworks Libreries"}
              />
              <PopOverComponent list={DB_List} title={"Database"} />
              <PopOverComponent
                list={Cloud_Deployment_List}
                title={"Cloud Deployment"}
              />
            </div>
          </Transition>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
      <img
        className="skill-background-image-rigth"
        src={colorSharp2}
        alt="Image"
      />
    </section>
  );
};
