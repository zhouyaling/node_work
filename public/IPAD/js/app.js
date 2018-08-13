var app = new Vue({
    el: '#app',
    data: function() {
        return {
            scrivenerData: [

                {
                    menuName: '首页',
                    titleName: '天启大数据',
                    isChoose: true,
                    showImg: 'home',
                    page: 1
                },
                {
                    menuName: '天湖美镇',
                    titleName: '天启大数据',
                    isChoose: false,
                    showImg: 'thmz',
                    page: 2

                },
                {
                    menuName: '天津',
                    titleName: '天启大数据',
                    isChoose: false,
                    showImg: 'tj',
                    page: 3
                },
                {
                    menuName: '智能家居',
                    titleName: '天启大数据',
                    isChoose: false,
                    showImg: 'znjj',
                    page: 4
                },
                {
                    menuName: 'EBA',
                    titleName: '天启大数据',
                    isChoose: false,
                    showImg: 'eba',
                    page: 5

                },
                {
                    menuName: '大社区',
                    titleName: '天启大数据',
                    isChoose: false,
                    showImg: 'dsq',
                    page: 6

                },
                {
                    menuName: '大管家',
                    titleName: '天启大数据',
                    isChoose: false,
                    showImg: 'dgj',
                    page: 7

                },
                {
                    menuName: '业主服务',
                    titleName: '天启大数据',
                    isChoose: false,
                    showImg: 'yzfw',
                    page: 8

                }, {
                    menuName: '璧山',
                    titleName: '天启大数据',
                    isChoose: false,
                    showImg: 'bs',
                    page: 9

                },

            ],
            showContent: '',
            showTitle: '',
            showMenu: '',
        }

    },
    mounted: function() {


    },
    computed: {
        showContent() {
            var _this = this;
            var text = ''
            for (var i = 0; i < _this.scrivenerData.length; i++) {
                if (_this.scrivenerData[i].isChoose) {

                    text = _this.scrivenerData[i].content
                    _this.showTitle = _this.scrivenerData[i].titleName
                    _this.showMenu = _this.scrivenerData[i].menuName
                }

            }
            return text
        }
    },
    methods: {
        IsChoose(item) {
            var _this = this;
            _this.ReSet();
            BiShow(item.showImg, item.page)
            item.isChoose = true;

        },
        ReSet() {
            var _this = this;
            for (var i = 0; i < _this.scrivenerData.length; i++) {
                _this.scrivenerData[i].isChoose = false
            }
        },
        UpShow() {
            var _this = this;
            var num = 0
            for (var i = 0; i < _this.scrivenerData.length; i++) {
                if (_this.scrivenerData[i].isChoose) {
                    _this.scrivenerData[i].isChoose = false
                    num = i;
                }

            }
            var index = (num - 1) < 0 ? _this.scrivenerData.length - 1 : (num - 1);
            _this.scrivenerData[index].isChoose = true;
            BiShow(_this.scrivenerData[index].showImg, _this.scrivenerData[index].page)

        },
        NextShow() {
            var _this = this;
            var num = 0
            for (var i = 0; i < _this.scrivenerData.length; i++) {
                if (_this.scrivenerData[i].isChoose) {
                    _this.scrivenerData[i].isChoose = false
                    num = i;
                }
            }
            var index = (num + 1) > _this.scrivenerData.length - 1 ? 0 : (num + 1);
            _this.scrivenerData[index].isChoose = true;
            BiShow(_this.scrivenerData[index].showImg, _this.scrivenerData[index].page)
        }


    }
});
//大屏显示选中的压面
function BiShow(imgTxt, pageNum) {
    var item = {};
    item.type = "order";
    item.server = "server2010701";
    item.value = "";
    item.order = [];
    console.log(pageNum);
    var jObj = {
        showImg: imgTxt,
        page: pageNum
    };
    item.order.push(jObj)
    ws.send(JSON.stringify(item));
}

//服务控制端  是否点击成功
var status = false;

var ws;
if (window.ReconnectingWebSocket) {
    var ws = new ReconnectingWebSocket('ws://localhost:5555');
    ws.onopen = function(e) {
        console.log("连接服务器成功");
        var item = {};
        item.type = "regist";
        item.server = "server2010701";
        item.value = "";
        item.order = [];
        // ws.send(JSON.stringify(item));
    }
    ws.onclose = function(e) {
        console.log("服务器关闭");
    }
    ws.onerror = function() {
        console.log("连接出错");
    }

    ws.onmessage = function(e) {
        console.log(e)
        status = true;
        var item = JSON.stringify(e.data);
        if (item.status === "1") {
            status = true;
        }
    }
}