Vue.component('resepie-sector', {
    template: '<div ref="chart"></div>',
    props: {
        info: {
            type: Object,
            default: function () {
                return {
                    name: '服务组成',
                    subname: '',
                    title: ['商业服务1', '工程服务', '物业服务'],
                    data: [21.5, 31.3, 47.2]
                }
            }
        },
        size: {
            type: Object,
            default: function () {
                return {
                    width: 275,
                    height: 250

                }
            }
        },
        radius: {
            type: String,
            default: '50%'
        },
        unit: {
            type: String,
            default: ''
        }
    },
    data() {
        return {}
    },
    computed: {

        name() {
            return this.info.name
        },
        subname() {
            return this.info.subname
        },
        radiusSet(){
            return this.radius
        },
        unitSet(){
            return this.unit
        },

        mydata() {

            var length = this.info.title.length
            var mydata = []
            for (var i = 0; i < length; i++) {
                var obj = {}
                obj.name = this.info.title[i]
                obj.value = this.info.data[i]
                mydata.push(obj)
            }

            return mydata
        },
        width() {
            return this.size.width + 'px'
        },
        height() {
            return this.size.height + 'px'
        },
        options() {
            var _this = this;
            var option = {

                title: {
                    text: _this.name,
                    left: 'center',
                    bottom: 0,
                    textStyle: {
                        color: '#fff'
                    }
                },


                series: [
                    {
                        name: '数据来源',
                        type: 'pie',
                        radius: _this.radiusSet,
                        center: ['50%', '50%'],
                        data: _this.mydata,
                        roseType: 'radius',
                        itemStyle: {
                            normal: {
                                label: {
                                    textStyle: {
                                        color: '#fff'
                                    },
                                    show: true,
                                    formatter: '{b}  \n {c}' + _this.unitSet
                                },
                                labelLine: {
                                    show: true,
                                    lineStyle: {
                                        color: '#fff'
                                    },
                                    smooth: 0.2,
                                    length: 3,
                                    length2: 10
                                }
                            },
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ],
                color: ['#fff', '#9ba3b4', '#354971', '#666', 'rgb(39, 89, 146)']
            };

            return option
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.setChart()
        })
    },
    watch: {
        mydata: function () {
            this.setChart()
        }
    },
    methods: {
        setChart() {
            var dom = this.$refs.chart
            dom.style.width = this.width
            dom.style.height = this.height
            const myChart = echarts.init(dom)
            myChart.setOption(this.options)
        },
    }
})