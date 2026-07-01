"use client";

import Image from "next/image";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0D0D0D]/90 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Image
          src="/small%20apptly%20logo.png"
          alt="APPTLY Logo"
          width={200}
          height={100}
          className="object-contain w-[220px] h-auto"        
          />
        <a
          href="#pricing"
          className="bg-[#00FF94] text-black font-bold px-5 py-2 rounded-full text-sm hover:bg-[#00e085] transition-colors"
        >
          Become A Founding Member
        </a>
      </div>
    </nav>
  );
}
