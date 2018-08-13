$(function() {
	//加载左边顶部数据
	loadLeftTopData();
	//加载设备使用占比左部
	loadLeftProjectPercent();
	//加载智能电厂商轮播
	loadCarousel();
	//加载地图数据
	loadMap();
	//加载报警记录
	loadWarRecord();
	//加载维修人员信息
	loadPersonMessage();
	//绑定维修人员信息
	var personNum=0;
	$('body').everyTime('10s', function() {//每隔10秒钟切换一次人员信息
		personNum++;
		if(personNum==personData.length){
			personNum=0;
		}
		bindingPersonData(personData[personNum]);
	});
	//设备运行 警示
	loadDeviceData();
	//加载当月数据
	loadMonthData();
	//加载右部中间数据
	loadRightData();
	//加载设备数据分析折线图数据
	loadLineData();
	
});

//加载左边顶部数据
function loadLeftTopData() {
	$.ajax({
		type: "post",
		dataType: "json",
		url: "http://api.tq-service.com/cruise/bigDataInterface/noData",
		success: function(msg) {
			if(msg.status.status_code == 0) {
				$("#projectNum").html(leftTopData.projectNum);
				$("#newProject").html(leftTopData.newProject + "个");
				$("#projectAll").html(leftTopData.projectAll+"个");
				$("#area").html(leftTopData.area);
				$("#allArea").html(leftTopData.newArea+'%');
				$("#deviceNum").html(leftTopData.deviceNum);
				$("#newDevice").html(leftTopData.newDevice + "个");
				// alert("获取数据失败");
			}
		}
	});
}
//加载设备使用占比左部
function loadLeftProjectPercent() {
	$.ajax({
		type: "post",
		dataType: "json",
		url: "http://api.tq-service.com/cruise/bigDataInterface/noData",
		success: function(msg) {
			if(msg.status.status_code == 0) {
				$("#reportNum").html(leftProjectPercent[3].number);
				$("#blockNum").html(leftProjectPercent[2].number);
				$("#isolationNum").html(leftProjectPercent[1].number);
				$("#nomalNum").html(leftProjectPercent[0].number);
				var p1=(leftProjectPercent[0].number*100/leftProjectPercent[0].maxNum).toFixed(0);
				var p2=(leftProjectPercent[1].number*100/leftProjectPercent[1].maxNum).toFixed(0);
				var p3=(leftProjectPercent[2].number*100/leftProjectPercent[2].maxNum).toFixed(0);
				var p4=(leftProjectPercent[3].number*100/leftProjectPercent[3].maxNum).toFixed(0);
				bilingCircle(p1,p2,p3,p4);
			} else {
				alert("获取数据失败");
			}
		}
	});
}
//设备使用占比圆圈
function bilingCircle(p1,p2,p3,p4){
	function rand(m,n){return m+parseInt((n-m)*Math.random());}
	var says=["正常数","隔离数","停用数","告警数"];
	var saysLength=says.length;
	var oC=document.getElementById('container');
	var mxwidth=oC.offsetWidth;
	var mxheight=oC.offsetHeight;
	var arr=[p1,p2,p3,p4];
	var arr1=[];
	for(var i=0;i<arr.length;i++){
		if(arr[i]<=6){
			arr1[i]=30+arr[i]*5;
			}else if(arr[i]<=10&&arr[i]>6){
			arr1[i]=60;
			}else if(arr[i]<=20&&arr[i]>10){
			arr1[i]=65;
			}else if(arr[i]<=30&&arr[i]>20){
			arr1[i]=70;
			}else if(arr[i]<=40&&arr[i]>30){
			arr1[i]=75;
			}else if(arr[i]<=50&&arr[i]>40){
			arr1[i]=80;
			}else if(arr[i]<=60&&arr[i]>50){
			arr1[i]=85;
			}else if(arr[i]<=70&&arr[i]>60){
			arr1[i]=90;
			}else if(arr[i]<=80&&arr[i]>70){
			arr1[i]=95;
			}else if(arr[i]<=90&&arr[i]>80){
			arr1[i]=100;
			}else if(arr[i]<=100&&arr[i]>90){
			arr1[i]=105;
			}
		}
	var oB=new CollBox('container');
	oB.ballRun();
	for(var i=0;i<4;i++){
		var b=arr1[i];
		var x=rand(arr1[i],mxwidth-arr1[i]);
		var y=rand(arr1[i],mxheight-arr1[i]);
		var ball=new Ball({
			'b':arr1[i],
			'x':x,
			'y':y,
			'sx':1,
			'sy':1,
			'opa':rand(60,100)/100,
			'html':'<div class="Z-xqs"><p>'+arr[i]+'<span>%</span></p><span>'+says[i]+'</span></div>'
				
		});
		oB.addBall(ball);
	}
}


