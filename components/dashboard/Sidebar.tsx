'use client';

import { memo } from 'react';
import { cn } from '@/lib/utils';
import { Home, FileText, CalendarDays, Sparkles, Activity, ChevronLeft, ChevronRight, LogOut, X } from 'lucide-react';

export type SidebarItem = {
  id: string;
  label: string;
  description: string;
  icon: typeof Home;
  accent: string;
  glow: string;
  badge?: string;
};

const navItems: SidebarItem[] = [
  {
    id: 'accueil',
    label: 'Accueil',
    description: 'Vue d’ensemble du chatbot',
    icon: Home,
    accent: 'text-cyan-300',
    glow: 'from-cyan-500/30 via-cyan-500/5 to-transparent',
  },
  {
    id: 'documents',
    label: 'Documents',
    description: 'MOU & partenariats',
    icon: FileText,
    accent: 'text-emerald-300',
    glow: 'from-emerald-500/30 via-emerald-500/5 to-transparent',
    badge: '12',
  },
  {
    id: 'calendrier',
    label: 'Calendrier',
    description: 'Rencontres et visites',
    icon: CalendarDays,
    accent: 'text-indigo-300',
    glow: 'from-indigo-500/30 via-indigo-500/5 to-transparent',
    badge: '5',
  },
  {
    id: 'operations',
    label: 'Opérations IA',
    description: 'Flux automatisés',
    icon: Sparkles,
    accent: 'text-orange-300',
    glow: 'from-orange-500/30 via-orange-500/5 to-transparent',
  },
  {
    id: 'veille',
    label: 'Veille stratégique',
    description: 'Signaux et alertes',
    icon: Activity,
    accent: 'text-pink-300',
    glow: 'from-pink-500/30 via-pink-500/5 to-transparent',
    badge: '3',
  },
];

export const sidebarNavItems = navItems;

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  variant?: 'desktop' | 'mobile';
  onClose?: () => void;
  className?: string;
  collapsed: boolean;
  onCollapse: () => void;
}

