//初始化折线图堆叠

function LineChart1(xAxisData, seriesData, name) {
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
                    fontSize: 14
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#C48730', //左边线的颜色
                    width: 2, //坐标线的宽度

                }
            },
            axisTick: {
                show: true,
                inside: true,
                lineStyle: {
                    color: '#C48730',
                }
            },
            data: xAxisData
        }],
        yAxis: [{
            type: 'value',
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#C48730', //网格线颜色
                    width: 1, //网格线宽度
                    type: 'solid' //网格线样式
                }
            },
            axisLabel: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#C48730', //左边线的颜色
                    width: 2, //坐标线的宽度

                }
            },
            axisTick: {
                show: false
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
                    "color": '#C48730',
                    "barBorderRadius": 0,
                    "label": {
                        "show": true,
                        "position": "top",
                        formatter: function(p) {
                            return p.value > 0 ? (p.value / 10) + '%' : '';
                        },
                        textStyle: {
                            color: 'rgba(255,255,255,0.8)'
                        }
                    },
                    lineStyle: {
                        color: "#c47019",
                    },
                }
            }
        }]
    };
    return option;
}