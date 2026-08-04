"use client";

import { useState } from "react";

const BUSINESS_TYPES = [
  { id: "salon", label: "Salon, Spa, or Beauty", icon: "💈", description: "Appointments, service menu, staff schedules" },
  { id: "repair", label: "Repair, Service, or Trade", icon: "🔧", description: "Quote requests, job tracking, direct calls" },
  { id: "retail", label: "Retail or Local Shop", icon: "🛍️", description: "Product showcase, loyalty rewards, store hours" },
  { id: "restaurant", label: "Restaurant, Cafe, or Bar", icon: "🍽️", description: "Digital menu, table reservations, daily specials" },
  { id: "creator", label: "Course Creator or Coach", icon: "🎓", description: "Member portal, lesson library, Stripe checkout" },
  { id: "professional", label: "Professional Services", icon: "💼", description: "Consultation booking, client intake, contact info" },
];

export default function ApptlyAppPage() {
  const [step, setStep] = useState(1);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [businessName, setBusinessName] = useState("");
  const [primaryColor, setPrimaryColor] = useState("#10b981");
  const [logoUrl, setLogoUrl] = useState<string | null>(null);

  const currentTypeObj = BUSINESS_TYPES.find((t) => t.id === selectedType);

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setLogoUrl(url);
    }
  };

  return (
    <div className="min-h-[calc(100vh-65px)] bg-slate-950 text-white flex flex-col items-center justify-center p-4 md:p-8 font-sans">
      <div className="w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-2xl">
        {/* Progress Header */}
        <div className="flex items-center justify-between mb-8 border-b border-slate-800 pb-4">
          <div>
            <h1 className="text-xl md:text-2xl font-bold tracking-tight text-emerald-400">APPTLY App Engine</h1>
            <p className="text-xs text-slate-400 mt-1">Build your custom business app in 3 simple steps</p>
          </div>
          <span className="text-xs text-slate-400 uppercase tracking-widest font-semibold bg-slate-800 px-3 py-1 rounded-full">
            Step {step} of 3
          </span>
        </div>

        {/* STEP 1: SELECT BUSINESS TYPE */}
        {step === 1 && (
          <div>
            <h2 className="text-lg md:text-xl font-semibold mb-2">What kind of business are you building an app for?</h2>
            <p className="text-slate-400 text-sm mb-6">Select a category to pre-configure your industry blueprint and features.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {BUSINESS_TYPES.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setSelectedType(item.id);
                    setStep(2);
                  }}
                  className={`p-4 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between hover:border-emerald-500 hover:bg-slate-800/80 ${
                    selectedType === item.id ? "border-emerald-500 bg-slate-800" : "border-slate-800 bg-slate-950/50"
                  }`}
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="font-medium text-slate-200">{item.label}</span>
                  </div>
                  <p className="text-xs text-slate-400">{item.description}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 2: APP DETAILS & LOGO UPLOAD */}
        {step === 2 && (
          <div>
            <button 
              onClick={() => setStep(1)}
              className="text-xs text-slate-400 hover:text-white mb-4 flex items-center gap-1 transition"
            >
              ← Back to business types
            </button>
            <h2 className="text-lg md:text-xl font-semibold mb-2">Name & Branding</h2>
            <p className="text-slate-400 text-sm mb-6">Enter your business details and upload your logo to customize your app preview.</p>

            <div className="space-y-6">
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-slate-400 mb-2">
                  Business / App Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Apex Auto Repair, Studio Luxe, or Main St Bakery"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  className="w-full p-4 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-emerald-500 transition"
                />
              </div>

              {/* Logo Upload Field */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-slate-400 mb-2">
                  App Logo (Optional)
                </label>
                <div className="flex items-center space-x-4">
                  {logoUrl ? (
                    <div className="relative w-16 h-16 rounded-xl overflow-hidden border border-slate-700 bg-slate-950 flex items-center justify-center group">
                      <img src={logoUrl} alt="Uploaded App Logo" className="w-full h-full object-cover" />
                      <button
                        type="button"
                        onClick={() => setLogoUrl(null)}
                        className="absolute top-1 right-1 bg-rose-600 hover:bg-rose-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold shadow"
                        title="Remove Logo"
                      >
                        ✕
                      </button>
                    </div>
                  ) : (
                    <label className="w-16 h-16 flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-700 hover:border-emerald-500 bg-slate-950 cursor-pointer transition">
                      <span className="text-xl">📷</span>
                      <span className="text-[9px] text-slate-400 mt-0.5 font-semibold">Upload</span>
                      <input type="file" accept="image/*" onChange={handleLogoUpload} className="hidden" />
                    </label>
                  )}
                  <div className="text-xs text-slate-400">
                    <p className="font-medium text-slate-300 mb-0.5">Upload an image file</p>
                    <p className="text-[11px] text-slate-500">Appears on the app header bar and main card screen.</p>
                  </div>
                </div>
              </div>

              {/* Theme Color Picker */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-slate-400 mb-2">
                  Brand Theme Color
                </label>
                <div className="flex items-center space-x-3">
                  {["#10b981", "#3b82f6", "#8b5cf6", "#ec4899", "#f59e0b", "#06b6d4"].map((color) => (
                    <button
                      key={color}
                      type="button"
                      onClick={() => setPrimaryColor(color)}
                      style={{ backgroundColor: color }}
                      className={`w-9 h-9 rounded-full transition-transform ${
                        primaryColor === color ? "scale-110 ring-2 ring-white ring-offset-2 ring-offset-slate-900" : "opacity-80 hover:opacity-100"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <button
                disabled={!businessName.trim()}
                onClick={() => setStep(3)}
                className="w-full py-4 rounded-xl bg-emerald-500 text-slate-950 font-bold hover:bg-emerald-400 disabled:opacity-50 transition"
              >
                Generate Live Preview →
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: LIVE MOBILE PREVIEW */}
        {step === 3 && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <button 
                onClick={() => setStep(2)}
                className="text-xs text-slate-400 hover:text-white flex items-center gap-1 transition"
              >
                ← Edit details
              </button>
              <button 
                onClick={() => {
                  setStep(1);
                  setBusinessName("");
                  setSelectedType(null);
                  setLogoUrl(null);
                }}
                className="text-xs text-rose-400 hover:text-rose-300 transition"
              >
                Reset Wizard
              </button>
            </div>

            <div className="text-center mb-6">
              <h2 className="text-xl font-bold">{businessName}</h2>
              <p className="text-slate-400 text-sm">
                Industry Blueprint: <span className="text-emerald-400 font-medium capitalize">{currentTypeObj?.label}</span>
              </p>
            </div>

            {/* Smartphone Shell */}
            <div className="mx-auto w-full max-w-[320px] bg-slate-950 border-4 border-slate-800 rounded-[36px] overflow-hidden shadow-2xl p-4 flex flex-col justify-between h-[500px]">
              {/* Phone Notch */}
              <div className="w-24 h-4 bg-slate-800 rounded-full mx-auto mb-4"></div>

              {/* App Header Bar with Logo */}
              <div className="p-3 rounded-lg text-center font-bold text-slate-950 text-sm mb-3 shadow flex items-center justify-center gap-2 overflow-hidden" style={{ backgroundColor: primaryColor }}>
                {logoUrl && (
                  <img src={logoUrl} alt="Logo" className="w-6 h-6 rounded-full object-cover border border-slate-950/20 shrink-0" />
                )}
                <span className="truncate">{businessName || "My Business App"}</span>
              </div>

              {/* Dynamic Blueprint Content */}
              <div className="flex-1 space-y-3 overflow-y-auto px-1">
                <div className="p-3 bg-slate-900 border border-slate-800 rounded-lg flex items-center gap-3">
                  {logoUrl ? (
                    <img src={logoUrl} alt="App Icon" className="w-10 h-10 rounded-lg object-cover border border-slate-800 shrink-0" />
                  ) : (
                    <span className="text-2xl">{currentTypeObj?.icon}</span>
                  )}
                  <div>
                    <div className="text-xs font-semibold text-slate-200">Welcome to {businessName}</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">Book services & view store info.</div>
                  </div>
                </div>

                <div className="p-3 bg-slate-900 border border-slate-800 rounded-lg">
                  <div className="text-xs font-semibold text-slate-200">Featured Services</div>
                  <div className="h-2 w-3/4 bg-slate-800 rounded mt-2"></div>
                  <div className="h-2 w-1/2 bg-slate-800/60 rounded mt-1"></div>
                </div>

                <div className="p-3 bg-slate-900 border border-slate-800 rounded-lg flex justify-between items-center">
                  <span className="text-xs text-slate-300">Quick Contact / Book</span>
                  <span className="text-[10px] px-2 py-1 rounded text-slate-950 font-bold" style={{ backgroundColor: primaryColor }}>
                    Action
                  </span>
                </div>
              </div>

              {/* Phone Bottom Nav Bar */}
              <div className="pt-3 border-t border-slate-800 flex justify-around text-[10px] text-slate-400">
                <span className="text-emerald-400 font-bold">Home</span>
                <span>Services</span>
                <span>Account</span>
              </div>
            </div>

            <div className="mt-8 text-center">
              <button 
                onClick={() => alert("Ready to connect to Cloud Firestore!")}
                className="px-8 py-3 rounded-xl bg-emerald-500 text-slate-950 font-bold hover:bg-emerald-400 transition"
              >
                Save & Deploy App ($0)
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
