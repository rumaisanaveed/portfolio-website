import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa6";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Organic Store",
      image: "/img/project1.jpg",
      link: "https://organic-ecommerce-store.netlify.app/",
      code: "https://github.com/rumaisanaveed/ecommerce-app",
    },

    {
      id: 2,
      name: "Resto Food",
      image: "/img/project3.jpg",
      link: "https://resto-food-website.netlify.app/",
      code: "https://github.com/rumaisanaveed/Resto-Food-Website",
    },

    {
      id: 3,
      name: "Acme Rockets",
      image: "/img/project2.jpg",
      link: "https://acmee-rockets.netlify.app/",
      code: "",
    },
  ];

  return (
    <section
      id="projects"
      className=" bg-black text-white p-8 flex flex-col justify-center items-center tallscreen:section-min-height widescreen:section-min-height"
    >
      <h1 className="font-itim text-4xl font-bold text-center py-4">
        My Projects
      </h1>
      <div className="p-1 my-12 flex flex-col flex-wrap justify-center items-center sm:flex-row gap-10">
        {projects.map((project) => (
          <div
            className="max-w-xs p-5 border-2 border-solid border-lightgray bg-black rounded-3xl shadow-inner flex flex-col"
            key={project.id}
          >
            <img
              className="w-full h-48 rounded-2xl"
              src={project.image}
              alt={project.name}
            />
            <h2 className="font-itim text-2xl pt-6 font-bold">
              {project.name}
            </h2>
            <div className="font-jaldi w-full flex justify-between items-center pt-4">
              <Link
                className="w-1/2 text-xl font-medium bg-black border border-1 border-solid rounded-md text-white text-center py-3 hover:bg-white hover:text-black"
                to={project.link}
                target="_blank"
              >
                Demo
              </Link>
              <Link
                className="font-medium text-4xl py-3"
                to={project.code}
                target="_blank"
              >
                <FaGithub />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
