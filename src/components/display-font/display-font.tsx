import * as React from 'react';
import classnames from 'classnames';
import * as styles from './display-font.module.css';

export type DisplayFontType = {
  as?: React.ElementType,
  children: React.ReactNode,
  className?: string,
  bold?: boolean,
};

const DisplayFont = ({
  as: Tag = 'span',
  children,
  className,
  bold = false,
  ...props
}: DisplayFontType) => (
  <Tag
    className={classnames(styles.base, {
      [styles.bold]: bold === true,
    }, className)}
    {...props}
  >
    {children}
  </Tag>
);

export default DisplayFont;
