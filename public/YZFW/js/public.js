    // 加载满意度数据
    function loadSatisfiedData() {
        for (var i = 0; i < satisfiedData.length; i++) {
            $("#satisfied-name" + (i + 1)).html(satisfiedData[i].name);
        }
    }

    // 加载活动排名TOP5
    function loadTop5Data() {
        $.ajax({
            type: "post",
            dataType: "json",
            url: "https://api-development.tq-service.com/v2/tqapp/platformData/data/getActivityRankingJson",
            success: function(msg) {
                if (msg.status.status_code == 0) {
                    var html = "";
                    var data = msg.data;
                    for (var i = 0; i < data.length; i++) {
                        $("#name" + (i + 1)).html(data[i].name)
                        $("#pv" + (i + 1)).html(data[i].pv);
                        $("#uv" + (i + 1)).html(data[i].uv);
                        $("#jump" + (i + 1)).html(data[i].outRate);
                    }
                    $('.counter').countUp(); //数字自增
                } else {
                    alert("获取数据失败");
                }
            }
        });
    }

    //加载报事数据
    function loadReportData() {
        $.ajax({
            type: "post",
            dataType: "json",
            data: {
                token: 'a1b2958086547c1c26309s8fd74155a5d11'
            },
            url: "http://dev-oa-api.tq-service.com/bigDataInterface/reportStatistics",
            success: function(msg) {
                if (msg.status.status_code == 0) {
                    var data = msg.data;
                    $("#baoshiNum").html(data[0].reportNum);
                    if (data[0].zhoutongbi >= 0) {
                        $("#weekPercent").html("周同比<img src='images/d-gr.png' width='10' height='8' alt='' >" + data[0].zhoutongbi + "%");
                    } else {
                        $("#weekPercent").html("周同比<img src='images/d-red.png' width='10' height='8' alt='' >" + data[0].zhoutongbi + "%");
                    }
                    if (data[0].annularRatio >= 0) {
                        $("#dayPercent").html("日环比<img src='images/d-gr.png' width='10' height='8' alt='' >" + data[0].annularRatio + "%");
                    } else {
                        $("#dayPercent").html("日环比<img src='images/d-red.png' width='10' height='8' alt='' >" + data[0].annularRatio + "%");
                    }
                    $("#dayBaoshiAvg").html("日均报事&nbsp;&nbsp;" + data[0].dailyReport);
                    $("#dealNum").html(data[0].processingNum);
                    $("#dayDealAvg").html("日均整改&nbsp;&nbsp;" + data[0].dailyRectification);
                    $("#finishNum").html(data[0].completeNum);
                    $("#processPercent").html("处理率&nbsp;&nbsp;" + data[0].treatmentRate + "%");
                    $("#finishPercent").html(data[0].completionRate + "%");
                    if (data[0].completionWeekRate >= 0) {
                        $("#weekFinish").html("周同比<img src='images/d-gr.png' width='10' height='8' alt='' >" + data[0].completionWeekRate + "%");
                    } else {
                        $("#weekFinish").html("周同比<img src='images/d-red.png' width='10' height='8' alt='' >" + data[0].completionWeekRate + "%");
                    }
                    if (data[0].completionDailyRate >= 0) {
                        $("#dayFinish").html("日环比<img src='images/d-gr.png' width='10' height='8' alt='' >" + data[0].completionDailyRate + "%");
                    } else {
                        $("#dayFinish").html("日环比<img src='images/d-red.png' width='10' height='8' alt='' >" + data[0].completionDailyRate + "%");
                    }
                } else {
                    alert("获取数据失败");
                }
            }
        });
    }

    //加载当月数据
    function loadMonthData() {
        $("#monthPercent").html(monthData.monthPercent);
        $("#monthDevice").html(monthData.monthDevice);
        $("#monthPerfect").html(monthData.monthPerfect);
        /*  $.ajax({
             type: "post",
             dataType: "json",
             url: "http://api.tq-service.com/cruise/bigDataInterface/noData",
             success: function(msg) {
                 if (msg.status.status_code == 0) {
                     $("#monthPercent").html(monthData.monthPercent);
                     $("#monthDevice").html(monthData.monthDevice);
                     $("#monthPerfect").html(monthData.monthPerfect);
                 } else {
                     alert("获取数据失败");
                 }
             }
         }); */
    }

    //设备运行警示
    function loadDeviceData() {
        $("#leakageNum").html(deviceData[0].number);
        $("#tiringNum").html(deviceData[1].number);
        $("#inletNum").html(deviceData[2].number);
        /*  $.ajax({
             type: "post",
             dataType: "json",
             url: "http://api.tq-service.com/cruise/bigDataInterface/noData",
             success: function(msg) {
                 if (msg.status.status_code == 0) {
                     $("#leakageNum").html(deviceData[0].number);
                     $("#tiringNum").html(deviceData[1].number);
                     $("#inletNum").html(deviceData[2].number);
                 } else {
                     alert("获取数据失败");
                 }
             }
         }); */
    }

    //加载告警信息 次数、台数、时长
    function loadWarnData() {
        $("#taiNum").html(warnData.taiNum);
        $("#frequency").html(warnData.frequency);
        $("#avgTime").html(warnData.avgTime);
        /* $.ajax({
            type: "post",
            dataType: "json",
            url: "http://api.tq-service.com/cruise/bigDataInterface/noData",
            success: function(msg) {
                if (msg.status.status_code == 0) {
                    $("#taiNum").html(warnData.taiNum);
                    $("#frequency").html(warnData.frequency);
                    $("#avgTime").html(warnData.avgTime);
                    //$('.counter').countUp(); //数字自增
                } else {
                    alert("获取数据失败");
                }
            }
        }); */
    }

    // 当月数据动画
    function loadAnimate() {
        $('.Z-EL3C1').animate({
            height: '136px'
        }, "slow", function() {
            $('.Z-EL3C1 .Z-img1').animate({
                width: '13px'
            }, "slow", function() {
                $('.Z-EL3C1 .Z-img2').animate({
                    width: '13px'
                }, "slow");
                $('.Z-EL3C1 p').animate({
                    opacity: '1'
                }, "slow");
            })
        })
    }

    // 报事动画控制
    function loadReportAnimate() {
        var xx = 0; //报事动画
        $('body').everyTime('5s', function() {
            if (xx == 4) {
                xx = 0;
                $(".swiper-container").find(".M-Dlist").removeClass('M-Dhover');
                $(".swiper-container").find(".M-Dlist").eq(0).addClass('M-Dhover');
                xx++;
            } else {
                $(".swiper-container").find(".M-Dlist").removeClass('M-Dhover');

                $(".swiper-container").find(".M-Dlist").eq(xx).addClass('M-Dhover');
                xx++;
            }
        })
    }

    // 加载地图数据
    var alength;

    function loadMapData() {
        $.ajax({
            type: "post",
            dataType: "json",
            url: "https://api-development.tq-service.com/v2/tqapp/platformData/data/getUserTotalAreaJson",
            success: function(msg) {
                if (msg.status.status_code == 0) {
                    var html = "";
                    var data = msg.data;
                    for (var i = 0; i < data.user_total_area.length; i++) {
                        if (data.user_total_area[i].province == "新疆") {
                            html += "<li class='Z-SF1'><p class='number'><img class='user' src='./images/user-icon.png' />" + data.user_total_area[i].provinceTotal + "</p><p class='Z-p2'><img class='address' src='./images/address-icon.png' /></p><span>新疆</span></li>";
                        } else if (data.user_total_area[i].province == "西藏") {
                            html += "<li class='Z-SF2'><p class='number'><img class='user' src='./images/user-icon.png' />" + data.user_total_area[i].provinceTotal + "</p><p class='Z-p2'><img class='address' src='./images/address-icon.png' /></p><span>甘肃省</span></li>";
                        } else if (data.user_total_area[i].province == "甘肃省") {
                            html += "<li class='Z-SF3'><p class='number'><img class='user' src='./images/user-icon.png' />" + data.user_total_area[i].provinceTotal + "</p><p class='Z-p2'><img class='address' src='./images/address-icon.png' /></p><span>西藏</span></li>";
                        } else if (data.user_total_area[i].province == "青海") {
                            html += "<li class='Z-SF4'><p class='number'><img class='user' src='./images/user-icon.png' />" + data.user_total_area[i].provinceTotal + "</p><p class='Z-p2'><img class='address' src='./images/address-icon.png' /></p><span>青海</span></li>";
                        } else if (data.user_total_area[i].province == "内蒙古") {
                            html += "<li class='Z-SF5'><p class='number'><img class='user' src='./images/user-icon.png' />" + data.user_total_area[i].provinceTotal + "</p><p class='Z-p2'><img class='address' src='./images/address-icon.png' /></p><span>内蒙古</span></li>";
                        } else if (data.user_total_area[i].province == "宁夏") {
                            html += "<li class='Z-SF6'><p class='number'><img class='user' src='./images/user-icon.png' />" + data.user_total_area[i].provinceTotal + "</p><p class='Z-p2'><img class='address' src='./images/address-icon.png' /></p><span>宁夏</span></li>";
                        } else if (data.user_total_area[i].province == "四川省") {
                            html += "<li class='Z-SF7'><p class='number'><img class='user' src='./images/user-icon.png' />" + data.user_total_area[i].provinceTotal + "</p><p class='Z-p2'><img class='address' src='./images/address-icon.png' /></p><span>四川省</span></li>";
                        } else if (data.user_total_area[i].province == "云南省") {
                            html += "<li class='Z-SF8'><p class='number'><img class='user' src='./images/user-icon.png' />" + data.user_total_area[i].provinceTotal + "</p><p class='Z-p2'><img class='address' src='./images/address-icon.png' /></p><span>云南省</span></li>";
                        } else if (data.user_total_area[i].province == "山西省") {
                            html += "<li class='Z-SF9'><p class='number'><img class='user' src='./images/user-icon.png' />" + data.user_total_area[i].provinceTotal + "</p><p class='Z-p2'><img class='address' src='./images/address-icon.png' /></p><span>山西省</span></li>";
                        } else if (data.user_total_area[i].province == "陕西省") {
                            html += "<li class='Z-SF10'><p class='number'><img class='user' src='./images/user-icon.png' />" + data.user_total_area[i].provinceTotal + "</p><p class='Z-p2'><img class='address' src='./images/address-icon.png' /></p><span>陕西省</span></li>";
                        } else if (data.user_total_area[i].province == "湖北省") {
                            html += "<li class='Z-SF11'><p class='number'><img class='user' src='./images/user-icon.png' />" + data.user_total_area[i].provinceTotal + "</p><p class='Z-p2'><img class='address' src='./images/address-icon.png' /></p><span>湖北省</span></li>";
                        } else if (data.user_total_area[i].province == "重庆") {
                            html += "<li class='Z-SF121'><p class='number'><img class='user' src='./images/user-icon.png' />" + data.user_total_area[i].provinceTotal + "</p><p class='Z-p2'><img class='address' src='./images/address-icon.png' /></p><span>重庆</span></li>";
                        } else if (data.user_total_area[i].province == "重庆市") {
                            html += "<li class='Z-SF12'><p class='number'><img class='user' src='./images/user-icon.png' />" + data.user_total_area[i].provinceTotal + "</p><p class='Z-p2'><img class='address' src='./images/address-icon.png' /></p><span>重庆市</span></li>";
                        } else if (data.user_total_area[i].province == "贵州省") {
                            html += "<li class='Z-SF13'><p class='number'><img class='user' src='./images/user-icon.png' />" + data.user_total_area[i].provinceTotal + "</p><p class='Z-p2'><img class='address' src='./images/address-icon.png' /></p><span>贵州省</span></li>";
                        } else if (data.user_total_area[i].province == "广西省") {
                            html += "<li class='Z-SF14'><p class='number'><img class='user' src='./images/user-icon.png' />" + data.user_total_area[i].provinceTotal + "</p><p class='Z-p2'><img class='address' src='./images/address-icon.png' /></p><span>广西省</span></li>";
                        } else if (data.user_total_area[i].province == "北京市") {
                            html += "<li class='Z-SF15'><p class='number'><img class='user' src='./images/user-icon.png' />" + data.user_total_area[i].provinceTotal + "</p><p class='Z-p2'><img class='address' src='./images/address-icon.png' /></p><span>北京市</span></li>";
                        } else if (data.user_total_area[i].province == "河北省") {
                            html += "<li class='Z-SF16'><p class='number'><img class='user' src='./images/user-icon.png' />" + data.user_total_area[i].provinceTotal + "</p><p class='Z-p2'><img class='address' src='./images/address-icon.png' /></p><span>河北省</span></li>";
                        } else if (data.user_total_area[i].province == "河南省") {
                            html += "<li class='Z-SF17'><p class='number'><img class='user' src='./images/user-icon.png' />" + data.user_total_area[i].provinceTotal + "</p><p class='Z-p2'><img class='address' src='./images/address-icon.png' /></p><span>河南省</span></li>";
                        } else if (data.user_total_area[i].province == "湖南省") {
                            html += "<li class='Z-SF18'><p class='number'><img class='user' src='./images/user-icon.png' />" + data.user_total_area[i].provinceTotal + "</p><p class='Z-p2'><img class='address' src='./images/address-icon.png' /></p><span>湖南省</span></li>";
                        } else if (data.user_total_area[i].province == "广东省") {
                            html += "<li class='Z-SF19'><p class='number'><img class='user' src='./images/user-icon.png' />" + data.user_total_area[i].provinceTotal + "</p><p class='Z-p2'><img class='address' src='./images/address-icon.png' /></p><span>广东省</span></li>";
                        } else if (data.user_total_area[i].province == "天津市") {
                            html += "<li class='Z-SF20'><p class='number'><img class='user' src='./images/user-icon.png' />" + data.user_total_area[i].provinceTotal + "</p><p class='Z-p2'><img class='address' src='./images/address-icon.png' /></p><span>天津市</span></li>";
                        } else if (data.user_total_area[i].province == "山东省") {
                            html += "<li class='Z-SF21'><p class='number'><img class='user' src='./images/user-icon.png' />" + data.user_total_area[i].provinceTotal + "</p><p class='Z-p2'><img class='address' src='./images/address-icon.png' /></p><span>山东省</span></li>";
                        } else if (data.user_total_area[i].province == "江苏省") {
                            html += "<li class='Z-SF22'><p class='number'><img class='user' src='./images/user-icon.png' />" + data.user_total_area[i].provinceTotal + "</p><p class='Z-p2'><img class='address' src='./images/address-icon.png' /></p><span>江苏省</span></li>";
                        } else if (data.user_total_area[i].province == "安徽省") {
                            html += "<li class='Z-SF23'><p class='number'><img class='user' src='./images/user-icon.png' />" + data.user_total_area[i].provinceTotal + "</p><p class='Z-p2'><img class='address' src='./images/address-icon.png' /></p><span>安徽省</span></li>";
                        } else if (data.user_total_area[i].province == "上海市") {
                            html += "<li class='Z-SF24'><p class='number'><img class='user' src='./images/user-icon.png' />" + data.user_total_area[i].provinceTotal + "</p><p class='Z-p2'><img class='address' src='./images/address-icon.png' /></p><span>上海市</span></li>";
                        } else if (data.user_total_area[i].province == "浙江省") {
                            html += "<li class='Z-SF25'><p class='number'><img class='user' src='./images/user-icon.png' />" + data.user_total_area[i].provinceTotal + "</p><p class='Z-p2'><img class='address' src='./images/address-icon.png' /></p><span>浙江省</span></li>";
                        } else if (data.user_total_area[i].province == "江西省") {
                            html += "<li class='Z-SF26'><p class='number'><img class='user' src='./images/user-icon.png' />" + data.user_total_area[i].provinceTotal + "</p><p class='Z-p2'><img class='address' src='./images/address-icon.png' /></p><span>江西省</span></li>";
                        } else if (data.user_total_area[i].province == "福建省") {
                            html += "<li class='Z-SF27'><p class='number'><img class='user' src='./images/user-icon.png' />" + data.user_total_area[i].provinceTotal + "</p><p class='Z-p2'><img class='address' src='./images/address-icon.png' /></p><span>福建省</span></li>";
                        } else if (data.user_total_area[i].province == "黑龙江省") {
                            html += "<li class='Z-SF28'><p class='number'><img class='user' src='./images/user-icon.png' />" + data.user_total_area[i].provinceTotal + "</p><p class='Z-p2'><img class='address' src='./images/address-icon.png' /></p><span>黑龙江省</span></li>";
                        } else if (data.user_total_area[i].province == "吉林省") {
                            html += "<li class='Z-SF29'><p class='number'><img class='user' src='./images/user-icon.png' />" + data.user_total_area[i].provinceTotal + "</p><p class='Z-p2'><img class='address' src='./images/address-icon.png' /></p><span>吉林省</span></li>";
                        } else if (data.user_total_area[i].province == "辽宁省") {
                            html += "<li class='Z-SF30'><p class='number'><img class='user' src='./images/user-icon.png' />" + data.user_total_area[i].provinceTotal + "</p><p class='Z-p2'><img class='address' src='./images/address-icon.png' /></p><span>辽宁省</span></li>";
                        } else if (data.user_total_area[i].province == "台湾") {
                            html += "<li class='Z-SF31'><p class='number'><img class='user' src='./images/user-icon.png' />" + data.user_total_area[i].provinceTotal + "</p><p class='Z-p2'><img class='address' src='./images/address-icon.png' /></p><span>台湾</span></li>";
                        } else if (data.user_total_area[i].province == "香港") {
                            html += "<li class='Z-SF32'><p class='number'><img class='user' src='./images/user-icon.png' />" + data.user_total_area[i].provinceTotal + "</p><p class='Z-p2'><img class='address' src='./images/address-icon.png' /></p><span>香港</span></li>";
                        } else if (data.user_total_area[i].province == "澳门") {
                            html += "<li class='Z-SF33'><p class='number'><img class='user' src='./images/user-icon.png' />" + data.user_total_area[i].provinceTotal + "</p><p class='Z-p2'><img class='address' src='./images/address-icon.png' /></p><span>澳门</span></li>";
                        } else if (data.user_total_area[i].province == "海南省") {
                            html += "<li class='Z-SF34'><p class='number'><img class='user' src='./images/user-icon.png' />" + data.user_total_area[i].provinceTotal + "</p><p class='Z-p2'><img class='address' src='./images/address-icon.png' /></p><span>海南省</span></li>";
                        }
                    }
                    $("#total").html(data.user_total[0].total);
                    $("#province").html(data.user_total[0].province);
                    $("#city").html(data.user_total[0].city);

                    $("#map").html(html);
                    $('.Z-map li').eq(0).addClass('Z-SFon');
                    $('.Z-map .Z-SFon .Z-p2').html("<i class='Z-dot1'></i><i class='Z-dot2'></i><i class='Z-dot3'></i>");
                    $('.Z-map .Z-SFon .number').addClass('active');
                    $('.Z-map .Z-SFon .number img').attr('src', './images/user-active-icon.png');
                    alength = $('.Z-map li').length;
                } else {
                    alert("获取数据失败");
                }
            }
        });
    }

    function changeActiveData() {
        var mapNum = 0;
        //每隔5s加载一次地图
        $('body').everyTime('5s', function() {
            mapNum++;
            if (mapNum == (alength - 1)) {
                mapNum = 0;
            }
            $('.Z-map .Z-SFon .Z-p2').html("<img class='address' src='./images/address-icon.png' />");
            $('.Z-map .Z-SFon .number img').attr('src', './images/user-icon.png');
            $('.Z-map li').removeClass('Z-SFon');
            $('.Z-map li').eq(mapNum).addClass('Z-SFon');
            $('.Z-map .Z-SFon .Z-p2').html("<i class='Z-dot1'></i><i class='Z-dot2'></i><i class='Z-dot3'></i>");
            $('.Z-map .Z-SFon .number').addClass('active');
            $('.Z-map .Z-SFon .number img').attr('src', './images/user-active-icon.png');
        });
    }

    $(function() {
        //loadStartAnimate();
        loadMapData();
        loadAnimate();
        loadReportAnimate();
        loadSatisfiedData();
        loadTop5Data();
        loadReportData();
        loadMonthData();
        loadDeviceData();
        loadWarnData();
        changeActiveData();
    });