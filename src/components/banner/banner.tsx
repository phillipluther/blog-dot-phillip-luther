import * as React from 'react';
import classnames from 'classnames';
import { GatsbyImage } from 'gatsby-plugin-image';
import Date from '../date';
import Heading from '../heading';
import * as styles from './banner.module.css';

const Banner = ({
  className,
  headingLevel = 'h1',
  image,
  headline,
  date,
  summary,
  ...props
}: {
  className?: string,
  headingLevel?: React.ElementType,
  headline: string,
  date?: string,
  summary?: string,
  image: {
    src: string,
    alt: string,
    credit?: string,
    creditLink?: string,
  },
}) => (
  <header className={classnames(styles.wrapper, className)} {...props}>
    <Heading as={headingLevel} size="xl" className={styles.heading}>{headline}</Heading>
    {date && <p><Date dateString={date} className={styles.date} /></p>}
    {summary && <p className={styles.summary}>{summary}</p>}

    <figure className={styles.image}>
      <GatsbyImage image={image.src} alt={image.alt} />
      {(image.credit || image.creditLink) && (
        <figcaption className={styles.credit}>
          <cite>
            Photo Credit:
            {' '}
            {image.creditLink ? (
              <a href={image.creditLink}>{image.credit || image.creditLink}</a>
            ) : (
              <span>{image.credit}</span>
            )}
          </cite>
        </figcaption>
      )}
    </figure>
  </header>
);

export default Banner;
