export default function Education() {
  return (
    <section className="max-w-6xl mx-auto px-6 md:px-10 py-24">
      <div className="mb-12">
        <p className="text-blue-400 font-medium mb-3">
          Background
        </p>

        <h2 className="text-3xl md:text-4xl font-bold">
          Education
        </h2>
      </div>

      <div
        className="
          max-w-4xl
          border
          border-slate-800
          rounded-2xl
          p-6
          md:p-8
          bg-slate-950/40
          hover:border-slate-600
          transition
          duration-300
        "
      >
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div>
            <h3 className="text-2xl font-bold">
              AltSchool Africa
            </h3>

            <p className="text-blue-400 mt-2 font-medium">
              Backend Engineering Program
            </p>
          </div>

          <span className="text-sm text-slate-500">
            Completed 2026
          </span>
        </div>

        <div className="mt-6 text-slate-300 leading-8">
          <p>
            Completed intensive training focused on backend
            engineering, API development, authentication,
            database management, application architecture,
            and cloud deployment.
          </p>

          <p className="mt-4">
            The program included hands-on development with
            Node.js, NestJS, TypeScript, PostgreSQL, MongoDB,
            REST APIs, and modern backend development practices.
          </p>
        </div>
      </div>
    </section>
  );
}