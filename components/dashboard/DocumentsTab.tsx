import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { FileText, Paperclip, Shield, Users } from 'lucide-react';

const documents = [
  {
    title: 'MOU - Coopération numérique Canada',
    type: 'Mémorandum',
    status: 'Validé',
    updatedAt: '12 fév 2025',
    owner: 'Cab. Min',
    tags: ['IA', 'Services citoyens', 'Ontario'],
  },
  {
    title: 'Partenariat stratégique – Egis (Infrastructure)',
    type: 'Partenariat Ext.',
    status: 'Négociation finale',
    updatedAt: '08 fév 2025',
    owner: 'Cellule PPP',
    tags: ['Transport', 'Financement'],
  },
  {
    title: 'Présentation – Projet Cité intelligente Douala',
    type: 'Présentation',
    status: 'En revue',
    updatedAt: '04 fév 2025',
    owner: 'Direction innovation',
    tags: ['IoT', 'Sécurité', 'Smart City'],
  },
  {
    title: 'Partenariat Interministériel – Guichet unique IA',
    type: 'Partenariat Int.',
    status: 'Signé',
    updatedAt: '31 jan 2025',
    owner: 'SGG',
    tags: ['Interop', 'Workflow'],
  },
];

const stats = [
  { title: 'Documents actifs', value: '48', trend: '+8 cette semaine' },
  { title: 'Partenariats ext.', value: '12', trend: '3 en due diligence' },
  { title: 'Partenariats internes', value: '9', trend: 'En extension' },
];

export function DocumentsTab() {
  return (
    <div className="grid gap-6 xl:grid-cols-12">
      <div className="space-y-6 xl:col-span-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {stats.map((item) => (
            <Card key={item.title} className="border-slate-200/70 bg-white/90 text-slate-900 dark:border-white/10 dark:bg-white/5 dark:text-white">
              <CardHeader className="p-4 pb-2">
                <CardTitle className="text-sm text-slate-500 dark:text-gray-400">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-3xl font-semibold text-slate-900 dark:text-white">{item.value}</p>
                <p className="text-xs text-green-400">{item.trend}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-slate-200/70 bg-white/90 text-slate-900 dark:border-white/10 dark:bg-white/5 dark:text-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-slate-900 dark:text-white">
              <FileText className="h-5 w-5 text-cyan-300" />
              Dossiers stratégiques
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {documents.map((doc) => (
                <div
                  key={doc.title}
                  className="rounded-2xl border border-slate-200/70 bg-white/90 p-4 text-slate-900 dark:border-white/10 dark:bg-white/5 dark:text-white"
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="rounded-2xl bg-slate-900/5 p-3 text-cyan-600 dark:bg-white/10 dark:text-cyan-200">
                      <Paperclip className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">{doc.title}</p>
                      <p className="text-xs text-slate-500 dark:text-gray-400">{doc.updatedAt} • {doc.owner}</p>
                    </div>
                    <Badge className="border border-slate-200/70 bg-white text-xs text-slate-900 dark:border-white/10 dark:bg-white/10 dark:text-gray-200">{doc.type}</Badge>
                    <Badge variant={doc.status === 'Validé' || doc.status === 'Signé' ? 'secondary' : 'outline'} className="text-xs">
                      {doc.status}
                    </Badge>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-500 dark:text-gray-400">
                    {doc.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-slate-200/70 bg-white px-3 py-1 text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-gray-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6 xl:col-span-4">
        <Card className="border-slate-200/70 bg-gradient-to-br from-white via-white/60 to-white/80 text-slate-900 dark:border-white/10 dark:from-cyan-500/10 dark:via-transparent dark:to-blue-500/5 dark:text-white">
          <CardHeader>
            <CardTitle className="text-slate-900 dark:text-white">Flux de validation</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-slate-600 dark:text-gray-300">
            <p className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-emerald-400" /> Conformité IA (signature DGSI)
            </p>
            <p className="flex items-center gap-2">
              <Users className="h-4 w-4 text-blue-400" /> Comité interministériel – Clôture 14h
            </p>
          </CardContent>
        </Card>

        <Card className="border-slate-200/70 bg-white/90 text-slate-900 dark:border-white/10 dark:bg-white/5 dark:text-white">
          <CardHeader>
            <CardTitle className="text-slate-900 dark:text-white">Archive dynamique</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-64 pr-4">
              <div className="space-y-3 text-xs text-slate-500 dark:text-gray-400">
                {Array.from({ length: 10 }).map((_, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-slate-200/70 bg-white px-3 py-2 text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-gray-300"
                  >
                    Indexation automatique dossier #{4200 + index}
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
