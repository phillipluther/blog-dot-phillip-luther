import { graphql } from 'gatsby';
import * as React from 'react';

import Layout from '../components/layout';
import PostList from '../components/post-list';
import SectionTitle from '../components/section-title';
import Seo from '../components/seo';

const PostsPage = ({ data, pageContext }) => {
  return (
    <Layout>
      <Seo
        title={`Posts tagged as ${pageContext.tag}`}
        description={`Featuring the blog posts about ${pageContext.tag}, web application development, programmatic audio, and more.`}
      />

      <SectionTitle as="h1">Posts Tagged: {pageContext.tag}</SectionTitle>
      <PostList posts={data.allMdx.nodes} />
    </Layout>
  );
};

export default PostsPage;

export const query = graphql`
  query ($tag: String) {
    allMdx(
      filter: { frontmatter: { tags: { in: [$tag] } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        frontmatter {
          tags
          cover {
            childImageSharp {
              gatsbyImageData
            }
          }
          date
          description
          title
        }
        id
        slug
      }
    }
  }
`;
