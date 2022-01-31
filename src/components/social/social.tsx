import * as React from 'react';
import classnames from 'classnames';
import { graphql, useStaticQuery } from 'gatsby';
import { FaTwitter, FaYoutube, FaGithub, FaEnvelope } from 'react-icons/fa';
import VisuallyHidden from '@reach/visually-hidden';

const iconMap = {
  twitter: FaTwitter,
  youtube: FaYoutube,
  github: FaGithub,
  email: FaEnvelope,
} as {
  [key: string]: React.ElementType,
};

const Social = ({ className, ...props }: { className?: string }) => {
  const { site } = useStaticQuery(query);

  return (
    <ul className={classnames(className)} {...props}>
      {site.siteMetadata.social.map(({ link, label, name }: {
        link: string,
        label: string,
        name: string,
      }) => {
        const Icon = iconMap[name];
        const Label = Icon ? VisuallyHidden : 'span';

        return (
          <li key={name}>
            <a href={link}>
              {Icon && <Icon aria-hidden="true" />}
              <Label>{label}</Label>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Social;

const query = graphql`
  query Social {
    site {
      siteMetadata {
        siteName: name
        social {
          name
          link
          label
        }
      }
    }
  }
`;
