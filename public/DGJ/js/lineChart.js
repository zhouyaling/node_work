
function LineChart(xAxisData, seriesDataPV,seriesDataUV,pvName,uvName) {
	var option = {
		title: {
        text: '',
        left: 'center'
		},
		animation: {
			animationEasing: 'SinusoidalIn'
		},
		tooltip: {
			trigger: 'axis'
		},
		color: ['#0075FC', '#50E3C2'],
		grid: {
			x: 40,
			x2: 40,
			y: 25,
			height: 250,
			borderWidth: 0
		},
		calculable: true,
		xAxis: [{
			type: 'category',
			boundaryGap: false,
			splitLine: {
				show: true,
				lineStyle: {
					color: '#003B9A', //网格线颜色
					width: 1, //网格线宽度
					type: 'solid' //网格线样式
				}
			},
			axisLabel: {
				textStyle: {
					color: "#fff", //刻度线标签颜色,
				}
			},
			axisLine: {
				lineStyle: {
					color: '#186AE7', //左边线的颜色
					width: '2', //坐标线的宽度
				}
			},
			axisTick:{
            	show:false,
            	inside:true,
            	lineStyle:{
            		color:'#003B9A',
            	}
            },
			data:xAxisData
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
				textStyle: {
					color: "#fff", //刻度线标签颜色,
				}
			},
			axisLine: {
				lineStyle: {
					color: '#186AE7', //左边线的颜色
					width: '2' //坐标线的宽度
				}
			},
			axisTick:{
            	show:false,
            },
		}],
		series: [{
		name: pvName,
		type: 'line',
		symbol: 'circle',
		symbolSize: 8,
		data: seriesDataPV,
		smooth: true,
		itemStyle: {
			normal: {
				color:'#50E3C2',
				lineStyle: {
					color: '#0075FC'
				}
			}
		}
	},
	{
		name: uvName,
		type: 'line',
		smooth: true,
		symbol: 'circle',
		symbolSize: 8,
		data: seriesDataUV,
		itemStyle: {
			normal: {
				color: '#0075FC',
				lineStyle: {
					color: '#50E3C2'
				}
			}
		}
	}
]
	};
	return option;
}