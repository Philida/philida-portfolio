export default function Footer() {
  return (
    <footer className="border-t border-slate-800 mt-12">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="font-bold text-lg">
              Philida Amas Igharo
            </h2>

            <p className="text-slate-500 mt-1">
              Junior Backend Engineer
            </p>
          </div>

          <div className="flex flex-wrap gap-5 text-slate-400">
            <a
              href="https://github.com/Philida"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              GitHub
            </a>

            <a
              href="#"
              className="hover:text-white transition"
            >
              LinkedIn
            </a>

            <a
              href="#"
              className="hover:text-white transition"
            >
              Email
            </a>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-6">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Philida Amas Igharo.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}