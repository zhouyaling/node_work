
var alength;//地图数据个数
$(function (){
	//加载物业服务折线图数据
	loadWYLineData(1);
	//加载生活服务折线图数据
	loadSHLineData(1);
	//加载家居服务折线图数据
	loadJJLineData(1);
	//加载物业服务基础数据
	loadWYBaseData();
	//加载生活服务基础数据
	loadSHBaseData();
	//加载家居服务基础数据
	loadJJBaseData();
	//加载家电轮播数据
	loadCarousel();
	//初次加载地图
   	loadMap();
   	//加载今日异常数据
   	loadUnusualData();
   	//加载使用服务数据
   	loadFWData();
   	//加载空气质量轮播
   	loadPmData();
   	//加载关键词
   	loadKeyWord();
   	//加载累计服务统计数据
   	loadTotalFWData();
   	//加载用户分析数据
   	loadUserAnalyseData();
});


//加载物业服务基础数据
function loadWYBaseData(){
	$.ajax({
		type : "post",
		dataType : "json",
		url : "http://api.tq-service.com/cruise/bigDataInterface/noData",
		success : function(msg) {
			if(msg.status.status_code==0){
				$("#wyAllCount").html(wyBaseData.allCount);
				$("#wyAnswerCount").html(wyBaseData.answerCount);
                $("#wyPercent").html(wyBaseData.percent);
                $("#wyMinute").html(wyBaseData.minute);
			}else{
              alert("获取数据失败");
			}
		}
	});
}
//加载物业服务基础数据
function loadSHBaseData(){
	$.ajax({
		type : "post",
		dataType : "json",
		url : "http://api.tq-service.com/cruise/bigDataInterface/noData",
		success : function(msg) {
			if(msg.status.status_code==0){
				$("#shAllCount").html(shBaseData.allCount);
				$("#shAnswerCount").html(shBaseData.answerCount);
                $("#shPercent").html(shBaseData.percent);
                $("#shMinute").html(shBaseData.minute);
			}else{
              alert("获取数据失败");
			}
		}
	});
}
//加载家居服务基础数据
function loadJJBaseData(){
	$.ajax({
		type : "post",
		dataType : "json",
		url : "http://api.tq-service.com/cruise/bigDataInterface/noData",
		success : function(msg) {
			if(msg.status.status_code==0){
				$("#jjAllCount").html(jjBaseData.allCount);
				$("#jjAnswerCount").html(jjBaseData.answerCount);
                $("#jjPercent").html(jjBaseData.percent);
                $("#jjMinute").html(jjBaseData.minute);
			}else{
              alert("获取数据失败");
			}
		}
	});
}
// 绑定曲线图数据公共方法
function loadData(legendData,XAxisData,seriesAskData,seriesAnsData,labelId){
	var myChart = echarts.init(document.getElementById(labelId));
	myChart.setOption(LineChart(legendData,XAxisData,seriesAskData,seriesAnsData),true);
}
//加载物业服务折线图数据
function loadWYLineData(num){
	if(num==1){//物业费查询
		loadData(wyfcxlegendData1,wyfcxXAxisData1,wyfcxseriesAskData1,wyfcxseriesAnsData1,'wyfwzx');
	}else if(num==2){//物业交费
		loadData(wyfcxlegendData2,wyfcxXAxisData2,wyfcxseriesAskData2,wyfcxseriesAnsData2,'wyfwzx');
	}else if(num==3){//语音报事报修
		loadData(wyfcxlegendData3,wyfcxXAxisData3,wyfcxseriesAskData3,wyfcxseriesAnsData3,'wyfwzx');
	}else if(num==4){//呼叫物业中心
		loadData(wyfcxlegendData4,wyfcxXAxisData4,wyfcxseriesAskData4,wyfcxseriesAnsData4,'wyfwzx');
	}
}
//加载生活服务折线图数据
function loadSHLineData(num){
	 if(num==1){//外卖
		loadData(shfcxlegendData1,shfcxXAxisData1,shfcxseriesAskData1,shfcxseriesAnsData1,'shfwzx');
	}else if(num==2){//家政
		loadData(shfcxlegendData2,shfcxXAxisData2,shfcxseriesAskData2,shfcxseriesAnsData2,'shfwzx');
	}else if(num==3){//维修
		loadData(shfcxlegendData3,shfcxXAxisData3,shfcxseriesAskData3,shfcxseriesAnsData3,'shfwzx');
	}else if(num==4){//天气查询
		loadData(shfcxlegendData4,shfcxXAxisData4,shfcxseriesAskData4,shfcxseriesAnsData4,'shfwzx');
	}else if(num==5){//新闻播报
		loadData(shfcxlegendData5,shfcxXAxisData5,shfcxseriesAskData5,shfcxseriesAnsData5,'shfwzx');
	}
}
//加载家居服务折线图数据
function loadJJLineData(num){
    if(num==1){//设备控制
		loadData(jjfcxlegendData1,jjfcxXAxisData1,jjfcxseriesAskData1,jjfcxseriesAnsData1,'jjfwzx');
	}else if(num==2){//场景
		loadData(jjfcxlegendData2,jjfcxXAxisData2,jjfcxseriesAskData2,jjfcxseriesAnsData2,'jjfwzx');
	}else if(num==3){//安防报警
		loadData(jjfcxlegendData3,jjfcxXAxisData3,jjfcxseriesAskData3,jjfcxseriesAnsData3,'jjfwzx');
	}else if(num==4){//消息推送
		loadData(jjfcxlegendData4,jjfcxXAxisData4,jjfcxseriesAskData4,jjfcxseriesAnsData4,'jjfwzx');
	}
}
//加载智能电厂商轮播
function loadCarousel(){
	$.ajax({
		type : "post",
		dataType : "json",
		url : "http://mml.jinke-live.com:8080/Charminghome/appController/getRobotBrandList",
		success : function(msg) {
			if(msg.status.status_code==0){
				var data=msg.data;
	var html = '';
	$("#electricalNum").html(data[0].brandAll);
	if(data.length%4 == 0){
		for(var j=0;j<data.length/4;j++){
		html +="<div class='swiper-slide'><ul id='z-znjd00' class='Z-znjdList clearFix'>";
		for(var i=0;i<4;i++){
	    html+="<li><h6>"+data[i+j*4].brandName+"</h6>" ;
	    html+="<div class='Z-number clearFix'><p class='Z-marginR'><img src='images/z-icon_bluewhite.png' alt='' />";
	    html+="<span>数量<i>Number</i></span></p>";
	    html+="<p><img src='images/z-icon_blueproprety.png' alt='' />";
	    html+="<span>占比<i>Proportion</i></span></p></div>";
	    html+="<div class='Z-number2 clearFix'>";
	    html+="<p>"+data[i+j*4].brandNum+"<span>个</span></p>";
	    html+="<p class='Z-backg'><img src='images/z-circle_property.png' alt='' /><span>"+data[i+j*4].brandAvg+"</span><i>%</i></p>";
	    html+="</div></li>";
	}
		html+="</ul></div>";
	}
	}else{
		for(var j=0;j<data.length/4;j++){
		html +="<div class='swiper-slide'><ul id='z-znjd00' class='Z-znjdList clearFix'>";
		if((data.length-j*4)/4<1 )
		{
			if((data.length-j*4)>0){
				for(var i=0;i<data.length%4;i++){
		 html+="<li><h6>"+data[i+j*4].brandName+"</h6>" ;
	    html+="<div class='Z-number clearFix'><p class='Z-marginR'><img src='images/z-icon_bluewhite.png' alt='' />";
	    html+="<span>数量<i>Number</i></span></p>";
	    html+="<p><img src='images/z-icon_blueproprety.png' alt='' />";
	    html+="<span>占比<i>Proportion</i></span></p></div>";
	    html+="<div class='Z-number2 clearFix'>";
	    html+="<p>"+data[i+j*4].brandNum+"<span>个</span></p>";
	    html+="<p class='Z-backg'><img src='images/z-circle_property.png' alt='' /><span>"+data[i+j*4].brandAvg+"</span><i>%</i></p>";
	    html+="</div></li>";
			}
			}
		}else{
			for(var i=0;i<4;i++){
			    html+="<li><h6>"+data[i+j*4].brandName+"</h6>" ;
	    html+="<div class='Z-number clearFix'><p class='Z-marginR'><img src='images/z-icon_bluewhite.png' alt='' />";
	    html+="<span>数量<i>Number</i></span></p>";
	    html+="<p><img src='images/z-icon_blueproprety.png' alt='' />";
	    html+="<span>占比<i>Proportion</i></span></p></div>";
	    html+="<div class='Z-number2 clearFix'>";
	    html+="<p>"+data[i+j*4].brandNum+"<span>个</span></p>";
	    html+="<p class='Z-backg'><img src='images/z-circle_property.png' alt='' /><span>"+data[i+j*4].brandAvg+"</span><i>%</i></p>";
	    html+="</div></li>";
			}
		}
		
		html+="</ul></div>";
		
	}
	}
	
	$("#carousel").append(html);
	
    var swiper = new Swiper('.swiper-container', {
        
			onSlideChangeStart: function(swiper){
        xx=0;
        console.log(xx+"k");
	 $(".swiper-slide-active").find(".Z-znjdList li").removeClass('Z-on');
		
	$(".swiper-slide-active").find(".Z-znjdList li").eq(xx).addClass('Z-on');
    },
		 
		paginationClickable: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: 13000,
		
        autoplayDisableOnInteraction: false
    });
			}else{
              alert("获取数据失败");
			}
		}
	});
	
}
/**
 * 加载地图数据
 */
