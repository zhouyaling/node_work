// 天启大数据动画
var picArr = [
    "images/z-map-boxx2.png",
    "images/z-map.png",
    "images/z-mapx2.png",
    "images/z-frame_sum.png",
    "images/square2.png",
    "images/hexagonx2.png",
    "images/back-smallx2.png",
    "images/circle-big.png",
    "images/c-titlex2.png",
    "images/circle1.png",
    "images/circle2.png",
    "images/bar-shortx2.png",
    "images/user-active-icon.png",
    "images/user-icon.png"
]
var img = new Image();
var sum = picArr.length;
var now = 0;

function loadStartAnimate() {
    img.src = picArr[now];

    function go() {
        now++;

        $('.loading p').text(parseInt(now / sum * 100) + "%");
        if (now < picArr.length) {
            loadStartAnimate()
        } else {
            $('.loading').addClass('hide');
            $('#app').css({ opacity: 1 })
        }
    }

    img.onerror = go;
    img.onload = go;
}