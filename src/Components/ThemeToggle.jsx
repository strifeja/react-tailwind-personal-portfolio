import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { StarBackground } from "./StarBackground";
import { CloudBackground } from "./CloudBackground";


export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme")
        if (storedTheme === "dark") {
            setIsDarkMode(true)
            document.documentElement.classList.add("dark");
        } else {
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        }
    }, [])

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    }



    return (
        <div>
            {isDarkMode ? <StarBackground /> : <CloudBackground />}
            <button
                onClick={toggleTheme}
                className={cn(
                    "fixed top-4.75 right-2 md:top-3.5 md:right-3 z-50 p-2 rounded-full transition-colors duration-300",
                    "focus:outline-none"
                )}
            >
                {isDarkMode ? (
                    <Sun className="h-6 w-6 text-yellow-300" />
                ) : (
                    <Moon className="h-6 w-6 text-blue-900" />
                )}
            </button>
        </div>
    );
};