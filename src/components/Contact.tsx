import Link from "next/link";

export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-6xl mx-auto px-6 md:px-10 py-24"
    >
      <div className="max-w-3xl">
        <p className="text-blue-400 font-medium mb-3">
          Get In Touch
        </p>

        <h2 className="text-3xl md:text-4xl font-bold">
          Let's Connect
        </h2>

        <p className="mt-6 text-lg text-slate-400 leading-8">
          I'm open to junior backend engineering opportunities,
          collaborations, and conversations about building
          reliable backend systems and APIs.
        </p>
      </div>

      <div className="mt-10 grid md:grid-cols-2 gap-4 max-w-4xl">
        {/* Email */}
        <a
          href="mailto:philidaamas@gmail.com"
          className="
            rounded-xl
            border
            border-slate-800
            bg-slate-950/40
            p-6
            hover:border-slate-600
            transition
          "
        >
          <p className="text-sm text-slate-500 mb-2">
            Email
          </p>

          <p className="text-slate-200">
            philidaamas@gmail.com
          </p>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/Philida"
          target="_blank"
          rel="noopener noreferrer"
          className="
            rounded-xl
            border
            border-slate-800
            bg-slate-950/40
            p-6
            hover:border-slate-600
            transition
          "
        >
          <p className="text-sm text-slate-500 mb-2">
            GitHub
          </p>

          <p className="text-slate-200">
            github.com/Philida
          </p>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/philida-igharo-61382b1ab/"
          target="_blank"
          rel="noopener noreferrer"
          className="
            rounded-xl
            border
            border-slate-800
            bg-slate-950/40
            p-6
            hover:border-slate-600
            transition
          "
        >
          <p className="text-sm text-slate-500 mb-2">
            LinkedIn
          </p>

          <p className="text-slate-200">
            LinkedIn Profile
          </p>
        </a>

        {/* CV */}
        <a
          href="/Philida-Amas-Igharo-CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="
            rounded-xl
            border
            border-blue-500/40
            bg-blue-500/10
            p-6
            hover:border-blue-500/70
            transition
          "
        >
          <p className="text-sm text-blue-400 mb-2">
            Resume
          </p>

          <p className="text-slate-200">
            View My CV →
          </p>
        </a>
      </div>

      <div className="mt-10">
        <a
          href="/"
          className="text-slate-400 hover:text-white transition"
        >
          ← Back to Homepage
        </a>
      </div>
    </section>
  );
}