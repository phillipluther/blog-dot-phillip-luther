import classnames from 'classnames';
import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';

import Container from './container';
import Social from './social';

export type AuthorCardTypes = {
  className?: string;
};

const AuthorCard = ({ className, ...props }: AuthorCardTypes) => (
  <Container className={classnames(className)} {...props}>
    <h2>About the Author</h2>

    <StaticImage
      src="./portrait-avatar.png"
      alt="Phillip Luther, the blog's author"
      placeholder="blurred"
    />
    <p>My name is Phillip Luther. I go by Phil.</p>
    <p>
      I'm a <a href="#life_long_clarification">life-long</a>
      <sup>*</sup> software engineer and classically trained musician. I'm also the sole author
      behind posts on this blog, exploring where the fields of music and code overlap.
    </p>
    <p>
      Current areas of interest include the web audio API, blockchain technology, and YouTube guitar
      channels. Ask me about 'em!
    </p>

    <div>
      <h3>Connect With Me:</h3>
      <Social />
    </div>

    <p id="life_long_clarification">
      <span>*</span>
      <span>
        I'm just over 40. Accounting for childhood and teenage buffoonery I'll translate "life long"
        to 25'ish years. For clarity.
      </span>
    </p>
  </Container>
);

export default AuthorCard;
