'use client';

import { Bell, Menu, Plus, Search, Settings } from 'lucide-react';
import { sidebarNavItems } from '@/components/dashboard/Sidebar';
import ThemeToggle from '@/components/theme-toggle';

interface HeaderProps {
  activeTab: string;
  onToggleMobileNav?: () => void;
}

export function Header({ activeTab, onToggleMobileNav }: HeaderProps) {
  const tabConfig = sidebarNavItems.find((item) => item.id === activeTab);

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200/70 bg-white/85 px-4 py-4 text-slate-900 backdrop-blur-xl transition-colors dark:border-gray-900/50 dark:bg-[#050505]/80 dark:text-white sm:px-6">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4">
        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-1 items-start gap-3">
            <button
              className="rounded-2xl border border-slate-200/70 bg-white/90 p-2 text-slate-700 shadow-sm transition hover:bg-white md:hidden dark:border-gray-800 dark:bg-gray-900 dark:text-white"
              onClick={onToggleMobileNav}
              aria-label="Ouvrir le menu"
            >
              <Menu className="h-5 w-5" />
            </button>
            <div className="pl-1 pt-1 md:pl-0">
              <p className="text-[10px] uppercase tracking-[0.4em] text-slate-500 transition-colors dark:text-gray-400">
                {tabConfig?.description ?? 'Vue générale'}
              </p>
              <h1 className="text-2xl font-bold leading-tight text-inherit md:text-3xl">
                {tabConfig?.label ?? 'GovDash'}
              </h1>
            </div>
          </div>

          <div className="hidden items-center gap-2 rounded-2xl border border-slate-200/70 bg-white/80 px-3 py-2 text-slate-600 transition-colors dark:border-white/10 dark:bg-white/5 dark:text-gray-400 md:flex">
            <ThemeToggle />
            <Settings className="h-4 w-4" />
            <div className="relative">
              <Bell className="h-4 w-4" />
              <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-red-500"></span>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col gap-2 text-sm sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
          <div className="flex w-full items-center overflow-hidden rounded-2xl border border-slate-200/70 bg-white/80 px-3 py-2 text-slate-500 transition-colors dark:border-white/10 dark:bg-white/5 dark:text-gray-400 sm:flex-1">
            <Search className="mr-2 h-4 w-4 shrink-0" />
            <input
              type="text"
              placeholder="Rechercher un dossier, une rencontre..."
              className="w-full bg-transparent text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none dark:text-gray-300 dark:placeholder:text-gray-500 sm:text-sm"
            />
          </div>

          <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500/80 to-blue-600/80 px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-cyan-500/30 transition hover:brightness-110 sm:w-auto">
            <Plus className="h-4 w-4" />
            Nouvelle note
          </button>

          <div className="flex items-center justify-between gap-2 rounded-2xl border border-slate-200/70 bg-white/80 px-3 py-2 text-slate-600 transition-colors dark:border-white/10 dark:bg-white/5 dark:text-gray-400 md:hidden">
            <ThemeToggle />
            <Settings className="h-4 w-4" />
            <div className="relative">
              <Bell className="h-4 w-4" />
              <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-red-500"></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
