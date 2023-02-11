/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  // see more about this here: https://nextjs.org/docs/advanced-features/compiler
  compiler: {
    styledComponents: true
  },
}

module.exports = nextConfig
