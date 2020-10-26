module.exports = {
  cacheDirectory: '<rootDir>/.jest-cache',
  clearMocks: true,
  moduleNameMapper: {
    '\\.(css|scss)$': '<rootDir>/src/utils/tests/setup/styleMock.js',
    'pdfjs-dist/build/pdf.js': '<rootDir>/src/utils/tests/__mocks__/pdfjs.ts',
    'pdfjs-dist/web/pdf_viewer':
      '<rootDir>/src/utils/tests/__mocks__/pdfjsViewer.ts',
  },
  resetModules: true,
  roots: ['<rootDir>/src/'],
  setupFiles: ['<rootDir>/src/utils/tests/setup/'],
  setupFilesAfterEnv: ['<rootDir>/src/utils/tests/setupAfterEnv/'],
  // Tests are files in a "__tests__" directory ending in ".js", ".jsx", ".ts" or ".tsx" whose file name
  // is anything except "helpers".
  testRegex: '/__tests__/(?!(?:helpers)).*\\.[jt]sx?$',
}
