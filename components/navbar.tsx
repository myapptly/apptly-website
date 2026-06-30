"use client";

import Image from "next/image";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0D0D0D]/90 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Image
          src="https://galaxy-prod.tlcdn.com/gen/user_37MJjcymE8bOUM2E9geQUee0w5V/3341da3f-c232-4e65-89a7-0a9e768e55ef.png"
          alt="APPTLY Logo"
          width={80}
          height={80}
          className="object-contain"
        />
        <a
          href="#pricing"
          className="bg-[#00FF94] text-black font-bold px-5 py-2 rounded-full text-sm hover:bg-[#00e085] transition-colors"
        >
          Start Free Trial
        </a>
      </div>
    </nav>
  );
}
