'use client';

import { FormEvent, useState } from 'react';
import { Send, Sparkles } from 'lucide-react';

const replies = [
  {
    author: 'Mia',
    text: 'Brief complet prêt pour les rendez-vous Ottawa + Montréal.',
    tone: 'Synthèse officielle',
  },
  {
    author: 'Mia',
    text: 'Signal presse : traités favorables sur la souveraineté numérique.',
    tone: 'Veille média',
  },
];

const suggestions = ['Résumer la tournée Canada', 'Identifier 3 alertes presse', 'Proposer des éléments de langage'];

export function SignalVisuelWidget() {
  const [request, setRequest] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setRequest('');
  }

  return (
    <div className="rounded-2xl border border-slate-200/70 bg-white/90 p-5 text-slate-900 shadow-sm dark:border-gray-800 dark:bg-[#0f0f0f] dark:text-white">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-gray-400">Signal visuel du jour</p>
          <h3 className="text-base font-semibold">Copilote express</h3>
        </div>
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/30 text-blue-500 dark:from-cyan-400/10 dark:to-blue-500/20">
          <Sparkles className="h-5 w-5" />
        </div>
      </div>

      <div className="space-y-3 text-sm">
        {replies.map((item) => (
          <div
            key={item.text}
            className="rounded-2xl border border-slate-200/70 bg-white/95 px-4 py-3 text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-gray-200"
          >
            <div className="text-[11px] uppercase tracking-wide text-slate-500 dark:text-gray-400">{item.tone}</div>
            <p className="mt-1 text-sm">{item.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-slate-500 dark:text-gray-400">
        {suggestions.map((suggestion) => (
          <span
            key={suggestion}
            className="rounded-full border border-slate-200/70 bg-white px-3 py-1 dark:border-white/10 dark:bg-white/5"
          >
            {suggestion}
          </span>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
        <textarea
          value={request}
          onChange={(event) => setRequest(event.target.value)}
          placeholder="Saisir une demande : briefing presse, message clé, etc."
          className="h-20 flex-1 resize-none rounded-2xl border border-slate-200/70 bg-white px-3 py-2 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-gray-400"
        />
        <button
          type="submit"
          className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg transition hover:bg-blue-500"
          aria-label="Envoyer la requête"
        >
          <Send size={18} />
        </button>
      </form>
    </div>
  );
}
