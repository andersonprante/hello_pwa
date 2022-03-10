const repo = 'hello_pwa'

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/'
}
