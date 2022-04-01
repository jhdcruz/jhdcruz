import { Index } from 'solid-js';

interface IRoutes {
  name: string;
  url: string;
  icon: string;
}

const links: IRoutes[] = [
  {
    name: 'About',
    url: '#about',
    icon: 'user',
  },
  {
    name: 'Projects',
    url: '#projects',
    icon: 'cube-transparent',
  },
  {
    name: 'Skills',
    url: '#skills',
    icon: 'puzzle',
  },
  {
    name: 'Badges',
    url: '#badges',
    icon: 'flag',
  },
  {
    name: 'Contact',
    url: 'mailto:jhdcrux@outlook.com',
    icon: 'mail',
  },
];

export const Nav = () => (
  <nav class="flex justify-center border-t md:border-b md:border-t-0 border-gray-300 bg-white dark:bg-matte fixed bottom-1 md:top-0 md:bottom-auto w-screen">
    {/* Mobile nav */}
    <div
      class="flex flex-row items-center w-full md:hidden rounded"
      arial-label="Navigation links"
    >
      <Index each={links}>
        {(link: () => IRoutes) => (
          <a
            class="py-2 text-sm text-center text-gray-600 hover:bg-gray-200"
            href={link().url}
            aria-label={`Link to ${link().name}`}
          >
            <span
              class="iconify mx-auto text-xl my-1"
              data-icon={`heroicons-solid:${link().icon}`}
            />
            {link().name}
          </a>
        )}
      </Index>
    </div>

    {/* Desktop nav */}
    <div class="max-w-6xl mx-auto px-10 hidden md:block">
      <div class="flex justify-between">
        <div class="flex">
          {/* Website Logo */}
          <a href="/" class="flex items-center py-4 px-2">
            <img src="logo.png" alt="Logo" class="h-8 w-8 mr-2" />
            <span class="font-semibold text-lg">{/* Website Title */}</span>
          </a>
        </div>

        {/* Primary Navbar items */}
        <div class="hidden md:flex items-center x-space-1">
          <Index each={links}>
            {(link: () => IRoutes) => (
              <a
                href={link().url}
                class="py-4 px-2 mx-3 rounded-lg text-gray-600 text-center"
              >
                {link().name}
              </a>
            )}
          </Index>
        </div>

        {/* CTA items */}
        <div class="hidden md:flex items-center">
          <div class="items-center">
            <a
              href="signup"
              class="py-2 px-4 mx-2 font-medium text-white bg-green-500 rounded-lg"
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
);
