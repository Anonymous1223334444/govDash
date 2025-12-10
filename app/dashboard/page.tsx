'use client';

import { cn } from '@/lib/utils';
import { useMemo, useState } from 'react';
import { Sidebar } from '@/components/dashboard/Sidebar';
import { Header } from '@/components/dashboard/Header';
import { AccueilTab } from '@/components/dashboard/AccueilTab';
import { DocumentsTab } from '@/components/dashboard/DocumentsTab';
import { CalendrierTab } from '@/components/dashboard/CalendrierTab';
import { OperationsTab } from '@/components/dashboard/OperationsTab';
import { VeilleTab } from '@/components/dashboard/VeilleTab';
import { ChatAssistant } from '@/components/chat/ChatAssistant';

const tabComponents: Record<string, () => JSX.Element> = {
  accueil: AccueilTab,
  documents: DocumentsTab,
  calendrier: CalendrierTab,
  operations: OperationsTab,
  veille: VeilleTab,
};

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<string>('accueil');
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const ActiveComponent = useMemo(() => tabComponents[activeTab] ?? AccueilTab, [activeTab]);
  const contentPadding = sidebarCollapsed ? 'md:pl-24 lg:pl-28' : 'md:pl-80';

  return (
    <div
      className={cn(
        'relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-sky-50 text-foreground transition-colors dark:from-black dark:via-[#050505] dark:to-[#0f0f0f]',
        contentPadding
      )}
    >
      <Sidebar
        activeTab={activeTab}
        onTabChange={setActiveTab}
        collapsed={sidebarCollapsed}
        onCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
      />
      {mobileNavOpen && (
        <>
          <div className="fixed inset-0 z-40 bg-black/40 md:hidden" onClick={() => setMobileNavOpen(false)} />
          <Sidebar
            activeTab={activeTab}
            onTabChange={setActiveTab}
            variant="mobile"
            onClose={() => setMobileNavOpen(false)}
            className="translate-x-0 animate-in slide-in-from-left"
            collapsed={false}
            onCollapse={() => {}}
          />
        </>
      )}

      <div className="flex min-h-screen flex-col overflow-hidden rounded-t-3xl bg-white/90 text-slate-900 shadow-[0_-12px_40px_rgba(15,23,42,0.15)] transition-all duration-500 dark:bg-[#030303]/95 dark:text-white md:rounded-none md:shadow-none">
        <Header activeTab={activeTab} onToggleMobileNav={() => setMobileNavOpen(true)} />

        <div className="flex-1 overflow-auto">
          <div className="p-4 sm:p-6">
            <div className="mx-auto flex max-w-6xl flex-col gap-6">
              <ActiveComponent />
            </div>
          </div>
        </div>
      </div>

      <ChatAssistant />
    </div>
  );
}
