module.exports = {
  extends: '@nos-futurs/eslint-config/ts',
  rules: {
    // TODO: delete these lines after fixing the unsafe 'any' types
    '@typescript-eslint/no-unsafe-argument': 'warn',
    '@typescript-eslint/no-unsafe-assignment': 'warn',
    '@typescript-eslint/no-unsafe-call': 'warn',
    '@typescript-eslint/no-unsafe-member-access': 'warn',
    '@typescript-eslint/no-unsafe-return': 'warn',
    "no-useless-constructor": 'warn'
  },
};
