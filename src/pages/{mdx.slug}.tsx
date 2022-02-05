import VisuallyHidden from '@reach/visually-hidden';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import * as React from 'react';

import AuthorCard from '../components/author-card';
import Banner from '../components/banner';
import Container from '../components/container';
import { Footer, Header } from '../components/layout';
import SectionTitle from '../components/section-title';
import Seo from '../components/seo';
import TagList from '../components/tag-list';

const BlogPost = ({
  data,
}: {
  data: {
    mdx: {
      frontmatter: {
        title: string;
        description: string;
        cover: any; // TODO: ack!
        cover_alt: string;
        cover_credit: string;
        cover_credit_link: string;
        tags: string[];
        date: string;
      };
    };
  };
}) => {
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
    <>
      <Header />
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

        <Container className="prose sm:prose-lg md:prose-xl">
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </Container>

        <Container as="footer" className="mb-4 sm:mb-6">
          <VisuallyHidden as="h2">Supplemental Content</VisuallyHidden>

          <section className="mb-8 sm:mb-12">
            <SectionTitle as="h3">More Like This</SectionTitle>
            <TagList tags={tags} />
          </section>

          <AuthorCard as="section" headingLevel="h3" />
        </Container>
      </article>

      <Footer />
    </>
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
