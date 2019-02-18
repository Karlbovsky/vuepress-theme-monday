module.exports = {
  base: '/',
  dest: 'dist',
  title: 'Vuepress Blog',
  description: 'Theme-First. Just playing around',
  theme: 'first',
  themeConfig: {
    nav: [
      { path: '/', name: 'Home', icon: 'mdi mdi-home-circle mdi-24px' },
      {
        path: '/guide',
        name: 'Guide',
        icon: 'mdi mdi-television-guide mdi-24px'
      }
    ],
    social: [
      {
        name: 'Twitter',
        url: 'https://twitter.com/',
        icon: 'mdi mdi-twitter-circle mdi-24px'
      },
      {
        name: 'Instagram',
        url: 'https://www.instagram.com/',
        icon: 'mdi mdi-instagram mdi-24px'
      },
      {
        name: 'Facebook',
        url: 'https://www.facebook.com/',
        icon: 'mdi mdi-facebook-box mdi-24px'
      }
    ]
  },
  head: [
    [
      'link',
      {
        rel: 'stylesheet',
        href:
          'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css',
        integrity:
          'sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm',
        crossorigin: 'anonymous'
      }
    ],
    [
      'script',
      {
        src: 'https://code.jquery.com/jquery-3.2.1.slim.min.js',
        integrity:
          'sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN',
        crossorigin: 'anonymous'
      }
    ],
    [
      'script',
      {
        src:
          'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js',
        integrity:
          'sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q',
        crossorigin: 'anonymous'
      }
    ],
    [
      'script',
      {
        src:
          'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js',
        integrity:
          'sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl',
        crossorigin: 'anonymous'
      }
    ],
    [
      'link',
      {
        rel: 'stylesheet',
        href:
          'https://cdn.materialdesignicons.com/3.4.93/css/materialdesignicons.min.css'
      }
    ],
    [
      'script',
      {
        src:
          'https://identity.netlify.com/v1/netlify-identity-widget.js'
      }
    ]
  ],
  plugins: [
    '@vuepress/register-components',
    '@vuepress/active-header-links',
    '@vuepress/back-to-top'
  ]
}
