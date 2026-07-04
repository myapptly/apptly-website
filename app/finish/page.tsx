export default function FinishPage() {
  return (
    <main className="min-h-screen bg-[#0D0D0D] text-white flex items-center justify-center px-6">
      <div className="max-w-3xl text-center space-y-8">
        <img
  src="/finish.png"
  alt="Congratulations"
  className="w-full rounded-3xl shadow-2xl mb-8"
/> 

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
        href="/dashboard"
            className="bg-[#00FF94] text-black font-bold px-6 py-4 rounded-full"
          >
            Return to Dashboard
          </a>

          <a
            href="/lesson-1"
            className="bg-white text-black font-bold px-6 py-4 rounded-full"
          >
            Start Again
          </a>
        </div>
      </div>
    </main>
  );
} 
