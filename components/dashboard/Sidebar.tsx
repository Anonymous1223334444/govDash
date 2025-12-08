'use client';

import { useState } from 'react';
import { LayoutGrid, FileText, Calendar, Share2, Clock, Bell, ChevronRight } from 'lucide-react';

const navItems = [
  { icon: LayoutGrid, label: 'Dashboard', active: true },
  { icon: FileText, label: 'Projects' },
  { icon: Calendar, label: 'Calendar' },
  { icon: Share2, label: 'Shared' },
  { icon: Clock, label: 'History' }
];

export function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`bg-[#0f0f0f] border-r border-gray-800 flex flex-col py-6 transition-all duration-300 ${isExpanded ? 'w-64 px-4' : 'w-20 items-center px-0'}`}>
      <div className={`mb-8 flex items-center ${isExpanded ? 'justify-between' : 'justify-center'}`}>
        <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-xl">
          H
        </div>
        {isExpanded && (
          <button
            onClick={() => setIsExpanded(false)}
            className="p-1 hover:bg-gray-800 rounded transition-colors"
          >
            <ChevronRight size={18} />
          </button>
        )}
      </div>

      <nav className={`flex-1 flex flex-col gap-3 ${isExpanded ? 'w-full' : 'items-center'}`}>
        {navItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <button
              key={index}
              className={`flex items-center gap-3 rounded-lg transition-all ${
                item.active
                  ? 'bg-blue-600/20 text-blue-500'
                  : 'text-gray-400 hover:bg-gray-800'
              } ${isExpanded ? 'w-full px-4 py-3' : 'w-12 h-12 justify-center flex-shrink-0'}`}
            >
              <Icon size={20} />
              {isExpanded && <span className="text-sm font-medium">{item.label}</span>}
            </button>
          );
        })}
      </nav>

      <div className={`relative ${isExpanded ? 'w-full' : ''}`}>
        <button
          onClick={() => setIsExpanded(true)}
          className={`flex items-center gap-3 rounded-lg text-gray-400 hover:bg-gray-800 transition-all ${
            isExpanded
              ? 'w-full px-4 py-3 justify-between'
              : 'w-12 h-12 justify-center'
          }`}
        >
          <div className="relative flex items-center justify-center w-5 h-5">
            <Bell size={20} />
            <span className={`absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full text-xs flex items-center justify-center ${isExpanded ? 'text-white' : 'text-white'}`}>
              3
            </span>
          </div>
          {isExpanded && (
            <>
              <span className="text-sm font-medium">Notifications</span>
              <ChevronRight size={16} />
            </>
          )}
        </button>
      </div>
    </div>
  );
}
