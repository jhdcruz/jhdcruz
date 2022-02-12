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
    name: 'Contact',
    url: 'mailto:jhdcrux@outlook.com',
    icon: 'mail',
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
];

export const Nav = () => (
  <nav class="flex justify-center p-2 border-t md:border-b md:border-t-0 border-gray-300 bg-white dark:bg-matte fixed bottom-0 md:top-0 md:bottom-auto w-screen">
    <div class="flex w-full" arial-label="Navigation links">
      <Index each={links}>
        {(link: () => IRoutes) => (
          <a
            class="rounded-lg text-gray-600 text-center grow"
            href={link().url}
            aria-label={`Link to ${link().name}`}
          >
            <span
              class="iconify mx-auto text-xl mb-1"
              data-icon={`heroicons-solid:${link().icon}`}
            />
            {link().name}
          </a>
        )}
      </Index>
    </div>
  </nav>
);
