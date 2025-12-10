"use client"

/*
 * ThemeProvider manages the light/dark mode state for the application.
 * It stores the user’s preference in localStorage and toggles the
 * `dark` class on the <html> element accordingly. When wrapped around
 * your app in `layout.tsx`, any component can access the current theme via
 * the `useTheme` hook provided below. See `theme-toggle.tsx` for an example
 * consumer that leverages the View Transitions API for a smooth transition.
 */

import { createContext, useContext, useState, useEffect, ReactNode } from "react"

// Define the shape of the theme state
export type Theme = "light" | "dark"

interface ThemeContextValue {
  theme: Theme
  setTheme: (theme: Theme) => void
}

// Create a context for storing theme data
const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

/**
 * ThemeProvider wraps your application and provides a `theme` state. It
 * initializes from localStorage (falling back to light mode) and writes
 * changes back to localStorage. Whenever the theme changes it updates
 * the `dark` class on the document root so Tailwind can apply its dark
 * variants and CSS variables defined in `globals.css`.
 */
export default function ThemeProvider({ children }: { children: ReactNode }) {
  // Always default to light mode during SSR so the initial HTML matches the
  // hydration pass. We resolve the persisted or system preference on mount.
  const [theme, setTheme] = useState<Theme>("light")

  useEffect(() => {
    if (typeof window === "undefined") return
    const stored = localStorage.getItem("theme") as Theme | null
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const initialTheme =
      stored === "dark" || stored === "light" ? stored : systemPrefersDark ? "dark" : "light"
    setTheme(initialTheme)
  }, [])

  useEffect(() => {
    if (typeof window === "undefined") return
    // Persist the theme in localStorage for future sessions
    try {
      localStorage.setItem("theme", theme)
    } catch {
      // Ignore storage errors (e.g. private browsing)
    }
    // Toggle the `dark` class on the document root so Tailwind dark variants apply
    const root = document.documentElement
    if (theme === "dark") {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }
  }, [theme])

  const value = { theme, setTheme }
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

/**
 * Hook to access the theme context. Throws if used outside of
 * ThemeProvider.
 */
export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
