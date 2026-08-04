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

export default function ApptlyBuilder() {
  const [step, setStep] = useState(1);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [businessName, setBusinessName] = useState("");

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl">
        <div className="flex items-center justify-between mb-8 border-b border-slate-800 pb-4">
          <h1 className="text-2xl font-bold tracking-tight text-emerald-400">APPTLY App Builder</h1>
          <span className="text-xs text-slate-400 uppercase tracking-widest font-semibold">Step {step} of 3</span>
        </div>

        {step === 1 && (
          <div>
            <h2 className="text-xl font-semibold mb-2">What kind of business are you building an app for?</h2>
            <p className="text-slate-400 text-sm mb-6">Select a category to load your pre-built industry blueprint.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {BUSINESS_TYPES.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setSelectedType(item.id);
                    setStep(2);
                  }}
                  className={`p-4 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between hover:border-emerald-500 hover:bg-slate-800/50 ${
                    selectedType === item.id ? "border-emerald-500 bg-slate-800" : "border-slate-800 bg-slate-900/50"
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

        {step === 2 && (
          <div>
            <button 
              onClick={() => setStep(1)}
              className="text-xs text-slate-400 hover:text-white mb-4 flex items-center gap-1"
            >
              ← Back to business types
            </button>
            <h2 className="text-xl font-semibold mb-2">Name your app</h2>
            <p className="text-slate-400 text-sm mb-6">This will appear on your main screen and header bar.</p>

            <input
              type="text"
              placeholder="e.g. Main Street Auto Repair"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              className="w-full p-4 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-emerald-500 mb-6"
            />

            <button
              disabled={!businessName.trim()}
              onClick={() => setStep(3)}
              className="w-full py-4 rounded-xl bg-emerald-500 text-slate-950 font-bold hover:bg-emerald-400 disabled:opacity-50 transition"
            >
              Generate Live Preview →
            </button>
          </div>
        )}

        {step === 3 && (
          <div className="text-center py-8">
            <div className="inline-block p-4 bg-emerald-500/10 text-emerald-400 rounded-full mb-4 text-3xl">📱</div>
            <h2 className="text-2xl font-bold mb-1">{businessName}</h2>
            <p className="text-slate-400 text-sm mb-6">
              Blueprint Mode: <span className="text-emerald-400 capitalize">{selectedType}</span>
            </p>
            
            <div className="p-6 bg-slate-950 rounded-xl border border-slate-800 max-w-sm mx-auto text-left mb-6 shadow-inner">
              <div className="h-3 w-20 bg-emerald-500/40 rounded mb-3"></div>
              <div className="h-6 w-3/4 bg-slate-800 rounded mb-2"></div>
              <div className="h-3 w-1/2 bg-slate-800/60 rounded mb-6"></div>
              <div className="h-10 w-full bg-emerald-500 rounded-lg text-center leading-10 text-slate-950 font-semibold text-sm">
                Interactive App Shell Ready
              </div>
            </div>

            <button
              onClick={() => setStep(1)}
              className="text-xs text-slate-400 hover:text-white underline"
            >
              Start Over
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
