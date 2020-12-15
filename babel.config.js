/*
 * @Descripttion: vant按需加载
 * @Author: Mario
 * @Date: 2020-12-15 10:53:17
 * @LastEditors: Maroi
 * @LastEditTime: 2020-12-15 11:11:18
 */
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ]
}
