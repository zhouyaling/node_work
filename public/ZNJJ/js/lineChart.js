//初始化折线图堆叠

function LineChart(legendData,xAxisData, seriesDataAsk,seriesDataAns) {
	var option = {
		title: {

		},
		animation: {
			animationEasing: 'SinusoidalIn'
		},
		tooltip: {
			trigger: 'axis'
		},
		color: ['#B79469', '#ffffff'],
		legend: {
			data: legendData,
			x: 'right',
			textStyle: {
				color: "#fff"
			},
			icon: 'force',
			itemHeight: 4,
			itemWidth: 18,
			itemGap: 15,
			padding: 10
		},
		grid: {
			// x: 40,
			// x2: 40,
			// y: 25,
			// height: 170,
			// borderWidth: 0

            top: '20%',
            right: '5%',
            bottom: '5%',
            left: '5%',
            containLabel: true
		},

		calculable: true,
		xAxis: [{
			type: 'category',
			boundaryGap: false,
			splitLine: {
				show: false
			},
			axisLabel: {
				textStyle: {
					color: "#fff", //刻度线标签颜色,
				}
			},
			axisLine: {
                    lineStyle: {
                        color: '#B79469',//左边线的颜色
                        width:'1'//坐标线的宽度
                    }
                },
			axisTick:{
            	show:true,
            	inside:true,
            	lineStyle:{
            		color:'#fff',
            	}
            },
	
			data: xAxisData
		}],
		yAxis: [{
			show: true,
			type: 'value',
			splitLine: {
				show: false
			},
			axisLabel: {
				textStyle: {
					color: "#fff", //刻度线标签颜色,
				}
			},
			axisLine: {
                    lineStyle: {
                        color: '#B79469',//左边线的颜色
                        width:'1'//坐标线的宽度
                    }
                },
			axisTick:{
            	show:true,
            	inside:true,
            	lineStyle:{
            		color:'#fff',
            	}
            }
		}
		],
		series: [{
				name: legendData[0],
				type: 'line',
				data: seriesDataAsk,
				smooth: true,
				symbol: 'none',
				itemStyle: {
					normal: {
						lineStyle: {
							color: '#B79469'
						}
					}
				}
			},
			{
				name: legendData[1],
				type: 'line',
				symbol: 'none',
				smooth: true,
				data: seriesDataAns,
				itemStyle: {
					normal: {
						lineStyle: {
							color: '#ffffff'
						}
					}
				}
			}]
	};
	return option;
}