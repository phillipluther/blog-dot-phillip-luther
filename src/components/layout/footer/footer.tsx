import VisuallyHidden from '@reach/visually-hidden';
import classnames from 'classnames';
import * as React from 'react';

import Container from '../../container';
import PrimaryNav from '../../primary-nav';
import Social from '../../social';

const Footer = ({ className, ...props }: { className?: string }) => (
  <footer className={classnames('bg-gray-800', 'text-gray-200', className)} {...props}>
    <VisuallyHidden as="h2">Page Footer</VisuallyHidden>

    <Container as="div">
      <section className="flex flex-wrap place-content-between md:place-content-start">
        <VisuallyHidden as="h3">Footer Navigation</VisuallyHidden>

        <PrimaryNav className="my-2 sm:my-3 mr-8 md:w-1/3" />
        <Social className="my-2 sm:my-3 md:w-1/3" />
      </section>

      <section className="my-2 sm:my-4 leading-6 text-sm max-w-screen-md prose prose-invert">
        <VisuallyHidden as="h3">Copyright Info and Disclaimers</VisuallyHidden>
        <p>
          The opinions and viewpoints expressed in any format on this site belong to me, Phillip
          Luther, and do not necessarily reflect the views or opinions of any associated
          organizations or corporate entities.
        </p>
        <p>All content is Copyright &copy; 2022 by Phillip Luther unless otherwise specified.</p>
      </section>
    </Container>
  </footer>
);

export default Footer;
