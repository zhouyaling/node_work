var picArr = [
    "images/2.png",
    "images/aa.png",
    "images/iocn_lightning fou.png",
    "images/iocn_lightning thir.png",
    "images/map.png",
    "images/z-circle_citydata.png",
    "images/z-circle_property.png",
    "images/z-energy.png",
    "images/z-frame.png",
    "images/z-frame_citydata.png",
    "images/z-frame_spread.png",
    "images/z-frame_sum.png",
    "images/z-frame_times.png",
    "images/z-frame_white.png",
    "images/z-frame_white1.png",
    "images/z-Group@1x.png",
    "images/z-icon_blueproprety.png",
    "images/z-icon_bluewhite.png",
    "images/z-icon_chat.png",
    "images/z-icon_count.png",
    "images/z-icon_day.png",
    "images/z-icon_chat.png",
    "images/z-icon_day.png",
    "images/z-icon_map.png",
    "images/z-icon_month.png",
    "images/z-icon_reply.png",
    "images/z-icon_search.png",
    "images/z-icon_succ.png",
    "images/z-icon_sum.png",
    "images/z-icon_time.png",
    "images/z-icon_user.png",
    "images/z-icon_week.png",
    "images/z-icon_white.png",
    "images/z-img.png",
    "images/z-img1.png",
    "images/z-img4.png",
    "images/z-img7.png",
    "images/z-iocn_city.png",
    "images/z-iocn_home.png",
    "images/z-iocn_life.png",
    "images/z-iocn_lightning sec.png",
    "images/z-iocn_property.png",
    "images/z-line_citydata.png",
    "images/z-map.png",
    "images/z-ranking.png",
    "images/z-rectangle.png"
]
var img = new Image();
var sum = picArr.length;
var now = 0;
loadImg();
function loadImg() {
    img.src = picArr[now];

    function go() {
        now++;

        $('.loading p').text(parseInt(now / sum * 100) + "%");
        if (now < picArr.length) {
            loadImg()
        } else {
            $('.loading').addClass('hide');
            $('.Z-box').css({opacity: 1})
        }
    }

    img.onerror = go;
    img.onload = go;
}
