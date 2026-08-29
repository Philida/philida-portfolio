"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800/80 bg-[#0D1117]/80 backdrop-blur-md">
      <nav className="max-w-6xl mx-auto px-6 md:px-10 py-4">
        <div className="flex items-center justify-between">
          {/* Logo / Name */}
          <Link
            href="/#home"
            onClick={closeMenu}
            className="font-bold text-lg hover:text-blue-400 transition"
          >
            Philida Amas Igharo
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-sm text-slate-400">
            <a
              href="#about"
              className="hover:text-white transition"
            >
              About
            </a>

            <a
              href="#projects"
              className="hover:text-white transition"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="hover:text-white transition"
            >
              Contact
            </a>

            <a
              href="https://github.com/Philida"
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-4
                py-2
                rounded-lg
                border
                border-slate-700
                hover:border-blue-500
                hover:text-blue-400
                transition
              "
            >
              GitHub
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="
              md:hidden
              p-2
              rounded-lg
              border
              border-slate-700
              text-slate-300
              hover:text-white
              hover:border-slate-500
              transition
            "
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-2">
            <div className="flex flex-col gap-2 border-t border-slate-800 pt-4">
              <a
                href="#about"
                onClick={closeMenu}
                className="
                  px-4
                  py-3
                  rounded-lg
                  text-slate-300
                  hover:bg-slate-900
                  hover:text-white
                  transition
                "
              >
                About
              </a>

              <a
                href="#projects"
                onClick={closeMenu}
                className="
                  px-4
                  py-3
                  rounded-lg
                  text-slate-300
                  hover:bg-slate-900
                  hover:text-white
                  transition
                "
              >
                Projects
              </a>

              <a
                href="#contact"
                onClick={closeMenu}
                className="
                  px-4
                  py-3
                  rounded-lg
                  text-slate-300
                  hover:bg-slate-900
                  hover:text-white
                  transition
                "
              >
                Contact
              </a>

              <a
                href="https://github.com/Philida"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="
                  px-4
                  py-3
                  rounded-lg
                  text-blue-400
                  hover:bg-slate-900
                  hover:text-blue-300
                  transition
                "
              >
                GitHub
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}