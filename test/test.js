function matchPicLink() {
  var $match = $('#match');
  var mWidth = Math.floor($match.width());
  var mWidthHalf = Math.floor(mWidth / 2);
  $match.css({
    "width": mWidth,
//            "height": Math.floor(mWidth * 757 / 692) //按原宽高比缩放,height=mWidth* height0/width0
    "height": computeHeight(mWidth, 692, 757)
  });
  var mHeight = $match.height();
  var mHeightHalf = Math.floor(mHeight / 2);
  $(".poloShirt").css({
    "width": Math.floor(mHeight * 3 / 5),
    "background": "rgba(9,200,200,0.5)",
    "height": mHeightHalf
  });
  $(".poloShirt").click(function () {
    window.location.href = 'https://&0&商品id';
  });
  $(".vest").css({

    "width": mWidthHalf,
    "background": "rgba(9,200,200,0.5)",
    "height": mHeightHalf
  });
  $(".vest").click(function () {
    /** FIXME */
    window.location.href = 'https://&0&商品id';
  });
}

import {calculate_sum} from './index.js'

//================

/** BUG */
function show_sum() {
  alert('Result: ' + calculate_sum(5));
}






























