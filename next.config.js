const withTypescript = require('@zeit/next-typescript')

const withMDX = require('@zeit/next-mdx')({
  extension: /\.mdx?$/,
  options: {}
})

module.exports = withTypescript(
  withMDX({
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx']
  })
)
