/*
 * @Descripttion: rem 适配 html 字跟字体设置为 100px
 * @Author: Mario
 * @Date: 2020-12-15 10:53:17
 * @LastEditors: Maroi
 * @LastEditTime: 2020-12-15 11:16:29
 */

function initRem () {
  const cale = window.screen.availWidth > 750 ? 2 : window.screen.availWidth / 375
  window.document.documentElement.style.fontSize = `${100 * cale}px`
}
initRem()
window.addEventListener('resize', function () {
  initRem()
  if (
    document.activeElement.tagName === 'INPUT' ||
    document.activeElement.tagName === 'TEXTAREA'
  ) {
    window.setTimeout(function () {
      if ('scrollIntoView' in document.activeElement) {
        document.activeElement.scrollIntoView(false)
      } else {
        document.activeElement.scrollIntoViewIfNeeded(false)
      }
    }, 0)
  }
})

document.addEventListener('focusout', () => {
  setTimeout(() => {
    const height = document.documentElement.scrollTop || document.body.scrollTop
    window.scrollTo(0, height + 1)
  }, 20)
})
