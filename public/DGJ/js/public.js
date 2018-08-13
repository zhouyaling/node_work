$(function() {
	//今日使用情况
	loadUsageJson();
	//用户使用时段
	var time = 0;
	loadUserTimeLineData(time);
	$('body').everyTime('8s', function() {
		//每隔8s刷新折线图
		time++;
		loadUserTimeLineData(time);
	});
	//用户实时行为
	loadUserAction();
	//点击模块TOP5
	loadMoudleTop5();
	//加载地图
    loadMap();
	//用户量数据
	loadUserAcount();
	//用户存留率数据
	var retenNum = 0;
	loadRetentionData(retenNum);
	$('body').everyTime('5s', function() {
		retenNum++;
		//每隔5秒刷新用户存留率数据
		loadRetentionData(retenNum);
	});
	//活动top5数据
	loadTop5Data();
	$('body').everyTime('10s', function() {
		//每隔5s刷新数据
		loadTop5Data();
	});
	//爱心送温暖活动
	loadCaringActivities();
	//用户绑定数
	loadUserBindCount();
	//用户在线交易
	loadUserOnline();
});

//获取使用情况数据
function loadUsageJson() {
	$.ajax({
		type: "post",
		dataType: "json",
		url: "https://api-development.tq-service.com/v2/tqapp/platformData/data/getUsageJson",
		success: function(msg) {
			if(msg.status.status_code == 0) {
				var data = msg.data;
				console.log(data);
				for(var i = 0; i < data.length; i++) {
					var htmlDay = "";
					var htmlWeek = "";
					if(data[i].yesterday_rate >= 0) {
						htmlDay = "<img style='vertical-align:middle;padding:0 5px;' src='images/up.png' width='7' height='14'/>" + data[i].yesterday_rate + "%";
					} else {
						htmlDay = "<img style='vertical-align:middle;padding:0 5px;' src='images/down.png' width='7' height='14'/>" + Math.abs(data[i].yesterday_rate) + "%";
					}
					if(data[i].week_rate >= 0) {
						htmlWeek = "<img style='vertical-align:middle;padding:0 5px;' src='images/up.png' width='7' height='14'/>" + data[i].week_rate + "%";
					} else {
						htmlWeek = "<img style='vertical-align:middle;padding:0 5px;' src='images/down.png' width='7' height='14'/>" + Math.abs(data[i].week_rate) + "%";
					    
					    $("#weekUV").css("color", "#23c8cd");
					    $("#weekOpen").css("color", "#23c8cd");
					}
					if(data[i].today == "today") { //今日pv
						$("#todayPV").html(data[i].t_day);
						$("#dayPV").html(htmlDay);
						$("#weekPV").html(htmlWeek);
						if(data[i].yesterday_rate >= 0) {
						   $("#dayPV").css("color", "#f7047b");
						}else{
							$("#dayPV").css("color", "#23c8cd");
						}
						if(data[i].week_rate >= 0) {
							  $("#weekPV").css("color", "#f7047b");
						}else{
							 $("#weekPV").css("color", "#23c8cd");
						}
					} else if(data[i].today == "today_uv") { //今日uv
						$("#todayUV").html(data[i].t_day);
						$("#dayUV").html(htmlDay);
						$("#weekUV").html(htmlWeek);
						if(data[i].yesterday_rate >= 0) {
						   $("#dayUV").css("color", "#f7047b");
						}else{
							$("#dayUV").css("color", "#23c8cd");
						}
						if(data[i].week_rate >= 0) {
							  $("#weekUV").css("color", "#f7047b");
						}else{
							 $("#weekUV").css("color", "#23c8cd");
						}
					} else if(data[i].today == "today_open_app") { //今日打开app
						$("#openNum").html(data[i].t_day);
						$("#dayOpen").html(htmlDay);
						$("#weekOpen").html(htmlWeek);
						if(data[i].yesterday_rate >= 0) {
						   $("#dayOpen").css("color", "#f7047b");
						}else{
							$("#dayOpen").css("color", "#23c8cd");
						}
						if(data[i].week_rate >= 0) {
							  $("#weekOpen").css("color", "#f7047b");
						}else{
							 $("#weekOpen").css("color", "#23c8cd");
						}
					}
				}
			} else {
				alert("获取数据失败");
			}
		}
	});
}
//加载用户使用时段数据
function loadUserTimeLineData(time) {
	$.ajax({
		type: "post",
		dataType: "json",
		url: "https://api-development.tq-service.com/v2/tqapp/platformData/data/getUserTimePeriodJson",
		success: function(msg) {
			if(msg.status.status_code == 0) {
				var data = msg.data;
				var xAxisData = [];
				var seriesDataPV = [];
				var seriesDataUV = [];
				for(var i = 0; i < data.length; i++) {
					xAxisData.push(data[i].time);
					seriesDataPV.push(data[i].pv);
					seriesDataUV.push(data[i].uv);
				}
				var pvName = "PV" + time;
				var uvName = "UV" + time;
				var myChart = echarts.init(document.getElementById('quxian1'));
				myChart.setOption((LineChart(xAxisData, seriesDataPV, seriesDataUV, pvName, uvName)), true);
			} else {
				alert("获取数据失败");
			}
		}
	});
}
//加载实时用户行为数据
function loadUserAction() {
	$.ajax({
		type: "post",
		dataType: "json",
		url: "https://api-development.tq-service.com/v2/tqapp/platformData/data/getRealTimeUserBehaviorJson",
		success: function(msg) {
			if(msg.status.status_code == 0) {
				var data=msg.data.list;
				var total=msg.data.total;
				var html="";
				for(var i=0;i<data.length;i++){
					if(i==0){
						html+="<tr><td width='25%'>"+data[i].operatype+"</td><td class='M-tdb first' width='60%'>";
					}else if(i==(data.length-1)){
						html+="<tr><td width='25%'>"+data[i].operatype+"</td><td class='M-tdb last' width='60%'>";
					}else{
						html+="<tr><td width='25%'>"+data[i].operatype+"</td><td class='M-tdb' width='60%'>";
					}
					html+="<div class='progress blue'><div class='progress-bar' style='width:"+(data[i].count*100/total).toFixed(2)+"%;' ><div class='M-expand'></div></div></div></td><td width='15%' style='text-align:center;' >"+data[i].count+"</td>";
					html+="</tr>";
				}
				$("#userAction").html(html);
			} else {
				alert("获取数据失败");
			}
		}
	});
}
//点击模块top5
function loadMoudleTop5() {
	$.ajax({
		type: "post",
		dataType: "json",
		url: "https://api-development.tq-service.com/v2/tqapp/platformData/data/getClickModuleTopFiveJson",
		success: function(msg) {
			if(msg.status.status_code == 0) {
				var data = msg.data;
				var html="";
				for(var i=0;i<data.length;i++){
					var name="";
					if(data[i].operatype=='STEWARD_PAY'){//管家缴费
						name="管家缴费<i></i>";
					}else if(data[i].operatype=='STEWARD_OPEN_DOOR'){//管家开门
						name="管家开门<i></i>";
					}else if(data[i].operatype=='STEWARD_BROKEN_NEWS'){//管家爆料
						name="管家爆料<i ></i>";
					}else if(data[i].operatype=='POST_IT_REPAIR'){//报事保修
						name="报事保修<i ></i>";
					}else if(data[i].operatype=='STEWARD_PAGE_NOTIFY'){//管家通知
						name="管家通知<i ></i>";
					}else if(data[i].operatype=='NOTIFY_AND_NOTICE'){//通知公告
						name="通知公告<i ></i>";
					}else if(data[i].operatype=='LIFE_AND_CIRCLE'){//生活圈子
						name="生活圈子<i ></i>";
					}else if(data[i].operatype=='STEWARD_HOUSE'){//管家-房屋
						name="管家-房屋<i></i>";
					}else if(data[i].operatype=='MY_HOUSE_GRANT'){//我的房屋-授权
						name="我的房屋-授权<i></i>";
					}else if( data[i].operatype=='LITTE_GIRL_POST_IT'){//小金妹爆料
						name="小金妹爆料<i></i>";
					}
					$("#clickModel"+(i+1)).html(data[i].count);
					$("#M-piet"+(i+1)).html(name);
					html+="<span id='tag"+(i+1)+"'>"+name+"</span>";
				}
				$("#gjcNameList").html(html);
				 $(".M-pieT").find("i").eq(0).addClass('M-shine1');
				lightStyle();
			} else {
				alert("获取数据失败");
			}
		}
	});
}
var s=0;//点击模块TOP5 亮度动画
function lightStyle(){
	$('body').everyTime('3s',function(){
	if(s==6){
		s=0;
		$(".M-pieT").find("i").removeClass('M-shine1');
	    $(".M-pieT").find("i").eq(0).addClass('M-shine1');
	    s++;
	}else{
		$(".M-pieT").find("i").removeClass('M-shine1');
	    $(".M-pieT").find("i").eq(s).addClass('M-shine1');
	    s++; 
	
			}
	})
}
//加载地图
var alength;
function loadMap() {
	$.ajax({
		type : "post",
		dataType : "json",
		url : "https://api-development.tq-service.com/v2/tqapp/platformData/data/getUserTotalAreaJson",
		success : function(msg) {
			if(msg.status.status_code==0){
				var html="";
				var data=msg.data;
				$("#total").html(data.user_total[0].total);
				$("#province").html(data.user_total[0].province);
				$("#city").html(data.user_total[0].city);
				for(var i=0;i<data.user_total_area.length;i++){
				if(data.user_total_area[i].province=="新疆"){
					html+="<li class='Z-SF1'><p><img style='padding-right:10px; vertical-align:middle;' src='images/c-mark2.png' width='26' height='25' alt=''/>"+data.user_total_area[i].provinceTotal+"</p><p class='Z-p2'><img src='images/c-Mark1.png' width='41' height='41' alt=''/></p><span>新疆</span></li>";
				}else if(data.user_total_area[i].province=="西藏"){
					html+="<li class='Z-SF2'><p><img style='padding-right:10px; vertical-align:middle;' src='images/c-mark2.png' width='26' height='25' alt=''/>"+data.user_total_area[i].provinceTotal+"</p><p class='Z-p2'><img src='images/c-Mark1.png' width='41' height='41' alt=''/></p><span>甘肃省</span></li>";
				}else if(data.user_total_area[i].province=="甘肃省"){
					html+="<li class='Z-SF3'><p><img style='padding-right:10px; vertical-align:middle;' src='images/c-mark2.png' width='26' height='25' alt=''/>"+data.user_total_area[i].provinceTotal+"</p><p class='Z-p2'><img src='images/c-Mark1.png' width='41' height='41' alt=''/></p><span>西藏</span></li>";
				}else if(data.user_total_area[i].province=="青海"){
					html+="<li class='Z-SF4'><p><img style='padding-right:10px; vertical-align:middle;' src='images/c-mark2.png' width='26' height='25' alt=''/>"+data.user_total_area[i].provinceTotal+"</p><p class='Z-p2'><img src='images/c-Mark1.png' width='41' height='41' alt=''/></p><span>青海</span></li>";
				}else if(data.user_total_area[i].province=="内蒙古"){
					html+="<li class='Z-SF5'><p><img style='padding-right:10px; vertical-align:middle;' src='images/c-mark2.png' width='26' height='25' alt=''/>"+data.user_total_area[i].provinceTotal+"</p><p class='Z-p2'><img src='images/c-Mark1.png' width='41' height='41' alt=''/></p><span>内蒙古</span></li>";
				}else if(data.user_total_area[i].province=="宁夏"){
					html+="<li class='Z-SF6'><p><img style='padding-right:10px; vertical-align:middle;' src='images/c-mark2.png' width='26' height='25' alt=''/>"+data.user_total_area[i].provinceTotal+"</p><p class='Z-p2'><img src='images/c-Mark1.png' width='41' height='41' alt=''/></p><span>宁夏</span></li>";
				}else if(data.user_total_area[i].province=="四川省"){
					html+="<li class='Z-SF7'><p><img style='padding-right:10px; vertical-align:middle;' src='images/c-mark2.png' width='26' height='25' alt=''/>"+data.user_total_area[i].provinceTotal+"</p><p class='Z-p2'><img src='images/c-Mark1.png' width='41' height='41' alt=''/></p><span>四川省</span></li>";
				}else if(data.user_total_area[i].province=="云南省"){
					html+="<li class='Z-SF8'><p><img style='padding-right:10px; vertical-align:middle;' src='images/c-mark2.png' width='26' height='25' alt=''/>"+data.user_total_area[i].provinceTotal+"</p><p class='Z-p2'><img src='images/c-Mark1.png' width='41' height='41' alt=''/></p><span>云南省</span></li>";
				}else if(data.user_total_area[i].province=="山西省"){
					html+="<li class='Z-SF9'><p><img style='padding-right:10px; vertical-align:middle;' src='images/c-mark2.png' width='26' height='25' alt=''/>"+data.user_total_area[i].provinceTotal+"</p><p class='Z-p2'><img src='images/c-Mark1.png' width='41' height='41' alt=''/></p><span>山西省</span></li>";
				}else if(data.user_total_area[i].province=="陕西省"){
					html+="<li class='Z-SF10'><p><img style='padding-right:10px; vertical-align:middle;' src='images/c-mark2.png' width='26' height='25' alt=''/>"+data.user_total_area[i].provinceTotal+"</p><p class='Z-p2'><img src='images/c-Mark1.png' width='41' height='41' alt=''/></p><span>陕西省</span></li>";
				}else if(data.user_total_area[i].province=="湖北省"){
					html+="<li class='Z-SF11'><p><img style='padding-right:10px; vertical-align:middle;' src='images/c-mark2.png' width='26' height='25' alt=''/>"+data.user_total_area[i].provinceTotal+"</p><p class='Z-p2'><img src='images/c-Mark1.png' width='41' height='41' alt=''/></p><span>湖北省</span></li>";
				}else if(data.user_total_area[i].province=="重庆"){
					html+="<li class='Z-SF121'><p><img style='padding-right:10px; vertical-align:middle;' src='images/c-mark2.png' width='26' height='25' alt=''/>"+data.user_total_area[i].provinceTotal+"</p><p class='Z-p2'><img src='images/c-Mark1.png' width='41' height='41' alt=''/></p><span>重庆</span></li>";
				}else if(data.user_total_area[i].province=="重庆市"){
					html+="<li class='Z-SF12'><p><img style='padding-right:10px; vertical-align:middle;' src='images/c-mark2.png' width='26' height='25' alt=''/>"+data.user_total_area[i].provinceTotal+"</p><p class='Z-p2'><img src='images/c-Mark1.png' width='41' height='41' alt=''/></p><span>重庆市</span></li>";
				}else if(data.user_total_area[i].province=="贵州省"){
					html+="<li class='Z-SF13'><p><img style='padding-right:10px; vertical-align:middle;' src='images/c-mark2.png' width='26' height='25' alt=''/>"+data.user_total_area[i].provinceTotal+"</p><p class='Z-p2'><img src='images/c-Mark1.png' width='41' height='41' alt=''/></p><span>贵州省</span></li>";
				}else if(data.user_total_area[i].province=="广西省"){
					html+="<li class='Z-SF14'><p><img style='padding-right:10px; vertical-align:middle;' src='images/c-mark2.png' width='26' height='25' alt=''/>"+data.user_total_area[i].provinceTotal+"</p><p class='Z-p2'><img src='images/c-Mark1.png' width='41' height='41' alt=''/></p><span>广西省</span></li>";
				}else if(data.user_total_area[i].province=="北京市"){
					html+="<li class='Z-SF15'><p><img style='padding-right:10px; vertical-align:middle;' src='images/c-mark2.png' width='26' height='25' alt=''/>"+data.user_total_area[i].provinceTotal+"</p><p class='Z-p2'><img src='images/c-Mark1.png' width='41' height='41' alt=''/></p><span>北京市</span></li>";
				}else if(data.user_total_area[i].province=="河北省"){
					html+="<li class='Z-SF16'><p><img style='padding-right:10px; vertical-align:middle;' src='images/c-mark2.png' width='26' height='25' alt=''/>"+data.user_total_area[i].provinceTotal+"</p><p class='Z-p2'><img src='images/c-Mark1.png' width='41' height='41' alt=''/></p><span>河北省</span></li>";
				}else if(data.user_total_area[i].province=="河南省"){
					html+="<li class='Z-SF17'><p><img style='padding-right:10px; vertical-align:middle;' src='images/c-mark2.png' width='26' height='25' alt=''/>"+data.user_total_area[i].provinceTotal+"</p><p class='Z-p2'><img src='images/c-Mark1.png' width='41' height='41' alt=''/></p><span>河南省</span></li>";
				}else if(data.user_total_area[i].province=="湖南省"){
					html+="<li class='Z-SF18'><p><img style='padding-right:10px; vertical-align:middle;' src='images/c-mark2.png' width='26' height='25' alt=''/>"+data.user_total_area[i].provinceTotal+"</p><p class='Z-p2'><img src='images/c-Mark1.png' width='41' height='41' alt=''/></p><span>湖南省</span></li>";
				}else if(data.user_total_area[i].province=="广东省"){
					html+="<li class='Z-SF19'><p><img style='padding-right:10px; vertical-align:middle;' src='images/c-mark2.png' width='26' height='25' alt=''/>"+data.user_total_area[i].provinceTotal+"</p><p class='Z-p2'><img src='images/c-Mark1.png' width='41' height='41' alt=''/></p><span>广东省</span></li>";
				}else if(data.user_total_area[i].province=="天津市"){
					html+="<li class='Z-SF20'><p><img style='padding-right:10px; vertical-align:middle;' src='images/c-mark2.png' width='26' height='25' alt=''/>"+data.user_total_area[i].provinceTotal+"</p><p class='Z-p2'><img src='images/c-Mark1.png' width='41' height='41' alt=''/></p><span>天津市</span></li>";
				}else if(data.user_total_area[i].province=="山东省"){
					html+="<li class='Z-SF21'><p><img style='padding-right:10px; vertical-align:middle;' src='images/c-mark2.png' width='26' height='25' alt=''/>"+data.user_total_area[i].provinceTotal+"</p><p class='Z-p2'><img src='images/c-Mark1.png' width='41' height='41' alt=''/></p><span>山东省</span></li>";
				}else if(data.user_total_area[i].province=="江苏省"){
					html+="<li class='Z-SF22'><p><img style='padding-right:10px; vertical-align:middle;' src='images/c-mark2.png' width='26' height='25' alt=''/>"+data.user_total_area[i].provinceTotal+"</p><p class='Z-p2'><img src='images/c-Mark1.png' width='41' height='41' alt=''/></p><span>江苏省</span></li>";
				}else if(data.user_total_area[i].province=="安徽省"){
					html+="<li class='Z-SF23'><p><img style='padding-right:10px; vertical-align:middle;' src='images/c-mark2.png' width='26' height='25' alt=''/>"+data.user_total_area[i].provinceTotal+"</p><p class='Z-p2'><img src='images/c-Mark1.png' width='41' height='41' alt=''/></p><span>安徽省</span></li>";
				}else if(data.user_total_area[i].province=="上海市"){
					html+="<li class='Z-SF24'><p><img style='padding-right:10px; vertical-align:middle;' src='images/c-mark2.png' width='26' height='25' alt=''/>"+data.user_total_area[i].provinceTotal+"</p><p class='Z-p2'><img src='images/c-Mark1.png' width='41' height='41' alt=''/></p><span>上海市</span></li>";
				}else if(data.user_total_area[i].province=="浙江省"){
					html+="<li class='Z-SF25'><p><img style='padding-right:10px; vertical-align:middle;' src='images/c-mark2.png' width='26' height='25' alt=''/>"+data.user_total_area[i].provinceTotal+"</p><p class='Z-p2'><img src='images/c-Mark1.png' width='41' height='41' alt=''/></p><span>浙江省</span></li>";
				}else if(data.user_total_area[i].province=="江西省"){
					html+="<li class='Z-SF26'><p><img style='padding-right:10px; vertical-align:middle;' src='images/c-mark2.png' width='26' height='25' alt=''/>"+data.user_total_area[i].provinceTotal+"</p><p class='Z-p2'><img src='images/c-Mark1.png' width='41' height='41' alt=''/></p><span>江西省</span></li>";
				}else if(data.user_total_area[i].province=="福建省"){
					html+="<li class='Z-SF27'><p><img style='padding-right:10px; vertical-align:middle;' src='images/c-mark2.png' width='26' height='25' alt=''/>"+data.user_total_area[i].provinceTotal+"</p><p class='Z-p2'><img src='images/c-Mark1.png' width='41' height='41' alt=''/></p><span>福建省</span></li>";
				}else if(data.user_total_area[i].province=="黑龙江省"){
					html+="<li class='Z-SF28'><p><img style='padding-right:10px; vertical-align:middle;' src='images/c-mark2.png' width='26' height='25' alt=''/>"+data.user_total_area[i].provinceTotal+"</p><p class='Z-p2'><img src='images/c-Mark1.png' width='41' height='41' alt=''/></p><span>黑龙江省</span></li>";
				}else if(data.user_total_area[i].province=="吉林省"){
					html+="<li class='Z-SF29'><p><img style='padding-right:10px; vertical-align:middle;' src='images/c-mark2.png' width='26' height='25' alt=''/>"+data.user_total_area[i].provinceTotal+"</p><p class='Z-p2'><img src='images/c-Mark1.png' width='41' height='41' alt=''/></p><span>吉林省</span></li>";
				}else if(data.user_total_area[i].province=="辽宁省"){
					html+="<li class='Z-SF30'><p><img style='padding-right:10px; vertical-align:middle;' src='images/c-mark2.png' width='26' height='25' alt=''/>"+data.user_total_area[i].provinceTotal+"</p><p class='Z-p2'><img src='images/c-Mark1.png' width='41' height='41' alt=''/></p><span>辽宁省</span></li>";
				}else if(data.user_total_area[i].province=="台湾"){
					html+="<li class='Z-SF31'><p><img style='padding-right:10px; vertical-align:middle;' src='images/c-mark2.png' width='26' height='25' alt=''/>"+data.user_total_area[i].provinceTotal+"</p><p class='Z-p2'><img src='images/c-Mark1.png' width='41' height='41' alt=''/></p><span>台湾</span></li>";
				}else if(data.user_total_area[i].province=="香港"){
					html+="<li class='Z-SF32'><p><img style='padding-right:10px; vertical-align:middle;' src='images/c-mark2.png' width='26' height='25' alt=''/>"+data.user_total_area[i].provinceTotal+"</p><p class='Z-p2'><img src='images/c-Mark1.png' width='41' height='41' alt=''/></p><span>香港</span></li>";
				}else if(data.user_total_area[i].province=="澳门"){
					html+="<li class='Z-SF33'><p><img style='padding-right:10px; vertical-align:middle;' src='images/c-mark2.png' width='26' height='25' alt=''/>"+data.user_total_area[i].provinceTotal+"</p><p class='Z-p2'><img src='images/c-Mark1.png' width='41' height='41' alt=''/></p><span>澳门</span></li>";
				}else if(data.user_total_area[i].province=="海南省"){
					html+="<li class='Z-SF34'><p><img style='padding-right:10px; vertical-align:middle;' src='images/c-mark2.png' width='26' height='25' alt=''/>"+data.user_total_area[i].provinceTotal+"</p><p class='Z-p2'><img src='images/c-Mark1.png' width='41' height='41' alt=''/></p><span>海南省</span></li>";
				}
				}
				$("#map").html(html);
				$('.Z-map li').eq(0).addClass('Z-SFon');
		        $('.Z-map li .Z-p2').html("<img src='images/c-Mark1.png' width='41' height='41' alt=''/>");
		        $('.Z-map .Z-SFon .Z-p2').html("<i class='Z-dot1'></i><i class='Z-dot2'></i><i class='Z-dot3'></i>");
				alength=$('.Z-map li').length;
			}else{
              alert("获取数据失败");
			}
		}
	});	
}
//加载用户量数据
function loadUserAcount() {
	$.ajax({
		type: "post",
		dataType: "json",
		url: "https://api-development.tq-service.com/v2/tqapp/platformData/data/getUserAmountJson",
		success: function(msg) {
			if(msg.status.status_code == 0) {
				var html = "";
				var data = msg.data;
				for(var i = 0; i < data.length; i++) {
					if(data[i].system_os == 'IOS') { //IOS用户
						$("#iosUserNum").html(data[i].count);
					} else if(data[i].system_os == 'Android') { //安卓用户
						$("#androidUserNum").html(data[i].count);
					}else if(data[i].system_os='other'){
						$("#unknowUserNum").html(data[i].count);
					}
				}
			} else {
				alert("获取数据失败");
			}
		}
	});
}
//加载用户存留率数据
function loadRetentionData(retenNum) {
	$.ajax({
		type: "post",
		dataType: "json",
		url: "https://api-development.tq-service.com/v2/tqapp/platformData/data/getUserRetentionRateJson",
		success: function(msg) {
			if(msg.status.status_code == 0) {
				var html = "";
				var data = msg.data;
				var xData = ['次日', '3日', '7日', '14日'];
				var serData = [];
				serData.push(data[0].rate);
				serData.push(data[0].rate3);
				serData.push(data[0].rate7);
				serData.push(data[0].rate14);
				var name = "用户存留率" + retenNum;
				var myChart = echarts.init(document.getElementById('quxian2'));
				myChart.setOption((LineChart1(xData, serData, name)), true);
			} else {
				alert("获取数据失败");
			}
		}
	});
}

