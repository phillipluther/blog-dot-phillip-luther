import * as React from 'react';
import classnames from 'classnames';

const Container = ({
  className,
  children,
  noX = false,
  noY = false,
  noTop = false,
  noBottom = false,
  noRight = false,
  noLeft = false,
  large = false,
  as: Tag = 'div',
  ...props
}: {
  className?: string,
  children: React.ReactNode,
  noX?: boolean,
  noY?: boolean,
  noTop?: boolean,
  noBottom?: boolean,
  noRight?: boolean,
  noLeft?: boolean,
  large?: boolean,
  as?: React.ElementType,
}) => (
  <Tag {...props}>
    {children}
  </Tag>
);

export default Container;
