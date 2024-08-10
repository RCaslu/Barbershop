import React, { useState, useEffect } from "react"
import { SunMoonIcon } from "lucide-react"
import { Button } from "./button"

const ThemeChanger = () => {
  // Initialize theme from localStorage or default to light
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light",
  )

  // Update body class based on the current theme
  useEffect(() => {
    document.body.classList.toggle("dark", theme === "dark")
    document.body.classList.toggle("light", theme === "light")

    // Save theme to localStorage
    localStorage.setItem("theme", theme)
  }, [theme])

  // Toggle theme function
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
  }

  return (
    <div className="flex flex-col gap-2">
      <Button
        className="justify-start gap-2"
        variant="ghost"
        onClick={toggleTheme}
      >
        <SunMoonIcon />
        Trocar tema
      </Button>
    </div>
  )
}

export default ThemeChanger
