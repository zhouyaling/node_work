// option)
function getBarChart(xData,serData1,serData2) {
	option = {

		grid: {
			x: 40,
			x2: 40,
			y: 25,
			height: 200,
			width: 250,
			borderWidth: 0
		},
		animationDurationUpdate: 1200,
		xAxis: [{
			data: xData,
			axisLine: {
				show: false,
				lineStyle: {
					color: '#ccc'
				},
				textStyle: {
					fontSize: 14
				}
			},
			axisTick: {
				show: false,
				inside: true,
				alignWithLabel: true,
				lineStyle: {
					color: '#186AE7',
				}
			}
		},{
			data: serData2,
			axisLine: {
				show: false,
				lineStyle: {
					color: '#ccc'
				},
				textStyle: {
					fontSize: 14
				}
			},
			axisTick: {
				show: false,
				inside: true,
				alignWithLabel: true,
				lineStyle: {
					color: '#186AE7',
				}
			}
		
		}
		],
		yAxis: {
			splitLine: {
				show: false
			},
			axisLine: {
				show: false,
				lineStyle: {
					color: '#ccc'
				}
			},
			axisTick: {
				show: false,
				inside: true,
				alignWithLabel: true,
				lineStyle: {
					color: '#186AE7',
				}
			},
			splitLine: {
				show: true,
				lineStyle: {
					color: '#1A305A', //网格线颜色
					width: 2, //网格线宽度
					type: 'solid' //网格线样式
				}
			}
		},
		series: [{

			type: 'bar',
			itemStyle: {
				normal: {
					color: 'rgba(255,255,255,0.3)'
				}
			},
			silent: true,
			barWidth: 25,
			barGap: '-100%', // Make series be overlap
			data: serData1

		}, {
			name: 'dotted',
			type: 'pictorialBar',
			itemStyle: {
				normal: {
					color: '#fff'
				}
			},
			barGap: 1,
			symbolRepeat: true,
			symbolSize: [25, 2.2],
			symbolMargin: 1,
			data: serData2
		}]
	};
	return option;
}