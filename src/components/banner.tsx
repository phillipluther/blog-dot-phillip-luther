import { GatsbyImage } from 'gatsby-plugin-image';
import * as React from 'react';

import Container from './container';
import Date from './date';

const Banner = ({
  as = 'header',
  className,
  headingLevel: Heading = 'h1',
  image,
  headline,
  date,
  summary,
  ...props
}: {
  as?: React.ElementType;
  className?: string;
  headingLevel?: React.ElementType;
  headline: string;
  date?: string;
  summary?: string;
  image?: {
    src: string;
    alt: string;
    credit?: string;
    creditLink?: string;
  };
}) => (
  <Container as={as} padY={false} className="mb-4 sm:mb-6">
    <Heading className="relative py-4 my-4 sm:py-6 sm:my-6 font-display text-5xl leading-tight sm:text-7xl sm:leading-extra-tight md:text-8xl md:leading-extra-tight before:block before:w-1/5 before:border-t-2 before:border-gray-300 before:absolute before:top-0 before:left-0 after:block after:w-1/5 after:border-t-2 after:border-gray-300 after:absolute after:bottom-0 after:left-0">
      {headline}
    </Heading>

    {date && (
      <p className="mb-4 sm:mb-5">
        <Date dateString={date} />
      </p>
    )}

    {summary && (
      <p className="prose sm:prose-lg md:prose-xl before:content-['tl;dr'] before:block before:text-gray-500 before:italic before:text-sm before:mb-1">
        {summary}
      </p>
    )}

    {image && (
      <figure className="relative" aria-hidden>
        <GatsbyImage image={image.src} alt={image.alt} className="md:aspect-video -z-10" />

        {(image.credit || image.creditLink) && (
          <figcaption>
            <cite className="absolute bottom-0 right-0 text-sm bg-gray-900 text-gray-400 px-2">
              Photo Credit:{' '}
              {image.creditLink ? (
                <a tabIndex={-1} href={image.creditLink} className="text-emerald-300">
                  {image.credit || image.creditLink}
                </a>
              ) : (
                <span>{image.credit}</span>
              )}
            </cite>
          </figcaption>
        )}
      </figure>
    )}
  </Container>
);

export default Banner;
