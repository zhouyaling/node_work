//初始化折线图堆叠

function LineChart1( xAxisData, seriesData,name) {
	var option = {
		title: {

		},
		animation: {
			animationEasing: 'SinusoidalIn'
		},
		tooltip: {
			trigger: 'axis'
		},
		grid: {
			x: 40,
			x2: 40,
			y: 25,
			height: 170,
			borderWidth: 0
		},
		calculable: true,
		xAxis: [{
			type: 'category',
			boundaryGap: false,
			splitLine: {
				show: false,
			},
			axisLabel: {
				textStyle: {
					color: " #FFFFFF", //刻度线标签颜色,
					fontSize:14
				}
			},
			axisLine: {
				lineStyle: {
					color: '#186AE7', //左边线的颜色
					width: 2 ,//坐标线的宽度
                     
				}
			},
			axisTick:{
            	show:true,
            	inside:true,
            	lineStyle:{
            		color:'#003B9A',
            	}
            },
			data: xAxisData
		}],
		yAxis: [{
			type: 'value',
			splitLine: {
				show: true,
				lineStyle: {
					color: '#003B9A', //网格线颜色
					width: 1, //网格线宽度
					type: 'solid' //网格线样式
				}
			},
			axisLabel: {
				show:false
			},
			axisLine: {
				lineStyle: {
					color: '#186AE7', //左边线的颜色
					width: 2, //坐标线的宽度
				    
				}
			},
			axisTick:{
            	show:false
            },
		}],
		series: [{
		name: name,
		type: 'line',
		symbol: 'circle',
		symbolSize: 8,
		data: seriesData,
		smooth: true,
        "itemStyle": {
                "normal": {
                    "color": '#50E3C2',
                    "barBorderRadius": 0,
                    "label": {
                        "show": true,
                        "position": "top",
                        formatter: function(p) {
                            return p.value > 0 ? (p.value)+'%' : '';
                        },
                        textStyle:{
						color:'#fff'
					}
                    },
                    lineStyle: {
					color: "#186AE7",
				},
                }
            }
}
]
	};
	return option;
}