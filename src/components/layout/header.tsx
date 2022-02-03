import VisuallyHidden from '@reach/visually-hidden';
import { Link, graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';

import Logo from '../../images/blog-phillip-luther-logo-reverse.inline.svg';
import Container from '../container';
import PrimaryNav from '../primary-nav';

const Header = ({
  className,
  showHome = true,
  titleTag: TitleTag = 'h1',
  ...props
}: {
  className?: string;
  titleTag?: React.ElementType;
  showHome?: boolean;
}) => {
  const {
    site: { siteMetadata: metadata },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          name
          url
        }
      }
    }
  `);

  return (
    <Container
      as="header"
      className="bg-gray-800 text-gray-200 flex flex-wrap place-content-between items-center"
    >
      <TitleTag className="mr-4">
        <Link to="/">
          <Logo aria-hidden="true" alt="" className="h-auto w-36" />
          <VisuallyHidden>{metadata.name}</VisuallyHidden>
        </Link>
      </TitleTag>

      <PrimaryNav showHome={false} />
    </Container>
  );
};

export default Header;
