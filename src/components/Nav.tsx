import { createSignal, Index, Show } from 'solid-js';

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

const MobileNav = () => {
  const [menu, setMenu] = createSignal(false);

  const openMenu = () => setMenu(!menu());

  return (
    <>
      <button aria-label="Open navigation button" onClick={openMenu}>
        <Show
          when={menu()}
          fallback={
            <svg
              xmlns="<http://www.w3.org/2000/svg>"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              display="block"
            >
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          }
        >
          <svg
            xmlns="<http://www.w3.org/2000/svg>"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            display="block"
          >
            <path d="M20 20L4 4m16 0L4 20" />
          </svg>
        </Show>
      </button>

      <Show when={menu()}>
        <ul class="w-full" arial-label="Navigation links">
          <Index each={links}>
            {(link: () => IRoutes) => (
              <li class="rounded-md py-2 px-3">
                <a
                  class="decoration-primary decoration-2 underline-offset-8 hover:underline focus:outline-primary"
                  href={link().url}
                  aria-label={`Link to ${link().name}`}
                >
                  {link().name}
                </a>
              </li>
            )}
          </Index>
        </ul>
      </Show>
    </>
  );
};

const DesktopNav = () => (
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
);

// TODO: Merge navigation
export const Nav = () => (
  <nav class=" border-b border-gray-300 bg-white p-5 dark:bg-matte sticky top-0 w-screen">
    <div class="space-between flex">
      <span class="sm:hidden height-fit">
        <MobileNav />
      </span>
      <span class="hidden sm:block">
        <DesktopNav />
      </span>
    </div>
  </nav>
);
