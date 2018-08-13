var whiteSrc = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAYAAABFA8wzAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQ2N0I5MjExODhCNDExRTdBMTA1QzM1OTIxQzg3NEMxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQ2N0I5MjEyODhCNDExRTdBMTA1QzM1OTIxQzg3NEMxIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDY3QjkyMEY4OEI0MTFFN0ExMDVDMzU5MjFDODc0QzEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDY3QjkyMTA4OEI0MTFFN0ExMDVDMzU5MjFDODc0QzEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7E4u0aAAAAIElEQVR42mL8//+/FAMVAQsQP6WmgUwMVAaD30CAAAMAB6EECA5rY9wAAAAASUVORK5CYII='
var whiteImg = new Image()
whiteImg.src = whiteSrc

Vue.component('bar-only', {
    template: '<div ref="chart"></div>',
    props: {
        info: {
            type: Object,
            default: function () {
                return {

                    dataAxis: ['一月', '二月', '三月', '四月'],
                    data: [220, 182, 191, 234],
                    maxdata: [500, 500, 500, 500]
                }
            }
        },
        size: {
            type: Object,
            default: function () {
                return {
                    width: 450,
                    height: 300
                }
            }
        },
        position: {
            type: Boolean,
            default: true

        }
    },
    computed: {
        positionSet(){
            return this.position
        },
        dataAxis() {
            return this.info.dataAxis
        },
        data() {
            return this.info.data
        },

        mymaxData (){
            return this.info.maxdata
        },

        width () {
            return this.size.width + 'px'
        },
        height () {
            return this.size.height + 'px'
        },
        options() {
            var obj = {
                xAxis: {
                    data: this.dataAxis,

                    position: this.positionSet ? 'bottom' : 'top', //设置出现的位置
                    axisTick: { // 多少个单元 出现一个锯齿
                        show: false,
                        interval: 0
                    },
                    axisLine: {  //设置第一条线
                        lineStyle: {
                            color: 'rgba(255,255,255,0.2' //设置 x 轴的颜色 第一条线
                        }
                    },
                    splitLine: {  //设置虚线
                        // show: false,
                        // interval: 0,//设置虚线
                        // lineStyle: {
                        //     type: 'dashed',
                        //     color: 'rgba(255,255,255,0.4)'
                        // }
                    },
                    axisLabel: { //设置 字体颜色
                        textStyle: {
                            color: '#dcdcdc'  //y轴字体的颜色
                        }
                    }
                },
                yAxis: {
                    splitLine: {

                        show: false,  //等分线的设置
                        lineStyle: {
                            color: 'rgba(255,255,255,0.2)'
                        }
                    }, 
                    axisLine: {
                        show:false,
                        lineStyle: {
                            color: 'rgba(255,255,255,0.2' //设置 y 轴的颜色 第一条线
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#dcdcdc'  //y轴字体的颜色
                        }
                    }
                },
                dataZoom: [
                    {
                        type: 'inside'
                    }
                ],
                series: [
                    { // For shadow
                        type: 'bar',
                        itemStyle: {
                            normal: {color: 'rgba(60,48,38,0.6)'}
                        },
                        barGap: '-100%',
                        barCategoryGap: '40%',
                        barWidth: 20,
                        data: this.mymaxData,
                        animation: false
                    },
                    {
                        type: 'bar',
                        barWidth: 20,
                        itemStyle: {
                            normal: {
                                // barBorderRadius: [2, 2, 0, 0],
                                color: {
                                    image: whiteImg,
                                    repeat: 'repeat'
                                }
                            }
                        },
                        data: this.data
                    }
                ]
            }
            return obj
        }
    },
    mounted() {
        this.$nextTick(() => {
            setTimeout(this.setChart, 2000);
            //this.setChart()
        })
    },
    watch: {
        data: function () {

            this.setChart();
        }
    },
    methods: {
        setChart () {
            var dom = this.$refs.chart
            dom.style.width = this.width
            dom.style.height = this.height
            var myChart = echarts.init(dom)
            myChart.setOption(this.options)
        },
    }
})