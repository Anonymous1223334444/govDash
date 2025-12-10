"use client"

import { useRef, useState } from "react"
import dynamic from "next/dynamic"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useTheme } from "@/components/theme-provider"

const Globe = dynamic(() => import("react-globe.gl"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center text-xs text-slate-400">
      Chargement du globe...
    </div>
  ),
})

interface CountryData {
  name: string
  traveled: boolean
  investment: number
  projects: number
  status: string
}

const countryDataMap: Record<string, CountryData> = {
  Canada: { name: "Canada", traveled: true, investment: 350, projects: 8, status: "En cours" },
  Australia: { name: "Australie", traveled: true, investment: 200, projects: 5, status: "Terminé" },
  Angola: { name: "Angola", traveled: true, investment: 450, projects: 12, status: "En cours" },
  Argentina: { name: "Argentine", traveled: true, investment: 280, projects: 6, status: "En cours" },
  Algeria: { name: "Algérie", traveled: true, investment: 320, projects: 7, status: "Terminé" },
  Brazil: { name: "Brésil", traveled: true, investment: 420, projects: 10, status: "En cours" },
  China: { name: "Chine", traveled: true, investment: 500, projects: 15, status: "En cours" },
  India: { name: "Inde", traveled: true, investment: 380, projects: 9, status: "En cours" },
  Mexico: { name: "Mexique", traveled: true, investment: 290, projects: 7, status: "Terminé" },
  Nigeria: { name: "Nigéria", traveled: true, investment: 390, projects: 11, status: "En cours" },
  "South Africa": { name: "Afrique du Sud", traveled: true, investment: 310, projects: 8, status: "En cours" },
  "United States": { name: "États-Unis", traveled: true, investment: 460, projects: 12, status: "En cours" },
}

interface CountryDetails {
  name: string
  data: CountryData
}

const countryCoordinates: Record<string, { lat: number; lng: number }> = {
  Canada: { lat: 56, lng: -96 },
  "United States": { lat: 39, lng: -98 },
  Mexico: { lat: 23, lng: -102 },
  Brazil: { lat: -10, lng: -55 },
  Argentina: { lat: -38, lng: -63 },
  Algeria: { lat: 28, lng: 1 },
  Nigeria: { lat: 9, lng: 8 },
  "South Africa": { lat: -30, lng: 25 },
  Angola: { lat: -12, lng: 18 },
  India: { lat: 21, lng: 78 },
  China: { lat: 35, lng: 103 },
  Australia: { lat: -25, lng: 133 },
}

export default function WorldMap() {
  const globeRef = useRef<any>(null)
  const [selectedCountry, setSelectedCountry] = useState<CountryDetails | null>(null)
  const { theme } = useTheme()
  const isDark = theme === "dark"

  const globeTexture = isDark
    ? "//unpkg.com/three-globe/example/img/earth-night.jpg"
    : "//unpkg.com/three-globe/example/img/earth-day.jpg"

  const atmosphereColor = isDark ? "#38bdf8" : "#0f172a"

  const pointsData = Object.entries(countryDataMap)
    .filter(([_, d]) => d.traveled)
    .map(([key, data]) => {
      const coord = countryCoordinates[key]
      if (!coord) return null
      return {
        ...coord,
        name: data.name,
        data,
      }
    })
    .filter(Boolean) as Array<{ lat: number; lng: number; name: string; data: CountryData }>

  const traveledCount = pointsData.length

  return (
    <>
      <Card className="h-full min-h-[400px] sm:min-h-[500px] border-slate-200/70 bg-white/95 text-slate-900 shadow-lg dark:border-white/10 dark:bg-white/5 dark:text-white">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3 sm:pb-4">
          <CardTitle className="text-base sm:text-lg font-semibold">Pays visités</CardTitle>
          <span className="text-xs font-normal text-slate-500 dark:text-slate-300">{traveledCount} missions</span>
        </CardHeader>

        <CardContent className="p-0 h-[calc(100%-4rem)]">
          <div className="w-full h-full flex items-center justify-center">
            <Globe
              ref={(el: any) => {
                globeRef.current = el
                if (el) {
                  const controls = el.controls && el.controls()
                  if (controls) {
                    controls.autoRotate = true
                    controls.autoRotateSpeed = 0.6
                  }
                  el.pointOfView({ lat: 10, lng: 0, altitude: 2.2 }, 1000)
                }
              }}
              width={typeof window !== 'undefined' ? Math.min(window.innerWidth - 48, 1000) : 1000}
              height={typeof window !== 'undefined' ? Math.min(window.innerHeight * 0.9, 800) : 800}
              globeImageUrl={globeTexture}
              bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
              backgroundColor="rgba(0,0,0,0)"
              labelsData={pointsData}
              labelLat={(d: any) => d.lat}
              labelLng={(d: any) => d.lng}
              labelText={(d: any) => d.name}
              labelSize={() => 1}
              labelDotRadius={() => 0.5}
              labelColor={(d: any) =>
                d.data.traveled
                  ? isDark
                    ? "#22c55e"
                    : "#16a34a"
                  : isDark
                    ? "#e5e7eb"
                    : "#1f2937"
              }
              labelResolution={2}
              atmosphereColor={atmosphereColor}
              atmosphereAltitude={0.18}
              onLabelClick={(obj: any | null) => {
                if (!obj) return
                setSelectedCountry({ name: obj.name, data: obj.data })
              }}
            />
          </div>
        </CardContent>
      </Card>

      <Dialog open={!!selectedCountry} onOpenChange={(open) => !open && setSelectedCountry(null)}>
        <DialogContent className="max-w-[95vw] sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl sm:text-2xl text-emerald-600 dark:text-emerald-400">
              {selectedCountry?.name}
            </DialogTitle>
          </DialogHeader>
          {selectedCountry && (
            <div className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="rounded-2xl bg-emerald-100/80 p-3 sm:p-4 dark:bg-emerald-500/10">
                  <p className="mb-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300">Investissement</p>
                  <p className="text-lg sm:text-2xl font-bold text-emerald-700 dark:text-emerald-400">
                    {selectedCountry.data.investment}M
                  </p>
                </div>
                <div className="rounded-2xl bg-emerald-100/80 p-3 sm:p-4 dark:bg-emerald-500/10">
                  <p className="mb-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300">Projets actifs</p>
                  <p className="text-lg sm:text-2xl font-bold text-emerald-700 dark:text-emerald-400">
                    {selectedCountry.data.projects}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="rounded-2xl bg-emerald-100/80 p-3 sm:p-4 dark:bg-emerald-500/10">
                  <p className="mb-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300">Statut</p>
                  <p className="text-sm sm:text-lg font-semibold text-emerald-700 dark:text-emerald-400">
                    {selectedCountry.data.status}
                  </p>
                </div>
                <div className="rounded-2xl bg-emerald-100/80 p-3 sm:p-4 dark:bg-emerald-500/10">
                  <p className="mb-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300">Année</p>
                  <p className="text-lg sm:text-2xl font-bold text-emerald-700 dark:text-emerald-400">2025</p>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}