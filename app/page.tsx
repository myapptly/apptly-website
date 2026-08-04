import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans flex flex-col justify-between">
      {/* Top Header */}
      <header className="border-b border-slate-800 px-6 py-4 flex justify-between items-center max-w-6xl mx-auto w-full">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-emerald-400 tracking-tight">APPTLY</span>
        </div>
        <div className="space-x-4">
          <Link 
            href="/apptly-app" 
            className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-4 py-2 rounded-lg font-bold text-sm transition"
          >
            Launch App Builder
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-4xl mx-auto text-center px-6 py-16 flex-1 flex flex-col items-center justify-center">
        <span className="text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full uppercase tracking-wider mb-4">
          No-Code App Generator
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
          Build & Deploy Your Custom Mobile App in Minutes
        </h1>
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mb-10">
          Select your business type, customize your branding, and preview your application instantly with APPTLY.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            href="/apptly-app" 
            className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-8 py-4 rounded-xl text-lg transition"
          >
            Start Building Now ($0)
          </Link>
        </div>

        {/* Integrated Features Grid */}
        <section className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 text-left w-full">
          <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl">
            <div className="text-2xl mb-2">⚡</div>
            <h3 className="font-bold text-slate-200 mb-1">Instant Blueprints</h3>
            <p className="text-xs text-slate-400">Pre-configured tailored features for salons, repair shops, retail, and creators.</p>
          </div>
          <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl">
            <div className="text-2xl mb-2">📱</div>
            <h3 className="font-bold text-slate-200 mb-1">Live Mobile Preview</h3>
            <p className="text-xs text-slate-400">Render your theme colors, logo, and layout real-time in an interactive smartphone shell.</p>
          </div>
          <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl">
            <div className="text-2xl mb-2">🔥</div>
            <h3 className="font-bold text-slate-200 mb-1">Firestore Connected</h3>
            <p className="text-xs text-slate-400">Save and store app configurations directly in Cloud Firestore with zero setup.</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 text-center py-6 text-xs text-slate-500">
        © {new Date().getFullYear()} APPTLY. All rights reserved.
      </footer>
    </div>
  );
}