//加载智能电厂商轮播
function loadCarousel() {
	$.ajax({
		type: "post",
		dataType: "json",
		url: "http://api.tq-service.com/cruise/bigDataInterface/noData",
		success: function(msg) {
			if(msg.status.status_code == 0) {
				//供配电
				$("#poerName").html(courseData[0].name);
				$("#powerNum").html(courseData[0].number);
				$("#powerPercent").html(courseData[0].percent);
				//给排水
				$("#waterName").html(courseData[1].name);
				$("#waterNum").html(courseData[1].number);
				$("#waterPercent").html(courseData[1].percent);
			} else {
				alert("获取数据失败");
			}
		}
	});
}
/**
 * 加载地图数据
 */
var alength;
function loadMap() {
	$.ajax({
		type: "post",
		dataType: "json",
		url: "http://mml.jinke-live.com:8080/Charminghome/appController/getRobotCityList",
		success: function(msg) {
			if(msg.status.status_code == 0) {
				var data = msg.data.cityList;
				var html = "";
				$("#allCity").html(allCityNumber);
				for(var i = 0; i < data.length; i++) {
					var cityName = data[i].cityName;
					if(cityName == "新疆维吾尔自治区") {
						html += "<li class='Z-SF1'><p><i class='Z-dot1'></i><i class='Z-dot2'></i><i class='Z-dot3'></i></p><span>新疆维吾尔自治区</span></li>";
					} else if(cityName == "西藏自治区") {
						html += "<li class='Z-SF2'><p><i class='Z-dot1'></i><i class='Z-dot2'></i><i class='Z-dot3'></i></p><span>西藏自治区</span></li>";
					} else if(cityName == "甘肃省") {
						html += "<li class='Z-SF3'><p><i class='Z-dot1'></i><i class='Z-dot2'></i><i class='Z-dot3'></i></p><span>甘肃省</span></li>";
					} else if(cityName == "青海省") {
						html += "<li class='Z-SF4'><p><i class='Z-dot1'></i><i class='Z-dot2'></i><i class='Z-dot3'></i></p><span>青海省</span></li>";
					} else if(cityName == "内蒙古自治区") {
						html += "<li class='Z-SF5'><p><i class='Z-dot1'></i><i class='Z-dot2'></i><i class='Z-dot3'></i></p><span>内蒙古自治区</span></li>";
					} else if(cityName == "宁夏回族自治区") {
						html += "<li class='Z-SF6'><p><i class='Z-dot1'></i><i class='Z-dot2'></i><i class='Z-dot3'></i></p><span>宁夏回族自治区</span></li>";
					} else if(cityName == "四川省") {
						html += "<li class='Z-SF7'><p><i class='Z-dot1'></i><i class='Z-dot2'></i><i class='Z-dot3'></i></p><span>四川省</span></li>";
					} else if(cityName == "云南省") {
						html += "<li class='Z-SF8'><p><i class='Z-dot1'></i><i class='Z-dot2'></i><i class='Z-dot3'></i></p><span>云南省</span></li>";
					} else if(cityName == "山西省") {
						html += "<li class='Z-SF9'><p><i class='Z-dot1'></i><i class='Z-dot2'></i><i class='Z-dot3'></i></p><span>山西省</span></li>";
					} else if(cityName == "陕西省") {
						html += "<li class='Z-SF10'><p><i class='Z-dot1'></i><i class='Z-dot2'></i><i class='Z-dot3'></i></p><span>陕西省</span></li>";
					} else if(cityName == "湖北省") {
						html += "<li class='Z-SF11'><p><i class='Z-dot1'></i><i class='Z-dot2'></i><i class='Z-dot3'></i></p><span>湖北省</span></li>";
					} else if(cityName == "重庆市") {
						html += "<li class='Z-SF12'><p><i class='Z-dot1'></i><i class='Z-dot2'></i><i class='Z-dot3'></i></p><span>重庆市</span></li>";
					} else if(cityName == "贵州省") {
						html += "<li class='Z-SF13'><p><i class='Z-dot1'></i><i class='Z-dot2'></i><i class='Z-dot3'></i></p><span>贵州省</span></li>";
					} else if(cityName == "广西壮族自治区") {
						html += "<li class='Z-SF14'><p><i class='Z-dot1'></i><i class='Z-dot2'></i><i class='Z-dot3'></i></p><span>广西壮族自治区</span></li>";
					} else if(cityName == "北京市") {
						html += "<li class='Z-SF15'><p><i class='Z-dot1'></i><i class='Z-dot2'></i><i class='Z-dot3'></i></p><span>北京市</span></li>";
					} else if(cityName == "河北省") {
						html += "<li class='Z-SF16'><p><i class='Z-dot1'></i><i class='Z-dot2'></i><i class='Z-dot3'></i></p><span>河北省</span></li>";
					} else if(cityName == "河南省") {
						html += "<li class='Z-SF17'><p><i class='Z-dot1'></i><i class='Z-dot2'></i><i class='Z-dot3'></i></p><span>河南省</span></li>";
					} else if(cityName == "湖南省") {
						html += "<li class='Z-SF18'><p><i class='Z-dot1'></i><i class='Z-dot2'></i><i class='Z-dot3'></i></p><span>湖南省</span></li>";
					} else if(cityName == "广东省") {
						html += "<li class='Z-SF19'><p><i class='Z-dot1'></i><i class='Z-dot2'></i><i class='Z-dot3'></i></p><span>广东省</span></li>";
					} else if(cityName == "天津市") {
						html += "<li class='Z-SF20'><p><i class='Z-dot1'></i><i class='Z-dot2'></i><i class='Z-dot3'></i></p><span>天津市</span></li>";
					} else if(cityName == "山东省") {
						html += "<li class='Z-SF21'><p><i class='Z-dot1'></i><i class='Z-dot2'></i><i class='Z-dot3'></i></p><span>山东省</span></li>";
					} else if(cityName == "江苏省") {
						html += "<li class='Z-SF22'><p><i class='Z-dot1'></i><i class='Z-dot2'></i><i class='Z-dot3'></i></p><span>江苏省</span></li>";
					} else if(cityName == "安徽省") {
						html += "<li class='Z-SF23'><p><i class='Z-dot1'></i><i class='Z-dot2'></i><i class='Z-dot3'></i></p><span>安徽省</span></li>";
					} else if(cityName == "上海市") {
						html += "<li class='Z-SF24'><p><i class='Z-dot1'></i><i class='Z-dot2'></i><i class='Z-dot3'></i></p><span>上海市</span></li>";
					} else if(cityName == "浙江省") {
						html += "<li class='Z-SF25'><p><i class='Z-dot1'></i><i class='Z-dot2'></i><i class='Z-dot3'></i></p><span>浙江省</span></li>";
					} else if(cityName == "江西省") {
						html += "<li class='Z-SF26'><p><i class='Z-dot1'></i><i class='Z-dot2'></i><i class='Z-dot3'></i></p><span>江西省</span></li>";
					} else if(cityName == "福建省") {
						html += "<li class='Z-SF27'><p><i class='Z-dot1'></i><i class='Z-dot2'></i><i class='Z-dot3'></i></p><span>福建省</span></li>";
					} else if(cityName == "黑龙江省") {
						html += "<li class='Z-SF28'><p><i class='Z-dot1'></i><i class='Z-dot2'></i><i class='Z-dot3'></i></p><span>黑龙江省</span></li>";
					} else if(cityName == "吉林省") {
						html += "<li class='Z-SF29'><p><i class='Z-dot1'></i><i class='Z-dot2'></i><i class='Z-dot3'></i></p><span>吉林省</span></li>";
					} else if(cityName == "辽宁省") {
						html += "<li class='Z-SF30'><p><i class='Z-dot1'></i><i class='Z-dot2'></i><i class='Z-dot3'></i></p><span>辽宁省</span></li>";
					} else if(cityName == "台湾省") {
						html += "<li class='Z-SF31'><p><i class='Z-dot1'></i><i class='Z-dot2'></i><i class='Z-dot3'></i></p><span>台湾省</span></li>";
					} else if(cityName == "香港特别行政区") {
						html += "<li class='Z-SF32'><p><i class='Z-dot1'></i><i class='Z-dot2'></i><i class='Z-dot3'></i></p><span>香港特别行政区</span></li>";
					} else if(cityName == "澳门特别行政区") {
						html += "<li class='Z-SF33'><p><i class='Z-dot1'></i><i class='Z-dot2'></i><i class='Z-dot3'></i></p><span>澳门特别行政区</span></li>";
					} else if(cityName == "海南省") {
						html += "<li class='Z-SF34'><p><i class='Z-dot1'></i><i class='Z-dot2'></i><i class='Z-dot3'></i></p><span>海南省</span></li>";
					}
				}
				$("#mapChar").html(html);
				alength = $('.Z-Emap li').length;
				$('.Z-Emap li').eq(0).addClass('Z-SFon');
				var TOP = parseInt($('.Z-SFon').css('top')) + 28;
				var LEFT = parseInt($('.Z-SFon').css('left')) - 238;
			} else {
				alert("获取数据失败");
			}
		}
	});
}

