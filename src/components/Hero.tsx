"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center py-24"
    >
      <div className="w-full max-w-6xl mx-auto px-6 md:px-10">
        <div className="max-w-4xl">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-blue-400 font-medium text-lg mb-4"
          >
            Hi, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight"
          >
            Philida Amas Igharo
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl md:text-4xl mt-4 text-slate-300"
          >
            Junior Backend Engineer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 text-lg md:text-xl text-slate-400 max-w-3xl leading-8"
          >
            I build scalable APIs, authentication systems,
            database-driven applications, and real-time
            backend solutions using Node.js, NestJS,
            TypeScript, PostgreSQL, and MongoDB.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 mt-8"
          >
          <a
            href="/Philida-Amas-Igharo-CV.pdf"
            download
            className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium transition"
          >
            Download CV
          </a>
          
            <a
              href="#projects"
              className="
                px-5
                py-3
                rounded-lg
                bg-blue-600
                hover:bg-blue-500
                text-white
                transition
              "
            >
              View My Projects
            </a>

            <a
              href="#contact"
              className="
                px-5
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
              Get In Touch
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-3 mt-10"
          >
            {[
              "Node.js",
              "NestJS",
              "TypeScript",
              "PostgreSQL",
              "MongoDB",
              "Prisma",
            ].map((skill) => (
              <span
                key={skill}
                className="
                  px-4
                  py-2
                  rounded-full
                  border
                  border-slate-700
                  bg-slate-950/40
                  text-slate-300
                "
              >
                {skill}
              </span>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}