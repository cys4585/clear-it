module.exports = {
  env: {
    browser: true, // 브라우저 전역 변수 사용 가능
    es2020: true, // ES2020 문법 활성화
    node: true, // Node.js 전역 변수 및 Node.js 스코핑 사용 가능
  },

  extends: [
    'eslint:recommended', // ESLint 추천 규칙
    'plugin:@typescript-eslint/recommended', // TypeScript 추천 규칙
    'plugin:react/recommended', // React 추천 규칙
    'plugin:react-hooks/recommended', // React Hooks 추천 규칙
    'prettier', // Prettier 설정과 충돌할 수 있는 ESLint 규칙을 비활성화
  ],

  ignorePatterns: ['dist', 'node_modules', 'webpack.config.js'],

  parser: '@typescript-eslint/parser', // TypeScript 코드를 파싱하기 위한 파서

  settings: {
    react: {
      version: 'detect', // 설치된 React 버전 자동 감지
    },
  },

  rules: {
    'react/react-in-jsx-scope': 'off', // React 17 이상에서 JSX를 사용할 때 React를 import 하지 않아도 되도록 하는 규칙
  },
};
