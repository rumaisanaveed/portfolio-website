import ContactForm from "./ContactForm";
import InfoCard from "./InfoCard";

const Contact = () => {
  return (
    <div className="flex justify-center items-center tallscreen:section-min-height widescreen:section-min-height">
      <section id="contact" className="p-8 w-full md:w-4/5">
        <h1 className="font-itim text-white text-4xl font-bold text-center">
          Contact Me
        </h1>
        <div className="p-7 bg-gray border border-solid border-gray rounded-2xl flex flex-col justify-center items-center gap-10 my-12 md:flex-row md:justify-evenly">
          <InfoCard />
          <ContactForm />
        </div>
      </section>
    </div>
  );
};
export default Contact;
