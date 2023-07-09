import { useState, useEffect } from "react";
import headerImg from "../assets/header-img.svg";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(200 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Full Stack Developer", "Integration Engineer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(200);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section name="Home" id="1" className="banner">
      <div className="flex flex-col items-center justify-center p-10 md:flex-row context-container">
        <div className="w-full md:w-2/3  flex items-center justify-center">
          <div className="">
            <span className="tagline">Welcome to my Portfolio</span>
            <h1 className="text-5xl md:text-6xl font-bold">
              {`Hi! I'm Cristian Hernandez, `}
              <br></br>{" "}
              <span
                className="txt-rotate"
                dataperiod="1000"
                data-rotate='[ "Full Stack Developer", "Integration Engineer" ]'
              >
                <span className="wrap">{text}</span>
              </span>
            </h1>
            <p className="mt-12 rounded-lg ">
              I am a passionate software developer specializing in web
              development, driven by a strong dedication to building robust and
              scalable web applications and API integrations. My main goal is
              continuous improvement as a developer, so I am committed to
              staying ahead of the industry by constantly learning and staying
              updated with the latest trends and emerging technologies.
            </p>
            <button
              className="mb-10 rounded-lg  tagline hover:cursor-pointer"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/cristian-hernandez-402090245/"
                )
              }
            >
              Let’s Connect
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/3 mt-10 md:mt-0 flex items-center justify-end">
          <div className="animate-bounce duration-500">
            <img src={headerImg} alt="Header Img" />
          </div>
        </div>
      </div>
    </section>
  );
};
