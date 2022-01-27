import * as React from 'react';
import { graphql } from 'gatsby';
import VisuallyHidden from '@reach/visually-hidden';
import Layout from '../components/layout';
import Heading from '../components/heading';
import PageTitle from '../components/page-title';
import Seo from '../components/seo';
import ContactInfo from '../components/contact-info';

const ContactPage = ({ data }) => {
  const { siteMetadata } = data.site;
  const contactLinks = siteMetadata.social.reduce((links, { link, name}) => {
    if (['twitter', 'email'].includes(name)) {
      links[name] = link;
    }

    return links;
  }, {});

  return (
    <Layout>
      <Seo
        title="Contact Info"
        description={
          `Comments, questions, or feedback for ${siteMetadata.name}? Email and Twitter are the best places to contact us.`
        }
      />

      <PageTitle>{siteMetadata.name} Contact Info</PageTitle>

      <VisuallyHidden as="h2">Contact Methods</VisuallyHidden>
      <ContactInfo />

      <Heading as="h2">Get In Touch!</Heading>
      <p>Questions, comments, ideas, or feedback for {siteMetadata.name}?</p> 
      <p>Found something wonky with the site itself?</p>
      <p>Let us know!</p>
      <p>
        <a href={contactLinks.email}>Email</a>{' '}
        is the best way to get in touch because we're old-fashioned like that. We're
        infrequently active on <a href={contactLinks.twitter}>Twitter</a>, as well, so a
        well-timed and thoughtful at-mention also
        works.
      </p>
      <p>
        If you do email us, rest assured your email will never ever be used for anything other than writing you back.
      </p>
    </Layout>
  );
};

export default ContactPage;

export const query = graphql`
  query {
    site {
      siteMetadata {
        name
        social {
          name
          link
        }
      }
    }
  }
`;

