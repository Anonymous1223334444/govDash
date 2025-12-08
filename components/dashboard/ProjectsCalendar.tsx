'use client';

import { Filter, Users, MessageSquare, Paperclip } from 'lucide-react';

const days = [
  { day: 'MON', date: '18' },
  { day: 'TUE', date: '19' },
  { day: 'WED', date: '20' },
  { day: 'THU', date: '21' },
  { day: 'FRI', date: '22' }
];

const projects: Record<string, any[]> = {
  'MON 18': [
    {
      time: '09:00',
      title: 'Design Brief Review',
      description: 'Review project goals and objectives',
      status: 'Done',
      priority: 'low',
      duration: '2h',
      comments: 116,
      attachments: 3,
      team: 3
    },
    {
      time: '11:00',
      title: 'Moodboard Creation',
      description: 'Define the visual direction',
      status: 'Done',
      priority: 'low'
    }
  ],
  'TUE 19': [
    {
      time: '09:00',
      title: 'Typography & Layout Design',
      description: 'Help with chosen fonts and layout options to the design',
      status: 'Done',
      priority: 'low'
    },
    {
      time: '01:30',
      title: 'Brake time',
      priority: 'low'
    }
  ],
  'WED 20': [
    {
      time: '09:00',
      title: 'Color Palette Selection',
      description: 'Create a harmonious color scheme',
      status: 'Medium',
      priority: 'medium',
      duration: '01:24',
      participants: 5,
      team: 2
    },
    {
      time: '01:30',
      title: 'Brake time',
      priority: 'low'
    },
    {
      time: '07:30',
      title: 'User Experience (UX)',
      status: 'High',
      priority: 'high'
    }
  ],
  'THU 21': [
    {
      time: '09:00',
      title: 'User Interface (UI) Design',
      description: 'Create an appealing and visually engaging interface',
      status: 'High',
      priority: 'high',
      team: 3,
      duration: '3d'
    },
    {
      time: '09:00',
      title: 'Prototype Creation',
      description: 'Review a prototype to showcase the design',
      status: 'Low',
      priority: 'low',
      team: 3
    }
  ],
  'FRI 22': [
    {
      time: '09:00',
      title: 'Conduct User Testing',
      description: 'Gather user feedback to refine the design',
      status: 'Low',
      priority: 'low'
    },
    {
      time: '01:00',
      title: 'Client Presentation',
      description: 'Present the project and gather feedback from the client',
      status: 'High',
      priority: 'high',
      team: 3
    }
  ]
};

export function ProjectsCalendar() {
  return (
    <div className="bg-[#0f0f0f] rounded-2xl p-6 border border-gray-800">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold">Projects</h3>
        <button className="px-3 py-1.5 rounded-lg bg-gray-800 text-xs flex items-center gap-2 hover:bg-gray-700 transition-colors">
          <Filter size={14} />
          Filter
        </button>
      </div>

      <div className="grid grid-cols-5 gap-4">
        {days.map((dayInfo) => {
          const key = `${dayInfo.day} ${dayInfo.date}`;
          const dayProjects = projects[key] || [];

          return (
            <div key={key}>
              <div className="mb-4">
                <div className="text-xs text-gray-400 mb-1">{dayInfo.day}</div>
                <div className={`text-2xl font-semibold ${dayInfo.day === 'WED' ? 'text-red-500' : ''}`}>
                  {dayInfo.date}
                </div>
              </div>

              <div className="space-y-3">
                {dayProjects.map((project, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded-lg ${
                      project.priority === 'high' ? 'bg-red-900/20 border border-red-500/30' :
                      project.priority === 'medium' ? 'bg-orange-900/20 border border-orange-500/30' :
                      'bg-gray-800/50 border border-gray-700/50'
                    }`}
                  >
                    <div className="text-xs text-gray-400 mb-2">{project.time}</div>

                    {project.status && (
                      <div className="flex items-center gap-1 mb-2">
                        <div className={`w-1.5 h-1.5 rounded-full ${
                          project.status === 'High' ? 'bg-red-500' :
                          project.status === 'Medium' ? 'bg-orange-500' :
                          project.status === 'Low' ? 'bg-green-500' :
                          'bg-gray-500'
                        }`}></div>
                        <span className={`text-xs ${
                          project.status === 'High' ? 'text-red-500' :
                          project.status === 'Medium' ? 'text-orange-500' :
                          project.status === 'Low' ? 'text-green-500' :
                          'text-gray-400'
                        }`}>{project.status}</span>
                      </div>
                    )}

                    <h4 className="text-sm font-medium mb-1">{project.title}</h4>
                    {project.description && (
                      <p className="text-xs text-gray-400 mb-3">{project.description}</p>
                    )}

                    {(project.team || project.duration || project.comments) && (
                      <div className="flex items-center justify-between text-xs text-gray-400 mt-3">
                        <div className="flex items-center gap-3">
                          {project.team && (
                            <div className="flex items-center gap-1">
                              <Users size={12} />
                              <span>{project.team}</span>
                            </div>
                          )}
                          {project.duration && (
                            <div className="flex items-center gap-1">
                              <span>{project.duration}</span>
                            </div>
                          )}
                        </div>
                        {project.comments && (
                          <div className="flex items-center gap-2">
                            <div className="flex items-center gap-1">
                              <MessageSquare size={12} />
                              <span>{project.comments}</span>
                            </div>
                            {project.attachments && (
                              <div className="flex items-center gap-1">
                                <Paperclip size={12} />
                                <span>{project.attachments}</span>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
