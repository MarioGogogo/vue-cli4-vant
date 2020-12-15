/*
 * @Descripttion: 
 * @Author: Mario
 * @Date: 2020-12-15 10:53:17
 * @LastEditors: Maroi
 * @LastEditTime: 2020-12-15 16:37:00
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
