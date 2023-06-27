import { useState } from "react";

const ContactForm = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const restartStatus = () => {
    setTimeout(() => {
      setStatus({});
    }, 3000);
  }

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setButtonText("Sending...");
  //   // Send a Request to mail server
  //   const result = await fetch("https://getform.io/f/215933ee-0f88-4287-950f-bb25509903d4", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: {
  //       firstName: formDetails.firstName,
  //       lastName: formDetails.lastName,
  //       email: formDetails.email,
  //       phone: formDetails.phone,
  //       message: formDetails.message,
  //     },
  //   });
  //   console.log(result);
  //   //Evaulate the response
  //   setTimeout(() => {
  //     setButtonText("Send");
  //     setFormDetails(formInitialDetails);
  //     if (result.status == 200) {
  //       setStatus({ succes: true, message: "Message sent successfully" });
  //       restartStatus()
        
  //     } else {
  //       setStatus({
  //         succes: false,
  //         message: "Something went wrong, please try again later.",
  //       });
  //       restartStatus()
  //     }
  //   }, 3000);
  // };
  return (
    <div className="w-full">
      <form 
        action="https://getform.io/f/215933ee-0f88-4287-950f-bb25509903d4" method="POST"
        className="flex flex-col justify-center items-center w-full "
      >
        <div className="flex gap-4 w-full">
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="First Name"
            className="border-2 border-gray-300 rounded-md p-2 m-2"
            onChange={(e) =>
              setFormDetails({ ...formDetails, [e.target.name]: e.target.value })
            }
            required
            maxLength={20}
            min={10}
          />

          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Last Name"
            className="border-2 border-gray-300 rounded-md p-2 m-2"
            onChange={(e) =>
              setFormDetails({ ...formDetails, [e.target.name]: e.target.value })
            }
            required
            maxLength={20}
            min={10}
          />
        </div>
        <div className="flex gap-4 w-full">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="border-2 border-gray-300 rounded-md p-2 m-2"
            onChange={(e) =>
              setFormDetails({ ...formDetails, [e.target.name]: e.target.value })
            }
            required
            maxLength={20}
            min={10}
          />

          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="Phone"
            className="border-2 border-gray-300 rounded-md p-2 m-2"
            onChange={(e) =>
              setFormDetails({ ...formDetails, [e.target.name]: e.target.value })
            }
            required
            maxLength={20}
            min={10}
          />
        </div>
        <div className="w-full">
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            className="border-2 border-gray-300 rounded-md p-2 m-2 w-full h-40"
            onChange={(e) =>
              setFormDetails({ ...formDetails, [e.target.name]: e.target.value })
            }
            required
            maxLength={50}
            min={10}
          />
        </div>
        <div className="w-full flex justify-center items-center">
          <button
            type="submit"
            className="border-2 border-gray-300 rounded-lg p-2 m-2 hover:text-white w-full"
          >
            <span>{buttonText}</span>
          </button>
        </div>
        {status.message && (
          <div>
            <p className={status.success === false ? "danger" : "success"}>
              {status.message}
            </p>
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
