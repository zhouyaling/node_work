Vue.component('title-all', {
    // template: '<div ref="chart" class="cricle-out"> <div class="line-set"> <div class="cricle-dashed"></div><div class="cricle-solid"></div> </div> <div class="cricle-inner"></div></div></div>',
    template: '<div class="title-all" ref="chart"  > {{showFont}} <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> </div>',

    props: {

        info: {
            type: String,
            defaulf: '标题'
        },

        size: {
            type: Object,
            default: function () {
                return {
                    width: 300,
                    height: 50
                }
            }
        }
    },
    data: function () {
        return {}
    },
    computed: {
        showFont(){
            return this.info
        },
        width () {
            return this.size.width + 'px'
        },
        height () {
            return this.size.height + 'px'
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.setChart()
        })
    },

    methods: {
        setChart () {
            var _this = this;
            let dom = this.$refs.chart
            dom.style.width = this.width
            dom.style.height = this.height
            dom.style.lineHeight = this.height
        }
    }
})

