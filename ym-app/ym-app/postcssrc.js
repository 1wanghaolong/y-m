module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-px2rem-exclude': {
      remUnit: 75,//1rem = 75px(iphone6的设计稿如此设置)
      exclude: /node_modules/i //忽略node_modules目录下的文件
    },
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {},
    'postcss-px2rem-exclude': {
      remUnit: 75,
      exclude: /node_modules|folder_name/i
    }
  }
}