import classnames from 'classnames';
import { Link } from 'gatsby';
import * as React from 'react';
import slugify from 'slugify';

const TagList = ({ tags, className, ...props }: {
  tags: string[];
  className?: string;
}) => (
  <ul className={classnames(className)} {...props}>
    {tags.map((tagName) => (
      <li key={tagName}>
        <Link to={`/tags/${slugify(tagName)}`}>
          {tagName}
        </Link>
      </li>
    ))}
  </ul>
);

export default TagList;
