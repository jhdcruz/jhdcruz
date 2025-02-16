export interface ThemeProps {
    theme: "light" | "dark";
}

/**
 * Get the current theme.
 *
 * @returns The current theme: "light" or "dark".
 */
export const getTheme = (): ThemeProps["theme"] => {
    const theme = localStorage.getItem("theme") as ThemeProps["theme"] | null;
    return (
        theme ??
        (window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light")
    );
};

/**
 * Set the theme based on the user's system preference.
 * Uses system preference by default, or not set.
 *
 * @param theme - The theme to set.
 */
export const useTheme = ({ theme }: ThemeProps = { theme: "light" }) => {
    switch (theme) {
        case "dark":
            localStorage.setItem("theme", "dark");
            document.documentElement.classList.add("dark");
            document.documentElement.classList.remove("light");
            break;

        case "light":
            localStorage.setItem("theme", "light");
            document.documentElement.classList.remove("dark");
            document.documentElement.classList.add("light");
            break;

        default: {
            // Current/system preference for theme
            localStorage.removeItem("theme");
            document.documentElement.classList.remove("dark");
            document.documentElement.classList.remove("light");
        }
    }
};
