const path = require('path');

module.exports = {
  entry: './src/renderer/scripts/index.js', // 리액트 진입점
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    globalObject: "this", // 번들된 코드가 window 객체 말고 this 를 참조하도록 변경
  },
  target: 'electron-renderer', // 번들링된 코드가 렌더러 프로세스에서 작동
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname), // 최상단 폴더를 @로 설정
    },
  },
  devtool: 'source-map',
};