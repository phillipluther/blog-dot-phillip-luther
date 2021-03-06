import { useLocation } from '@reach/router';
import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';
import Helmet from 'react-helmet';

const Seo = ({
  title,
  description,
  image = '/images/blog-phillip-luther-social-card.png',
  article,
  keywords,
  children,
  showAuthor = true,
}: {
  title: string;
  description: string;
  image?: string;
  article?: boolean;
  keywords?: string[];
  children?: React.ReactElement;
  showAuthor?: boolean;
}) => {
  const { pathname } = useLocation();
  const { site } = useStaticQuery(query);
  const { siteName, siteDescription, url, author } = site.siteMetadata;

  const seo = {
    title: title || siteName,
    description: description || siteDescription,
    url: `${url}${pathname}`,
  };

  return (
    <Helmet title={seo.title} titleTemplate={`%s · ${siteName}`}>
      <meta name="description" content={seo.description} />
      <meta name="image" content={image} />

      {keywords && <meta name="keywords" content={keywords.join(', ')} />}

      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      {(article ? true : null) && <meta property="og:type" content="article" />}
      {image && <meta property="og:image" content={image} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="phillipluther" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      {image && <meta name="twitter:image" content={image} />}

      {showAuthor && <meta name="author" content={author} />}
      {children}
    </Helmet>
  );
};

export default Seo;

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        siteName: name
        siteDescription: description
        url
        author
      }
    }
  }
`;
