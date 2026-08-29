import Link from "next/link";
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const project = projects.find(
    (p) => p.slug === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />
    <main className="min-h-screen bg-[#020817] text-white pt-20">
      <div className="w-full flex justify-center">
        <div className="w-full max-w-6xl px-6 md:px-10 py-20">

          {/* Back to Projects */}
          <Link
            href="/#projects"
            className="
              inline-flex
              items-center
              text-slate-400
              hover:text-white
              transition
              mb-10
            "
          >
            ← Back to Projects
          </Link>

          {/* Project Header */}
          <header className="mb-16 max-w-4xl">
            <div className="flex flex-wrap items-center gap-3 mb-5">
              {project.featured && (
                <span
                  className="
                    px-3
                    py-1
                    rounded-full
                    border
                    border-blue-500/40
                    bg-blue-500/10
                    text-blue-400
                    text-sm
                  "
                >
                  Featured Project
                </span>
              )}

              <span className="text-sm text-slate-500">
                {project.title}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              {project.title}
            </h1>

            <p className="mt-6 text-lg md:text-xl text-slate-400 leading-9">
              {project.description}
            </p>
          </header>

          {/* Overview */}
          {project.overview && (
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-6">
                Overview
              </h2>

              <div
                className="
                  rounded-2xl
                  border
                  border-slate-800
                  bg-slate-950/40
                  p-6
                  md:p-8
                  max-w-5xl
                "
              >
                <p className="text-slate-300 text-lg leading-9">
                  {project.overview}
                </p>
              </div>
            </section>
          )}

          {/* Tech Stack */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">
              Tech Stack
            </h2>

            <div className="flex flex-wrap gap-3">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="
                    px-4
                    py-2
                    rounded-full
                    border
                    border-slate-700
                    bg-slate-900
                    text-slate-200
                  "
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Features */}
          {project.features && (
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-6">
                Key Features
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                {project.features.map((feature) => (
                  <div
                    key={feature}
                    className="
                      rounded-xl
                      border
                      border-slate-800
                      bg-slate-950/40
                      p-5
                      text-slate-200
                      hover:border-slate-600
                      transition
                    "
                  >
                    <span className="text-blue-400 mr-3">
                      ✓
                    </span>

                    {feature}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Architecture */}
          {project.architecture && (
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-6">
                Architecture
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                {project.architecture.map((item) => (
                  <div
                    key={item}
                    className="
                      rounded-xl
                      border
                      border-slate-800
                      bg-slate-950/40
                      p-5
                      text-slate-200
                      hover:border-slate-600
                      transition
                    "
                  >
                    {item}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Authentication */}
          {project.authentication && (
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-6">
                Authentication & Security
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                {project.authentication.map((item) => (
                  <div
                    key={item}
                    className="
                      rounded-xl
                      border
                      border-slate-800
                      bg-slate-950/40
                      p-5
                      text-slate-200
                      hover:border-slate-600
                      transition
                    "
                  >
                    {item}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Database */}
          {(project.databaseModels?.length ||
            project.databaseNotes?.length) ? (
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-6">
                Database
              </h2>

              {project.databaseModels &&
                project.databaseModels.length > 0 && (
                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.databaseModels.map((model) => (
                      <span
                        key={model}
                        className="
                          px-4
                          py-2
                          rounded-full
                          border
                          border-slate-700
                          bg-slate-900
                          text-slate-200
                        "
                      >
                        {model}
                      </span>
                    ))}
                  </div>
                )}

              {project.databaseNotes && (
                <div className="grid md:grid-cols-2 gap-4">
                  {project.databaseNotes.map((note) => (
                    <div
                      key={note}
                      className="
                        rounded-xl
                        border
                        border-slate-800
                        bg-slate-950/40
                        p-5
                        text-slate-200
                      "
                    >
                      {note}
                    </div>
                  ))}
                </div>
              )}
            </section>
          ) : null}

          {/* Project Links */}
          <section className="border-t border-slate-800 pt-12">
            <h2 className="text-3xl font-bold mb-6">
              Project Links
            </h2>

            <div className="flex flex-wrap gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  px-6
                  py-3
                  rounded-lg
                  border
                  border-slate-700
                  text-slate-300
                  hover:border-slate-500
                  hover:text-white
                  transition
                "
              >
                GitHub Repository
              </a>

              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  px-6
                  py-3
                  rounded-lg
                  bg-blue-600
                  hover:bg-blue-500
                  text-white
                  transition
                "
              >
                Live Demo
              </a>
            </div>
          </section>

        </div>
      </div>
    </main>
    <Footer />
    </> 
  );
}