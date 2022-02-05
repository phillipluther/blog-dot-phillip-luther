import VisuallyHidden from '@reach/visually-hidden';
import classnames from 'classnames';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import * as React from 'react';

import Date from './date';
import TagList from './tag-list';

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
  <ul className={classnames(className)} {...props}>
    {posts.map(({ frontmatter, id, slug }) => {
      const postUrl = `/${slug}`;

      return (
        <li
          key={id}
          className="pt-4 mt-4 first:mt-0 first:pt-0 relative sm:mb-6 sm:py-3 sm:first:pt-3 sm:pl-48"
        >
          <article className="sm:ml-6">
            <header className="flex flex-wrap">
              <Heading className="w-full font-display text-2xl mb-4 order-2 md:text-3xl">
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
                    className="w-full h-56 order-1 mb-4 sm:absolute sm:top-0 sm:left-0 sm:w-48 sm:h-full shadow"
                  />
                </Link>
              )}
            </header>

            <p>{frontmatter.description}</p>

            <footer className="mt-4 md:mt-6">
              <p className="mb-4 md:mb-6">
                <Link to={postUrl} className="text-emerald-600 hover:text-emerald-800 font-bold">
                  Read More &raquo;
                  <VisuallyHidden>: {frontmatter.title}</VisuallyHidden>
                </Link>
              </p>
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
