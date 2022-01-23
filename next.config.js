const debug = process.env.NODE_ENV !== 'production'

module.exports = {
  reactStrictMode: true,
  assetPrefix: !debug ? '/next-play-app-01/' : '',  // match gh-page asset url
  basePath: !debug ? '/next-play-app-01' : '',      // match gh-page link url
}
