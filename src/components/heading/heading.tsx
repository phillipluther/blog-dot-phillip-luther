import * as React from 'react';
import classnames from 'classnames';
import DisplayFont from '../display-font';
import * as styles from './heading.module.css';

export type HeadingTypes = {
  as?: React.ElementType,
  bold?: boolean,
  children: React.ReactNode,
  className?: string,
  size?: string,
};

const Heading = ({
  as = 'h2',
  bold = true,
  children,
  className,
  size,
  ...props
}: HeadingTypes) => (
  <DisplayFont
    as={as}
    bold={bold}
    className={classnames(
      styles.heading,
      {
        [styles.lg]: !size && (as === 'h2'),
        [styles.md]: !size && (as === 'h3'),
        [styles.sm]: !size && (as === 'h4'),
        [styles.xs]: !size && ((as === 'h5') || (as === 'h6')),
        [styles[size]]: size,
      },
      className,
    )}
    {...props}
  >
    {children}
  </DisplayFont>
);

export default Heading;
