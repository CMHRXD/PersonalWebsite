import contactImg from "../assets/bg/contact-img.svg";
import ContactForm from "./ContactForm";
import { Transition } from "@headlessui/react";
// import MapChart from "./map/MapChart";

const Contact = () => {
  return (
    <section
      name="Contact"
      className={`contact ${scrollY > 3100 ? "h-fit" : "h-screen"} md:h-screen`}
      id="connect"
    >
      <div className="mt-20">
        <Transition
          show={scrollY > 3100 ? true : false}
          enter="transition-opacity duration-1000"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-1000"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          className={`mt-10 mb-10 md:mt-0 md:mb-0`}
        >
          <div className="flex md:flex-row flex-col">
            <div className="md:w-1/2 w-full flex items-center justify-center">
              <img className="w-[70%] md:w-[92%]" src={contactImg}  alt="Contact Us" />
              {/* <MapChart /> */}
            </div>
            <div className="md:w-1/2 w-full">
              <div className="flex flex-col justify-center items-center md:items-start px-5">
                <h2>Get In Touch</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </section>
  );
};

export default Contact;
