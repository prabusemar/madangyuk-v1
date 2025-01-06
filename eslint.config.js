const jsRules = require('@eslint/js');

module.exports = [
    jsRules.configs.recommended,
    {
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
        },
        rules: {
            semi: ['error', 'always'],
            quotes: ['error', 'single'],
            indent: ['error', 2],
            'comma-spacing': ['error', { before: false, after: true }],
            'space-before-function-paren': ['error', 'always'],
            'arrow-parens': ['error', 'always'],
            'no-trailing-spaces': 'error',
            'object-curly-spacing': ['error', 'always'],
            'array-bracket-spacing': ['error', 'never'],
            'no-alert': 'warn',
            'no-console': 'off',
            'class-methods-use-this': 'off',
            'no-param-reassign': 'off',
            'consistent-return': 'off',
        },
    },
];
