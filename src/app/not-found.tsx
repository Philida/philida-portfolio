import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#020817] text-white flex items-center justify-center px-6">
      <div className="text-center max-w-xl">
        <p className="text-blue-400 font-medium mb-4">
          404
        </p>

        <h1 className="text-4xl md:text-5xl font-bold">
          Page Not Found
        </h1>

        <p className="mt-6 text-lg text-slate-400 leading-8">
          Sorry, the page you are looking for does not exist
          or may have been moved.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/"
            className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition"
          >
            Back to Homepage
          </Link>

          <Link
            href="/#projects"
            className="px-6 py-3 rounded-lg border border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white transition"
          >
            View Projects
          </Link>
        </div>
      </div>
    </main>
  );
}