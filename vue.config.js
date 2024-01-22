const webpack = require("webpack");
module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false,
      }),
    ],
  },
  transpileDependencies: [
    'axios',
  ],
  devServer: {
    allowedHosts: 'all',
    webSocketServer: false, // 이 부분을 수정했습니다
    overlay: false // ESLint 경고를 끄기 위한 옵션
  },
};


// const webpack = require("webpack");
// module.exports = {
//   configureWebpack: {
//     plugins: [
//       new webpack.DefinePlugin({
//         __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false,
//       }),
//     ],
//   },
//   transpileDependencies: [
//     'axios',
//   ],
//   devServer: {
//     allowedHosts: 'all',
//     ws: false // 여기에 ws 설정을 false로 추가했습니다.
//   },
// };
