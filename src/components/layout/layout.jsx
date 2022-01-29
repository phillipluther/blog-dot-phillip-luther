import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import classnames from 'classnames';
import VisuallyHidden from '@reach/visually-hidden';
import { DialogOverlay, DialogContent } from "@reach/dialog";
import PrimaryNav from '../primary-nav';
import Heading from '../heading';
import Social from '../social';
import Container from '../container';
import Logo from '../../images/blog-phillip-luther-logo.inline.svg';
import '@reach/dialog/styles.css';
import * as styles from './layout.module.css';
import '../global-styles.css';

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

  const [isMenuShowing, showMenu] = React.useState(false);
  const burgerClasses = classnames(styles.hamburger, {
    [styles.open]: isMenuShowing,
  });

  return (
    <>
      <header id="header" className={styles.header}>
        <Container className={styles.headerContent}>
          <button
            type="button"
            className={styles.toggle}
            onClick={() => showMenu(true)}
          >
            <VisuallyHidden>
              {isMenuShowing ? 'Hide' : 'Show'}
              {' '}
              Navigation Menu
            </VisuallyHidden>
            <span className={burgerClasses} aria-hidden />
          </button>

          <TitleTag className={styles.branding}>
            <Link to="/" className={styles.logoLink}>
              <Logo className={styles.logo} aria-hidden="true" alt="" />
              <VisuallyHidden>{metadata.name}</VisuallyHidden>
            </Link>
          </TitleTag>
        </Container>
      </header>

      <DialogOverlay
        isOpen={isMenuShowing}
        onDismiss={() => showMenu(false)}
        className={styles.overlay}
      >
        <Container>
          <DialogContent className={styles.modal} aria-labelledby="navLabel">
            <VisuallyHidden id="navLabel" as="h2">Primary Navigation</VisuallyHidden>

            <button
              className={classnames(styles.toggle, styles.menuToggle)}
              onClick={() => showMenu(false)}
            >
              <VisuallyHidden>Close</VisuallyHidden>
              <span className={burgerClasses} aria-hidden />
            </button>

            <PrimaryNav className={styles.headerNav} />

            <Heading
              as="h3"
              size="xs"
              bold={false}
              className={styles.headerHeading}
            >
              On Social Media
            </Heading>
            <Social className={styles.headerSocial} />
          </DialogContent>
        </Container>
      </DialogOverlay>

      <Container as="main" className={styles.main}>
        {children}
      </Container>

      <footer id="footer" className={styles.footer}>
        <VisuallyHidden as="h2">Page Footer</VisuallyHidden>

        <Container as="div" className={styles.footerContent}>
          <section className={classnames(styles.footerMenu, styles.footerSection)}>
            <VisuallyHidden as="h3">Footer Navigation</VisuallyHidden>
            <PrimaryNav className={styles.footerNav} />
            <Social className={styles.footerSocial} />
          </section>

          <section className={classnames(styles.small, styles.footerSection)}>
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
