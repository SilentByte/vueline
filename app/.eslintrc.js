module.exports = {
    extends: 'standard',
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module',
    },
    env: {
        browser: true,
    },
    plugins: [
        'html',
    ],
    rules: {
        'arrow-parens': 0,
        'generator-star-spacing': 0,
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,

        'no-unused-vars': ['warn', 'all'],
        'quotes': ['warn', 'single'],
        'comma-dangle': ['warn', 'always-multiline'],
        'curly': ['warn', 'all'],
        'semi': ['warn', 'always'],
        'indent': ['warn', 4, {'MemberExpression': 1}],
        'no-multiple-empty-lines': ['warn', {'max': 2}],
        'space-before-function-paren': ['error', 'never'],
        'keyword-spacing': ['error', {
            'overrides': {
                'if': {'after': false},
                'for': {'after': false},
                'while': {'after': false},
                'catch': {'after': false},
            },
        }],
        'brace-style': ['warn', 'stroustrup'],
        'no-empty-pattern': ['warn'],
        'operator-linebreak': ['warn', 'before'],
    },
};
