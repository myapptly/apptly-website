export default function ApptlyAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col font-sans">
      {/* Top Navigation Header for APPTLY App */}
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur px-6 py-4 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center space-x-3">
          <span className="text-xl font-bold text-emerald-400 tracking-tight">APPTLY</span>
          <span className="text-xs bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2.5 py-0.5 rounded-full font-semibold">
            App Engine
          </span>
        </div>
        <div className="flex items-center space-x-6 text-sm text-slate-400">
          <a href="/" className="hover:text-white transition">Home</a>
          <a href="/dashboard" className="hover:text-white transition">Dashboard</a>
        </div>
      </header>

      {/* Main App Container */}
      <main className="flex-1 flex flex-col">
        {children}
      </main>
    </div>
  );
}
