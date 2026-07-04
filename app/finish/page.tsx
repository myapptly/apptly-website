export default function FinishPage() {
  return (
    <main className="min-h-screen bg-[#0D0D0D] text-white flex items-center justify-center px-6">
      <div className="max-w-3xl text-center space-y-8">
        <h1 className="text-5xl font-black text-[#00FF94]">
          🎉 Congratulations!
        </h1>

        <h2 className="text-3xl font-bold">
          You've Done It! You Finished APPTLY!
        </h2>

        <p className="text-xl text-gray-300">
          You've completed the course. Now it's time to build real apps, help real businesses, and keep learning.
        </p>

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
