'use client';

import { useState } from 'react';
import { Send, X } from 'lucide-react';

const sampleMessages = [
  {
    id: 1,
    author: 'Sira',
    timestamp: '09:48',
    text: "Bonjour ! Souhaitez-vous un résumé des visites internationales prévues aujourd'hui ?",
  },
  {
    id: 2,
    author: 'Vous',
    timestamp: '09:49',
    text: 'Oui, mets en avant les rencontres prioritaires pour la tournée Canada.',
  },
  {
    id: 3,
    author: 'Sira',
    timestamp: '09:50',
    text:
      'Prévoir : 1) Rendez-vous diaspora à Montréal, 2) Signature MoU numérique Ottawa, 3) Point presse avec Radio-Canada. Souhaitez-vous que je génère les éléments de langage ?',
  },
];

const StarIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M12 3.5L13.9 9.6L20 11.5L13.9 13.4L12 19.5L10.1 13.4L4 11.5L10.1 9.6L12 3.5Z"
      fill="currentColor"
    />
  </svg>
);

export function ChatAssistant() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Ouvrir le copilote IA"
        className="group fixed bottom-6 right-6 z-40 flex h-16 w-16 items-center justify-center rounded-full text-white transition hover:scale-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-400/40"
      >
        <span className="pointer-events-none absolute inset-0 rounded-full bg-[#0F1B6D] opacity-70 blur-2xl" aria-hidden />
        <span className="pointer-events-none absolute -inset-2 rounded-full border border-blue-400/40" aria-hidden />
        <span className="pointer-events-none absolute -inset-4 rounded-full border border-blue-500/10" aria-hidden />
        <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-b from-[#2F42FF] via-[#2935C4] to-[#1B1F79] shadow-[0_18px_35px_rgba(28,44,118,0.6)]">
          {open ? <X className="h-6 w-6" /> : <StarIcon />}
        </span>
      </button>

      {open && (
        <div className="fixed inset-0 z-40 flex items-end justify-end bg-black/0 sm:items-end">
          <div className="fixed inset-0 -z-10" onClick={() => setOpen(false)} />
          <div className="relative bottom-24 right-4 h-[540px] w-[calc(100%-2rem)] max-w-lg rounded-3xl bg-white text-slate-900 shadow-[0_25px_80px_rgba(15,23,42,0.25)] dark:bg-[#111] dark:text-white sm:bottom-24 sm:right-8">
            <header className="flex items-start justify-between rounded-t-3xl bg-gradient-to-r from-[#1B1F79] via-[#2F42FF] to-[#00A2FF] px-5 py-4 text-white">
              <div>
                <p className="text-sm font-semibold">Sira • Copilote MCTN</p>
                <p className="text-xs opacity-80">Disponible pour vos demandes presse, discours et bilans.</p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="rounded-full bg-white/20 p-1 text-white transition hover:bg-white/30"
                aria-label="Fermer le chat"
              >
                <X size={16} />
              </button>
            </header>

            <div className="max-h-[380px] space-y-3 overflow-y-auto px-5 py-4 text-sm">
              {sampleMessages.map((msg) => (
                <div key={msg.id} className={msg.author === 'Vous' ? 'text-right' : 'text-left'}>
                  <div
                    className={`inline-flex max-w-full flex-col rounded-2xl px-4 py-3 ${
                      msg.author === 'Vous'
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-100 text-slate-900 dark:bg-white/10 dark:text-white'
                    }`}
                  >
                    <p className="text-[11px] uppercase tracking-wider opacity-70">
                      {msg.author} • {msg.timestamp}
                    </p>
                    <p className="mt-1">{msg.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 border-t border-slate-200/70 px-5 py-4 dark:border-white/10">
              <input
                type="text"
                placeholder="Demandez un argumentaire, un résumé, etc."
                className="flex-1 rounded-2xl border border-slate-200/70 bg-white px-4 py-2 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-white/10 dark:bg-white/10 dark:text-white dark:placeholder:text-gray-400"
              />
              <button className="flex items-center justify-center rounded-2xl bg-blue-600 p-3 text-white transition hover:bg-blue-500">
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
