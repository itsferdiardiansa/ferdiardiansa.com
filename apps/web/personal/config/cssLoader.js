const { getShortHash } = require('./hashUtils')

const updateCssLoader = rule => {
  rule.use.forEach(moduleLoader => {
    if (
      moduleLoader.loader?.includes('/css-loader') &&
      typeof moduleLoader.options?.modules === 'object'
    ) {
      // Define custom `getLocalIdent` function
      moduleLoader.options.modules.getLocalIdent = (
        { resourcePath },
        _,
        localName
      ) => {
        if (process.env.NODE_ENV === 'development') {
          // Descriptive class names in development
          return `${localName}--${getShortHash(resourcePath, 2)}`
        }
        // Short hash names in production
        const hash = getShortHash(resourcePath + localName, 2) // Short hash of 2 letters
        return `${hash}` // Example: "ab", "cd"
      }
    }
  })
}

module.exports = { updateCssLoader }
