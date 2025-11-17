import js from '@eslint/js';

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        browser: true,
        node: true,
        es2021: true,
        jest: true,
        describe: true,
        it: true,
        test: true,
        expect: true,
        beforeEach: true,
        afterEach: true,
        beforeAll: true,
        afterAll: true,
        // ESLint по умолчанию не включает глобальные переменные Node.js. Нужно явно указать, что переменные module, require и др. существуют
        // module: true,
        // require: true
      }
    },
    rules: {
      // ваши правила
    }
  }
]; 