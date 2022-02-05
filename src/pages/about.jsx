import { Link } from 'gatsby';
import * as React from 'react';

import Banner from '../components/banner';
import Container from '../components/container';
import { Footer, Header } from '../components/layout';
import SectionTitle from '../components/section-title';
import Seo from '../components/seo';

const title = "Topics Tailored to Today's Troubadour Engineer";
const description =
  'From the fundamentals of music theory to WebGL applications to programmatic audio, this blog covers music, code, and music and code.';

const AboutPage = ({ data }) => (
  <>
    <Seo title={title} description={description} />

    <Header />
    <Banner headline={title} summary={description} />

    <Container as="main" className="prose sm:prose-lg md:prose-xl">
      <SectionTitle as="h2">About the Blog</SectionTitle>
      <p>
        Have you ever noticed how many software engineers are also musicians? This blog's a member
        of that union: topics dive into frontend engineering, music, and programmatic audio. "How
        stuff works" is of particular interest: the nuts and bolts of music theory, what new
        hotness shipped with what browser, what compressors actually do to sound, and other such
        curiosities.
      </p>
      <p>
        That's not to say every post bundles development <em>and</em> audio, but articles
        specifically diving into one will contain threads of the other. If you're a musician who
        codes or a coder who musics, you should find this stuff interesting.
      </p>
      <p>
        So is the goal, at least. Whether the blog is succeeding or failing at that goal I invite
        you to <Link to="/contact">contact me</Link> and let me know!
      </p>

      <SectionTitle as="h2">About the Author</SectionTitle>
      <p>
        Bios are hard. As the blog chugs along I'll wrangle the pithy and earnest words to tell my
        story. In the meantime, there's an author summary attached to every post; that'll have to
        do for now.
      </p>
    </Container>

    <Footer />
  </>
);

export default AboutPage;
