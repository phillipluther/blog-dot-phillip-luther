import * as React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import classnames from 'classnames';
import VisuallyHidden from '@reach/visually-hidden';
import Date from '../date';
import DisplayFont from '../display-font';
import Heading from '../heading';
import TagList from '../tag-list';
import * as styles from './post-list.module.css';

export type PostType = {
  frontmatter: {
    title: string,
    date: string,
    cover: any,
    description: string,
    tags?: string[],
  },
  id: string,
  slug: string,
};

export type PostListType = {
  className?: string,
  headingLevel?: React.ElementType,
  posts: PostType[],
};

const PostList = ({
  className,
  posts,
  headingLevel = 'h3',
  ...props
}: PostListType) => (
  <ul className={classnames(styles.list, className)} {...props}>
    {posts.map(({ frontmatter, id, slug }) => {
      const postUrl = `/${slug}`;

      return (
        <li className={styles.item} key={id}>
          <article>
            <header className={styles.header}>
              <Heading as={headingLevel} size="md" className={styles.title}>
                <Link to={postUrl} className={styles.titleLink}>{frontmatter.title}</Link>
              </Heading>
              <Date dateString={frontmatter.date} className={styles.date} />

              {frontmatter.cover && (
                <Link to={postUrl} tabIndex={-1}>
                  <GatsbyImage
                    tabIndex={-1}
                    image={getImage(frontmatter.cover)}
                    alt=""
                    aria-hidden
                    className={styles.cover}
                  />
                </Link>
              )}
            </header>

            <p>{frontmatter.description}</p>

            <footer>
              {frontmatter.tags && (
                <section aria-label="Related Topics">
                  <TagList tags={frontmatter.tags} />
                </section>
              )}
            </footer>
          </article>
        </li>
      );
    })}
  </ul>
);

export default PostList;
