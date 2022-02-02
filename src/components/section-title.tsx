import classnames from 'classnames';
import * as React from 'react';

export type SectionTitleType = {
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
};

const SectionTitle = ({ as: Tag = 'h1', children, className, ...props }: SectionTitleType) => (
  <Tag className={classnames('font-display', 'text-gray-700', 'text-xl', className)} {...props}>
    {children}
  </Tag>
);

export default SectionTitle;
