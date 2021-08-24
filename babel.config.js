module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage', // usage 按需引入, entry
        corejs: 3
      }
    ]
  ]
}
