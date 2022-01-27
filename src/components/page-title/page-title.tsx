import * as React from 'react';
import classnames from 'classnames';
import Heading from '../heading';
import { title } from './page-title.module.css';

export type PageTitleTypes = {
  as?: React.ElementType,
  children: React.ReactNode,
  className?: string,
};

const PageTitle = ({ as = 'h1', children, className, ...props }: PageTitleTypes) => (
  <Heading as={as} size="xs" className={classnames(title, className)} {...props}>
    {children}
  </Heading>
);

export default PageTitle;
