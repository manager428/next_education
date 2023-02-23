const withPlugins = require('next-compose-plugins')
const withSvgr = require('next-svgr')

module.exports = withPlugins([
  withSvgr({
    webpack: (config, options) =>
      // // Fixes npm packages that depend on `fs` module
      // // eslint-disable-next-line no-param-reassign
      // config.node = {
      //   fs: 'empty',
      // }

      {
        // Generate disallow all robots.txt and add to /public folder in preview
        if (
          options.isServer &&
          process.env.NEXT_PUBLIC_VERCEL_ENV !== 'production'
        ) {
          // eslint-disable-next-line global-require
          require('./scripts/generate-robotstxt-preview.js')
        }

        if (
          options.isServer &&
          process.env.NEXT_PUBLIC_VERCEL_ENV === 'production'
        ) {
          // eslint-disable-next-line global-require
          require('./scripts/generate-robotstxt-production.js')
        }

        return config
      },
  }),
  {
    images: {
      // disableStaticImages: true,
      domains: [
        's3.eu-central-1.amazonaws.com',
        'staging-api.idialogue.com',
        'api.idialogue.com',
        'cdn.idialogue.io',
        'cdn-novakid.idialogue.io',
        'idialogue.back',
        'novakid-api.idialogue.com',
        'https://api.idialogue.com',
        'https://staging-api.idialogue.com',
        'http://idialogue.localhost',
        'docker.for.mac.localhost',
        'http://docker.for.mac.localhost',
      ],
    },
  },
])
