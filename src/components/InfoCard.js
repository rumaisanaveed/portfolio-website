import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const InfoCard = () => {
  return (
    <div className="md:w-2/5 w-full flex flex-col justify-center items-center gap-3">
      <img src="/img/contact.png" alt="Girl with laptop" />
      <h1 className="font-itim max-w-md text-2xl font-bold">Rumaisa Naveed</h1>
      <h2 className="font-jaldi max-w-md text-xl font-medium">
        Frontend Web Developer
      </h2>
      <h3 className="font-itim max-w-md text-xl font-medium ">
        Connect with me
      </h3>
      <div className="flex items-center gap-5 text-2xl">
        <Link
          to="https://twitter.com/its_me_rumi"
          target="_blank"
          className="cursor-pointer"
        >
          <FaSquareXTwitter />
        </Link>
        <Link
          to="https://www.linkedin.com/in/rumaisa-naved-a6b96a230/"
          target="_blank"
          className="cursor-pointer"
        >
          <FaLinkedin />
        </Link>

        <Link
          to="https://www.instagram.com/techgirl_guide/"
          target="_blank"
          className="cursor-pointer"
        >
          <FaInstagram />
        </Link>

        <Link
          to="https://github.com/rumaisanaveed/"
          target="_blank"
          className="cursor-pointer"
        >
          <FaGithub />
        </Link>
      </div>
    </div>
  );
};

export default InfoCard;
