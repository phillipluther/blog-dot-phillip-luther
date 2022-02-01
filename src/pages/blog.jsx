import { graphql } from 'gatsby';
import * as React from 'react';

import Layout from '../components/layout';
import PostList from '../components/post-list';
import SectionTitle from '../components/section-title';
import Seo from '../components/seo';

const BlogPage = ({ data }) => {
  const { name: siteName } = data.site.siteMetadata;
  return (
    <Layout>
      <Seo
        title="All Blog Posts"
        description={`Featuring the latest posts from ${siteName} and covering a wide range of topics`}
      />

      <SectionTitle as="h1">All Blog Posts</SectionTitle>
      <PostList posts={data.allMdx.nodes} headingLevel="h2" />
    </Layout>
  );
};

export default BlogPage;

export const query = graphql`
  query {
    site {
      siteMetadata {
        name
      }
    }
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          cover {
            childImageSharp {
              gatsbyImageData
            }
          }
          date
          description
          tags
          title
        }
        id
        body
        slug
      }
    }
  }
`;
