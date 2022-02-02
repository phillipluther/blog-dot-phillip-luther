import VisuallyHidden from '@reach/visually-hidden';
import classnames from 'classnames';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import * as React from 'react';

import Date from '../date';
import TagList from '../tag-list';

export type PostType = {
  frontmatter: {
    title: string;
    date: string;
    cover: any;
    description: string;
    tags?: string[];
  };
  id: string;
  slug: string;
};

const PostList = ({
  className,
  posts,
  headingLevel: Heading = 'h3',
  ...props
}: {
  className?: string;
  headingLevel?: React.ElementType;
  posts: PostType[];
}) => (
  <ul className={classnames('flex', 'flex-wrap', 'sm:space-x-4', className)} {...props}>
    {posts.map(({ frontmatter, id, slug }) => {
      const postUrl = `/${slug}`;

      return (
        <li key={id} className="">
          <article>
            <header className="flex flex-wrap">
              <Heading className="w-full font-display text-gray-700 text-2xl mb-4 order-2">
                <Link to={postUrl}>{frontmatter.title}</Link>
              </Heading>
              <Date
                dateString={frontmatter.date}
                className="block w-full mb-4 text-sm text-gray-500 order-3"
              />

              {frontmatter.cover && (
                <Link to={postUrl} tabIndex={-1}>
                  <GatsbyImage
                    tabIndex={-1}
                    image={getImage(frontmatter.cover)}
                    alt=""
                    aria-hidden
                    className="w-full order-1 mb-4"
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
