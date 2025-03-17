"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui";
import { Moon, Sun } from "lucide-react";

export const ThemeToggleButton = () => {
  const { setTheme, resolvedTheme } = useTheme();

  const isDarkThemeActive = resolvedTheme === "dark";

  const toggleTheme = () => setTheme(isDarkThemeActive ? "light" : "dark");

  return (
    <Button variant="outline" size="icon" onClick={toggleTheme}>
      {isDarkThemeActive ? <Sun /> : <Moon />}
    </Button>
  );
};
