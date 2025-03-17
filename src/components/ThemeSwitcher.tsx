import { useState } from "react";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { getTheme, useTheme, type ThemeProps } from "@/utils/theme";

export const ThemeSwitcher = () => {
    const [theme, setTheme] = useState<ThemeProps["theme"]>(
        getTheme() ?? "light",
    );

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        useTheme({ theme: newTheme });
    };

    return (
        <button
            type="button"
            aria-label="Toggle theme"
            onClick={toggleTheme}
            className="hover:inset-shadow-md rounded-full p-2 text-sm text-zinc-700 hover:bg-zinc-200 dark:text-white hover:dark:bg-zinc-700"
        >
            {theme === "dark" ? <IconSun size={20} /> : <IconMoon size={20} />}
        </button>
    );
};
