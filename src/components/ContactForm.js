import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const ContactForm = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const resetForm = () => {
    form.current.reset();
    setIsSent(false);
    setErrorMessage("");
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

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
          setIsSent(true);
          setErrorMessage("");
          setTimeout(resetForm, 5000); // Reset form and state after 5 seconds
        },
        (error) => {
          console.log(error.text);
          setErrorMessage("Failed to send message. Please try again.");
        }
      )
      .finally(() => {
        setIsSending(false);
      });
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
        placeholder="Enter your name..."
        required
      />
      <label>Email</label>
      <input
        type="email"
        name="from_email"
        className="bg-lightgray border border-solid border-black rounded-md h-10 p-3 outline-none"
        placeholder="Enter your email address.."
        required
      />
      <label>Message</label>
      <textarea
        className="bg-lightgray border border-solid border-black rounded-md p-3 outline-none"
        rows="5"
        cols="30"
        name="message"
        placeholder="Enter the message you want to send.."
        required
      ></textarea>

      <button
        type="submit"
        disabled={isSending || isSent}
        className={`${
          isSending || isSent ? "bg-gray-400" : "bg-darkPink"
        } text-white border border-solid hover:bg-black hover:border-darkPink border-darkPink rounded-md py-2 my-3 flex items-center justify-center gap-3`}
      >
        {isSending ? "Sending..." : isSent ? "Message Sent" : "Send Message"}
        {!isSending && !isSent && <FaLongArrowAltRight className="text-xl" />}
      </button>

      {isSent && (
        <p className="text-green-500">
          Your message has been sent successfully!
        </p>
      )}
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    </form>
  );
};

export default ContactForm;
