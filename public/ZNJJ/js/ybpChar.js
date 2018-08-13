
function detectionData(str) {
    var color = new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                        offset: 0,
                        color: '#fff'
                    }, {
                          offset:1,
                       color: '#fff'
                    }]);
    return color;
}


function getYbpOption(myChart,number){
	
var option = {
    tooltip: {
        formatter: "{a} <br/>{b} : {c}%"
    },
    series: [{
        name: "仪盘表",
        type: "gauge",
        splitNumber:40,
        radius:'100%',
        startAngle:238,
        endAngle:-50,
        axisLine: {//设置背景颜色
            "lineStyle": {
                "color": [
                    [0, "#998061"],
                    [1, "#998061"]
                ],
                shadowColor: 'transparent',
                shadowBlur: 10,
                "width":10,
            },
            show:true,
        },
        axisTick: {//设置大刻度颜色
            lineStyle: {
                 "color": '#21211d',
                width:5.5,
                type:'solid',
                opacity:'1'
            },
            length: 10,
            splitNumber:1,
            
        },
          pointer: {           // 分隔线
                show:false
            },
        axisLabel: {
          
            show:false,
        },
        splitLine: {
            "show": false
        },
        
        detail: {
            show:false,
            formatter: "{value}%",
            offsetCenter: [0, "30%"],
            textStyle: {
                fontSize: 60,
                color: "#fff"
            }
        },
        title: {
            offsetCenter: [0, "60%"]
        },
        data: [{
            name: "",
            value: 31
        }]
    }]
}
var value =0;
timeTicket = setInterval(function() {
    if(value<number){
        value+=2
    }else{
    }
    
    option.series[0].data[0].value = value;
    option.series[0].axisLine.lineStyle.color[0][0] = value / 100;
    option.series[0].axisLine.lineStyle.color[0][1] = detectionData(value);
    //option.series[0].axisTick.lineStyle.color='#fff';
    myChart.setOption(option, true);
}, 60);
 myChart.setOption(option);
}
