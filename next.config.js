/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true
  },
  webpack: (config, { webpack }) => {
    return {
      ...config,
      module: {
        ...config.module,
        rules: [
          {
            test: /\.svg$/,
            issuer: /\.tsx?$/,
            use: ['@svgr/webpack'],
          },
          {
            test: /\.(glsl|vs|fs|vert|frag)$/,
            exclude: /node_modules/,
            use: ['raw-loader', 'glslify-loader'],
          },
          ...config.module.rules,
        ]
      }
    }
  }
}

module.exports = nextConfig
