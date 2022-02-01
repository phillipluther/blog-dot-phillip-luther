import classnames from 'classnames';
import * as React from 'react';

const Container = ({
  className,
  children,
  as: Tag = 'div',
  ...props
}: {
  className?: string;
  children: React.ReactNode;
  as?: React.ElementType;
}) => (
  <Tag className={classnames('max-w-screen-xl', 'mx-auto', 'p-4', 'sm:p-6', className)} {...props}>
    {children}
  </Tag>
);

export default Container;
