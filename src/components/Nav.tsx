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
  <nav class="bg-transparent fixed bottom-0 md:top-0 md:bottom-auto w-screen">
    {/* Mobile nav */}
    <div
      class="flex mb-3 mx-4 border shadow-xl rounded-lg bg-white dark:bg-matte min-h-[66px] md:hidden"
      arial-label="Navigation links"
    >
      <Index each={links}>
        {(link: () => IRoutes) => (
          <a
            class="py-2 text-sm text-center text-gray-600 hover:bg-gray-200 grow"
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
  </nav>
);
