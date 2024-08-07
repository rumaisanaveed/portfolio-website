import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa6";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Organic Store",
      image: "/img/project2.jpeg",
      link: "https://organic-ecommerce-store.netlify.app/",
      code: "https://github.com/rumaisanaveed/ecommerce-app",
    },

    {
      id: 2,
      name: "Resto Food",
      image: "/img/project3.jpeg",
      link: "https://resto-food-website.netlify.app/",
      code: "https://github.com/rumaisanaveed/Resto-Food-Website",
    },

    {
      id: 3,
      name: "Acme Rockets",
      image: "/img/project1.jpeg",
      link: "https://acmee-rockets.netlify.app/",
      code: "",
    },

    {
      id: 4,
      name: "Syncfusion Dashboard",
      image: "/img/dashboard.png",
      link: "https://dashboard-w-syncfusion.netlify.app/",
      code: "https://github.com/rumaisanaveed/Dashboard-Application",
    },

    {
      id: 5,
      name: "Metaversus Website",
      image: "/img/metaversus.png",
      link: "https://metaversus-web3.vercel.app/",
      code: "https://github.com/rumaisanaveed/Metaversus",
    },
    {
      id: 6,
      name: "Panda Login Form",
      image: "/img/panda-login-form.png",
      link: "https://animated-panda-login.netlify.app/",
      code: "https://github.com/rumaisanaveed/panda-login-page",
    },
  ];

  return (
    <section
      id="projects"
      className=" bg-black text-white p-8 flex flex-col justify-center items-center tallscreen:section-min-height widescreen:section-min-height"
    >
      <h1 className="font-itim text-4xl font-bold text-center py-4 ">
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
