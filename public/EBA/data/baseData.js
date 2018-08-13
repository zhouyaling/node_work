//左上顶部数据
var leftTopData = { projectNum: 149, newProject: 12, projectAll: 300, area: 4041, newArea: 98.5, deviceNum: 31532, newDevice: 145 };
//设备使用情况占比左部
var leftProjectPercent = [
    { number: 3678, maxNum: 4132 },
    { number: 57, maxNum: 2850 },
    { number: 83, maxNum: 2767 },
    { number: 88, maxNum: 1467 }
];
var carnums = ['35', '25', '12', '9', '8', '6'];
var carSum = 0;
for (var i = 0; i < carnums.length; i++) {
    carSum += parseInt(carnums[i]);
};
console.log(carSum);
var p1 = (carnums[0].number * 100 / carSum).toFixed(0);
var p2 = (carnums[1].number * 100 / carSum).toFixed(0);
var p3 = (carnums[2].number * 100 / carSum).toFixed(0);
var p4 = (carnums[3].number * 100 / carSum).toFixed(0);
// bilingCircle(p1,p2,p3,p4);
//设备使用情况占比轮播图数据
var courseData = [{
            "name": "供配电",
            "number": "936",
            "percent": "12"
        },
        {
            "name": "给排水",
            "number": "1635",
            "percent": "18"
        }
    ]
    //报警记录数据
var warData = [{ address: "成都花园主入口", position: "车行道闸", time: "2018-07-20 16:31:18", status: "已处理" },
    { address: "成都花园3号车库入口", position: "车行道闸", time: "2018-07-10 20:21:17", status: "已处理" },
    { address: "成都花园1号车库入口", position: "车行道闸", time: "2018-07-28 09:20:37", status: "等待维修" },
    { address: "成都花园4号车库入口", position: "车行道闸", time: "2018-07-20 11:10:48", status: "超时" },
    { address: "金科十年城主人口", position: "车行道闸", time: "2018-07-20 08:23:16", status: "已处理" },
    { address: "天湖美镇2号车库入口", position: "车行道闸", time: "2018-07-20 18:26:34", status: "已处理" },
    { address: "廊桥水乡主入口", position: "车行道闸", time: "2018-07-20 19:26:17", status: "已处理" },
    { address: "太阳海岸3号车库入口", position: "车行道闸", time: "2018-07-10 22:01:38", status: "超时" }

]; //维修人员数据
var personData = [{ src: "images/person3.png", name: "王锦", number: "JK9364", date: "2018/1/5 12:16:36", serviceTime: "28", address: "成都花园主入口", position: "车行道闸" },
    { src: "images/person2.png", name: "张丽", number: "HK481", date: "2018/2/6 12:16:36", serviceTime: "10", address: "重庆花园车库入口", position: "车行道闸" },
    { src: "images/E-img10.png", name: "潘越", number: "DS810", date: "2018/2/5 16:08:36", serviceTime: "20", address: "重庆黄花园大桥", position: "车行道闸" },
    { src: "images/person2.png", name: "赵茜", number: "SE620", date: "2018/2/6 08:16:36", serviceTime: "41", address: "重庆花园主入口", position: "车行道闸" },
    { src: "images/person.png", name: "刘大海", number: "EG120", date: "2018/2/5 19:16:36", serviceTime: "36", address: "成都花园主入口", position: "车行道闸" }
];
//接入城市数
var allCityNumber = 306;
//设备运行警示数据
var deviceData = [
    { number: 9, maxNum: 500 },
    { number: 0, maxNum: 500 },
    { number: 3, maxNum: 500 },
];

//当月数据
var monthData = { monthPercent: 98.3, monthDevice: 3678, monthPerfect: 3358 };
//右部中间数据
var rightData = { taiNum: 84, frequency: 1299, allTime: 2116, avgTime: 0.61, avgNum: 0.263 };