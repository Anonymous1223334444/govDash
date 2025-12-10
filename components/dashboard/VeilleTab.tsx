import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Activity, AlertTriangle, Globe2, Radar, Signal, Waves } from 'lucide-react';

const alerts = [
  {
    level: 'Critique',
    label: 'Rumeur désinformation – Réseau X',
    channel: 'Social listening',
    timestamp: 'Il y a 7 min',
  },
  {
    level: 'Modéré',
    label: 'Communiqué concurrent – Portail IA Sénégal',
    channel: 'Analyse presse',
    timestamp: 'Il y a 48 min',
  },
  {
    level: 'Faible',
    label: 'Demande ONG – Accès API citoyen',
    channel: 'Inbox Partenaires',
    timestamp: 'Aujourd’hui 09:20',
  },
];

const signals = [
  { region: 'Zone CEMAC', signal: 'Ouverture d’un centre IA civique', horizon: '3 mois' },
  { region: 'Afrique australe', signal: 'Accord public-privé sur data souveraine', horizon: '6 mois' },
  { region: 'Diaspora Canada', signal: 'Consortium IA francophone', horizon: 'En cours' },
];

export function VeilleTab() {
  return (
    <div className="grid gap-6 xl:grid-cols-12">
      <div className="space-y-6 xl:col-span-7">
        <Card className="border-slate-200/70 bg-white/90 text-slate-900 dark:border-white/10 dark:bg-white/5 dark:text-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-slate-900 dark:text-white">
              <Radar className="h-5 w-5 text-pink-300" /> Alerte influence & réputation
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {alerts.map((alert) => (
              <div key={alert.label} className="rounded-2xl border border-slate-200/70 bg-white/80 p-4 text-slate-900 dark:border-white/10 dark:bg-white/5 dark:text-white">
                <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600 dark:text-gray-400">
                  <Badge variant="outline" className="text-xs">
                    {alert.level}
                  </Badge>
                  <span className="text-slate-900 dark:text-white">{alert.label}</span>
                  <span className="ml-auto text-xs text-slate-500 dark:text-gray-500">{alert.timestamp}</span>
                </div>
                <p className="mt-2 text-xs text-slate-500 dark:text-gray-400">Canal: {alert.channel}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6 xl:col-span-5">
        <Card className="border-slate-200/70 bg-gradient-to-br from-white via-purple-50 to-indigo-50 text-slate-900 dark:border-white/10 dark:from-purple-500/10 dark:via-transparent dark:to-indigo-500/5 dark:text-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-slate-900 dark:text-white">
              <Signal className="h-5 w-5 text-pink-300" /> Signaux géostratégiques
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {signals.map((signal) => (
              <div key={signal.region} className="rounded-2xl border border-slate-200/70 bg-white p-4 text-sm text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-gray-300">
                <p className="text-slate-900 dark:text-white">{signal.region}</p>
                <p className="text-xs text-slate-500 dark:text-gray-400">{signal.signal}</p>
                <p className="mt-1 text-xs text-slate-500 dark:text-gray-500">Horizon: {signal.horizon}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="border-slate-200/70 bg-white/90 text-slate-900 dark:border-white/10 dark:bg-white/5 dark:text-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-slate-900 dark:text-white">
              <Globe2 className="h-5 w-5 text-cyan-300" /> Ondes & perception
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-3 gap-3 text-center text-xs text-slate-500 dark:text-gray-400">
            <div className="rounded-2xl border border-slate-200/70 bg-white p-3 text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-gray-300">
              <Waves className="mx-auto mb-2 h-5 w-5 text-cyan-300" />
              <p>Media</p>
              <p className="text-sm text-slate-900 dark:text-white">+14%</p>
            </div>
            <div className="rounded-2xl border border-slate-200/70 bg-white p-3 text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-gray-300">
              <AlertTriangle className="mx-auto mb-2 h-5 w-5 text-orange-300" />
              <p>Risques</p>
              <p className="text-sm text-slate-900 dark:text-white">2 watchlist</p>
            </div>
            <div className="rounded-2xl border border-slate-200/70 bg-white p-3 text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-gray-300">
              <Activity className="mx-auto mb-2 h-5 w-5 text-green-300" />
              <p>Engagement</p>
              <p className="text-sm text-slate-900 dark:text-white">72%</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
