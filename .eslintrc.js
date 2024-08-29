module.exports = {
  env: {
    browser: true, // 브라우저 전역 변수 사용 가능
    es2020: true, // ES2020 문법 활성화
    node: true, // Node.js 전역 변수 및 Node.js 스코핑 사용 가능
  },

  extends: [
    "eslint:recommended", // ESLint 추천 규칙
    "plugin:@typescript-eslint/recommended", // TypeScript 추천 규칙
    "plugin:react/recommended", // React 추천 규칙
    "plugin:react-hooks/recommended", // React Hooks 추천 규칙
  ],

  ignorePatterns: ["dist", "node_modules", "webpack.config.js"],

  parser: "@typescript-eslint/parser", // TypeScript 코드를 파싱하기 위한 파서

  settings: {
    react: {
      version: "detect", // 설치된 React 버전 자동 감지
    },
  },

  rules: {
    "react/react-in-jsx-scope": "off",
  },
};
