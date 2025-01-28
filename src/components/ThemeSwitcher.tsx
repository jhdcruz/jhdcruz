import { createSignal, Match, Switch } from "solid-js";
import { IconMoonStars, IconSun } from "@tabler/icons-solidjs";
import { getTheme, useTheme, type ThemeProps } from "@/utils/theme";

export const ThemeSwitcher = () => {
    const [theme, setTheme] = createSignal<ThemeProps["theme"]>(getTheme() ?? "light");

    return (
        <button
            type="button"
            aria-label="Toggle theme"
            onClick={() => {
                setTheme(theme() === "light" ? "dark" : "light");
                useTheme({ theme: theme() ?? "light" });
            }}
            class="hover:inset-shadow-md rounded-full p-2 text-sm text-zinc-700 hover:bg-zinc-200 dark:text-white hover:dark:bg-zinc-700"
        >
            <Switch>
                <Match when={theme() === "dark"}>
                    <IconSun size={20} />
                </Match>

                <Match when={theme() === "light"}>
                    <IconMoonStars size={20} />
                </Match>
            </Switch>
        </button>
    );
};
