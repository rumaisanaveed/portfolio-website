const Skills = () => {
  const skills = [
    {
      id: 1,
      image: "/img/HTML.png",
      name: "Html",
    },
    {
      id: 2,
      image: "/img/CSS.png",
      name: "CSS",
    },
    {
      id: 3,
      image: "/img/JS.png",
      name: "JavaScript",
    },
    {
      id: 4,
      image: "/img/GSAP.png",
      name: "GSAP",
    },
    {
      id: 5,
      image: "/img/GIT.png",
      name: "Git",
    },
    {
      id: 6,
      image: "/img/REACT.png",
      name: "React js",
    },
    {
      id: 7,
      image: "/img/TAILWIND.png",
      name: "Tailwind CSS",
    },
    {
      id: 8,
      image: "/img/MONGODB.png",
      name: "MongoDB",
    },
    {
      id: 9,
      image: "/img/NEXTJS.png",
      name: "Next.js",
    },
    {
      id: 10,
      image: "/img/PYTHON.png",
      name: "Python",
    },
    {
      id: 11,
      image: "/img/TYPESCRIPT.png",
      name: "TypeScript",
    },
    {
      id: 12,
      image: "/img/FIGMA.png",
      name: "Figma",
    },
  ];
  return (
    <section
      id="skills"
      className="p-8 tallscreen:section-min-height widescreen:section-min-height text-center"
    >
      <h1 className="font-itim text-4xl text-white font-bold">Skills</h1>
      <div className="flex flex-wrap items-center justify-center gap-8 my-24">
        {skills.map((skill) => (
          <div key={skill.id}>
            <img src={skill.image} alt="skill" />
            <p className="p-3 pt-7 font-normal text-xl font-jaldi">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
