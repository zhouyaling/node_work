//初始化折线图堆叠

function LineChart(xAxisData, seriesData) {
    debugger;
    var option = {
        title: {

        },
        animation: {
            animationEasing: 'SinusoidalIn'
        },
        tooltip: {
            trigger: 'axis'
        },
        color: ['#6E4A1E'],
        grid: {
            x: 70,
            x2: 70,
            y: 25,
            height: 200,
            borderWidth: 0,
            right: 20,

        },
        xAxis: [{
            type: 'category',
            boundaryGap: false,
            splitLine: {
                show: false,
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
                    color: '#4a3929', //左边线的颜色
                    width: '2', //坐标线的宽度
                }
            },
            axisTick: {
                show: true,
                inside: true,
                lineStyle: {
                    color: '#A27D4F',
                }
            },
            data: xAxisData
        }],
        yAxis: [{
            type: 'value',
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#534737', //网格线颜色
                    width: 1, //网格线宽度
                    type: 'solid' //网格线样式
                },

            },
            splitArea: {
                show: true,
                areaStyle: { color: ['#534737'] },

            },
            axisLabel: {
                textStyle: {
                    color: "#fff", //刻度线标签颜色,
                }
            },
            axisLine: {
                show: false,
                lineStyle: {
                    type: 'arrow',
                    color: '#A27D4F', //左边线的颜色
                    width: '2' //坐标线的宽度
                }
            },
            axisTick: {
                show: false,
            }
        }],
        series: [{
            name: '查询率',
            type: 'line',
            data: seriesData,
            symbol: 'circle',
            markPoint: {
                data: [
                    { type: 'max', name: '最大值', symbol: 'image://./images/quxian.png', symbolSize: 55 }
                ],
                itemStyle: {


                    normal: {
                        label: {
                            show: false,
                        }
                    }
                }
            },
            itemStyle: {
                color: '#6E4A1E',

                normal: {
                    lineStyle: {

                        color: '#A27D4F'
                    }
                }
            },
            effect: {
                show: true,
                shadowBlur: 0
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1, [
                            { offset: 1, color: '#8E7B63' },
                            { offset: 0, color: '#A27D4F' }
                        ]
                    )
                }
            },
        }]
    };
    return option;
}