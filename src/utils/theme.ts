interface ThemeProps {
	theme: "light" | "dark" | null;
}

/**
 * Set the theme based on the user's system preference.
 * Uses system preference by default, or not set.
 *
 * @param theme - The theme to set.
 */
export const useTheme = ({ theme }: ThemeProps = { theme: null }) => {
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
			const prefersDarkScheme = window.matchMedia(
				"(prefers-color-scheme: dark)",
			);
			const currentTheme = localStorage.getItem("theme");

			if (
				currentTheme === "dark" ||
				(!currentTheme && prefersDarkScheme.matches)
			) {
				localStorage.setItem("theme", "dark");
				document.documentElement.classList.add("dark");
				document.documentElement.classList.remove("light");
			} else {
				localStorage.setItem("theme", "light");
				document.documentElement.classList.remove("dark");
				document.documentElement.classList.add("light");
			}
			break;
		}
	}
};