/**
 * 加载活动top5数据
 */
function loadTop5Data() {
	$.ajax({
		type: "post",
		dataType: "json",
		url: "https://api-development.tq-service.com/v2/tqapp/platformData/data/getActivityRankingJson",
		success: function(msg) {
			if(msg.status.status_code == 0) {
				var html = "";
				var data = msg.data;
				for(var i = 0; i < data.length; i++) {
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
//加载爱心送温暖活动数据
function loadCaringActivities(){
	$.ajax({
		type: "post",
		dataType: "json",
		url: "https://api-development.tq-service.com/v2/tqapp/platformData/data/getCaringActivitiesJson",
		success: function(msg) {
			if(msg.status.status_code == 0) {
				var html = "";
				var data = msg.data;
				$("#comunityTotal").html(data.comunityTotal);
				$("#totalUser").html(data.total);
				$("#signUser").html(data.signUser);
				$("#participation").html(data.participation+"%");
			} else {
				alert("获取数据失败");
			}
		}
	});
}
//加载用户绑定数
function loadUserBindCount(){
	$.ajax({
		type: "post",
		dataType: "json",
		url: "https://api-development.tq-service.com/v2/tqapp/platformData/data/getUserBindCountJson",
		success: function(msg) {
			if(msg.status.status_code == 0) {
				var html = "";
				var data = msg.data;
				$("#APP_USER").html(data[0].APP_USER);
				$("#month_USER").html(data[0]._MONTH);
				$("#week_USER").html(data[0]._WEEK);
				$("#HOUSE_BIND_RATE").html(data[0].HOUSE_BIND_RATE+"%");
				$("#day_USER").html(data[0]._DAY);
				$("#HOUSE_BIND").html(data[0].HOUSE_BIND);
			} else {
				alert("获取数据失败");
			}
		}
	});
}
//加载用户交易数据
function loadUserOnline(){
     $.ajax({
		type: "post",
		dataType: "json",
		url: "https://api-development.tq-service.com/v2/tqapp/platformData/data/getUserOnlineTransactionJson",
		success: function(msg) {
			if(msg.status.status_code == 0) {
				var html = "";
				var data = msg.data;
				$("#newUser").html(data[0].new_user);
				$("#newUserPercent").html(" "+data[0].new_user_rate+"%");
				$("#oldUser").html(data[0].old_user);
				$("#oldUserPercent").html(" "+data[0].old_user_rate+"%");
				userOnlineCircle(data[0].new_user_rate,data[0].old_user_rate)
			} else {
				alert("获取数据失败");
			}
		}
	});
}
//用户在线交易动画
function userOnlineCircle(p1,p2){
	 $(".circleChart#1").circleChart({
            size:230,
			color: "#0062AB",
            value: p1,
			backgroundColor: "rgba(0,0,0,0)",
        });

		$(".circleChart#2").circleChart({
            size: 230,
            value: p2,
			color: "#4A90E2",
			backgroundColor: "rgba(0,0,0,0)",
            text: 0,
            onDraw: function(el, circle) {
                circle.text(Math.round(circle.value) + "%");
            }
        });
}
