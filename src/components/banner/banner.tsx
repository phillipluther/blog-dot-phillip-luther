import classnames from 'classnames';
import { GatsbyImage } from 'gatsby-plugin-image';
import * as React from 'react';

import Date from '../date';
import Heading from '../heading';

const Banner = ({
  className,
  headingLevel = 'h1',
  image,
  headline,
  date,
  summary,
  ...props
}: {
  className?: string;
  headingLevel?: React.ElementType;
  headline: string;
  date?: string;
  summary?: string;
  image: {
    src: string;
    alt: string;
    credit?: string;
    creditLink?: string;
  };
}) => (
  <header className={classnames(className)} {...props}>
    <figure aria-hidden>
      <GatsbyImage image={image.src} alt={image.alt} />
      {(image.credit || image.creditLink) && (
        <figcaption>
          <cite>
            Photo Credit:{' '}
            {image.creditLink ? (
              <a tabIndex={-1} href={image.creditLink}>
                {image.credit || image.creditLink}
              </a>
            ) : (
              <span>{image.credit}</span>
            )}
          </cite>
        </figcaption>
      )}
    </figure>

    <div>
      <Heading as={headingLevel} size="xl" flush>
        {headline}
      </Heading>
      {date && (
        <p>
          <Date dateString={date} />
        </p>
      )}
      {summary && <p>{summary}</p>}
    </div>
  </header>
);

export default Banner;
