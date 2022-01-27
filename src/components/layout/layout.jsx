import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import classnames from 'classnames';
import VisuallyHidden from '@reach/visually-hidden';
import { DialogOverlay, DialogContent } from "@reach/dialog";
import PrimaryNav from '../primary-nav';
import Social from '../social';
import Container from '../container';
import Logo from '../../images/blog-phillip-luther-logo.inline.svg';
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

        <DialogOverlay
          isOpen={isMenuShowing}
          onDismiss={() => showMenu(false)}
          className={styles.overlay}
        >
          <DialogContent className={styles.modal}>
            <button className={styles.toggle} onClick={() => showMenu(false)}>
              <VisuallyHidden>Close</VisuallyHidden>
              <span className={burgerClasses} aria-hidden />
            </button>
            <PrimaryNav className={styles.headerNav} />
          </DialogContent>
        </DialogOverlay>
      </header>

      <Container as="main" className={styles.main} large>
        {children}
      </Container>

      <footer id="footer" className={styles.footer}>
        <VisuallyHidden as="h2">Page Footer</VisuallyHidden>

        <Container as="div" className={styles.footerContent} large>
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