//加载报警记录数据
function loadWarRecord() {
	$.ajax({
		type: "post",
		dataType: "json",
		url: "http://api.tq-service.com/cruise/bigDataInterface/noData",
		success: function(msg) {
			if(msg.status.status_code == 0) {
				var html = "<ul class='Z-mlist' style='position: absolute; margin: 0pt; padding: 0pt; top: 0px;' id='warnRecord'>";
				for(var i = 0; i < warData.length; i++) {
					if(i == 0) {
						html += "<li class='clearFix'><p class='Z-on'>";
					} else {
						html += "<li class='clearFix'><p>";
					}
					html += "<span>" + warData[i].address + "</span>";
					html += "<span>" + warData[i].position + "</span>";
					html += "<span>" + warData[i].time + "</span>";
					html += "<span>" + warData[i].status + "</span>";
					html += " </p></li>";
				}
				html += "</ul>";
				$("#news-container").html(html);
				$('#news-container').vTicker({ //城市空气质量列表轮播
					speed: 500,
					pause: 5000,
					animation: 'fade',
					mousePause: false,
					showItems: 4
				});
			} else {
				alert("获取数据失败");
			}
		}
	});

}
//加载维修人员信息
function loadPersonMessage() {
	$.ajax({
		type: "post",
		dataType: "json",
		url: "http://api.tq-service.com/cruise/bigDataInterface/noData",
		success: function(msg) {
			if(msg.status.status_code == 0) {
				bindingPersonData(personData[0]);
			} else {
				alert("获取数据失败");
			}
		}
	});
}
//绑定维修人员信息
function bindingPersonData(data){
	           $("#imgId").attr("src", data.src);
	            $("#name").html(data.name);
	            $("#date").html(data.date);
	            $("#serviceTime").html(data.serviceTime + "分钟");
	            $("#address").html(data.address);
	            $("#position").html(data.position);
}
//设备运行警示
function loadDeviceData(){
	$.ajax({
		type: "post",
		dataType: "json",
		url: "http://api.tq-service.com/cruise/bigDataInterface/noData",
		success: function(msg) {
			if(msg.status.status_code == 0) {
                $("#leakageNum").html(deviceData[0].number);
                $("#tiringNum").html(deviceData[1].number);
                $("#inletNum").html(deviceData[2].number);
                //圆圈占比
                var percent1=deviceData[0].number/deviceData[0].maxNum;
                var percent2=deviceData[1].number/deviceData[1].maxNum;
                var percent3=deviceData[2].number/deviceData[2].maxNum;
                circle(percent1,percent2,percent3);
			} else {
				alert("获取数据失败");
			}
		}
	});
}
 //设备运行警示 圈圈动画
