import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6xsv83n",
        "template_0i9v6hr",
        form.current,
        "WUkZf84pdgij4z126"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="md:w-1/2 w-full font-jaldi flex flex-col gap-4"
      autoComplete="off"
    >
      <label>Name</label>
      <input
        type="text"
        name="from_name"
        className="bg-lightgray border border-solid border-black rounded-md h-10 p-3 outline-none"
      />
      <label>Email</label>
      <input
        type="email"
        name="from_email"
        className="bg-lightgray border border-solid border-black rounded-md h-10 p-3 outline-none"
      />
      <label>Message</label>
      <textarea
        className="bg-lightgray border border-solid border-black rounded-md p-3 outline-none"
        rows="5"
        cols="30"
        name="message"
      ></textarea>
      <button
        type="submit"
        value="Send"
        className="bg-darkPink text-white border border-solid border-darkPink rounded-md py-2 my-3"
      >
        <div className="flex items-center justify-center gap-3">
          <p>Send Message</p>
          <FaLongArrowAltRight className="text-xl" />
        </div>
      </button>
    </form>
  );
};

export default ContactForm;
