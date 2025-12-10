"use client"

/*
 * ThemeToggle renders a button that toggles between light and dark mode using
 * the View Transitions API. When the user clicks the button it animates a
 * circular reveal from the button’s position, creating a smooth and
 * delightful experience. The implementation falls back gracefully on
 * browsers that don’t support the API or when the user prefers reduced motion.
 */

import { useRef } from "react"
import { useTheme } from "@/components/theme-provider"
import { flushSync } from "react-dom"
import { Moon, Sun } from "lucide-react"

declare global {
  interface Document {
    startViewTransition?: (callback: () => void) => { ready: Promise<void> }
  }
}

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const toggleRef = useRef<HTMLButtonElement>(null)

  async function handleToggle() {
    const isDark = theme === "dark"
    // Early return if the browser doesn't support view transitions or the user
    // prefers reduced motion. We simply toggle the theme without animation.
    if (
      !toggleRef.current ||
      typeof document.startViewTransition !== "function" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setTheme(isDark ? "light" : "dark")
      return
    }
    // Start the view transition. The callback must synchronously apply
    // the new theme to the DOM. We use flushSync so React updates the
    // DOM immediately, allowing the API to capture the new state.
    await document.startViewTransition(() => {
      flushSync(() => {
        setTheme(isDark ? "light" : "dark")
      })
    }).ready
    // After the new theme is applied and the transition is ready, we can
    // animate a circular clip-path on the root element to reveal the new state.
    const { top, left, width, height } = toggleRef.current.getBoundingClientRect()
    const x = left + width / 2
    const y = top + height / 2
    // Compute the maximum radius to cover the entire viewport from the
    // button's centre. We take the maximum distance to the viewport edges.
    const right = window.innerWidth - left
    const bottom = window.innerHeight - top
    const maxRadius = Math.hypot(Math.max(left, right), Math.max(top, bottom))
    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRadius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: 600,
        easing: "ease-in-out",
        // Use the new view transition pseudo-element so the animation
        // reveals the updated DOM. Without this, the animation would play
        // on the old state.
        pseudoElement: "::view-transition-new(root)",
      },
    )
  }

  return (
    <button
      ref={toggleRef}
      onClick={handleToggle}
      aria-label="Basculer le thème"
      className="rounded-full p-2 text-slate-600 transition-colors hover:bg-gray-200 dark:text-gray-200 dark:hover:bg-gray-700"
    >
      {theme === "dark" ? (
        <Sun className="w-4 h-4" />
      ) : (
        <Moon className="w-4 h-4" />
      )}
    </button>
  )
}
