"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "light" : "light")}
      className="p-2 rounded-md bg-gray-200 dark:bg-gray-800"
    >
      {theme === "light" ? "🌙" : "☀️"}
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}

