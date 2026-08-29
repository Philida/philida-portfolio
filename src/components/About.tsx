export default function About() {
  return (
    <section
      id="about"
      className="max-w-6xl mx-auto px-6 md:px-10 py-24"
    >
      <h2 className="text-3xl font-bold mb-8">
        About Me
      </h2>

      <div className="space-y-6 text-slate-300 leading-8 max-w-4xl">
        <p>
          I am a Junior Backend Engineer who recently completed
          the AltSchool Africa Backend Engineering Program.
        </p>

        <p>
          I specialize in building REST APIs, authentication
          systems, database-driven applications, and real-time
          solutions using Node.js, TypeScript, NestJS, Express.js,
          PostgreSQL, and MongoDB.
        </p>

        <p>
          Through hands-on projects such as Eventful API,
          Restaurant ChatBot, Birthday App, and Real-Time
          Guessing Game, I have developed practical experience
          in backend architecture, API development, database
          design, authentication, real-time communication,
          deployment, and API documentation.
        </p>
      </div>
    </section>
  );
}