import * as React from 'react';
import Header from './header';
import Footer from './footer';
import Container from '../container';

const Layout = ({ children, isHome = false }) => (
  <>
    <Header titleTag={isHome ? 'h1' : 'p'} />
    <Container as="main">{children}</Container>
  </>
);

export default Layout;
