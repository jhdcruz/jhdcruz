import { JSXElement } from 'solid-js';

type ButtonProps = {
  href: string;
  children: JSXElement;
  outline?: boolean;
};

export const Button = ({ href, children, outline }: ButtonProps) => (
  <a
    href={href}
    class="mb-2 text-center py-4 px-6 rounded-full shadow-sm md:mr-3"
    classList={{
      'border-2 border-primary': outline,
      'bg-primary': !outline,
    }}
  >
    {children}
  </a>
);
