import classnames from 'classnames';
import * as React from 'react';

import DisplayFont from '../display-font';
import * as styles from './heading.module.css';

export type HeadingProps = {
  as?: React.ElementType;
  bold?: boolean;
  children: React.ReactNode;
  className?: string;
  flush?: boolean;
  size?: string;
};

const Heading = ({
  as = 'h2',
  bold = true,
  children,
  className,
  flush = false,
  size,
  ...props
}: HeadingProps) => (
  <DisplayFont
    as={as}
    bold={bold}
    className={classnames(
      styles.heading,
      {
        [styles.lg]: !size && as === 'h2',
        [styles.md]: !size && as === 'h3',
        [styles.sm]: !size && as === 'h4',
        [styles.xs]: !size && (as === 'h5' || as === 'h6'),
        [styles[size]]: size,
        [styles.flush]: flush === false,
      },
      className,
    )}
    {...props}
  >
    {children}
  </DisplayFont>
);

export default Heading;
