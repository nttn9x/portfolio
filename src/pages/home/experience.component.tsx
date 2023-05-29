const companies = [
  {
    name: "FPT",
    position: "Solution Architect",
    link: "https://chungta.vn",
    time: "2021 - present",
    skills: [
      {
        title: "ReactJs",
      },
      {
        title: "Angular",
      },
      {
        title: "Golang",
      },
      {
        title: "AWS",
      },
    ],
  },
  {
    name: "Global Performance Commerce",
    position: "Mobile | Front-End Developer",
    link: "https://www.dfogpc.com",
    time: "2019 - 2021",
    skills: [
      {
        title: "React",
      },
      {
        title: "React Native",
      },
      {
        title: "Kotlin",
      },
    ],
  },
  {
    name: "Digi-Texx",
    position: "Full-Stack Developer",
    link: "https://digi-texx.com",
    time: "2016 - 2019",
    skills: [
      {
        title: "React",
      },
      {
        title: "Angular",
      },
      {
        title: "Python",
      },
      {
        title: "ASP.NET Core2.x",
      },
      {
        title: "Java",
      },
      {
        title: "Spring MVC",
      },
      {
        title: "Bpmn",
      },
      {
        title: "Postgresql",
      },
    ],
  },
  {
    name: "Newsaigonsoft",
    position: "Java Developer",
    link: "https://newsaigonsoft.com",
    time: "2011 - 2016",
    skills: [
      {
        title: "Java",
      },
      {
        title: "JSF",
      },
      {
        title: "JSP",
      },
      {
        title: "Solr",
      },
      {
        title: "Jbpm",
      },
      {
        title: "Postgresql",
      },
    ],
  },
];

export default function Experience() {
  return (
    <div id="experience" className="mt-20 flex flex-col gap-6">
      <span className="tracking-widest sticky top-0 md:relative bg-stone-950 text-secondary text-sm font-medium opacity-50">
        EXPERIENCE
      </span>
      <div className="group/list flex flex-col gap-12">
        {companies.map((c, i) => (
          <div
            key={i}
            className="group group/item md:hover:!opacity-100 relative hover:cursor-pointer flex flex-col md:flex-row gap-3"
          >
            <div className="absolute z-0 -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>

            <div className="flex-none z-10 w-32 text-secondary opacity-20 font-medium text-sm">
              {c.time}
            </div>
            <div className="flex-1 z-10">
              <div className="text-primary font-bold text-xl group-hover/item:text-amber-400">
                {c.name}
              </div>
              <div className="text-secondary font-medium">{c.position}</div>
              <div className="flex flex-wrap gap-3 mt-4">
                {c.skills.map((s, j) => (
                  <div
                    key={j}
                    className="rounded-full bg-amber-400/20 py-1 px-3 text-xs font-bold text-primary"
                  >
                    {s.title}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
