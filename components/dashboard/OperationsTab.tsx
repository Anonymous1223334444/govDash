import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Bot, Cpu, Link, Loader2, Shield, Sparkles } from 'lucide-react';

const operations = [
  {
    name: 'Canal citoyen 1520',
    owner: 'Direction communication',
    status: 'Stabilisé',
    latency: '1m12s',
    components: ['Analyse sentiment', 'Redirection automatique'],
  },
  {
    name: 'Traitement demandes de partenariat',
    owner: 'Task force coopération',
    status: 'En optimisation',
    latency: '3m04s',
    components: ['Workflow BPMN', 'Visa juridique'],
  },
  {
    name: 'Synchronisation missions terrain',
    owner: 'Cellule data',
    status: 'Surveillance',
    latency: '45s',
    components: ['Balises terrain', 'Analyse satellite'],
  },
];

const skills = [
  { label: 'Synthèse ministérielle', coverage: '96%', energy: 'Faible' },
  { label: 'Dialogue citoyen IA', coverage: '88%', energy: 'Modéré' },
  { label: 'Coordination partenariats', coverage: '79%', energy: 'Faible' },
];

export function OperationsTab() {
  return (
    <div className="grid gap-6 xl:grid-cols-12">
      <div className="space-y-6 xl:col-span-7">
        <Card className="border-slate-200/70 bg-white/90 text-slate-900 dark:border-white/10 dark:bg-white/5 dark:text-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-slate-900 dark:text-white">
              <Sparkles className="h-5 w-5 text-orange-300" /> Suivi opérationnel
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {operations.map((op) => (
              <div key={op.name} className="rounded-2xl border border-slate-200/70 bg-white/80 p-4 text-slate-900 dark:border-white/10 dark:bg-white/5 dark:text-white">
                <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600 dark:text-gray-300">
                  <span className="text-slate-900 dark:text-white">{op.name}</span>
                  <Badge className="border border-slate-200/70 bg-white text-xs text-slate-900 dark:border-white/10 dark:bg-white/10 dark:text-gray-200">{op.owner}</Badge>
                  <span className="ml-auto flex items-center gap-1 text-xs text-slate-500 dark:text-gray-400">
                    <Loader2 className="h-3 w-3 animate-spin text-orange-300" /> {op.status}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-gray-500">latence: {op.latency}</span>
                </div>
                <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-500 dark:text-gray-400">
                  {op.components.map((component) => (
                    <span key={component} className="rounded-full border border-slate-200/70 bg-white px-3 py-1 text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-gray-300">
                      {component}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6 xl:col-span-5">
        <Card className="border-slate-200/70 bg-gradient-to-br from-white via-orange-50 to-rose-50 text-slate-900 dark:border-white/10 dark:from-orange-500/10 dark:via-transparent dark:to-rose-500/5 dark:text-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-slate-900 dark:text-white">
              <Bot className="h-5 w-5 text-orange-300" /> Compétences du copilote
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {skills.map((skill) => (
              <div key={skill.label} className="rounded-2xl border border-slate-200/70 bg-white p-3 text-sm text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-gray-300">
                <div className="flex items-center justify-between text-slate-900 dark:text-white">
                  <span>{skill.label}</span>
                  <span className="text-xs text-slate-500 dark:text-gray-400">{skill.coverage}</span>
                </div>
                <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-slate-200/70 dark:bg-white/10">
                  <div className="h-full bg-gradient-to-r from-orange-400 to-pink-500" style={{ width: skill.coverage }} />
                </div>
                <p className="mt-1 text-xs text-slate-500 dark:text-gray-500">Charge énergétique: {skill.energy}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="border-slate-200/70 bg-white/90 text-slate-900 dark:border-white/10 dark:bg-white/5 dark:text-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-slate-900 dark:text-white">
              <Link className="h-5 w-5 text-emerald-300" /> Intégrations critiques
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-slate-600 dark:text-gray-300">
            <div className="flex items-center gap-2 rounded-2xl border border-slate-200/70 bg-white px-3 py-2 text-slate-800 dark:border-white/10 dark:bg-white/5 dark:text-gray-200">
              <Cpu className="h-4 w-4 text-emerald-300" /> Plateforme SIGI – Flux temps réel
            </div>
            <div className="flex items-center gap-2 rounded-2xl border border-slate-200/70 bg-white px-3 py-2 text-slate-800 dark:border-white/10 dark:bg-white/5 dark:text-gray-200">
              <Shield className="h-4 w-4 text-emerald-300" /> Audit conformité RGPD-Afrique
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
