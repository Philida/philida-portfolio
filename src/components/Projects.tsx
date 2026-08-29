"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto px-6 md:px-10 py-24"
    >
      <div className="mb-12">
        <p className="text-blue-400 font-medium mb-3">
          Selected Work
        </p>

        <h2 className="text-3xl md:text-4xl font-bold">
          Featured Projects
        </h2>

        <p className="mt-4 text-slate-400 max-w-3xl leading-7">
          A selection of backend and full-stack applications I have
          built while developing my skills in API development,
          databases, authentication, real-time communication, and
          cloud deployment.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="
              border border-slate-800
              rounded-2xl
              p-6
              bg-slate-950/40
              hover:-translate-y-1
              hover:border-blue-500
              transition-all
              duration-300
            "
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <h3 className="text-2xl font-bold">
                {project.title}
              </h3>

              {project.featured && (
                <span className="shrink-0 text-xs px-3 py-1 rounded-full border border-blue-500/40 text-blue-400 bg-blue-500/10">
                  Featured
                </span>
              )}
            </div>

            <p className="text-slate-400 leading-7 mb-6">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="
                    px-3
                    py-1
                    text-sm
                    rounded-full
                    bg-slate-900
                    border
                    border-slate-700
                    text-slate-300
                  "
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href={`/projects/${project.slug}`}
                className="
                  px-4
                  py-2
                  rounded-lg
                  bg-blue-600
                  hover:bg-blue-500
                  text-white
                  transition
                "
              >
                View Details
              </Link>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  px-4
                  py-2
                  rounded-lg
                  border
                  border-slate-700
                  text-slate-300
                  hover:border-slate-500
                  hover:text-white
                  transition
                "
              >
                GitHub
              </a>

              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  px-4
                  py-2
                  rounded-lg
                  border
                  border-slate-700
                  text-slate-300
                  hover:border-slate-500
                  hover:text-white
                  transition
                "
              >
                Live Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}