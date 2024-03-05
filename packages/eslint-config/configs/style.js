module.exports = {
  '@stylistic/array-bracket-newline': ['error', 'consistent'],
  '@stylistic/array-bracket-spacing': ['error', 'never', {
    arraysInArrays: true,
    objectsInArrays: false,
    singleValue: true
  }],
  '@stylistic/array-element-newline': ['error', 'consistent'],
  '@stylistic/arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
  '@stylistic/arrow-spacing': 'error',
  '@stylistic/block-spacing': 'error',
  '@stylistic/brace-style': ['error', '1tbs', {
    allowSingleLine: true
  }],
  '@stylistic/comma-dangle': ['error', 'only-multiline'],
  '@stylistic/comma-spacing': 'error',
  '@stylistic/comma-style': ['error', 'last'],
  '@stylistic/computed-property-spacing': ['error', 'never', { enforceForClassMembers: true }],
  '@stylistic/dot-location': ['error', 'property'],
  '@stylistic/eol-last': ['error', 'always'],
  '@stylistic/function-call-argument-newline': ['error', 'consistent'],
  '@stylistic/function-call-spacing': 'error',
  '@stylistic/function-paren-newline': ['error', 'consistent'],
  '@stylistic/generator-star-spacing': ['error', 'after'],
  '@stylistic/implicit-arrow-linebreak': ['error', 'beside'],
  '@stylistic/indent': ['error', 2],
  '@stylistic/indent-binary-ops': ['error', 2],
  '@stylistic/key-spacing': ['error', {
    multiLine: {
      afterColon: true,
      beforeColon: false,
      mode: 'strict'
    },
    singleLine: {
      afterColon: true,
      beforeColon: false,
      mode: 'strict'
    }
  }],
  '@stylistic/keyword-spacing': 'error',
  '@stylistic/linebreak-style': ['error', 'unix'],
  '@stylistic/lines-around-comment': ['error', {
    afterHashbangComment: true,
    allowClassStart: true,
    beforeBlockComment: true,
    beforeLineComment: true
  }],
  '@stylistic/lines-between-class-members': ['error', 'always'],
  '@stylistic/max-len': ['error', {
    code: 100,
    comments: 80,
    ignoreTrailingComments: true,
    ignoreUrls: true,
    tabWidth: 2
  }],
  '@stylistic/max-statements-per-line': ['error', { max: 2 }],
  '@stylistic/member-delimiter-style': ['error', {
    multiline: {
      delimiter: 'comma',
      requireLast: true
    },
    multilineDetection: 'brackets',
    singleline: {
      delimiter: 'comma',
      requireLast: false
    }
  }],
  '@stylistic/multiline-ternary': ['error', 'always'],
  '@stylistic/new-parens': ['error', 'always'],
  '@stylistic/newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }],
  '@stylistic/no-confusing-arrow': ['error', {
    allowParens: true,
    onlyOneSimpleParam: true
  }],
  '@stylistic/no-extra-parens': ['error', 'all', {
    nestedBinaryExpressions: false
  }],
  '@stylistic/no-extra-semi': 'error',
  '@stylistic/no-floating-decimal': 'error',
  '@stylistic/no-mixed-operators': 'error',
  '@stylistic/no-mixed-spaces-and-tabs': 'error',
  '@stylistic/no-multi-spaces': 'error',
  '@stylistic/no-multiple-empty-lines': ['error', {
    max: 1,
    maxEOF: 1
  }],
  '@stylistic/no-tabs': ['error', { allowIndentationTabs: true }],
  '@stylistic/no-trailing-spaces': ['error', {
    ignoreComments: false,
    skipBlankLines: false
  }],
  '@stylistic/no-whitespace-before-property': 'error',
  '@stylistic/nonblock-statement-body-position': ['error', 'below'],
  '@stylistic/object-curly-newline': ['error', {
    consistent: true,
    minProperties: 3
  }],
  '@stylistic/object-curly-spacing': ['error', 'always', {
    arraysInObjects: false,
    objectsInObjects: false
  }],
  '@stylistic/one-var-declaration-per-line': ['error', 'initializations'],
  '@stylistic/operator-linebreak': ['error', 'after', {
    overrides: {
      ':': 'before',
      '?': 'before'
    }
  }],
  '@stylistic/padded-blocks': ['error', 'never'],
  '@stylistic/quote-props': ['error', 'consistent-as-needed'],
  '@stylistic/quotes': ['error', 'single', {
    allowTemplateLiterals: true,
    avoidEscape: true
  }],
  '@stylistic/rest-spread-spacing': ['error', 'never'],
  '@stylistic/semi': ['error', 'always'],
  '@stylistic/semi-spacing': 'error',
  '@stylistic/semi-style': 'error',
  '@stylistic/space-before-blocks': 'error',
  '@stylistic/space-before-function-paren': ['error', 'never'],
  '@stylistic/space-in-parens': ['error', 'never'],
  '@stylistic/switch-colon-spacing': 'error',
  '@stylistic/template-curly-spacing': 'error',
  '@stylistic/template-tag-spacing': ['error', 'always'],
  '@stylistic/type-annotation-spacing': ['error', {
    after: true,
    before: false,
    overrides: {
      arrow: {
        after: true,
        before: true
      }
    }
  }],
  '@stylistic/type-generic-spacing': 'error',
  '@stylistic/type-named-tuple-spacing': 'error',
  '@stylistic/wrap-regex': 'error',
  '@stylistic/yield-star-spacing': ['error', 'after']
};

