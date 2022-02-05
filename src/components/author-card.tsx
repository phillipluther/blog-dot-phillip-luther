import classnames from 'classnames';
import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';

import Container from './container';
import Social from './social';

const AuthorCard = ({
  as = 'aside',
  className,
  headingLevel: Heading = 'h2',
  ...props
}: {
  as?: React.ElementType;
  headingLevel: React.ElementType;
  className?: string;
}) => (
  <Container as={as} className={classnames('bg-gray-100', className)} {...props}>
    <StaticImage
      src="../images/portrait-avatar.png"
      alt="Phillip Luther, the blog's author"
      placeholder="blurred"
      className="w-24 h-24 float-right ml-4 mb-4 sm:w-32 sm:h-32 sm:ml-6 sm:mb-6"
      aria-hidden
    />

    <div className="prose">
      <Heading className="font-display bg-gray-100 text-gray-600">About the Author</Heading>
      <p>My name is Phillip Luther. I go by Phil.</p>
      <p>
        I'm a <a href="#life_long_clarification">life-long</a>
        <sup>*</sup> software engineer and classically trained musician. I'm also the sole author
        behind posts on this blog, exploring music, code, and music and code.
      </p>
      <p>
        Current areas of interest include the web audio API, blockchain technology, and YouTube
        guitar channels. Ask me about 'em!
      </p>
    </div>

    <div className="flex items-center my-4 sm:my-6">
      <h3 className="font-display text-gray-500 mr-4 sm:mr-6">Connect With Me:</h3>
      <Social />
    </div>

    <p className="text-sm" id="life_long_clarification">
      <span>*</span>
      <span>
        I'm just over 40. Accounting for childhood and teenage buffoonery I'll translate "life long"
        to 25'ish years. For clarity.
      </span>
    </p>
  </Container>
);

export default AuthorCard;
