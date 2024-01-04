const Skills = () => {
  const skills = [
    {
      id: 1,
      image: "/img/HTML.png",
    },
    {
      id: 2,
      image: "/img/CSS.png",
    },
    {
      id: 3,
      image: "/img/JS.png",
    },
    {
      id: 4,
      image: "/img/GSAP.png",
    },
    {
      id: 5,
      image: "/img/GIT.png",
    },
    {
      id: 6,
      image: "/img/REACT.png",
    },
    {
      id: 7,
      image: "/img/TAILWIND.png",
    },
    {
      id: 8,
      image: "/img/BOOTSTRAP.png",
    },
  ];
  return (
    <section
      id="skills"
      className="p-8 tallscreen:section-min-height widescreen:section-min-height text-center"
    >
      <h1 className="font-itim text-4xl text-white font-bold ">Skills</h1>
      <div className="flex flex-wrap items-center justify-center gap-8 my-24">
        {skills.map((skill) => (
          <div key={skill.id}>
            <img src={skill.image} alt="skill" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
