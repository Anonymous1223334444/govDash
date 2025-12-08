'use client';

import { Moon, Settings, Bell } from 'lucide-react';

export function Header() {
  return (
    <div className="h-16 border-b border-gray-800 px-6 flex items-center justify-between">
      <h1 className="text-2xl font-semibold">Dashboard</h1>

      <div className="flex items-center gap-4">
        <button className="w-9 h-9 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors">
          <Moon size={18} />
        </button>
        <button className="w-9 h-9 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors">
          <Settings size={18} />
        </button>
        <button className="w-9 h-9 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors relative">
          <Bell size={18} />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <div className="w-9 h-9 rounded-full bg-green-500 border-2 border-green-400"></div>
        <span className="text-sm text-gray-400">Wed Mar 20 10:26 AM</span>
      </div>
    </div>
  );
}
