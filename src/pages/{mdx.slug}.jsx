import VisuallyHidden from '@reach/visually-hidden';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import * as React from 'react';

import AuthorCard from '../components/author-card';
import Banner from '../components/banner';
import Container from '../components/container';
import Layout from '../components/layout';
import Seo from '../components/seo';
import TagList from '../components/tag-list';

const BlogPost = ({ data }) => {
  const {
    title,
    description,
    cover,
    cover_alt: coverAlt,
    cover_credit: coverCredit,
    cover_credit_link: coverCreditLink,
    tags,
    date,
  } = data.mdx.frontmatter;

  const image = getImage(cover);

  return (
    <Layout>
      <Seo
        title={title}
        description={description}
        keywords={tags}
        /* TODO: Revisit sizing on these? */
        image={image.images.fallback.src}
        article
      />

      <article>
        <Banner
          headline={title}
          date={date}
          summary={description}
          image={{
            src: image,
            alt: coverAlt,
            credit: coverCredit,
            creditLink: coverCreditLink,
          }}
        />

        <Container noX>
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </Container>

        <footer>
          <VisuallyHidden as="h2">Supplemental Content</VisuallyHidden>

          <section>
            <h3>More Like This</h3>
            <TagList tags={tags} />
          </section>

          <AuthorCard as="section" />
        </footer>
      </article>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        cover {
          childImageSharp {
            gatsbyImageData
          }
        }
        cover_alt
        cover_credit
        cover_credit_link
        date(formatString: "MMMM, DD YYYY")
        description
        tags
        title
      }
      body
    }
  }
`;

export default BlogPost;
