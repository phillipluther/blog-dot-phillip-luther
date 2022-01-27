import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import classnames from 'classnames';
import Heading from '../heading';
import Container from '../container';
import Social from '../social';
import * as styles from './author-card.module.css';

export type AuthorCardTypes = {
  className?: string,
};

const AuthorCard = ({ className, ...props }: AuthorCardTypes) => {
  const { site: { siteMetadata: metadata }} = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          name
        }
      }
    }
  `);

  return (
    <Container className={classnames(styles.wrapper, className)} {...props}>
      <Heading as="h2" size="xs">About the Author</Heading>

      <StaticImage
        src="./portrait-avatar.png"
        alt={`Phillip Luther, author of ${metadata.name}`}
        placeholder="blurred"
        className={styles.image}
      />
      <p>My name is Phillip Luther. I go by Phil.</p>
      <p>
        I'm a <a href="#life_long_clarification">life-long</a><sup>*</sup> software engineer and classically trained musician. I'm also the sole author behind posts here on {metadata.name} exploring where the fields of music and code overlap.
      </p>
      <p>
        Current areas of interest include the web audio API, blockchain technology, and YouTube guitar channels. Ask me about 'em!
      </p>

      <div className={styles.connect}>
        <Heading size="xs" as="h3" className={styles.subhead} bold={false}>
          Connect With Me:
        </Heading>
        <Social />
      </div>

      <p className={styles.small} id="life_long_clarification">
        <span>*</span>
        <span>
          I'm just over 40. Accounting for childhood and teenage buffoonery I'll translate "life long" to 25'ish years. For clarity.
        </span>
      </p>
    </Container>
  );
};

export default AuthorCard;
