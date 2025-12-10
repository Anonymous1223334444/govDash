'use client';

import { TodaysTasksWidget } from '@/components/dashboard/TodaysTasksWidget';
import { TodaysMeetingsWidget } from '@/components/dashboard/TodaysMeetingsWidget';
import { ProjectsCalendar } from '@/components/dashboard/ProjectsCalendar';
import { ActivityWidget } from '@/components/dashboard/ActivityWidget';
import { ProjectsWorkedWidget } from '@/components/dashboard/ProjectsWorkedWidget';
import { RemindersWidget } from '@/components/dashboard/RemindersWidget';
import { SignalVisuelWidget } from '@/components/dashboard/SignalVisuelWidget';

export function AccueilTab() {
  return (
    <div className="grid gap-6 lg:grid-cols-12">
      <div className="space-y-6 lg:col-span-8">
        <div className="grid gap-6 sm:grid-cols-2">
          <TodaysTasksWidget />
          <TodaysMeetingsWidget />
        </div>

        <ProjectsCalendar />
      </div>

      <div className="space-y-6 lg:col-span-4">
        <SignalVisuelWidget />
        <ActivityWidget />
        <ProjectsWorkedWidget />
        <RemindersWidget />
      </div>
    </div>
  );
}