export const Sidebar = memo(function Sidebar({
  activeTab,
  onTabChange,
  variant = 'desktop',
  onClose,
  className,
  collapsed,
  onCollapse,
}: SidebarProps) {
  const userProfile = {
    name: 'Fatou Ndiaye',
    title: 'Secrétaire générale',
  };

  const isDesktop = variant === 'desktop';
  const sidebarClasses = cn(
    'flex h-screen flex-col overflow-hidden border-r border-slate-200/80 bg-white/90 text-slate-900 shadow-2xl backdrop-blur transition-all duration-500 dark:border-gray-900/70 dark:bg-[#050505]/95 dark:text-white',
    isDesktop
      ? cn('hidden md:fixed md:top-0 md:left-0 md:flex md:z-40', collapsed ? 'w-24' : 'w-80')
      : 'fixed inset-y-0 left-0 z-50 w-72 translate-x-0 bg-white/95 shadow-2xl dark:bg-[#050505]/95 md:hidden',
    className
  );

  const handleTabChange = (id: string) => {
    onTabChange(id);
    if (!isDesktop) {
      onClose?.();
    }
  };

  return (
    <aside className={sidebarClasses}>
      <div className="flex items-center justify-between border-b border-slate-200/70 px-6 pb-4 pt-6 dark:border-gray-900/50">
        <div className={cn('flex items-center gap-3', collapsed && isDesktop && 'w-full justify-center')}>
          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-[28px] bg-blue-500/40 blur-2xl" aria-hidden />
            <div
              className={cn(
                'flex items-center justify-center rounded-3xl bg-gradient-to-br from-[#122C7B] via-[#1C48F3] to-[#16CAFF] p-2 shadow-[0_12px_35px_rgba(33,82,255,0.35)]',
                collapsed && isDesktop ? 'h-12 w-12' : 'h-16 w-16'
              )}
            >
              <img src="/mctn-logo.png" alt="Logo MCTN" className="h-full w-full rounded-2xl bg-white object-contain p-1" />
            </div>
          </div>
          {(!collapsed || !isDesktop) && (
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-gray-500">GovBot</p>
              <p className="text-base font-semibold text-slate-900 dark:text-white">Centre stratégique</p>
            </div>
          )}
        </div>
        {isDesktop ? (
          <button
            onClick={onCollapse}
            className="rounded-2xl border border-slate-200/70 bg-white/80 p-2 text-slate-600 transition-colors hover:text-slate-900 dark:border-white/10 dark:bg-white/5 dark:text-gray-300 dark:hover:text-white"
          >
            {collapsed ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
          </button>
        ) : (
          <button
            onClick={onClose}
            className="rounded-2xl border border-slate-200/70 bg-white/80 p-2 text-slate-600 transition-colors hover:text-slate-900 dark:border-white/10 dark:bg-white/5 dark:text-gray-300 dark:hover:text-white"
            aria-label="Fermer le menu"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>

      <nav className="flex-1 overflow-y-auto overflow-x-hidden px-4 py-6">
        <div className="space-y-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;

            return (
              <button
                key={item.id}
                onClick={() => handleTabChange(item.id)}
                title={item.label}
                aria-label={item.label}
                className={cn(
                  'group relative flex w-full items-center rounded-3xl border px-4 py-3 text-left transition-all duration-300',
                  collapsed && isDesktop && 'justify-center rounded-2xl px-0 py-3',
                  isActive
                    ? cn('bg-gradient-to-r shadow-lg text-slate-900 dark:text-white', item.glow, 'border-white/20')
                    : 'border-transparent bg-slate-900/5 text-slate-700 hover:border-slate-200/80 hover:bg-slate-900/10 dark:bg-white/5 dark:text-gray-200 dark:hover:border-white/10 dark:hover:bg-white/10'
                )}
              >
                <div
                  className={cn(
                    'flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-lg transition-colors duration-300',
                    isActive ? item.accent : 'text-slate-500 dark:text-gray-400'
                  )}
                >
                  <Icon className="h-5 w-5" />
                </div>

                {(!collapsed || !isDesktop) && (
                  <div className="ml-4 flex-1">
                    <p className="text-sm font-semibold text-slate-800 dark:text-white">{item.label}</p>
                    <p className="text-xs text-slate-500 dark:text-gray-400">{item.description}</p>
                  </div>
                )}

                {(!collapsed || !isDesktop) && item.badge && (
                  <span className="rounded-full border border-slate-200/70 bg-white px-2 py-1 text-xs text-slate-900 dark:border-white/10 dark:bg-white/10 dark:text-gray-200">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </nav>

      <div className="border-t border-slate-200/70 px-4 pb-6 pt-4 dark:border-gray-900/60">
        <div
          className={cn(
            'flex items-center justify-between rounded-3xl border border-slate-200/70 bg-white/90 text-slate-900 shadow-sm transition-colors dark:border-white/10 dark:bg-white/5 dark:text-white',
            collapsed && isDesktop ? 'flex-col gap-3 p-3 text-center' : 'gap-3 p-4'
          )}
        >
          <div className={cn('flex w-full items-center gap-3', collapsed && isDesktop && 'flex-col text-center')}>
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-cyan-500 font-semibold text-white">
              {userProfile.name
                .split(' ')
                .map((n) => n[0])
                .join('')
                .slice(0, 2)}
            </div>
            <div className={cn('min-w-0', collapsed && isDesktop && 'hidden')}>
              <p className="text-sm font-semibold">{userProfile.name}</p>
              <p className="truncate text-xs text-slate-500 dark:text-gray-400">{userProfile.title}</p>
            </div>
          </div>
          <button
            className={cn(
              'flex items-center justify-center rounded-2xl border border-red-200/70 p-2 text-red-600 transition hover:bg-red-50 dark:border-red-500/40 dark:text-red-200 dark:hover:bg-red-500/10',
              collapsed && isDesktop ? 'w-full' : ''
            )}
            title="Déconnexion"
          >
            <LogOut size={16} />
            <span className="sr-only">Déconnexion</span>
          </button>
        </div>
      </div>
    </aside>
  );
});
