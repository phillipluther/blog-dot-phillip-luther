import VisuallyHidden from '@reach/visually-hidden';
import { graphql } from 'gatsby';
import * as React from 'react';

import ContactInfo from '../components/contact-info';
import Heading from '../components/heading';
import Layout from '../components/layout';
import SectionTitle from '../components/section-title';
import Seo from '../components/seo';

const ContactPage = ({ data }) => {
  const { siteMetadata } = data.site;
  const contactLinks = siteMetadata.social.reduce((links, { link, name }) => {
    if (['twitter', 'email'].includes(name)) {
      links[name] = link;
    }

    return links;
  }, {});

  return (
    <Layout>
      <Seo
        title="Contact Info"
        description={`Comments, questions, or feedback for blog? Ideas for new posts? Email and Twitter are the best places to contact me.`}
      />

      <SectionTitle as="h1">Contact Info</SectionTitle>

      <VisuallyHidden as="h2">Contact Methods</VisuallyHidden>
      <ContactInfo />

      <Heading as="h2">Get In Touch!</Heading>
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
        If you do email me, rest assured your email will never ever be used for anything other than
        writing you back.
      </p>
    </Layout>
  );
};

export default ContactPage;

export const query = graphql`
  query {
    site {
      siteMetadata {
        social {
          name
          link
        }
      }
    }
  }
`;
