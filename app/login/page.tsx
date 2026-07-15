"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    const res = await fetch("/api/verify-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    if (res.ok) {
      router.push("/dashboard");
    } else {
      setStatus("error");
    }
  }

  return (
    <main className="min-h-screen bg-[#0D0D0D] text-white flex items-center justify-center px-6">
      <div className="max-w-md w-full space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-black text-[#00FF7F]">Welcome Back</h1>
          <p className="text-gray-400">
            Enter the email you used to purchase APPTLY to access your lessons.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full rounded-xl bg-[#1A1A1A] border border-[#00FF7F]/20 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#00FF7F]"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full rounded-xl bg-[#00FF7F] text-black font-bold py-3 hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {status === "loading" ? "Checking..." : "Access My Lessons"}
          </button>
        </form>

        {status === "error" && (
          <p className="text-red-400 text-sm text-center">
            We couldn't find a purchase under that email. Double check it, or
            email support@myapptly.com for help.
          </p>
        )}

        <p className="text-center text-sm text-gray-500">
          Haven't purchased yet?{" "}
          <a href="/" className="text-[#00FF7F] underline">
            Get APPTLY here
          </a>
        </p>
      </div>
    </main>
  );
} 
