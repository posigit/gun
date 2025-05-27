import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-slate-800">404</h1>
        <h2 className="text-3xl font-semibold text-slate-700 mt-4">
          Page Not Found
        </h2>
        <p className="text-slate-600 mt-4 max-w-md">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <div className="mt-8">
          <Link
            href="/"
            className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Return to Home
          </Link>
        </div>
      </div>
      <div className="mt-12 text-sm text-slate-500">
        <p>
          Deployed on <span className="font-medium">Netlify</span>
        </p>
      </div>
    </div>
  );
}
