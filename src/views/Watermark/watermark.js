/*
 * @Author: MarioGo
 * @Date: 2021-06-03 10:09:56
 * @LastEditTime: 2021-09-26 15:17:35
 * @LastEditors: MarioGo
 * @Description: 水印添加方法
 * @FilePath: /vue-cli4-vant/src/views/Watermark/watermark.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
let setWatermark = (str1,str2,str3,str4) => {
  let id = '1.23452384164.123412415';

  if (document.getElementById(id) !== null) {
    document.body.removeChild(document.getElementById(id));
  }

  let can = document.createElement('canvas');
  // 设置canvas画布大小
  can.width = 250;
  can.height = 130;

  let cans = can.getContext('2d');
  cans.rotate((-20 * Math.PI) / 180); // 水印旋转角度
  cans.font = '15px Vedana';
  cans.fillStyle = '#aaa';
  cans.textAlign = 'left';
  cans.textBaseline = 'Middle';
  cans.fillText(str1, 10, 100)
  cans.fillText(str2, 20, 60)
  // cans.fillText(str1, can.width / 2, can.height); // 水印在画布的位置x，y轴
  cans.fillText(str3, can.width / 4, can.height + 22);
  cans.fillText(str4, 110, 80)

  let div = document.createElement('div');
  div.id = id;
  div.style.pointerEvents = 'none';
  div.style.top = '40px';
  div.style.left = '0px';
  div.style.opacity = '0.15';
  div.style.position = 'fixed';
  div.style.zIndex = '100000';
  div.style.width = document.documentElement.clientWidth + 'px';
  div.style.height = document.documentElement.clientHeight + 'px';
  div.style.background = 'url(' + can.toDataURL('image/png') + ') left top repeat';
  document.body.appendChild(div);
  return id;
};

// 添加水印方法
export const setWaterMark = (str1,str2,str3,str4) => {
  let id = setWatermark(str1,str2,str3,str4);
  if (document.getElementById(id) === null) {
    id = setWatermark(str1,str2,str3,str4);
  }
};

// 移除水印方法
export const removeWatermark = () => {
  let id = '1.23452384164.123412415';
  if (document.getElementById(id) !== null) {
    document.body.removeChild(document.getElementById(id));
  }
};
