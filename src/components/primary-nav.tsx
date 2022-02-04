import classnames from 'classnames';
import { Link } from 'gatsby';
import * as React from 'react';

export const primaryNavLinks = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/blog',
    label: 'Blog',
  },
  {
    href: '/about',
    label: 'About',
  },
  {
    href: '/contact',
    label: 'Contact',
  },
];

const PrimaryNav = ({
  className,
  showHome = true,
  ...props
}: {
  className?: string;
  showHome?: boolean;
}) => (
  <nav className={className} {...props}>
    <ul className="flex -ml-2 lg:-ml-3 font-display">
      {primaryNavLinks.map(({ href, label }) => {
        if (showHome === false && href === '/') {
          return null;
        }

        return (
          <li key={href}>
            <Link
              to={href}
              className="flex items-center h-12 px-2 md:px-3 hover:underline decoration-2"
            >
              {label}
            </Link>
          </li>
        );
      })}
    </ul>
  </nav>
);

export default PrimaryNav;