//接收到的地图数据集合
var mapDetailData="";
function loadMap(){
	$.ajax({
		type : "post",
		dataType : "json",
		url : "http://mml.jinke-live.com:8080/Charminghome/appController/getRobotCityList",
		success : function(msg) {
			if(msg.status.status_code==0){
				var data=msg.data.cityList;
				$("#allCount").html(msg.data.allCount);
				$("#provinec").html(msg.data.provinec);
				$("#cityCount").html(msg.data.cityCount);
				mapDetailData=data;
				loadMapData(data[0]);
				var html="";
			for(var i=0;i<data.length;i++){
				var cityName=data[i].cityName;
				if(cityName=="新疆维吾尔自治区"){
					html+="<li class='Z-SF1'><p><i class='Z-dot1'></i><i class='Z-dot2'></i><i class='Z-dot3'></i></p><span>新疆维吾尔自治区</span></li>";
				}else if(cityName=="西藏自治区"){
					html+="<li class='Z-SF2'><p><i class='Z-dot1'></i><i class='Z-dot2'></i><i class='Z-dot3'></i></p><span>西藏自治区</span></li>";
				}else if(cityName=="甘肃省"){
					html+="<li class='Z-SF3'><p><i class='Z-dot1'></i><i class='Z-dot2'></i><i class='Z-dot3'></i></p><span>甘肃省</span></li>";
				}else if(cityName=="青海省"){
					html+="<li class='Z-SF4'><p><i class='Z-dot1'></i><i class='Z-dot2'></i><i class='Z-dot3'></i></p><span>青海省</span></li>";
				}else if(cityName=="内蒙古自治区"){
					html+="<li class='Z-SF5'><p><i class='Z-dot1'></i><i class='Z-dot2'></i><i class='Z-dot3'></i></p><span>内蒙古自治区</span></li>";
				}else if(cityName=="宁夏回族自治区"){
					html+="<li class='Z-SF6'><p><i class='Z-dot1'></i><i class='Z-dot2'></i><i class='Z-dot3'></i></p><span>宁夏回族自治区</span></li>";
				}else if(cityName=="四川省"){
					html+="<li class='Z-SF7'><p><i class='Z-dot1'></i><i class='Z-dot2'></i><i class='Z-dot3'></i></p><span>四川省</span></li>";
				}else if(cityName=="云南省"){
					html+="<li class='Z-SF8'><p><i class='Z-dot1'></i><i class='Z-dot2'></i><i class='Z-dot3'></i></p><span>云南省</span></li>";
				}else if(cityName=="山西省"){
					html+="<li class='Z-SF9'><p><i class='Z-dot1'></i><i class='Z-dot2'></i><i class='Z-dot3'></i></p><span>山西省</span></li>";
				}else if(cityName=="陕西省"){
					html+="<li class='Z-SF10'><p><i class='Z-dot1'></i><i class='Z-dot2'></i><i class='Z-dot3'></i></p><span>陕西省</span></li>";
				}else if(cityName=="湖北省"){
					html+="<li class='Z-SF11'><p><i class='Z-dot1'></i><i class='Z-dot2'></i><i class='Z-dot3'></i></p><span>湖北省</span></li>";
				}else if(cityName=="重庆市"){
					html+="<li class='Z-SF12'><p><i class='Z-dot1'></i><i class='Z-dot2'></i><i class='Z-dot3'></i></p><span>重庆市</span></li>";
				}else if(cityName=="贵州省"){
					html+="<li class='Z-SF13'><p><i class='Z-dot1'></i><i class='Z-dot2'></i><i class='Z-dot3'></i></p><span>贵州省</span></li>";
				}else if(cityName=="广西壮族自治区"){
					html+="<li class='Z-SF14'><p><i class='Z-dot1'></i><i class='Z-dot2'></i><i class='Z-dot3'></i></p><span>广西壮族自治区</span></li>";
				}else if(cityName=="北京市"){
					html+="<li class='Z-SF15'><p><i class='Z-dot1'></i><i class='Z-dot2'></i><i class='Z-dot3'></i></p><span>北京市</span></li>";
				}else if(cityName=="河北省"){
					html+="<li class='Z-SF16'><p><i class='Z-dot1'></i><i class='Z-dot2'></i><i class='Z-dot3'></i></p><span>河北省</span></li>";
				}else if(cityName=="河南省"){
					html+="<li class='Z-SF17'><p><i class='Z-dot1'></i><i class='Z-dot2'></i><i class='Z-dot3'></i></p><span>河南省</span></li>";
				}else if(cityName=="湖南省"){
					html+="<li class='Z-SF18'><p><i class='Z-dot1'></i><i class='Z-dot2'></i><i class='Z-dot3'></i></p><span>湖南省</span></li>";
				}else if(cityName=="广东省"){
					html+="<li class='Z-SF19'><p><i class='Z-dot1'></i><i class='Z-dot2'></i><i class='Z-dot3'></i></p><span>广东省</span></li>";
				}else if(cityName=="天津市"){
					html+="<li class='Z-SF20'><p><i class='Z-dot1'></i><i class='Z-dot2'></i><i class='Z-dot3'></i></p><span>天津市</span></li>";
				}else if(cityName=="山东省"){
					html+="<li class='Z-SF21'><p><i class='Z-dot1'></i><i class='Z-dot2'></i><i class='Z-dot3'></i></p><span>山东省</span></li>";
				}else if(cityName=="江苏省"){
					html+="<li class='Z-SF22'><p><i class='Z-dot1'></i><i class='Z-dot2'></i><i class='Z-dot3'></i></p><span>江苏省</span></li>";
				}else if(cityName=="安徽省"){
					html+="<li class='Z-SF23'><p><i class='Z-dot1'></i><i class='Z-dot2'></i><i class='Z-dot3'></i></p><span>安徽省</span></li>";
				}else if(cityName=="上海市"){
					html+="<li class='Z-SF24'><p><i class='Z-dot1'></i><i class='Z-dot2'></i><i class='Z-dot3'></i></p><span>上海市</span></li>";
				}else if(cityName=="浙江省"){
					html+="<li class='Z-SF25'><p><i class='Z-dot1'></i><i class='Z-dot2'></i><i class='Z-dot3'></i></p><span>浙江省</span></li>";
				}else if(cityName=="江西省"){
					html+="<li class='Z-SF26'><p><i class='Z-dot1'></i><i class='Z-dot2'></i><i class='Z-dot3'></i></p><span>江西省</span></li>";
				}else if(cityName=="福建省"){
					html+="<li class='Z-SF27'><p><i class='Z-dot1'></i><i class='Z-dot2'></i><i class='Z-dot3'></i></p><span>福建省</span></li>";
				}else if(cityName=="黑龙江省"){
					html+="<li class='Z-SF28'><p><i class='Z-dot1'></i><i class='Z-dot2'></i><i class='Z-dot3'></i></p><span>黑龙江省</span></li>";
				}else if(cityName=="吉林省"){
					html+="<li class='Z-SF29'><p><i class='Z-dot1'></i><i class='Z-dot2'></i><i class='Z-dot3'></i></p><span>吉林省</span></li>";
				}else if(cityName=="辽宁省"){
					html+="<li class='Z-SF30'><p><i class='Z-dot1'></i><i class='Z-dot2'></i><i class='Z-dot3'></i></p><span>辽宁省</span></li>";
				}else if(cityName=="台湾省"){
					html+="<li class='Z-SF31'><p><i class='Z-dot1'></i><i class='Z-dot2'></i><i class='Z-dot3'></i></p><span>台湾省</span></li>";
				}else if(cityName=="香港特别行政区"){
					html+="<li class='Z-SF32'><p><i class='Z-dot1'></i><i class='Z-dot2'></i><i class='Z-dot3'></i></p><span>香港特别行政区</span></li>";
				}else if(cityName=="澳门特别行政区"){
					html+="<li class='Z-SF33'><p><i class='Z-dot1'></i><i class='Z-dot2'></i><i class='Z-dot3'></i></p><span>澳门特别行政区</span></li>";
				}else if(cityName=="海南省"){
					html+="<li class='Z-SF34'><p><i class='Z-dot1'></i><i class='Z-dot2'></i><i class='Z-dot3'></i></p><span>海南省</span></li>";
				}
			}
			$("#map").html(html);
			$('.Z-map li').eq(0).addClass('Z-SFon');
			 alength=$('.Z-map li').length;
			}else{
              alert("获取数据失败");
			}
		}
	});
}
//加载地图详细数据
function loadMapData(mapDetailData){
	     $('#cityName').html(mapDetailData.cityName);           
		$("#allNumber").html(mapDetailData.cityAll);
		$("#onlineNumber").html(mapDetailData.cityNum);
		$("#allPercent").html(mapDetailData.cityAvg);
		loadMapQuan(mapDetailData.cityAvg);
}
//加载地图旋转圆圈
function loadMapQuan(percent){
	//地图全国占比
        var canvas = document.getElementById('canvas'), 
            context = canvas.getContext('2d'), 
            centerX = canvas.width/2,   
            centerY = canvas.height/2, 
            rad = Math.PI*2/100, 
            speed = 0.1; 
            
        //绘制5像素宽的运动外圈
        function blueCircle(n){
            context.save();
            context.strokeStyle = "#fff"; 
            context.lineWidth = 7; 
            context.beginPath(); 
            context.arc(centerX, centerY, 50 , -Math.PI/2, -Math.PI/2 +n*rad, false); 
            context.stroke(); 
            context.closePath();
            context.restore();
        }
        //绘制白色外圈
        function whiteCircle(){
            context.save();
            context.beginPath();
            context.lineWidth = 1; 
            context.strokeStyle = "#9F8A70";
            context.arc(centerX, centerY, 50 , 0, Math.PI*2, false);
            context.stroke();
            context.closePath();
            context.restore();
        }  
      
        //动画循环
        (function drawFrame(){
           window.requestAnimationFrame(drawFrame);
            context.clearRect(0, 0, canvas.width, canvas.height);
            whiteCircle();
            blueCircle(speed);
            var i=percent;
            if(speed > 100) speed = 0;
            speed += 0.4;
       		if(speed>=i){
				 speed = i;
				} 
        }());
}
//加载今日异常数据
function loadUnusualData(){
	$.ajax({
		type : "post",
		dataType : "json",
		url : "http://api.tq-service.com/cruise/bigDataInterface/noData",
		success : function(msg) {
			if(msg.status.status_code==0){
				var data=unusualData.unusualNum;
				if(data.toString().length==3){
				$("#unusualNum1").html(data.toString().substring(0,1));
				$("#unusualNum2").html(data.toString().substring(1,2));
				$("#unusualNum3").html(data.toString().substring(2,3));
				}else if(data.toString().length==2){
				$("#unusualNum1").html(0);
				$("#unusualNum2").html(data.toString().substring(0,1));
				$("#unusualNum3").html(data.toString().substring(1,2));
				}else if(data.toString().length==1){
				$("#unusualNum1").html(0);
				$("#unusualNum2").html(0);
				$("#unusualNum3").html(data.toString().substring(0,1));
				}
			}else{
              alert("获取数据失败");
			}
		}
	});
}
//加载使用服务数据
function loadFWData(){
	$.ajax({
		type : "post",
		dataType : "json",
		url : "http://api.tq-service.com/cruise/bigDataInterface/noData",
		success : function(msg) {
			if(msg.status.status_code==0){
				$("#userFWNum1").html(userFWData.wyNum);
				$("#userFWNum2").html(userFWData.jjNum);
                $("#userFWNum3").html(userFWData.shNum);
               var p1=(userFWData.wyNum*100/userFWData.maxNum).toFixed(2);
               var p2=(userFWData.jjNum*100/userFWData.maxNum).toFixed(2);
               var p3=(userFWData.shNum*100/userFWData.maxNum).toFixed(2);
                 userFWDataCircle(p1,p2,p3);
			}else{
              alert("获取数据失败");
			}
		}
	});
}
//使用服务用户数 圈圈动画
function  userFWDataCircle(percent1,percent2,percent3){
	$('body').oneTime('3s',function(){
		var p1 = new Progress({//物业
        el:'canvasThree',//canvas元素id
        deg:percent1,//绘制角度
        timer:10,//绘制时间
        lineWidth:8,//线宽
        lineBgColor:'#4c4234',//底圆颜色
        lineColor:'#E9CBA6',//动态圆颜色
        textColor:'rgba(0,0,0,0)',//文本颜色
        fontSize:14,//字体大小
        circleRadius:100//圆半径
    });
		})
	$('body').oneTime('1.5s',function(){
		var p2 = new Progress({//家居
        el:'canvasThree2',//canvas元素id
        deg:percent2,//绘制角度
        timer:10,//绘制时间
        lineWidth:8,//线宽
        lineBgColor:'#4c4234',//底圆颜色
        lineColor:'#A27D4F',//动态圆颜色
        textColor:'rgba(0,0,0,0)',//文本颜色
        fontSize:14,//字体大小
        circleRadius:100//圆半径
    });
		})
	
	var p3 = new Progress({//生活
        el:'canvasThree3',//canvas元素id
        deg:percent3,//绘制角度
        timer:10,//绘制时间
        lineWidth:8,//线宽
        lineBgColor:'#4c4234',//底圆颜色
        lineColor:'#7E5621',//动态圆颜色
        textColor:'rgba(0,0,0,0)',//文本颜色
        fontSize:14,//字体大小
        circleRadius:100//圆半径
    });
}
/**
 * 加载空气质量轮播
 */
