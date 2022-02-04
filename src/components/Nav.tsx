import { Index } from 'solid-js';

interface IRoutes {
  name: string;
  url: string;
}

const links: IRoutes[] = [
  {
    name: 'About',
    url: '#about',
  },
  {
    name: 'Projects',
    url: '#projects',
  },
  {
    name: 'Skills',
    url: '#skills',
  },
  {
    name: 'Badges',
    url: '#badges',
  },
];

export const Nav = () => (
  <nav class=" border-b border-gray-300 bg-white p-5 dark:bg-matte">
    <div class="space-between flex">
      <div arial-label="Navigation links">
        <Index each={links}>
          {(link: () => IRoutes) => (
            <a
              class=" rounded-md py-2 px-3 decoration-primary decoration-2 underline-offset-8 hover:underline focus:outline-primary"
              href={link().url}
              aria-label={`Link to ${link().name}`}
            >
              {link().name}
            </a>
          )}
        </Index>
      </div>
    </div>
  </nav>
);
