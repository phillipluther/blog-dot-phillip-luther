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
  home = true,
  ...props
}: {
  className?: string;
  home?: boolean;
}) => (
  <nav className={classnames(className)} {...props}>
    <ul>
      {primaryNavLinks.map(({ href, label }) => {
        if (home === false && href === '/') {
          return null;
        }

        return (
          <li key={href}>
            <Link to={href}>{label}</Link>
          </li>
        );
      })}
    </ul>
  </nav>
);

export default PrimaryNav;
