import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SectionTitle from '../components/section-title';
import Seo from '../components/seo';

const IndexPage = ({ data }) => {
  const { siteMetadata } = data.site;

  return (
    <Layout isHome>
      <Seo title="Home" />

      <SectionTitle as="h2">{siteMetadata.siteName}</SectionTitle>
      <p>Home Page</p>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    site {
      siteMetadata {
        siteName: name
      }
    }
  }
`;