function loadPmData(){
	$.ajax({
		type : "post",
		dataType : "json",
		url : "http://api.tq-service.com/cruise/bigDataInterface/noData",
		success : function(msg) {
			if(msg.status.status_code==0){
				var data=eval(pmData);
	var html="<ul class='Z-topList'>";
	for(var i=0;i<data.length;i++){
		html+="<li class='clearFix'><span class='Z-TOP'>"+data[i].cityName+"</span>";
		html+="<span>"+data[i].number+"</span>";
		html+="<span>"+data[i].pm+" </span>";
		if(data[i].grade=="优"){
			html+="<span class='Z-span Z-span1'>"+data[i].grade+"</span></li>";
		}else if(data[i].grade=="良"){
			html+="<span class='Z-span Z-span2'>"+data[i].grade+"</span></li>";
		}else if(data[i].grade=="轻度污染"){
			html+="<span class='Z-span Z-span3'>"+data[i].grade+"</span></li>";
		}
	}
	html+="</ul>";
     $("#news-container").append(html);
      $('#news-container').vTicker({ //城市空气质量列表轮播
		speed: 500,
		pause: 5000,
		animation: 'fade',
		mousePause: false,
		showItems: 8
	});   
	$('.Z-topListBG li').each(function(){//城市空气质量列表背景色隔行换色
		if($(this).index()%2==0){
		$(this).css({'background':'rgba(4,48,96,0)'});

		}else{
		$(this).css('background','rgba(4,48,96,0.34)')
			}
		})
			}else{
              alert("获取数据失败");
			}
		}
	});
}
/**
 * 加载关键词
 */
