const path = require('path')
module.exports = {
  name: 'vuepress-theme-first',
  layoutDir: 'layouts',
  plugins: [
    [
      '@vuepress/register-components',
      {
        componentsDir: [path.resolve(__dirname, 'components')]
      }
    ]
  ]
}
