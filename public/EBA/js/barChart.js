function getBarChart(xAxis, series){
	option = {
    title : {
       
    },
    color: ['#fff'],
    tooltip : {
        trigger: 'axis'
    },
    grid: {
			x: 40,
			x2: 40,
			y: 25,
			height: 170,
			borderWidth: 0
		},
    calculable : false,
    xAxis : [
        {
            type : 'category',
            data : xAxis,
            splitLine: {
				show: false,
			},
			axisLabel: {
				textStyle: {
					color: "#fff", //刻度线标签颜色,
				}
			},
			axisLine: {
				lineStyle: {
					color: '#186AE7', //左边线的颜色
					width: '2',//坐标线的宽度
				}
			},
			axisTick:{
            	show:true,
            	inside:true,
            	alignWithLabel: true,
            	lineStyle:{
            		color:'#186AE7',
            	}
            },
        },{
            type : 'category',
            data : series,
            splitLine: {
				show: false,
			},
			axisLabel: {
				textStyle: {
					color: "#1868E3", //刻度线标签颜色,
				}
			},
			axisLine: {
				lineStyle: {
					color: '#186AE7', //左边线的颜色
					width: '2',//坐标线的宽度
				}
			},
			axisTick:{
            	show:false,
            	inside:true,
            	alignWithLabel: true,
            	lineStyle:{
            		color:'#186AE7',
            	}
            },
        }
        
    ],
    yAxis : [
        {
            type : 'value',
            splitLine: {
				show: false,
				},
			axisLabel: {
				textStyle: {
					color: "#fff", //刻度线标签颜色,
				}
			},
        axisLine: {
        	show:false,
				lineStyle: {
					color: '#186AE7', //左边线的颜色
					width: '2',//坐标线的宽度
				}
			},
			axisTick:{
            	show:false,
            	alignWithLabel: true
            }
          }
    ],
    series : [
        {
            name:'蒸发量',
            type:'bar',
            barWidth: '40%',
            data:series,
             itemStyle: {
                  normal: {
                    color: new echarts.graphic.LinearGradient(
                      0, 0, 0, 1,
                    [
                         {offset: 1, color: '#061A46'},
                    {offset: 0, color: '#186AE7'}
                    ]
                 )
            },
            emphasis: {
              color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                   [
                     {offset: 1, color: '#061A46'},
                    {offset: 0, color: '#186AE7'}
                   ]
              )
             }
         }
        }
        
    ]
};
return option;
}

                    
