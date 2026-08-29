const skillGroups = [
  {
    title: "Backend",
    skills: ["Node.js", "NestJS", "Express.js", "TypeScript"],
  },
  {
    title: "Database",
    skills: ["PostgreSQL", "MongoDB", "Prisma", "Mongoose"],
  },
  {
    title: "Authentication",
    skills: ["JWT", "OAuth"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Swagger", "Postman"],
  },
];

export default function Skills() {
  return (
    <section className="max-w-6xl mx-auto px-6 md:px-10 py-24">
      <h2 className="text-3xl md:text-4xl font-bold mb-10">
        Technical Expertise
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="
              border border-slate-800
              rounded-2xl
              p-6
              bg-slate-950/40
              hover:border-slate-600
              transition
              duration-300
            "
          >
            <h3 className="text-lg font-bold mb-5">
              {group.title}
            </h3>

            <div className="flex flex-wrap gap-3">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="
                    px-4
                    py-2
                    rounded-full
                    bg-slate-900
                    border
                    border-slate-700
                    text-slate-200
                  "
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}