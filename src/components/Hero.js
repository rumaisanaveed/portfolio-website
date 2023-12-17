import { Link } from "react-scroll";
import resume from "../../src/Resume.pdf";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <section
      id="hero"
      className="mb-12 flex flex-col-reverse items-center justify-center gap-5 text-white p-8 sm:flex-row tallscreen:section-min-height widescreen:section-min-height"
    >
      <article className="sm:w-2/4 flex flex-col justify-center items-center text-center gap-4 py-5 sm:items-start sm:text-left">
        <span className="font-kavoon max-w-md sm:w-full text-purple font-medium text-5xl lg:text-7xl">
          Hello I'm
        </span>
        <h1 className="font-itim md:w-full text-white font-medium text-3xl lg:text-5xl">
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 40,
              strings: ["Frontend Developer", "React Js Developer"],
            }}
          />
        </h1>
        <p className="font-jaldi md:w-full text-white lg:text-xl">
          I'm a frontend developer with a passion for creating interactive and
          user-friendly web applications.
        </p>
        <div className="font-jaldi w-full md:max-w-md flex flex-col items-center gap-4 sm:flex-row sm:items-start pt-3">
          <Link
            to="contact"
            spy="true"
            smooth="true"
            offset={-100}
            duration={500}
            className="w-full sm:w-2/5 border-2 border-solid border-purple rounded-full text-xl p-3 bg-purple text-center text-black hover:text-white hover:bg-black cursor-pointer"
          >
            Hire Me
          </Link>
          <a
            href={resume}
            download="Resume"
            className="w-full text-center cursor-pointer sm:w-3/5 border-2 border-solid border-purple rounded-full text-xl p-3 hover:text-black hover:bg-purple"
          >
            Download CV
          </a>
        </div>
      </article>
      <img className="sm:w-2/6" src="/img/hero.png" alt="Hero" />
    </section>
  );
};

export default Hero;
