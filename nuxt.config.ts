export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['bootstrap/dist/css/bootstrap.css'],
  plugins: ['~/plugins/plyr.client.js', '~/plugins/bootstrap.js'],

  app: {
    head: {
      title: 'Simon Hallak portfolio',
      htmlAttrs: {
        lang: 'en', // Language of the document
        dir: 'ltr', // Text direction (use 'rtl' for right-to-left languages)
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },

        {
          name: 'description',
          content:
            'A showcase of my projects and work during my studies of media technology engineering at KTH.',
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://simonhallak.vercel.app/' },
        { property: 'og:title', content: 'My Portfolio' },
        {
          property: 'og:description',
          content: 'Explore my projects and work across media technology',
        },
        {
          property: 'og:image',
          content: '/images/android-chrome-192x192.png',
        }, // Replace with your image URL
        // The image should ideally be 1200x630 pixels
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
});
