const path = require('path')
const { updateCssLoader } = require('./config/cssLoader')
const { configureSvgLoader } = require('./config/svgLoader')

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'src')],
  },
  webpack(config) {
    config.infrastructureLogging = {
      level: 'verbose',
    }

    // Configure SVG loader
    configureSvgLoader(config)

    // Process CSS loaders
    const rules = config.module.rules
      .find(rule => typeof rule.oneOf === 'object')
      .oneOf.filter(rule => Array.isArray(rule.use))

    rules.forEach(updateCssLoader)

    // Disable cache
    config.cache = false

    return config
  },
}

module.exports = nextConfig
