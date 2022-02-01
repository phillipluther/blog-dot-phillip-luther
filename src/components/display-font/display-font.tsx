import classnames from 'classnames';
import * as React from 'react';

export type DisplayFontType = {
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  bold?: boolean;
};

const DisplayFont = ({
  as: Tag = 'span',
  children,
  className,
  bold = false,
  ...props
}: DisplayFontType) => (
  <Tag
    className={classnames(className)}
    {...props}
  >
    {children}
  </Tag>
);

export default DisplayFont;
