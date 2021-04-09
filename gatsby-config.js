module.exports = {
  siteMetadata: {
    title: 'Cura Salute',
    description: 'modelo inicial cura salute',
    siteUrl: 'https://curasalute.com.br',
  },
  plugins: [
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        url: 'http://wordpress.curasalute.com.br/graphql',
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-gatsby-cloud',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'G-3D12SY1GXC',
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
  ],
};
