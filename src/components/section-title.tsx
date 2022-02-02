import classnames from 'classnames';
import * as React from 'react';

export type SectionTitleType = {
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
};

const SectionTitle = ({ as: Tag = 'h1', children, className, ...props }: SectionTitleType) => (
  <Tag
    className={classnames(
      'font-display',
      'text-gray-500',
      'inline-block',
      'text-xl',
      'mb-4',
      'sm:mb-6',
      'pb-4',
      'sm:pb-6',
      'border-b-2',
      'border-gray-300',
      'uppercase',
      className,
    )}
    {...props}
  >
    {children}
  </Tag>
);

export default SectionTitle;
