const { createHash } = require('node:crypto')

// Function to generate deterministic short hashes with letters only
const getShortHash = (source, length) => {
  const hash = createHash('sha256')
    .update(source)
    .digest('base64')
    .replace(/[^a-zA-Z]/g, '') // Remove non-alphabet characters
  return hash.slice(0, length)
}

module.exports = { getShortHash }
