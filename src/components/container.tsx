import classnames from 'classnames';
import * as React from 'react';

const Container = ({
  className,
  children,
  as: Tag = 'div',
  padX = true,
  padY = true,
  // constrained = false,
  ...props
}: {
  className?: string;
  children: React.ReactNode;
  // constrained?: boolean;
  as?: React.ElementType;
  padX?: boolean;
  padY?: boolean;
}) => (
  <Tag
    className={classnames(
      'mx-auto',
      'max-w-screen-md',
      {
        // 'max-w-4xl': constrained,
        'px-4': padX,
        'sm:px-6': padX,
        'py-4': padY,
        'sm:py-6': padY,
      },
      className,
    )}
    {...props}
  >
    {children}
  </Tag>
);

export default Container;
