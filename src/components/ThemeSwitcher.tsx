import { useTheme } from "@/utils/theme";
import {
	IconDeviceLaptop,
	IconMoonStars,
	IconSun,
	IconSunMoon,
} from "@tabler/icons-solidjs";
import { initDropdowns } from "flowbite";
import { onMount } from "solid-js";

export const ThemeSwitcher = () => {
	// Initialize dropdowns
	onMount(() => initDropdowns());

	return (
		<>
			<button
				id="dropdownHoverButton"
				data-dropdown-toggle="dropdownHover"
				data-dropdown-trigger="hover"
				type="button"
				aria-label="Toggle theme"
				class="rounded-full p-2.5 text-sm text-zinc-700 hover:inset-shadow-md hover:bg-zinc-200 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-white dark:focus:ring-gray-700 hover:dark:bg-zinc-700"
			>
				<IconSunMoon size={20} />
			</button>

			<div
				id="dropdownHover"
				class="z-10 hidden w-44 divide-y divide-gray-100 rounded-xl bg-white shadow-sm dark:bg-dark_fg"
			>
				<ul
					class="p-1 text-gray-700 text-sm dark:text-gray-200"
					aria-labelledby="dropdownHoverButton"
				>
					<li>
						<button
							type="button"
							onClick={() => useTheme({ theme: null })}
							class="flex w-full items-center rounded-xl px-4 py-2 align-middle font-medium text-zinc-700 hover:bg-zinc-200 dark:text-white hover:dark:bg-zinc-700"
						>
							<IconDeviceLaptop class="mr-3" size={20} /> Match System
						</button>
					</li>
					<li>
						<button
							type="button"
							onClick={() => useTheme({ theme: "dark" })}
							class="flex w-full items-center rounded-xl px-4 py-2 align-middle font-medium text-zinc-700 hover:bg-zinc-200 dark:text-white hover:dark:bg-zinc-700"
						>
							<IconMoonStars class="mr-3" size={20} /> Dark Theme
						</button>
					</li>
					<li>
						<button
							type="button"
							onClick={() => useTheme({ theme: "light" })}
							class="flex w-full items-center rounded-xl px-4 py-2 align-middle font-medium text-zinc-700 hover:bg-zinc-200 dark:text-white hover:dark:bg-zinc-700"
						>
							<IconSun class="mr-3" size={20} /> Light Theme
						</button>
					</li>
				</ul>
			</div>
		</>
	);
};
