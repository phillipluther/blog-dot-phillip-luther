module.exports = {
  siteMetadata: {
    url: 'https://blog.phillipluther.com',
    name: "Frontend and Audio Engineering: Phillip Luther's Blog",
    description: 'Audio and Software Engineering on the Web',
    author: 'Phillip Luther',
    social: [
      {
        name: 'twitter',
        contact: '@phillipluther',
        label: '@phillipluther on Twitter',
        link: 'https://twitter.com/phillipluther',
      },
      {
        name: 'youtube',
        label: 'My YouTube Channel',
        link: 'https://youtube.com/phillipluther',
      },
      {
        name: 'github',
        label: 'My code repos on GitHub',
        link: 'https://github.com/phillipluther',
      },
      {
        name: 'email',
        contact: 'public@phillipluther.com',
        label: 'Email public@phillipluther.com',
        link: 'mailto:public@phillipluther.com',
      },
    ],
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/posts`,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 760,
            },
          },
        ],
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: "Frontend & Audio Engineering: Phillip Luther's Blog",
        short_name: 'blog.phillipluther.com',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#5C5E55',
        display: 'standalone',
        icon: 'src/images/blog-phillip-luther-badge.png',
      },
    },
  ],
};