function circle(percent1,percent2,percent3){
	
				var findCanvas = $("#canvasThree");
				var percents = findCanvas.attr('nowData') / findCanvas.attr('amout');
				percents = 0.25;
				//percents 为百分比的值  范围 0- 1
				runCircle({
					obj: 'canvasThree',
					percent: percent1,
					circleBottomColor: "#cfaf87", //圆环底色
					innerColorStart: '#a27d4f', //内部圆环 渐变色
					innerColorEnd: '#a27d4f',

				});
				runCircle({
					obj: 'canvasThree2',
					percent: percent2,
					circleBottomColor: "#cfaf87", //圆环底色
					innerColorStart: '#a27d4f', //内部圆环 渐变色
					innerColorEnd: '#a27d4f',

				});
				runCircle({
					obj: 'canvasThree3',
					percent: percent3,
					circleBottomColor: "#cfaf87", //圆环底色
					innerColorStart: '#a27d4f', //内部圆环 渐变色
					innerColorEnd: '#a27d4f',

				});

				var count = 0;
				$(".circleRun").each(function() {
					var obj = $(this)[0];
					var canvasW = parseInt($(this).parent().width()) * 0.76;
					obj.width = canvasW;
					obj.height = canvasW;

				})
}

//加载当月数据
function loadMonthData(){
	$.ajax({
		type: "post",
		dataType: "json",
		url: "http://api.tq-service.com/cruise/bigDataInterface/noData",
		success: function(msg) {
			if(msg.status.status_code == 0) {
               $("#monthPercent").html(monthData.monthPercent);
               $("#monthDevice").html(monthData.monthDevice);
               $("#monthPerfect").html(monthData.monthPerfect);
			} else {
				alert("获取数据失败");
			}
		}
	});
}
//加载右部中间数据
function loadRightData(){
	$.ajax({
		type: "post",
		dataType: "json",
		url: "http://api.tq-service.com/cruise/bigDataInterface/noData",
		success: function(msg) {
			if(msg.status.status_code == 0) {
              $("#taiNum").html(rightData.taiNum);
               $("#frequency").html(rightData.frequency);
               $("#allTime").html(rightData.allTime);
                $("#avgTime").html(rightData.avgTime);
                 $("#avgNum").html(rightData.avgNum);
                 $('.counter').countUp(); //数字自增
			} else {
				alert("获取数据失败");
			}
		}
	});
}
//加载设备数据分析折线图数据
function loadLineData(){
	$.ajax({
		type: "post",
		dataType: "json",
        url: "http://api.tq-service.com/cruise/bigDataInterface/noData",
		success: function(msg) {
			if(msg.status.status_code == 0) {
              bilingLineData(xAxisData,seriesData);
			} else {
				alert("获取数据失败");
			}
		}
	});
	
}
//绑定折线图数据
function bilingLineData(data1,data2){
	var myChart = echarts.init(document.getElementById('quxian'));
	myChart.setOption(LineChart(data1,data2));
}





