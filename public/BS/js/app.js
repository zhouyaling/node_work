var picArr = [
    "images/map/map.png",
    "images/t-icon.png",
    "img/component/watch_background_big.png",
    "img/dialogbg.png",
    "img/drainage_abnormal.png",
    "img/drainage_normal.png",
    "img/drainage_service.png",
    "img/elevator_abnormal.png",
    "img/elevator_normal.png",
    "img/elevator_service.png",
    "img/fence_abnormal.png",
    "img/fence_normal.png",
    "img/fence_service.png",
    "img/fir_abnormal.png",
    "img/fir_normal.png",
    "img/fir_service.png",
    "img/floor.png",
    "img/graybg.png",
    "img/green_border.png",
    "img/green_camera.png",
    "img/hat.png",
    "img/media.png",
    "img/monitor_p.png",
    "img/monitor_pb.png",
    "img/power_abnormal.png",
    "img/power_normal.png",
    "img/power_service.png",
    "img/rate.png",
    "img/red_border.png",
    "img/red_camera.png",
    "img/waybrake_abnormal.png",
    "img/waybrake_normal.png",
    "img/waybrake_service.png",
    "img/weibaoxiu.png",
    "img/xungengGroup.png",
    "img/xungenghead1.png",
    "img/xungenghead-1.png",
    "img/xungenghead2.png",
    "img/xungenghead-2.png",
    "img/xungenghead3.png",
    "img/yellow_border.png",
    "img/yellow_camera.png"


]
var img = new Image();
var sum = picArr.length;
var now = 0;
loadImg();

function loadImg() {
    img.src = picArr[now];

    function go() {
        now++;

        $('.loading p').text(parseInt(now / sum * 100) + "%");
        if (now < picArr.length) {
            loadImg()
        } else {
            $('.loading').addClass('hide');
            $('#app').css({ opacity: 1 })
        }
    }

    img.onerror = go;
    img.onload = go;
}

