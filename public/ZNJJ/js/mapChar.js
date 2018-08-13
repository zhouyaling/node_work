//初始化生成地图
var weatherIcons = {
      'Sunny': './images/Fill 1 Copy 6@1x.png',
    'Cloudy': './images/Fill 1 Copy 6@1x.png',
    'Showers': './images/Fill 1 Copy 6@1x.png'
};
var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value),
                /*label: {
                        normal: {
                            formatter: [
                                  '{Showers|}{value|'+ data[i].value +'}'
                            ].join('\n'),
                           // backgroundColor: '#eee',
                            //borderColor: '#777',
                            borderWidth: 1,
                            borderRadius: 4,
                            rich: {
                                title: {
                                    color: '#eee',
                                    align: 'center'
                                },
                                abg: {
                                    backgroundColor: '#333',
                                    width: '100%',
                                    align: 'right',
                                    height: 25,
                                    borderRadius: [4, 4, 0, 0]
                                },
                                Sunny: {
                                    height: 30,
                                    align: 'left',
                                    backgroundColor: {
                                        image: weatherIcons.Sunny
                                    }
                                },
                                Cloudy: {
                                    height: 30,
                                    align: 'left',
                                    backgroundColor: {
                                        image: weatherIcons.Cloudy
                                    }
                                },
                                Showers: {
                                    height: 30,
                                    align: 'left',
                                    backgroundColor: {
                                        image: weatherIcons.Showers
                                    }
                                },
                                weatherHead: {
                                    color: '#333',
                                    height: 24,
                                    align: 'left'
                                },
                                hr: {
                                    borderColor: '#777',
                                    width: '100%',
                                    borderWidth: 0.5,
                                    height: 0
                                },
                                value: {
                                    width: 20,
                                    fontSize:20,
                                    color:'#fff',
                                    padding: [0, 0, 0, 0],
                                    align: 'left'
                                },
                                valueHead: {
                                    color: '#333',
                                    width: 20,
                                    padding: [0, 20, 0, 30],
                                    align: 'center'
                                },
                                rate: {
                                    width: 40,
                                    align: 'right',
                                    padding: [0, 10, 0, 0]
                                },
                                rateHead: {
                                    color: '#333',
                                    width: 40,
                                    align: 'center',
                                    padding: [0, 10, 0, 0]
                                }
                            }
                        }
                   },*/
                  symbol:data[i].symbol,
                  symbolSzie:data[i].symbolSize
            });
        }
    }
    return res;
};

function mapChar(data1, data2) {
	option = {
   // backgroundColor: '#404a59',
    title: {
      
    },
    roam: false,
    mapLocation: {
			x: 'center',
			y: 'center'
		},
    tooltip : {
        trigger: 'item'
    },
    dataRange: {
			show: false,
			min: 0,
			max: 0,
			calculable: true,
			color:['#00dfff','#fff']
		},
    geo: {
        map: 'china',
        label: {
        	  normal: {
                color:'#fff',
                show: true
            },
            emphasis: {
                show: false
            }
        },
        roam: false,
        itemStyle: {
            normal: {
                areaColor: '#122f6e',
                borderWidth: 1.5,
                borderColor: 'rgba(67,186,255,1)'
            },
            emphasis: {
                 areaColor: '#122f6e',
                borderWidth: 1.5,
                borderColor: 'rgba(67,186,255,1)'
            }
        }
    },
    series : [
        {
            name: 'pm2.5',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: data1,
            symbolSize: 5,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#ddb926'
                }
            }
        },
        {
            name: 'Top 5',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: convertData(data1),
            symbolSize: 20,
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            label: {
                normal: {
                	fontSize:20,
                    position: 'top',
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    color: '#f4e925',
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            zlevel: 1
        },{
        	
            name: 'Top 5',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: convertData(data2),
            symbolSize:20,
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            label: {
                normal: {
                	fontSize:20,
                    position: 'top',
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#f4e925',
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            zlevel: 1
        
        }
    	
    ]
};
		return option;
}

/*function getPointData(data3){
	var num=Math.ceil(Math.random()*(data3.length-1));
   for(var i=0;i<data3.length;i++){
   	   data3[i].symbol='image://./images/mapMark1.png';
   	   data3[i].symbolSize='20';
   }
   data3[num].symbol='circle';
   data3[num].symbolSize='10';
   dataMap=data3;
  return [data3[num]];
}*/
