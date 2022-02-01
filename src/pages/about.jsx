import * as React from 'react';

import Layout from '../components/layout';
import SectionTitle from '../components/section-title';
import Seo from '../components/seo';

const AboutPage = ({ data }) => (
  <Layout>
    <Seo
      title="About"
      description={`What kind of frontend and audio engineering posts can you find on this blog? How did the blog get started? Your questions answered!`}
    />

    <SectionTitle as="h1">All About the Blog</SectionTitle>
    <p>
      Have you ever noticed how many software engineers are also musicians? This blog covers that
      union: it's about frontend engineering, music, and programmatic audio. That's not to say
      every post bundles development <em>and</em> audio, but articles specifically diving into one
      will contain threads of the other. If you're a musician who codes or a coder who musics, you
      should find this stuff interesting.
    </p>
    <p>So is the goal, at least.</p>
  </Layout>
);

export default AboutPage;