var app = new Vue({
    el: '#app',
    data() {
        return {

            devicenorepair: {
                dataAxis: ['变压器', '进线柜', '电容柜', '发电机', '生活水泵'],
                data: [100, 100, 100, 100, 100],
                maxdata: [100, 100, 100, 100, 100]
            },
            paywaytotal: {
                total: [0, 0, 0, 0, 0, 0, 0],
                dataAxis: ['微信支付', '支付宝支付', '银联支付', '现金支付'],
                data: [],
                maxdata: [100, 100, 100, 100]
            },
            serviceconstruction: {
                name: '',
                subname: '',
                title: ['商业服务', '工程服务', '物业服务'],
                data: [0, 0, 0]
            },
            incometypedata: {
                name: '',
                subname: '',
                title: ['水电公摊费', '车位管理费', '物业服务费'],
                data: [0, 0, 0]
            },
            //小区信息
            districtInfo: {
                projectName: '金科天壹府',
                lng: "--",
                lat: "", //经纬度
                takeOver: "--", //接管时间
                greening: '35%', //绿化面积
                volumeRate: '2.00%', //容积率
                selfHouse: '--', //自主房屋
                rentHouse: "--", //出租房屋
                vacantHouse: "--", //空置房屋
                devicesNumber: "--", //总设备数量
                projectStaff: "--" //总项目人员

            },
            //园区巡更系统
            parkPatrol: {
                tiems: '--', //巡更频次
                patrolNumber: '--', //巡逻人数
                managementArea: '--', //管理面积
                ownersNumber: '--' //服务业主
            },
            //接房率
            toRoom: {
                toRoomRate: "——", //接房率
                decorationRate: "——", //装修率
                highLevel: { number: 0, rate: 0 }, //高层
                bungalow: { number: 0, rate: 0 }, //洋房
                villa: { number: 0, rate: 0 }, //别墅
                business: { number: 0, rate: 0 } //商业
            },
            //车位使用率
            parkingSpaces: {
                useRate: '--', //车位使用率
                totalSpaces: 1953, //车位数量
                noSold: 1953, //车位未售出数量
                overSold: 0, //已售数量
                overSoldSelf: 0, //已售 自用
                overSoldSell: 0, //已售 出租
                noSoldSelf: 0, //未售 自用
                noSoldSell: 0 //未售 出租
            },
            parkingRate: {
                data1: 0,
                data2: 1953,
                title: ['已出售', '未出售']
            },

            //投诉
            complaints: {
                customerService: '--', //400客服投诉数量
                group: '--', //股份集团投诉数量
                group1: '--', //股份集团投诉数量
                group2: '--' //股份集团投诉数量
            },
            // 表 收费率 报事完结率 业主满意度
            tollNewsSatisfaction: {
                toll: '--',
                news: '--',
                satisfaction: "--"
            },
            //门流量信息
            doorFlow: [
                { people: 0, car: 0 },
                { people: 0, car: 0 },
                { people: 0, car: 0 },
                { people: 0, car: 0 },
                { people: 0, car: 0 },
                { people: 0, car: 0 },
                { people: 0, car: 0 },
                { people: 0, car: 0 }
            ]

            ,
            //设备状况
            equipmentState: {
                //设备
                equipment: ["--", "--", "--", "--"], //监控  电子围栏  电梯  消防  给排水 变配电 门禁/道闸
                //本月报警
                monthAlarm: ["--", "--", "--", "--"],
                //当年报警
                dayAlarm: ["--", "--", "--", "--"]
            },
            //所有设备
            allTool: {
                //消防栓
                firleList: [{
                        id: "fire_A_1",
                        name: '1号消防栓',
                        type: 'fire',
                        status: '3', //0正常  1异常   2 维修
                        address: "待接入",
                        active: '1',
                        No: "ZHF-XF-XHS-001", //设备编号
                        name: "消防栓", //设备名称
                        format: 'xxx', //规格
                        position: '天籁城紫园24栋', //安装位置
                        factoryOwner: '上海永大电梯设备公司', //厂商
                        useYears: '十年', //使用年限
                        warranty: '2017年6月6日', //质保到期
                        maintenanceUnit: "重庆天智慧启", //维保单位
                        nextMaintenance: "2015年5月" //下次维保时间

                    }

                ],
                //变配电
                powerList: [{
                        id: "power_A_1",
                        name: '1号变配电',
                        status: '3', //0正常  1异常   2 维修
                        address: "待接入",
                        active: '0',
                        type: 'power',
                        No: "ZHF-XF-XHS-001", //设备编号
                        name: "变配电", //设备名称
                        format: 'xxx', //规格
                        position: '天籁城紫园24栋', //安装位置
                        factoryOwner: '上海永大电梯设备公司', //厂商
                        useYears: '十年', //使用年限
                        warranty: '2017年6月6日', //质保到期
                        maintenanceUnit: "重庆天智慧启", //维保单位
                        nextMaintenance: "2015年5月" //下次维保时间

                    }

                ],
                //排水
                drainageList: [{
                    id: "drainage_A_1",
                    name: '1号排水',
                    status: '3', //0正常  1异常   2 维修
                    address: "待接入",
                    active: '0',
                    type: 'drainage',
                    No: "ZHF-XF-XHS-001", //设备编号
                    name: "排污", //设备名称
                    format: 'xxx', //规格
                    position: '天籁城紫园24栋', //安装位置
                    factoryOwner: '上海永大电梯设备公司', //厂商
                    useYears: '十年', //使用年限
                    warranty: '2017年6月6日', //质保到期
                    maintenanceUnit: "重庆天智慧启", //维保单位
                    nextMaintenance: "2015年5月" //下次维保时间

                }],
                //电梯
                elevatorList: [{
                    id: "elevator_A_1",
                    name: '1号电梯',
                    status: '3', //0正常  1异常   2 维修
                    address: "待接入",
                    active: '0',
                    type: 'elevator',
                    No: "ZHF-XF-XHS-001", //设备编号
                    name: "电梯", //设备名称
                    format: 'xxx', //规格
                    position: '天籁城紫园24栋', //安装位置
                    factoryOwner: '上海永大电梯设备公司', //厂商
                    useYears: '十年', //使用年限
                    warranty: '2017年6月6日', //质保到期
                    maintenanceUnit: "重庆天智慧启", //维保单位
                    nextMaintenance: "2015年5月" //下次维保时间

                }],
                //门禁/道闸
                wayBrakeList: [{
                    id: "wayBrake_A_1",
                    name: '1号门禁',
                    status: '3', //0正常  1异常   2 维修
                    address: "待接入",
                    active: '0',
                    type: 'wayBrake',
                    No: "ZHF-XF-XHS-001", //设备编号
                    name: "门禁/道闸", //设备名称
                    format: 'xxx', //规格
                    position: '天籁城紫园24栋', //安装位置
                    factoryOwner: '上海永大电梯设备公司', //厂商
                    useYears: '十年', //使用年限
                    warranty: '2017年6月6日', //质保到期
                    maintenanceUnit: "重庆天智慧启", //维保单位
                    nextMaintenance: "2015年5月" //下次维保时间

                }],
                //电子围栏
                fenceList: [{
                    id: "fence_A_1",
                    name: '1号消防栓',
                    status: '3', //0正常  1异常   2 维修
                    address: "待接入",
                    active: '0',
                    type: 'fence',
                    No: "ZHF-XF-XHS-001", //设备编号
                    name: "电子围栏", //设备名称
                    format: 'xxx', //规格
                    position: '天籁城紫园24栋', //安装位置
                    factoryOwner: '上海永大电梯设备公司', //厂商
                    useYears: '十年', //使用年限
                    warranty: '2017年6月6日', //质保到期
                    maintenanceUnit: "重庆天智慧启", //维保单位
                    nextMaintenance: "2015年5月" //下次维保时间

                }]

            },
            //能耗分析
            energyAnalysis: {
                //                        water: 80,//水耗利用率 最好是80
                //                        electricity: 89.2,//电耗利用率
                //                        whole: 90.2//综合资源利用率
            },
            //人行 图表数据
            peopleLine: {
                abscissa: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'], //横坐标
                value: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //值
                value1: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            },
            //车行出入车辆总数 图表数据
            driving: {
                abscissa: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'], //横坐标
                value: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //值
                value1: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            },
            //小区房价均价走势  图表数据
            housePrice: {
                max: 0,
                abscissa: [],
                value: []
            },
            //魅力家服务
            charmHomeService: [
                //                        {
                //                            roomNo: "18-3-1",//房号
                //                            owner: '李亮',//业主
                //                            way: '通过智能管家预定',//途径
                //                            type: '家政预约',//类型
                //                            time: '6月18日 10:25:00'//时间
                //                        },
                //                        {
                //                            roomNo: "18-3-2",//房号
                //                            owner: '李亮',//业主
                //                            way: '通过智能管家预定',//途径
                //                            type: '家政预约',//类型
                //                            time: '6月18日 10:25:00'//时间
                //                        },
                //                        {
                //                            roomNo: "18-3-3",//房号
                //                            owner: '李亮',//业主
                //                            way: '通过智能管家预定',//途径
                //                            type: '家政预约',//类型
                //                            time: '6月18日 10:25:00'//时间
                //                        },
                //                        {
                //                            roomNo: "18-3-4",//房号
                //                            owner: '李亮',//业主
                //                            way: '通过智能管家预定',//途径
                //                            type: '家政预约',//类型
                //                            time: '6月18日 10:25:00'//时间
                //                        },
                //                        {
                //                            roomNo: "18-3-5",//房号
                //                            owner: '李亮',//业主
                //                            way: '通过智能管家预定',//途径
                //                            type: '家政预约',//类型
                //                            time: '6月18日 10:25:00'//时间
                //                        },
                //                        {
                //                            roomNo: "18-3-6",//房号
                //                            owner: '李亮',//业主
                //                            way: '通过智能管家预定',//途径
                //                            type: '家政预约',//类型
                //                            time: '6月18日 10:25:00'//时间
                //                        },
                //                        {
                //                            roomNo: "18-3-7",//房号
                //                            owner: '李亮',//业主
                //                            way: '通过智能管家预定',//途径
                //                            type: '家政预约',//类型
                //                            time: '6月18日 10:25:00'//时间
                //                        },
                //                        {
                //                            roomNo: "18-3-8",//房号
                //                            owner: '李亮',//业主
                //                            way: '通过智能管家预定',//途径
                //                            type: '家政预约',//类型
                //                            time: '6月18日 10:25:00'//时间
                //                        },
                //                        {
                //                            roomNo: "18-3-9",//房号
                //                            owner: '李亮',//业主
                //                            way: '通过智能管家预定',//途径
                //                            type: '家政预约',//类型
                //                            time: '6月18日 10:25:00'//时间
                //                        }
            ],
            //物业费收入
            propertyCosts: {
                //今年收入
                income: [],
                //同比收入
                ratio: [],
                max: 10000, //最大值
            },
            //社区组成
            communityTexture: {
                //                        //单生
                //                        singleNumber: 1000,//单生住户数量
                //                        singleRate: 71.6,//实际是71.6%
                //                        //情侣
                //                        coupleNumber: 1000,//情侣住户数量
                //                        coupleRate: 71.6,//实际是71.6%
                //                        //三口之家
                //                        threeFamilyNumber: 1000,//三口之家住户数量
                //                        threeFamilyRate: 71.6,//实际是71.6%
                //                        //4人及以上
                //                        multipleNumber: 1000,//4人及以上住户数量
                //                        multipleRate: 71.6,//实际是71.6%

            },
            //社区构成
            communityComposition: {


                manRate: 0, //时间是75.1%
                manNumber: 0, //男 人数  单位万人
                //女
                womanRate: 0, //时间是75.1%
                womanNumber: 0, //男 人数  单位万人
                //年龄组成
                sixtyUp: 0, //60岁以上
                fortyTwoUp: 0, //42-60岁
                twentyEightUp: 0, //28-44岁
                twenty: 0, //20-28岁
                twentyTwo: 0 //22岁以下

            },
            //报事爆料比例
            reportBrokeRat: {
                data1: 0,
                data2: 0,
                title: ['爆料', '报事']
            },
            //设施详细信息
            detailedInfo: {
                name: '待接入',
                No: '待接入',
                position: '待接入',
                factoryOwner: '待接入',
                maintenanceUnit: '待接入',
                format: '待接入',
                warranty: '待接入',
                peopele: '待接入'
            },
            //接口返回监控的 重组的数组
            monitorFenList: [

                {
                    activ: 1,
                    address: "监控一",
                    id: "A-2",
                    ipx: "115px",
                    ipy: "105px",
                    isMain: 0,
                    isfixed: 0,
                    status: 3,
                },
                {
                    activ: 1,
                    address: "监控二",
                    id: "A-2",
                    ipx: "115px",
                    ipy: "105px",
                    isMain: 0,
                    isfixed: 0,
                    status: 3,
                }

            ],
            baseUrl: 'http://jinke-gateway.tq-service.com/bidata/api/IndicatorTypes?guidID=',
            urlList: {
                //小区信息
                districtInfo: 'BD4665BD-4CC1-4D45-967C-806C9BE023A0',
                //
                parkPatrol: '329CCDE4-EA50-4CD0-A053-67BB2949E0AA',
                //接房率
                toRoom: '88B0C1C6-F756-41B5-BA80-DE80D4B479BE',
                //车位使用率
                parkingSpaces: 'F7CF9C14-2DDD-465A-9746-C1BEDD81747F',
                //投诉
                complaints: '22B14119-57B9-45DB-B030-31C4734BD6A1',
                //收费率 报事完结率 业主满意度
                tollNewsSatisfaction: 'F1D45675-D3B3-4EBF-865E-70A78C803CC8',
                // 监控
                monitorList: 'D0EC714B-CA0A-42E7-8D68-4CDD16558760',
                //社区门流量信息
                doorFlow: '8FCEE8F7-CFCF-4010-9C44-F7E85AD1468C',
                //设备状况      返回字符串   拼接成数组
                equipmentState: 'AE476B4D-1D99-4C84-B0EB-3C6B6FB7A253',
                // 所有设备 type 区分
                allTool: '918DD3E2-AA53-40EA-96FB-97EB609D15FB',
                //能耗分析
                energyAnalysis: 'F7B64D5C-F1EC-4F5D-8A4D-9C93DD825F2F',
                //人行车行  type 区分   返回字符串   拼接成数组
                access: '6CE9432A-C3C0-4DBE-9BFE-AAE7C9ED3526',
                //小区房价均价
                housePrice: '38043D92-6A42-43EC-AF26-989C5BFC29A4',
                //魅力家服务
                charmHomeService: '9E4FB599-DAA5-4C18-B263-C1994642E4E8',
                //物业费收入
                propertyCosts: '5BBAAE82-3137-4AC2-AC5B-C8968D3E9093',
                //社区组成
                communityTexture: '1F799EA2-136F-4ACA-8CA4-3C8D8D61D63B',
                //社区构成
                communityComposition: '6CC63D03-4BB5-4F40-9067-48CA52D5CCDB'
            }

        }
    },
    mounted: function() {
        // this.getData();
        //调动 筛选的默认设施的
        //这个接口外部调用
        // this.AllToolSet("fence", "fence_A_2");


    },
    computed: {},
    created() {},
    methods: {
        timeInterception(list) {
            var d = new Date().getHours();
            for (var i = 0; i < list.length; i++) {
                if (d <= i) {
                    list[i] = '';
                }
            }
            return list
        },


        //选择工具  这个方法外部调用
        AllToolSet(arr, id) {
            var _this = this;
            _this.ToolReset();
            switch (arr) {
                case 'firle':
                    _this.SelectTool(_this.allTool.firleList, id)
                    break;
                case 'power':
                    _this.SelectTool(_this.allTool.powerList, id)
                    break;
                case 'drainage':
                    _this.SelectTool(_this.allTool.drainageList, id)
                    break;
                case 'elevator':
                    _this.SelectTool(_this.allTool.elevatorList, id)
                    break;
                case 'wayBrake':
                    _this.SelectTool(_this.allTool.wayBrakeList, id)
                    break;
                case 'fence':
                    _this.SelectTool(_this.allTool.fenceList, id)
                    break;
                default:

            }

        },
        //设置选中
        SelectTool(shuzu, id) {
            for (var i = 0; i < shuzu.length; i++) {
                if (shuzu[i].id == id) {
                    shuzu[i].active = '1';
                    this.detailedInfo = shuzu[i];
                    return
                }

            }
        },
        //全部状态 status 设置为 false
        ToolReset() {
            var _this = this;
            for (var i = 0; i < _this.allTool.firleList.length; i++) {
                _this.allTool.firleList[i].active = false;
            }
            for (var i = 0; i < _this.allTool.powerList.length; i++) {
                _this.allTool.powerList[i].active = false;
            }
            for (var i = 0; i < _this.allTool.drainageList.length; i++) {
                _this.allTool.drainageList[i].active = false;
            }
            for (var i = 0; i < _this.allTool.elevatorList.length; i++) {
                _this.allTool.elevatorList[i].active = false;
            }
            for (var i = 0; i < _this.allTool.wayBrakeList.length; i++) {
                _this.allTool.wayBrakeList[i].active = false;
            }
            for (var i = 0; i < _this.allTool.fenceList.length; i++) {
                _this.allTool.fenceList[i].active = false;
            }
        },
        //筛选出默认被选中的一个
        Omnipotence() {
            var _this = this;
            var flag = true;
            if (flag) {
                for (var i = 0; i < _this.allTool.firleList.length; i++) {
                    if (_this.allTool.firleList[i].active == '1') {
                        this.detailedInfo = _this.allTool.firleList[i];
                        flag = false;
                        return
                    }
                }

                for (var i = 0; i < _this.allTool.powerList.length; i++) {
                    if (_this.allTool.powerList[i].active == '1') {
                        this.detailedInfo = _this.allTool.powerList[i];
                        flag = false;
                        return
                    }
                }

                for (var i = 0; i < _this.allTool.drainageList.length; i++) {
                    if (_this.allTool.drainageList[i].active == '1') {
                        this.detailedInfo = _this.allTool.drainageList[i];
                        flag = false;
                        return
                    }
                }

                for (var i = 0; i < _this.allTool.elevatorList.length; i++) {
                    if (_this.allTool.elevatorList[i].active == '1') {
                        this.detailedInfo = _this.allTool.elevatorList[i];
                        flag = false;
                        return
                    }
                }

                for (var i = 0; i < _this.allTool.wayBrakeList.length; i++) {
                    if (_this.allTool.wayBrakeList[i].active == '1') {
                        this.detailedInfo = _this.allTool.wayBrakeList[i]
                        flag = false;
                        return
                    }
                }

                for (var i = 0; i < _this.allTool.fenceList.length; i++) {
                    if (_this.allTool.fenceList[i].active == '1') {
                        this.detailedInfo = _this.allTool.fenceList[i];
                        flag = false;
                        return
                    }
                }
            }

        },
        //外部调用这个方法
        MonitorSet(id) {
            var _this = this;
            for (var i = 0; i < _this.monitorFenList.length; i++) {
                _this.monitorFenList[i].active = false;
            }
            for (var i = 0; i < _this.monitorFenList.length; i++) {
                if (_this.monitorFenList[i].id == id) {
                    _this.monitorFenList[i].active = '1';
                }
            }
        },
        SelectData(data) {

            var projectData = [];
            var projectName = "金科王府";
            for (var i = 0; i < data.length; i++) {
                var item = data[i];
                if (item.ProjectName === projectName) {
                    projectData.push(item);
                }
            }
            return projectData;
        },
        getData() {
            var _this = this;
            //小区信息
            $.get(_this.baseUrl + _this.urlList.districtInfo, function(data) {
                var _data = _this.SelectData(eval(data[0].IndicatorData));
                _this.districtInfo = _data[0];
            });
            //园区巡更系统
            $.get(_this.baseUrl + _this.urlList.parkPatrol, function(data) {
                var _data = _this.SelectData(eval(data[0].IndicatorData));
                _this.parkPatrol = _data[0];
            });
            //接房率
            $.get(_this.baseUrl + _this.urlList.toRoom, function(data) {
                var _data = _this.SelectData(eval(data[0].IndicatorData));
                _this.toRoom.decorationRate = _data[0].decorationRate;
                _this.toRoom.toRoomRate = _data[0].toRoomRate;
                var high = _data[0].highLevel.split(",");
                _this.toRoom.highLevel.number = high[0];
                _this.toRoom.highLevel.rate = high[1];
                var bunga = _data[0].bungalow.split(",");
                _this.toRoom.bungalow.number = bunga[0];
                _this.toRoom.bungalow.rate = bunga[1];
                var vill = _data[0].villa.split(",");
                _this.toRoom.villa.number = vill[0];
                _this.toRoom.villa.rate = vill[1];
                var busine = _data[0].business.split(",");
                _this.toRoom.business.number = busine[0];
                _this.toRoom.business.rate = busine[1];

            });
            //车位使用率
            $.get(_this.baseUrl + _this.urlList.parkingSpaces, function(data) {
                var _data = _this.SelectData(eval(data[0].IndicatorData));
                _this.parkingSpaces = _data[0];
                console.log(_data[0])
                _this.parkingRate.data1 = _data[0].overSold;
                _this.parkingRate.data2 = _data[0].noSold;
            });
            //投诉
            $.get(_this.baseUrl + _this.urlList.complaints, function(data) {
                var _data = _this.SelectData(eval(data[0].IndicatorData));
                _this.complaints = _data[0];

            });
            // 表 收费率 报事完结率 业主满意度
            $.get(_this.baseUrl + _this.urlList.tollNewsSatisfaction, function(data) {
                var _data = _this.SelectData(eval(data[0].IndicatorData));
                _this.tollNewsSatisfaction = _data[0];

            });

            // 社区门流量信息
            $.get(_this.baseUrl + _this.urlList.doorFlow, function(data) {
                var _data = _this.SelectData(eval(data[0].IndicatorData));
                //                    var _flowdata = _data;
                var datadoor = "7,2,2,1,8,8,9,6,5,2,1,6,8,2,1,8,9,10,8,8,8,8,1,2;3,8,8,5,2,5,15,22,15,16,25,34,22,11,20,18,12,15,13,18,12,11,12,12;4,5,7,5,2,6,11,13,7,12,6,2,12,13,7,9,15,12,11,13,12,10,8,6;5,6,8,3,2,7,16,12,12,5,12,11,16,23,18,15,15,13,12,13,14,11,2,1;1,5,6,7,8,9,11,33,11,12,10,8,9,11,12,13,10,15,12,11,9,5,1,2";
                var datapeople = "8,6,5,8,2,13,33,36,36,16,14,36,18,16,13,23,16,26,26,28,16,18,15,36;2,2,5,4,14,47,18,14,34,16,14,16,16,16,16,17,16,16,26,19,18,26,23,26;14,1,5,4,13,23,22,26,26,26,18,24,16,18,14,23,34,26,18,28,14,16,16,18;4,2,5,5,17,12,18,14,14,16,29,38,38,32,36,10,10,18,28,26,37,34,18,26;6,4,5,3,16,7,25,18,18,18,18,36,14,26,12,14,10,12,18,18,15,18,18,22";
                var doorNums = datadoor.split(';');
                var peopleNums = datapeople.split(';');

                //                   var  doorNums = _flowdata[0].people.split(';');
                //                    var peopleNums = _flowdata[0].car.split(';');


                var myDate = new Date(); //获取小时数
                var hour = myDate.getHours();
                var minute = myDate.getMinutes();

                var _doordatas = doorNums[0].split(',');
                var _doordatas1 = doorNums[1].split(',');
                var _doordatas2 = doorNums[2].split(',');
                var _doordatas3 = doorNums[3].split(',');
                var _doordatas4 = doorNums[4].split(',');
                var _peopleatas = peopleNums[0].split(',');
                var _peopleatas1 = peopleNums[1].split(',');
                var _peopleatas2 = peopleNums[2].split(',');
                var _peopleatas3 = peopleNums[3].split(',');
                var _peopleatas4 = peopleNums[4].split(',');

                if (hour === 24) hour = 0;
                _this.doorFlow[0].car = 0;
                _this.doorFlow[0].people = 0;
                _this.doorFlow[1].car = 0;
                _this.doorFlow[1].people = 0;
                _this.doorFlow[2].car = 0;
                _this.doorFlow[2].people = 0;
                _this.doorFlow[3].car = 0;
                _this.doorFlow[3].people = 0;
                _this.doorFlow[4].car = 0;
                _this.doorFlow[4].people = 0;
                for (var i = 0; i < hour; i++) {
                    _this.doorFlow[0].car = _this.doorFlow[0].car + parseInt(_doordatas[i]);
                    _this.doorFlow[0].people = _this.doorFlow[0].people + parseInt(_peopleatas[i]);
                    _this.doorFlow[1].car = _this.doorFlow[1].car + parseInt(_doordatas1[i]);
                    _this.doorFlow[1].people = _this.doorFlow[1].people + parseInt(_peopleatas1[i]);
                    _this.doorFlow[2].car = _this.doorFlow[2].car + parseInt(_doordatas2[i]);
                    _this.doorFlow[2].people = _this.doorFlow[2].people + parseInt(_peopleatas2[i]);
                    _this.doorFlow[3].car = _this.doorFlow[3].car + parseInt(_doordatas3[i]);
                    _this.doorFlow[3].people = _this.doorFlow[3].people + parseInt(_peopleatas3[i]);
                    _this.doorFlow[4].car = _this.doorFlow[4].car + parseInt(_doordatas4[i]);
                    _this.doorFlow[4].people = _this.doorFlow[4].people + parseInt(_peopleatas4[i]);
                }

            });
            //监控
            $.get(_this.baseUrl + _this.urlList.monitorList, function(data) {
                var _data = _this.SelectData(eval(data[0].IndicatorData));
                _this.monitorList = _data;

                for (var i = 0; i < _this.monitorList.length; i++) {

                    if (_this.monitorList[i].isfixed == 1) {
                        _this.monitorFixed = _this.monitorList[i];
                    }
                    _this.monitorFenList.push(_this.monitorList[i]);
                    if (_this.monitorList[i].activ == 1) {
                        _this.monitorSwitch = _this.monitorList[i];

                    }
                }
            });
            //设备状况    返回字符串   拼接成数组
            $.get(_this.baseUrl + _this.urlList.equipmentState, function(data) {
                console.log(data)
                var _data = _this.SelectData(eval(data[0].IndicatorData));
                _this.equipmentState.equipment = _data[0].equipment.split(",").slice(0, 4);
                _this.equipmentState.monthAlarm = _data[0].monthAlarm.split(",").slice(0, 4);
                _this.equipmentState.dayAlarm = _data[0].dayAlarm.split(",").slice(0, 4);

            });
            //所有设备    type 区分
            $.get(_this.baseUrl + _this.urlList.allTool, function(data) {
                var _data = _this.SelectData(eval(data[0].IndicatorData));
                var List = _data;

                for (var i = 0; i < List.length; i++) {
                    if (List[i].type == "fire") {
                        _this.allTool.firleList.push(List[i]);
                    } else if (List[i].type == "power") {
                        _this.allTool.powerList.push(List[i]);
                    } else if (List[i].type == "drainage") {
                        _this.allTool.drainageList.push(List[i]);
                    } else if (List[i].type == "elevator") {
                        _this.allTool.elevatorList.push(List[i]);
                    } else if (List[i].type == "wayBrake") {
                        _this.allTool.wayBrakeList.push(List[i]);
                    } else if (List[i].type == "fence") {
                        _this.allTool.fenceList.push(List[i]);
                    }

                }
                //                        _this.allTool=eval(data[0].IndicatorData)[0];
            });
            //能耗分析
            $.get(_this.baseUrl + _this.urlList.energyAnalysis, function(data) {
                var _data = _this.SelectData(eval(data[0].IndicatorData));
                _this.energyAnalysis = _data[0];


            });
            // 人行车行  type 区分   返回字符串   拼接成数组
            $.get(_this.baseUrl + _this.urlList.access, function(data) {
                var _data = _this.SelectData(eval(data[0].IndicatorData));
                var access = _data;

                var wvalue1 = access[0].value.split(";")[0];
                var wvalue2 = access[0].value.split(";")[1];

                var evalue1 = access[1].value.split(";")[0];
                var evalue2 = access[1].value.split(";")[1];
                _this.peopleLine.abscissa = access[0].abscissa.split(",");

                _this.peopleLine.value = _this.timeInterception(wvalue1.split(","));

                _this.peopleLine.value1 = evalue2.split(",");

                _this.driving.abscissa = access[1].abscissa.split(",");
                _this.driving.value = _this.timeInterception(evalue1.split(","));
                _this.driving.value1 = wvalue2.split(",");
                //
            });
            // 设备完好
            $.get(_this.baseUrl + _this.urlList.housePrice, function(data) {
                var _data = _this.SelectData(eval(data[0].IndicatorData));
                var price = _data[0];
                console.log(_data)
                _this.housePrice.max = price.max;
                _this.housePrice.abscissa = price.abscissa.split(",");
                for (var i = 0; i < price.value.split(",").length; i++) {
                    _this.devicenorepair.data[i] = parseInt(price.value2.split(",")[i])
                }


            });


            //画圆
            setTimeout(function() {
                _this.Omnipotence();

            }, 2000)
        }
    }
});