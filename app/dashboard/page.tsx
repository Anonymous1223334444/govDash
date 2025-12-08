'use client';

import { Sidebar } from '@/components/dashboard/Sidebar';
import { Header } from '@/components/dashboard/Header';
import { ColorPaletteWidget } from '@/components/dashboard/ColorPaletteWidget';
import { TodaysTasksWidget } from '@/components/dashboard/TodaysTasksWidget';
import { TodaysMeetingsWidget } from '@/components/dashboard/TodaysMeetingsWidget';
import { ProjectsCalendar } from '@/components/dashboard/ProjectsCalendar';
import { ActivityWidget } from '@/components/dashboard/ActivityWidget';
import { ProjectsWorkedWidget } from '@/components/dashboard/ProjectsWorkedWidget';
import { RemindersWidget } from '@/components/dashboard/RemindersWidget';

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-[#0a0a0a] text-white overflow-hidden">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />

        <div className="flex-1 overflow-auto">
          <div className="p-6">
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-8">
                <div className="grid grid-cols-3 gap-6 mb-6">
                  <ColorPaletteWidget />
                  <TodaysTasksWidget />
                  <TodaysMeetingsWidget />
                </div>

                <ProjectsCalendar />
              </div>

              <div className="col-span-4">
                <ActivityWidget />
                <ProjectsWorkedWidget />
                <RemindersWidget />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
