/** @type {import('next').NextConfig} */
const withImages = require('next-images')

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
    swcMinify: false // it should be false by default 
  },
}
module.exports = nextConfig


// module.exports = withImages({
//   esModule: true,
// })