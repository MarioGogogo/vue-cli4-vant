/*
 * @Descripttion: vant按需加载add
 * @Author: Mario
 * @Date: 2020-12-15 10:53:17
 * @LastEditors: MarioGo
 * @LastEditTime: 2021-10-29 23:12:57
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
