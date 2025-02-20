module.exports = {
  extends: ['@commitlint/config-conventional'],
  parserPreset: {
    parserOpts: {
      headerPattern: /^(?:\[(\w+-\d+)\]\s)(\w+):\s(.+)$/,
      headerCorrespondence: ['jira', 'type', 'subject'],
    },
  },
  rules: {
    'type-empty': [2, 'never'],
    'subject-empty': [2, 'never'],
    'type-case': [2, 'always', 'lower-case'],
    'subject-case': [0],
  },
}
