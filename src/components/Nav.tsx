import { Index } from 'solid-js';

interface IRoutes {
  name: string;
  url: string;
}

const sections: IRoutes[] = [
  {
    name: 'About',
    url: '/',
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
  {
    name: 'Resume',
    url: '',
  },
];

export const Nav = () => (
  <nav class="space-between flex p-3">
    <ul class="flex">
      <Index each={sections}>
        {(section: () => IRoutes) => (
          <li>
            <a
              class=" rounded-lg py-2 px-3 text-gray-200 decoration-primary decoration-2 underline-offset-8 hover:underline"
              href={section().url}
            >
              {section().name}
            </a>
          </li>
        )}
      </Index>
    </ul>

    <div>{/* Social Media/Contacts */}</div>
  </nav>
);
