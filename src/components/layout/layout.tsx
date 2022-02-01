import * as React from 'react';

import Container from '../container';
import Footer from './footer';
import Header from './header';

const Layout = ({
  children,
  isHome = false,
  ...props
}: {
  children: React.ReactNode;
  isHome?: boolean;
}) => (
  <>
    <Header titleTag={isHome ? 'h1' : 'p'} {...props} />
    <Container as="main">{children}</Container>
    <Footer />
  </>
);

export default Layout;
