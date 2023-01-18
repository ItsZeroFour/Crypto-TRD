import React, { useRef, useState } from "react";
import oparator from "../../images/operator.svg";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessgae] = useState("");
  const [correctData, setCorrectData] = useState(false);
  const form = useRef();

  function checkCorrectEmail() {
    if (email.includes("@") && message !== "" && name !== "") {
      setCorrectData(true);
    } else {
      setCorrectData(false);
    }
  }

  const sendEmail = (event) => {
    event.preventDefault();

    correctData &&
      emailjs
        .sendForm(
          "service_a6waexr",
          "template_1g32ozl",
          form.current,
          "Bte1EjapjDkuVt8Kb"
        )
        .then(
          (result) => {
            console.log(result.text);
            event.target.reset();
          },
          (error) => {
            console.log(error.text);
          }
        );
  };

  console.log(correctData);

  return (
    <div className="contactus">
      <div className="contactus__container">
        <form className="contactus__form" ref={form} onSubmit={sendEmail}>
          <h1>Contact Us</h1>
          <input
            onChange={(event) => setName(event.target.value)}
            className="contactus__name"
            type="text"
            name="fullName"
            placeholder="Name"
          />
          <input
            onChange={(event) => setEmail(event.target.value)}
            className="contactus__email"
            type="email"
            name="email"
            placeholder="Email"
          />
          <textarea
            onChange={(event) => setMessgae(event.target.value)}
            className="contactus__message"
            placeholder="Your Message"
            name="message"
          />
          <input
            className="contactus__button"
            type="submit"
            value="Send"
            onClick={() => checkCorrectEmail()}
          />

          {!correctData ? (
            <p className="contactus__incorrect-data">Error! Incorrect Data</p>
          ) : (
            <p className="contactus__correct-data">
              The message was delivered successfully
            </p>
          )}
        </form>

        <div className="contactus__img">
          <img src={oparator} alt="operator" />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
