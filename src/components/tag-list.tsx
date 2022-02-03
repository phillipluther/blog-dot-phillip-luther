import classnames from 'classnames';
import { Link } from 'gatsby';
import * as React from 'react';
import slugify from 'slugify';

const TagList = ({ tags, className, ...props }: { tags: string[]; className?: string }) => (
  <ul className={classnames('flex', 'flex-wrap', 'mt-4', 'md:mt-6', className)} {...props}>
    {tags.map((tagName) => (
      <li key={tagName}>
        <Link
          to={`/tags/${slugify(tagName)}`}
          className="block shadow px-4 py-2 bg-gray-100 text-sm mr-2"
        >
          {tagName}
        </Link>
      </li>
    ))}
  </ul>
);

export default TagList;
