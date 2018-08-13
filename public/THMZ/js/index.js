$(document).ready(function () {

    function getNowFormatDate() {
        var date = new Date();
        var seperator1 = "-";
        var seperator2 = ":";
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate +
            " " + date.getHours() + seperator2 + date.getMinutes() +
            seperator2 + date.getSeconds();
        return currentdate;
    }

    function randnum(x, y) {
        var rand = parseInt(Math.random() * (x - y + 1) + y);
        return rand;
    }

    function xungeng() {

        var xungengnumber = randnum(3, 1);

        $('.dianwei').css("display", "none");
        $('.xungenghead1').css("display", "none");
        $('.xungenghead2').css("display", "none");
        $('.xungenghead3').css("display", "none");
        $(".patrol-district2").css("display", "none");
        $(".patrol-district2").eq(0).css("display", "block");
        $(".patrol-district2").eq(0).css("left", "0px");
        if (xungengnumber === 1) {
            $('.dianwei').eq(0).css("display", "block");
            $('.xungenghead1').css("display", "block");
            $(".patrol-district2").eq(1).css("display", "block");
            $(".patrol-district2").eq(1).css("left", "280px");
            $(".patrol-district2").eq(2).css("display", "block");
            $(".patrol-district2").eq(2).css("left", "280px");

        } else if (xungengnumber === 2) {
            $('.xungenghead1').css("display", "block");
            $('.xungenghead2').css("display", "block");
            $('.dianwei').eq(0).css("display", "block");
            $('.dianwei').eq(1).css("display", "block");
            $(".patrol-district2").eq(1).css("display", "block");
            $(".patrol-district2").eq(1).css("left", "280px");
            $(".patrol-district2").eq(2).css("display", "block");
            $(".patrol-district2").eq(2).css("left", "280px");
        } else {
            $('.xungenghead1').css("display", "block");
            $('.xungenghead2').css("display", "block");
            $('.xungenghead3').css("display", "block");
            $('.dianwei').css("display", "block");
            $(".patrol-district2").eq(1).css("display", "block");
            $(".patrol-district2").eq(1).css("left", "280px");
            $(".patrol-district2").eq(2).css("display", "block");
            $(".patrol-district2").eq(2).css("left", "280px");
            $(".patrol-district2").eq(3).css("display", "block");
            $(".patrol-district2").eq(3).css("left", "280px");
        }
        var current = $("#xungpath .icon-point-blue");
        var next = $(current).next();
        $(current).removeClass("icon-point-blue");
        if (next === undefined || next.length === 0) {
            next = $("#xungpath").children("span:first-child");
            $("#xungpath").children(".icon-point-gray").each(function () {
                $(this).addClass("icon-point").removeClass("icon-point-gray");
            })
        }

        $(next).addClass("icon-point-blue");
        var data = parseInt($(current).attr("data-value")) + 1;

        $("#dianwei1").html(data + "号点位");
        $("#time1").html(getNowFormatDate());
        if (xungengnumber === 2) {
            var current1 = $("#xungpath1 .icon-point-blue");
            var next1 = $(current1).next();
            $(current1).removeClass("icon-point-blue");

            if (next1 === undefined || next1.length === 0) {
                next1 = $("#xungpath1").children("span:first-child");
                $("#xungpath1").children(".icon-point-gray").each(function () {
                    $(this).addClass("icon-point").removeClass("icon-point-gray");
                })
            }

            $(next1).addClass("icon-point-blue");
            var data1 = parseInt($(current1).attr("data-value")) + 1;
            $("#dianwei2").html(data1 + "号点位");
            $("#time2").html(getNowFormatDate());

        }
        if (xungengnumber === 3) {
            var current1 = $("#xungpath1 .icon-point-blue");
            var next1 = $(current1).next();
            $(current1).removeClass("icon-point-blue");

            if (next1 === undefined || next1.length === 0) {
                next1 = $("#xungpath1").children("span:first-child");
                $("#xungpath1").children(".icon-point-gray").each(function () {
                    $(this).addClass("icon-point").removeClass("icon-point-gray");
                })
            }

            $(next1).addClass("icon-point-blue");
            var data1 = parseInt($(current1).attr("data-value")) + 1;
            $("#dianwei2").html(data1 + "号点位");
            $("#time2").html(getNowFormatDate());
            var current2 = $("#xungpath2 .icon-point-blue");
            var next2 = $(current2).next();
            $(current2).removeClass("icon-point-blue");
            if (next2 === undefined || next2.length === 0) {
                next2 = $("#xungpath2").children("span:first-child");
                $("#xungpath2").children(".icon-point-gray").each(function () {
                    $(this).addClass("icon-point").removeClass("icon-point-gray");
                })
            }


            $(next2).addClass("icon-point-blue");
            var data2 = parseInt($(current2).attr("data-value")) + 1;
            $("#dianwei3").html(data2 + "号点位");
            $("#time3").html(getNowFormatDate());

            $(".dianwei").each(function () {
                $(this).addClass("hightlight-bg");

            });
        }
           setTimeout(function () {
               movebrand(xungengnumber);
           }, 3000);

           setTimeout(clearbg, 5000);


    }

    setInterval(xungeng, 40000);
    function clearbg() {
        $(".dianwei").removeClass("hightlight-bg");

    }

    function movebrand(index) {
        var img1 = $(".patrol-district2").eq(0);
        var img2 = $(".patrol-district2").eq(1);
        var img3 = $(".patrol-district2").eq(2);
        var img4 = $(".patrol-district2").eq(3);
        if (index === 1) {
            img1.animate({
                left: '-280px',
            }, 2000, function () {

            });
            img2.animate({
                left: '0px',
            }, 2000, function () {

            });
        }
        if (index === 2) {
            img1.animate({
                left: '-280px',
            }, 2000, function () {

            });
            img2.animate({
                left: '0px',
            }, 2000, function () {

                setTimeout(function () {
                    img2.animate({
                        left: '-280px',
                    }, 2000, function () {

                    });
                    img3.animate({
                        left: '0px',
                    }, 2000, function () {

                    });
                }, 2000);

            });
        }
        if (index === 3) {
            img1.animate({
                left: '-280px',
            }, 2000, function () {

            });
            img2.animate({
                left: '0px',
            }, 2000, function () {
                setTimeout(function () {
                    img2.animate({
                        left: '-280px',
                    }, 2000, function () {

                    });
                    img3.animate({
                        left: '0px',
                    }, 2000, function () {

                        setTimeout(function () {
                            img3.animate({
                                left: '-280px',
                            }, 2000, function () {

                            });
                            img4.animate({
                                left: '0px',
                            }, 2000, function () {

                            });
                        }, 2000);

                    });
                }, 2000);

            });
        }
    }

    setTimeout(function () {


        var myFire = new Swiper("#fire", {
            slidesPerView: 3,
            pagination: '.swiper-pagination',
            paginationClickable: true,
            speed: 1000,
            loop: true,
            observer: true,
            observeParents: true,
            autoplayDisableOnInteraction: false,
            autoplay: 1000

        });

        var myPower = new Swiper("#power", {
            slidesPerView: 3,
            pagination: '.swiper-pagination',
            paginationClickable: true,
            speed: 1000,
            loop: true,
            observer: true,
            observeParents: true,
            autoplayDisableOnInteraction: false,
            autoplay: 1000

        });

        var myDrainage = new Swiper("#drainage", {
            slidesPerView: 3,
            pagination: '.swiper-pagination',
            paginationClickable: true,
            speed: 1000,
            loop: true,
            observer: true,
            observeParents: true,
            autoplayDisableOnInteraction: false,
            autoplay: 1000

        });


        var myElevator = new Swiper("#elevator", {
            slidesPerView: 3,
            pagination: '.swiper-pagination',
            paginationClickable: true,
            speed: 1000,
            loop: true,
            observer: true,
            observeParents: true,
            autoplayDisableOnInteraction: false,
            autoplay: 1000

        });

        var myEntrance = new Swiper("#waybrake", {
            slidesPerView: 3,
            pagination: '.swiper-pagination',
            paginationClickable: true,
            speed: 1000,
            loop: true,
            observer: true,
            observeParents: true,
            autoplayDisableOnInteraction: false,
            autoplay: 1000

        });


        var myFence = new Swiper("#fence", {
            slidesPerView: 3,
            pagination: '.swiper-pagination',
            paginationClickable: true,
            speed: 1000,
            loop: true,
            observer: true,
            observeParents: true,
            autoplayDisableOnInteraction: false,
            autoplay: 1000

        });


    }, 3000)

})

