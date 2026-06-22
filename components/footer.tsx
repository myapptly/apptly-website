import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-[#0D0D0D] border-t border-white/10 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">
        <div className="flex items-center gap-3">
          <Image
            src="https://galaxy-prod.tlcdn.com/gen/user_37MJjcymE8bOUM2E9geQUee0w5V/3341da3f-c232-4e65-89a7-0a9e768e55ef.png"
            alt="APPTLY"
            width={32}
            height={32}
            className="object-contain"
          />
          <span className="font-black text-lg">APPTLY</span>
        </div>

        <p className="text-[#00FF94] font-bold text-lg">Build Apps. Make Money.</p>

        <div className="flex gap-6 text-sm text-gray-500">
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        <p className="text-gray-600 text-sm text-center">
          © 2026 APPTLY | myapptly.com · All rights reserved<br />
          <span className="text-gray-700">Results are not guaranteed. Individual outcomes will vary.</span>
        </p>
      </div>
    </footer>
  );
}
