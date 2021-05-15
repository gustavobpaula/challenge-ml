module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@models': './src/models',
          '@controllers': './src/controllers',
          '@routes': './src/routes',
          '@utils': './src/utils',
        },
      },
    ],
  ],
}
