import { useState } from "react";
import { Link } from "react-scroll";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="sticky top-0 text-white bg-black p-8">
      <section className="w-full mx-auto flex justify-between items-center">
        <h1 className="font-itim text-4xl font-medium cursor-pointer">
          Rumaisa
        </h1>
        <div>
          <button
            className="text-3xl md:hidden cursor-pointer"
            onClick={toggleMenu}
          >
            &#9776;
          </button>
          <nav className="hidden md:block text-textColor font-medium text-xl space-x-8">
            <Link
              to="hero"
              spy="true"
              smooth="true"
              offset={-100}
              duration={500}
              className="cursor-pointer decoration-2 decoration-pink hover:underline hover:underline-offset-8"
            >
              Home
            </Link>
            <Link
              to="about"
              spy="true"
              smooth="true"
              offset={-100}
              duration={500}
              className="cursor-pointer decoration-2 decoration-pink hover:underline hover:underline-offset-8"
            >
              About
            </Link>
            <Link
              to="projects"
              spy="true"
              smooth="true"
              offset={-100}
              duration={500}
              className="cursor-pointer decoration-2 decoration-pink hover:underline hover:underline-offset-8"
            >
              Projects
            </Link>
            <Link
              to="skills"
              spy="true"
              smooth="true"
              offset={-100}
              duration={500}
              className="cursor-pointer decoration-2 decoration-pink hover:underline hover:underline-offset-8"
            >
              Skills
            </Link>
            <Link
              to="contact"
              spy="true"
              smooth="true"
              offset={-100}
              duration={500}
              className="cursor-pointer decoration-2 decoration-pink hover:underline hover:underline-offset-8"
            >
              Contact Me
            </Link>
          </nav>
        </div>
      </section>

      {/* Mobile Menu */}

      {showMenu && (
        <section className="md:hidden mt-5 font-itim text-xl flex flex-col justify-center gap-4 items-center">
          <Link
            to="hero"
            className="cursor-pointer decoration-2 decoration-pink hover:underline hover:underline-offset-8"
            spy="true"
            smooth="true"
            offset={-100}
            duration={500}
          >
            Hero
          </Link>
          <Link
            to="about"
            className="decoration-2 decoration-pink cursor-pointer hover:underline hover:underline-offset-8"
            spy="true"
            smooth="true"
            offset={-100}
            duration={500}
          >
            About
          </Link>
          <Link
            to="projects"
            className="decoration-2 decoration-pink cursor-pointer hover:underline hover:underline-offset-8"
            spy="true"
            smooth="true"
            offset={-100}
            duration={500}
          >
            Projects
          </Link>
          <Link
            to="skills"
            className="decoration-2 decoration-pink  cursor-pointer hover:underline hover:underline-offset-8"
            spy="true"
            smooth="true"
            offset={-100}
            duration={500}
          >
            Skills
          </Link>
          <Link
            to="contact"
            className="decoration-2 decoration-purple cursor-pointer hover:underline hover:underline-offset-8"
            spy="true"
            smooth="true"
            offset={-100}
            duration={500}
          >
            Contact Me
          </Link>
        </section>
      )}
    </header>
  );
};

export default Header;
