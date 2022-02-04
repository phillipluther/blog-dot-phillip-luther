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
      'relative',
      'font-display',
      'text-gray-500',
      'text-base',
      'block',
      'mb-4',
      'sm:mb-6',
      'pb-3',
      'sm:pb-5',
      'uppercase',
      'after:block',
      'after:w-1/5',
      'after:border-t-2',
      'after:border-gray-300',
      'after:absolute',
      'after:bottom-0',
      'after:left-0',
      className,
    )}
    {...props}
  >
    {children}
  </Tag>
);

export default SectionTitle;
