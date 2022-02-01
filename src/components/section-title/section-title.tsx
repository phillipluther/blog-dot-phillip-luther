import classnames from 'classnames';
import * as React from 'react';

import Heading from '../heading';
import { title } from './section-title.module.css';

export type SectionTitleType = {
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
};

const SectionTitle = ({ as = 'h1', children, className, ...props }: SectionTitleType) => (
  <Heading as={as} size="sm" className={classnames(title, className)} {...props}>
    {children}
  </Heading>
);

export default SectionTitle;
