import VisuallyHidden from '@reach/visually-hidden';
import classnames from 'classnames';
import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';
import { FaEnvelope, FaGithub, FaTwitter, FaYoutube } from 'react-icons/fa';

const iconMap = {
  twitter: FaTwitter,
  youtube: FaYoutube,
  github: FaGithub,
  email: FaEnvelope,
} as {
  [key: string]: React.ElementType;
};

const Social = ({ className, ...props }: { className?: string }) => {
  const { site } = useStaticQuery(query);

  return (
    <ul className={classnames('flex', '-ml-2', 'lg:-ml-3', 'text-3xl', className)} {...props}>
      {site.siteMetadata.social.map(
        ({ link, label, name }: { link: string; label: string; name: string }) => {
          const Icon = iconMap[name];
          const Label = Icon ? VisuallyHidden : 'span';

          return (
            <li key={name}>
              <a href={link} className="flex items-center h-12 px-2 md:px-3">
                {Icon && <Icon aria-hidden="true" />}
                <Label>{label}</Label>
              </a>
            </li>
          );
        },
      )}
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
