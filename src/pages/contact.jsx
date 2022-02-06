import { graphql } from 'gatsby';
import * as React from 'react';

import Banner from '../components/banner';
import Container from '../components/container';
import { Footer, Header } from '../components/layout';
import Seo from '../components/seo';

const title = 'Contact Info';
const description =
  'Comments, questions, or feedback for the blog? Ideas for new posts? Email and Twitter are the best places to contact me.';

const ContactPage = ({ data }) => {
  const { siteMetadata } = data.site;
  const contactLinks = siteMetadata.social.reduce((links, { link, name }) => {
    if (['twitter', 'email'].includes(name)) {
      links[name] = link;
    }

    return links;
  }, {});

  return (
    <>
      <Seo title={title} description={description} />

      <Header />
      <Banner headline={title} />

      <Container as="main" className="prose md:prose-lg">
        <p>
          Questions, comments, ideas, or feedback for the blog? Found something wonky with the site
          itself? Hate the fonts?
        </p>
        <p>Let me know!</p>
        <p>
          <a href={contactLinks.email}>Email</a> is the best way to get in touch because I'm
          old-fashioned like that. I'm infrequently active on{' '}
          <a href={contactLinks.twitter}>Twitter</a>, as well, so a well-timed and thoughtful
          at-mention also works.
        </p>
        <p>
          If you do email me, rest assured your email will never ever be used for anything other
          than writing you back.
        </p>
      </Container>
      <Footer />
    </>
  );
};

export default ContactPage;

export const query = graphql`
  query {
    site {
      siteMetadata {
        social {
          link
        }
      }
    }
  }
`;
