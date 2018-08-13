Vue.component('cricle-ring', {
    template: '<div ref="chart" style="margin-top:10px;"></div>',
    props: {
        info: {
            type: Object,
            default: function() {
                return {
                    data1: 100,
                    data2: 50,
                    title: ['已招面积', '未招面积']
                }
            }
        },
        size: {
            type: Object,
            default: function() {
                return {
                    width: 440,
                    height: 310
                }
            }
        },
        unit: {
            type: String,
            default: ''
        }
    },
    computed: {
        data1() {
            return this.info.data1
        },
        data2() {
            return this.info.data2
        },
        title1() {
            return this.info.title[0]
        },
        unitSet() {
            return this.unit
        },
        title2() {
            return this.info.title[1]
        },
        width() {
            return this.size.width + 'px'
        },
        height() {
            return this.size.height + 'px'
        },
        options() {
            var _this = this;
            let obj = {
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b}: {c} ({d}%)'
                },
                series: [{
                    name: '商业数据',
                    type: 'pie',
                    center: ['50%', '50%'],
                    radius: ['60%', '70%'],
                    label: {
                        normal: {
                            formatter: '{b}\n{c}' + _this.unitSet,
                            textStyle: {
                                color: '#fff',
                                borderColor: '#fff'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            lineStyle: {
                                color: '#fff'
                            },
                            smooth: 0.2,
                            length: 20,
                            length2: 15
                        }
                    },
                    data: [{
                            value: _this.data1,
                            name: _this.title1,
                            // selected: true,
                            // selectedOffset: 0,
                            itemStyle: {
                                normal: {
                                    color: '#c0a07b',
                                    borderWidth: 5,
                                    borderColor: '#C0A17B'
                                }
                            }
                        },
                        {
                            value: _this.data2,
                            name: _this.title2,
                            // selected: true,
                            itemStyle: {
                                normal: {
                                    color: 'rgba(58,52,43,1)',
                                    shadowColor: 'rgba(58,52,43,0.3)',
                                    shadowBlur: 30,
                                    shadowOffsetX: 0,

                                }
                            }
                        }
                    ]
                }]
            }
            return obj
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.setChart()
        })
    },
    watch: {
        data2: function() {
            this.setChart()
        }
    },
    methods: {
        setChart() {
            let dom = this.$refs.chart
            dom.style.width = this.width
            dom.style.height = this.height
            const myChart = echarts.init(dom)
            myChart.setOption(this.options)
        },
    }
})