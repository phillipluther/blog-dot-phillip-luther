import classnames from 'classnames';
import { Link } from 'gatsby';
import * as React from 'react';
import slugify from 'slugify';

import * as styles from './tag-list.module.css';

export type TagListProps = {
  tags: string[];
  className?: string;
};

const TagList = ({ tags, className, ...props }: TagListProps) => (
  <ul className={classnames(styles.list, className)} {...props}>
    {tags.map((tagName) => (
      <li key={tagName}>
        <Link to={`/tags/${slugify(tagName)}`} className={styles.link}>
          {tagName}
        </Link>
      </li>
    ))}
  </ul>
);

export default TagList;
