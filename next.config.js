const withTypescript = require('@zeit/next-typescript')
const withCSS = require('@zeit/next-css')
const withMDX = require('@zeit/next-mdx')({
  extension: /\.mdx?$/,
  options: {}
})

module.exports = withCSS(
  withTypescript(
    withMDX({
      pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx']
    })
  )
)
