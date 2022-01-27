import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import PageTitle from '../components/page-title';
// import Heading from '../components/heading';
import Seo from '../components/seo';

const AboutPage = ({ data }) => {
  const { siteMetadata: { name: siteName }} = data.site;
  return (
    <Layout>
      <Seo
        title="About"
        description={
          `What kind of software and audio engineering posts can you find on ${siteName}? How did the blog get started? Your questions answered!` 
        }
      />

      <PageTitle>All About the {siteName} Blog</PageTitle>
      <p>
        Have you ever noticed how many software engineers are also musicians? This blog covers that union: it's about frontend engineering, music, and programmatic audio. That's not to say every post bundles development <em>and</em> audio, but articles specifically diving into one will contain threads of the other. If you're a musician who codes or a coder who musics, you should find this stuff interesting.
      </p>
      <p>
        So is the goal, at least.
      </p>
      {/* <Heading as="h3">What Kind of Software Engineering?</Heading>
      <Heading as="h3">What Kind of Audio/Music?</Heading> */}
    </Layout>
  );
};

export default AboutPage;

export const query = graphql`
  query {
    site {
      siteMetadata {
        name
      }
    }
  }
`;
