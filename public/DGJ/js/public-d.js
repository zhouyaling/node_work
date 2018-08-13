$(function() {
//加载报事数据
loadReportStatistics();


//线上满意度
loadOnlineData();
//加载地图
loadMap();
var mapNum = 0;
//每隔5s加载一次地图
$('body').everyTime('5s', function() {
	mapNum++;
	if(mapNum == alength) {
		mapNum = 0;
	}
	$('.M-dmap li').removeClass('M-SFon');
	$('.M-dmap li').eq(mapNum).addClass('M-SFon');
})
//加载人力分布
loadManpowerData();
//加载物业管理数据
loadPropertyManage(0);
//加载接房验房数据
loadHourseData();
//使用情况数据
loadServiceCondition();
//设备建档数据
// loadEquipmentFiling();
//家庭建档数据
// loadFamilyFilingData();
//安全管理数据
loadManagement();
//加载监控数据
loadAlarmMonitoring();
});

//加载报事数据
function loadReportStatistics() {
	$.ajax({
		type: "post",
		dataType: "json",
		data: {
			token: 'a1b2958086547c1c26309s8fd74155a5d11'
		},
		url: "http://api.tq-service.com/cruise/bigDataInterface/reportStatistics",
		success: function(msg) {
			if(msg.status.status_code == 0) {
				var data = msg.data;
				$("#baoshiNum").html(data[0].reportNum);
				if(data[0].zhoutongbi >= 0) {
					$("#weekPercent").html("周同比<img src='images/d-gr.png' width='10' height='8' alt='' >" + data[0].zhoutongbi + "%");
				} else {
					$("#weekPercent").html("周同比<img src='images/d-red.png' width='10' height='8' alt='' >" + data[0].zhoutongbi + "%");
				}
				if(data[0].annularRatio >= 0) {
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
				if(data[0].completionWeekRate >= 0) {
					$("#weekFinish").html("周同比<img src='images/d-gr.png' width='10' height='8' alt='' >" + data[0].completionWeekRate + "%");
				} else {
					$("#weekFinish").html("周同比<img src='images/d-red.png' width='10' height='8' alt='' >" + data[0].completionWeekRate + "%");
				}
				if(data[0].completionDailyRate >= 0) {
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


//加载线上满意度数据
function loadOnlineData() {
	$.ajax({
		type: "post",
		dataType: "json",
		data: {
			token: 'a1b2958086547c1c26309s8fd74155a5d11'
		},
		url: "http://api.tq-service.com/cruise/bigDataInterface/noData",
		success: function(msg) {
			if(msg.status.status_code == 0) {
				var data = pleasedOnelineData[0].gjcName;
				var html = "";
				for(var i = 0; i < data.length; i++) {
					html += "<span id='tg" + (i + 1) + "'>" + data[i].name + "</span>";
				}
				$("#gjcName").html(html);
				$("#pleasedPercent").html(pleasedOnelineData[1].pleasedPercent);
				
			} else {
				alert("获取数据失败");
			}
		}
	});
}
//加载地图
var alength ;
function loadMap() {
	$.ajax({
		type: "post",
		dataType: "json",
		data: {
			token: 'a1b2958086547c1c26309s8fd74155a5d11'
		},
		url: "https://api-development.tq-service.com/v2/tqapp/platformData/data/getUserTotalAreaJson",
		success: function(msg) {
			if(msg.status.status_code == 0) {
				var data = msg.data.user_total_area;
                var html = "";
				for(var i = 0; i < data.length; i++) {
					if(data[i].province == "新疆") {
						html += "<li class='M-SF1'><p><i class='M-dot1'></i><i class='M-dot2'></i><i class='M-dot3'></i></p><span>新疆</span></li>";
					} else if(data[i].province == "西藏") {
						html += "<li class='M-SF2'><p><i class='M-dot1'></i><i class='M-dot2'></i><i class='M-dot3'></i></p><span>西藏</span></li>";
					} else if(data[i].province == "甘肃省") {
						html += "<li class='M-SF3'><p><i class='M-dot1'></i><i class='M-dot2'></i><i class='M-dot3'></i></p><span>甘肃省</span></li>";
					} else if(data[i].province == "青海") {
						html += "<li class='M-SF4'><p><i class='M-dot1'></i><i class='M-dot2'></i><i class='M-dot3'></i></p><span>青海</span></li>";
					} else if(data[i].province == "内蒙古") {
						html += "<li class='M-SF5'><p><i class='M-dot1'></i><i class='M-dot2'></i><i class='M-dot3'></i></p><span>内蒙古</span></li>";
					} else if(data[i].province == "宁夏") {
						html += "<li class='M-SF6'><p><i class='M-dot1'></i><i class='M-dot2'></i><i class='M-dot3'></i></p><span>宁夏</span></li>";
					} else if(data[i].province == "四川省") {
						html += "<li class='M-SF7'><p><i class='M-dot1'></i><i class='M-dot2'></i><i class='M-dot3'></i></p><span>四川省</span></li>";
					} else if(data[i].province == "云南省") {
						html += "<li class='M-SF8'><p><i class='M-dot1'></i><i class='M-dot2'></i><i class='M-dot3'></i></p><span>云南省</span></li>";
					} else if(data[i].province == "山西省") {
						html += "<li class='M-SF9'><p><i class='M-dot1'></i><i class='M-dot2'></i><i class='M-dot3'></i></p><span>山西省</span></li>";
					} else if(data[i].province == "陕西省") {
						html += "<li class='M-SF10'><p><i class='M-dot1'></i><i class='M-dot2'></i><i class='M-dot3'></i></p><span>陕西省</span></li>";
					} else if(data[i].province == "湖北省") {
						html += "<li class='M-SF11'><p><i class='M-dot1'></i><i class='M-dot2'></i><i class='M-dot3'></i></p><span>湖北省</span></li>";
					} else if(data[i].province == "重庆市") {
						html += "<li class='M-SF12'><p><i class='M-dot1'></i><i class='M-dot2'></i><i class='M-dot3'></i></p><span>重庆市</span></li>";
					} else if(data[i].province == "贵州省") {
						html += "<li class='M-SF13'><p><i class='M-dot1'></i><i class='M-dot2'></i><i class='M-dot3'></i></p><span>贵州省</span></li>";
					} else if(data[i].province == "广西省") {
						html += "<li class='M-SF14'><p><i class='M-dot1'></i><i class='M-dot2'></i><i class='M-dot3'></i></p><span>广西省</span></li>";
					} else if(data[i].province == "北京市") {
						html += "<li class='M-SF15'><p><i class='M-dot1'></i><i class='M-dot2'></i><i class='M-dot3'></i></p><span>北京市</span></li>";
					} else if(data[i].province == "河北省") {
						html += "<li class='M-SF16'><p><i class='M-dot1'></i><i class='M-dot2'></i><i class='M-dot3'></i></p><span>河北省</span></li>";
					} else if(data[i].province == "河南省") {
						html += "<li class='M-SF17'><p><i class='M-dot1'></i><i class='M-dot2'></i><i class='M-dot3'></i></p><span>河南省</span></li>";
					} else if(data[i].province == "湖南省") {
						html += "<li class='M-SF18'><p><i class='M-dot1'></i><i class='M-dot2'></i><i class='M-dot3'></i></p><span>湖南省</span></li>";
					} else if(data[i].province == "广东省") {
						html += "<li class='M-SF19'><p><i class='M-dot1'></i><i class='M-dot2'></i><i class='M-dot3'></i></p><span>广东省</span></li>";
					} else if(data[i].province == "天津市") {
						html += "<li class='M-SF20'><p><i class='M-dot1'></i><i class='M-dot2'></i><i class='M-dot3'></i></p><span>天津市</span></li>";
					} else if(data[i].province == "山东省") {
						html += "<li class='M-SF21'><p><i class='M-dot1'></i><i class='M-dot2'></i><i class='M-dot3'></i></p><span>山东省</span></li>";
					} else if(data[i].province == "江苏省") {
						html += "<li class='M-SF22'><p><i class='M-dot1'></i><i class='M-dot2'></i><i class='M-dot3'></i></p><span>江苏省</span></li>";
					} else if(data[i].province == "安徽省") {
						html += "<li class='M-SF23'><p><i class='M-dot1'></i><i class='M-dot2'></i><i class='M-dot3'></i></p><span>安徽省</span></li>";
					} else if(data[i].province == "上海市") {
						html += "<li class='M-SF24'><p><i class='M-dot1'></i><i class='M-dot2'></i><i class='M-dot3'></i></p><span>上海市</span></li>";
					} else if(data[i].province == "浙江省") {
						html += "<li class='M-SF25'><p><i class='M-dot1'></i><i class='M-dot2'></i><i class='M-dot3'></i></p><span>浙江省</span></li>";
					} else if(data[i].province == "江西省") {
						html += "<li class='M-SF26'><p><i class='M-dot1'></i><i class='M-dot2'></i><i class='M-dot3'></i></p><span>江西省</span></li>";
					} else if(data[i].province == "福建省") {
						html += "<li class='M-SF27'><p><i class='M-dot1'></i><i class='M-dot2'></i><i class='M-dot3'></i></p><span>福建省</span></li>";
					} else if(data[i].province == "黑龙江省") {
						html += "<li class='M-SF28'><p><i class='M-dot1'></i><i class='M-dot2'></i><i class='M-dot3'></i></p><span>黑龙江省</span></li>";
					} else if(data[i].province == "吉林省") {
						html += "<li class='M-SF29'><p><i class='M-dot1'></i><i class='M-dot2'></i><i class='M-dot3'></i></p><span>吉林省</span></li>";
					} else if(data[i].province == "辽宁省") {
						html += "<li class='M-SF30'><p><i class='M-dot1'></i><i class='M-dot2'></i><i class='M-dot3'></i></p><span>辽宁省</span></li>";
					} else if(data[i].province == "台湾") {
						html += "<li class='M-SF31'><p><i class='M-dot1'></i><i class='M-dot2'></i><i class='M-dot3'></i></p><span>台湾</span></li>";
					} else if(data[i].province == "香港") {
						html += "<li class='M-SF32'><p><i class='M-dot1'></i><i class='M-dot2'></i><i class='M-dot3'></i></p><span>香港</span></li>";
					} else if(data[i].province == "澳门") {
						html += "<li class='M-SF33'><p><i class='M-dot1'></i><i class='M-dot2'></i><i class='M-dot3'></i></p><span>澳门</span></li>";
					} else if(data[i].province == "海南省") {
						html += "<li class='M-SF34'><p><i class='M-dot1'></i><i class='M-dot2'></i><i class='M-dot3'></i></p><span>海南省</span></li>";
					}
				}
				$("#map").html(html);
				$('.M-dmap li').eq(0).addClass('M-SFon');
				alength = $('.M-dmap li').length;
			} else {
				alert("获取数据失败");
			}
		}
	});
}
//加载人力分布数据
function loadManpowerData(){
	$.ajax({
		type: "post",
		dataType: "json",
		data: {
			token: 'a1b2958086547c1c26309s8fd74155a5d11'
		},
		url: "http://api.tq-service.com/cruise/bigDataInterface/knowledge",
		success: function(msg) {
			if(msg.status.status_code == 0) {
				var data = msg.data[0].knowledgeData;
				$("#totals").html(data.totals);
				$("#dailyNum").html(data.dailyNum);
			} else {
				alert("获取数据失败");
			}
		}
	});
}
//加载物业管理数据
function loadPropertyManage(num){
	$.ajax({
		type: "post",
		dataType: "json",
		data: {
			token: 'a1b2958086547c1c26309s8fd74155a5d11'
		},
		url: "http://api.tq-service.com/cruise/bigDataInterface/propertyManage",
		success: function(msg) {
		if(msg.status.status_code == 0) {
				var data = msg.data[1].patrolData;
				$("#allPercent").html(data.reportRate+"%");
	            $("#allCount").html(data.totals);
	            $("#allNumber").html(data.dayNum);
	            if(num==0){//初次加载
	            	  //人力分布数据
	            var data2=msg.data[0].personData;
	            $("#engineeringManage").html(data2.engineeringManage+"%");
	            $("#environmentalManage").html(data2.environmentalManage+"%");
	            $("#securityManage").html(data2.securityManage+"%");
	            $("#serviceManage").html(data2.serviceManage+"%");
	            properManageCircle(data2.securityManage,data2.engineeringManage,data2.environmentalManage,data2.serviceManage);
	            }else{}
			} else {
				alert("获取数据失败");
			}
		}
	});
}
//画人力分布数据圆圈
function properManageCircle(p1,p2,p3,p4){
	var p1 = new Progress({//安全
        el:'my_html',//canvas元素id
        deg:p1,//绘制角度
        timer:10,//绘制时间
        lineWidth:3,//线宽
        lineBgColor:'#443625',//底圆颜色
        lineColor:'#fff',//动态圆颜色
        textColor:'rgba(0,0,0,0)',//文本颜色
        fontSize:14,//字体大小
        circleRadius:100//圆半径
    });
	var p2 = new Progress({//工程
        el:'my_html1',//canvas元素id
        deg:p2,//绘制角度
        timer:10,//绘制时间
        lineWidth:3,//线宽
        lineBgColor:'#443625',//底圆颜色
        lineColor:'#fff',//动态圆颜色
        textColor:'rgba(0,0,0,0)',//文本颜色
        fontSize:14,//字体大小
        circleRadius:100//圆半径
    });
	var p3 = new Progress({//环境
        el:'my_html2',//canvas元素id
        deg:p3,//绘制角度
        timer:10,//绘制时间
        lineWidth:3,//线宽
        lineBgColor:'#443625',//底圆颜色
        lineColor:'#fff',//动态圆颜色
        textColor:'rgba(0,0,0,0)',//文本颜色
        fontSize:14,//字体大小
        circleRadius:100//圆半径
    });
	var p4 = new Progress({//客服
        el:'my_html3',//canvas元素id
        deg:p4,//绘制角度
        timer:10,//绘制时间
        lineWidth:3,//线宽
        lineBgColor:'#443625',//底圆颜色
        lineColor:'#fff',//动态圆颜色
        textColor:'rgba(0,0,0,0)',//文本颜色
        fontSize:14,//字体大小
        circleRadius:100//圆半径
    });
}
//加载接房验房数据
function loadHourseData(){
	$.ajax({
		type: "post",
		dataType: "json",
		data: {
			token: 'a1b2958086547c1c26309s8fd74155a5d11'
		},
		url: "http://api.tq-service.com/cruise/bigDataInterface/noData",
		success: function(msg) {
			if(msg.status.status_code == 0) {
				var data = houseData;
				var htmlAccept="";
				var htmlCheck="";
				for(var i=0;i<data[0].acceptHouser.length;i++){
					htmlAccept+="<td><div class='M-pbar'><span style='width:"+data[0].acceptHouser[i]+"%;'><em>"+data[0].acceptHouser[i]+"%</em></span></div></td>";
				}
				for(var i=0;i<data[1].checkHouser.length;i++){
					htmlCheck+="<td style='width:160px;'><div class='M-pbar'><span style='width:"+data[1].checkHouser[i]+"%;'><em>"+data[1].checkHouser[i]+"%</em></span></div></td>";
				}
				//模板
				// htmlCheck+="<td  style='width:160px;'><div class='M-pbar'><span style='width:0%;'><em></em></span></div></td>";

				$("#acceptHourse").html(htmlAccept);
				$("#checkHourse").html(htmlCheck);
			} else {
				alert("获取数据失败");
			}
		}
	});
}
//加载使用情况数据
function loadServiceCondition(){
	$.ajax({
		type: "post",
		dataType: "json",
		data: {
			token: 'a1b2958086547c1c26309s8fd74155a5d11'
		},
		url: "http://api.tq-service.com/cruise/bigDataInterface/noData",
		success: function(msg) {
			if(msg.status.status_code == 0) {
				var data = serviceCondition;
				 $("#hotTop1Name").html("TOP1&nbsp;&nbsp;"+data[0].hotData[0].name);
				 $("#hotTop1Num").html(data[0].hotData[0].num);
				 $("#hotTop2Name").html("TOP2&nbsp;&nbsp;"+data[0].hotData[1].name);
				 $("#hotTop2Num").html(data[0].hotData[1].num);
				 $("#projectTop1Name").html("TOP1&nbsp;&nbsp;"+data[1].projectData[0].name);
				 $("#projectTop1Num").html(data[1].projectData[0].num);
				 $("#projectTop2Name").html("TOP2&nbsp;&nbsp;"+data[1].projectData[1].name);
				 $("#projectTop2Num").html(data[1].projectData[1].num);
			} else {
				alert("获取数据失败");
			}
		}
	});
}

//设备建档数据数组
var clss;
var arr;
var arr1;
var arr2;
//加载设备建档数据
function loadEquipmentFiling(){
	$.ajax({
		type: "post",
		dataType: "json",
		data: {
			token: 'a1b2958086547c1c26309s8fd74155a5d11'
		},
		url: "http://api.tq-service.com/cruise/bigDataInterface/noData",
		success: function(msg) {
			if(msg.status.status_code == 0) {
				clss=['one','two','three','four','five'];
				arr=['89.4','99'];
				arr1=['3678','218','236'];
				arr2=['合同完整度','档案完整率','设备总数','设备类别','供应商库'];
				var sc=null;
               document.getElementById("inner").innerHTML='';
               sc=new Screen('inner',{ballsnum:clss.length, spring:0.3, bounce:-0.9, gravity:0.01});
               sc.initialize();
			} else {
				alert("获取数据失败");
			}
		}
	});
}
//加载家庭建档数据
function loadFamilyFilingData(){
	$.ajax({
		type: "post",
		dataType: "json",
		data: {
			token: 'a1b2958086547c1c26309s8fd74155a5d11'
		},
		url: "http://api.tq-service.com/cruise/bigDataInterface/noData",
		success: function(msg) {
			if(msg.status.status_code == 0) {
				var data=familyFilingData[0].baseData;
				$("#ownersTotal").html(data.ownersTotal);
				$("#projectTotals").html("项目总数"+data.projectTotals+"个");
				$("#houseNum").html(data.houseNum);
				$("#houseTotals").html("所有房屋"+data.houseTotals);
				$("#houseUnsoldNum").html("未售房屋"+data.houseUnsoldNum);
				$("#constructionRate").html(data.constructionRate);
				//柱形图数据
				var barChart = echarts.init(document.getElementById('barChart'));
				var xData=familyFilingData[1].barData.barXData;
				var serData1=familyFilingData[1].barData.barSerData1;
				var serData2=familyFilingData[1].barData.barSerData2;
	            barChart.setOption(getBarChart(xData,serData1,serData2));
			} else {
				alert("获取数据失败");
			}
		}
	});
}
//加载安全管理数据
function loadManagement(){
	$.ajax({
		type: "post",
		dataType: "json",
		data: {
			token: 'a1b2958086547c1c26309s8fd74155a5d11'
		},
		url: "http://api.tq-service.com/cruise/bigDataInterface/noData",
		success: function(msg) {
			if(msg.status.status_code == 0) {
				var data=securityManagementData[0].equipmentTrouble;
				var htmlEquipment="";
				var htmlProject="";
				for(var i=0;i<data.length;i++){
					htmlEquipment+="<dl class='M-dlrate cl'>";
					htmlEquipment+="<dt>"+data[i].percent+"<sup>%</sup></dt>";
					htmlEquipment+="<dd><div><span style='width:"+data[i].percent+"%;'></span></div>";
					htmlEquipment+="<p>"+data[i].name+"</p></dd></dl>";
				}
				$("#equipmentTrouble").html(htmlEquipment);
				var data2=securityManagementData[1].projectFailure;
				for(var i=0;i<data2.length;i++){
					htmlProject+="<dl class='M-dlrate cl'>";
					htmlProject+="<dt>"+data2[i].percent+"<sup>%</sup></dt>";
					htmlProject+="<dd><div><span style='width:"+data2[i].percent+"%;'></span></div>";
					htmlProject+="<p>"+data2[i].name+"</p></dd></dl>";
				}
				$("#projectFailure").html(htmlProject);
			} else {
				alert("获取数据失败");
			}
		}
	});
}
//加载报警监控数据
function loadAlarmMonitoring(){
	$.ajax({
		type: "post",
		dataType: "json",
		data: {
			token: 'a1b2958086547c1c26309s8fd74155a5d11'
		},
		url: "http://api.tq-service.com/cruise/bigDataInterface/noData",
		success: function(msg) {
			if(msg.status.status_code == 0) {
				var data=AlarmMonitoringData;
				$("#nomalNumAlarm").html(data.nomalNumAlarm);
				$("#unusualNumAlarm").html(data.unusualNumAlarm);
				$("#alarmPercent").html(data.alarmPercent);
				$('.counter').countUp();//数字自增
			} else {
				alert("获取数据失败");
			}
		}
	});
}