function loadKeyWord(){
	$.ajax({
		type : "post",
		dataType : "json",
		url : "http://api.tq-service.com/cruise/bigDataInterface/noData",
		success : function(msg) {
			if(msg.status.status_code==0){
				var keyword=eval(gjcData);
	         var html="";
	        for(var i=0;i<keyword.length;i++){
		    html+="<li class='Z-key"+(i+1)+"'>"+keyword[i].gjcName+"</li>";
	        }
	        $("#div1").append(html);
			}else{
              alert("获取数据失败");
			}
		}
	});
	
}
//加载累计服务统计数据
function loadTotalFWData(){
	$.ajax({
		type : "post",
		dataType : "json",
		url : "http://api.tq-service.com/cruise/bigDataInterface/noData",
		success : function(msg) {
			if(msg.status.status_code==0){
				$("#fyquery").html(totalFWData.fyquery);
				$("#jzfw").html(totalFWData.jzfw);
                $("#sbcontrol").html(totalFWData.sbcontrol);
                $("#cjcontrol").html(totalFWData.cjcontrol);
                $("#newsplay").html(totalFWData.newsplay);
			}else{
              alert("获取数据失败");
			}
		}
	});
}
//加载用户分析数据
function loadUserAnalyseData(){
	$.ajax({
		type : "post",
		dataType : "json",
		url : "http://api.tq-service.com/cruise/bigDataInterface/noData",
		success : function(msg) {
			if(msg.status.status_code==0){
				$("#dayUser").html(userAnalyseData.dayUser);
				$("#weekUser").html(userAnalyseData.weekUser);
                $("#monthUser").html(userAnalyseData.monthUser);
                dataUp();
			}else{
              alert("获取数据失败");
			}
		}
	});
}
//自增数字方法
function dataUp(){
	$('.counter').countUp();//数字自增
}
