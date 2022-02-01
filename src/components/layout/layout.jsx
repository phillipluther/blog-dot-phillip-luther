import VisuallyHidden from '@reach/visually-hidden';
import classnames from 'classnames';
import { Link, graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';

import Logo from '../../images/blog-phillip-luther-logo.inline.svg';
import Container from '../container';
import PrimaryNav from '../primary-nav';
import Social from '../social';

const Layout = ({ children, isHome = false }) => {
  const TitleTag = isHome ? 'h1' : 'p';
  const {
    site: { siteMetadata: metadata },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          description
          name
          url
        }
      }
    }
  `);

  return (
    <>
      <Container as="header">
        <TitleTag>
          <Link to="/">
            <Logo aria-hidden="true" alt="" />
            <VisuallyHidden>{metadata.name}</VisuallyHidden>
          </Link>
        </TitleTag>

        <PrimaryNav />
        <Social />
      </Container>

      <Container as="main">{children}</Container>

      <footer id="footer">
        <VisuallyHidden as="h2">Page Footer</VisuallyHidden>

        <Container as="div">
          <section>
            <VisuallyHidden as="h3">Footer Navigation</VisuallyHidden>

            <PrimaryNav />
            <Social />
          </section>

          <section>
            <VisuallyHidden as="h3">Copyright Info and Disclaimers</VisuallyHidden>
            <p>
              The opinions and viewpoints expressed in any format on this site belong to me, Phillip
              Luther, and do not necessarily reflect the views or opinions of any associated
              organizations or corporate entities.
            </p>
            <p>
              All content is Copyright &copy; 2022 by Phillip Luther unless otherwise specified.
            </p>
          </section>
        </Container>
      </footer>
    </>
  );
};

export default Layout;
