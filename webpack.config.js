const path = require('path');

module.exports = {
  entry: './src/renderer/scripts/index.js', // 리액트 진입점
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  target: 'electron-renderer', // 번들링된 코드가 렌더러 프로세스에서 작동
  module: {
    rules: [
      {
        test: /\.jsx?$/, // 정규식으로 js 혹은 jsx파일을 처리하게함
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
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