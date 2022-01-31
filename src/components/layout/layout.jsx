import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import classnames from 'classnames';
import VisuallyHidden from '@reach/visually-hidden';
import PrimaryNav from '../primary-nav';
import Social from '../social';
import Container from '../container';
import Logo from '../../images/blog-phillip-luther-logo.inline.svg';

const Layout = ({
  children,
  isHome = false
}) => {
  const TitleTag = isHome ? 'h1' : 'p';
  const { site: { siteMetadata: metadata }} = useStaticQuery(graphql`
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
      <Container as="header" className={}>
        <TitleTag className={}>
          <Link to="/" className={}>
            <Logo className={} aria-hidden="true" alt="" />
            <VisuallyHidden>{metadata.name}</VisuallyHidden>
          </Link>
        </TitleTag>

        <PrimaryNav className={} />
        <Social className={} />
      </Container>

      <Container as="main">
        {children}
      </Container>

      <footer id="footer">
        <VisuallyHidden as="h2">Page Footer</VisuallyHidden>

        <Container as="div" className={}>
          <section className={}>
            <VisuallyHidden as="h3">Footer Navigation</VisuallyHidden>

            <PrimaryNav className={} />
            <Social className={} />
          </section>

          <section className={}>
            <VisuallyHidden as="h3">Copyright Info and Disclaimers</VisuallyHidden>
            <p>
              The opinions and viewpoints expressed in any format on this site belong to me, Phillip Luther, and do not necessarily reflect the views or opinions of any associated organizations or corporate entities.
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
