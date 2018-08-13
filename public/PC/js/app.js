//webSocket 配置
if (window.WebSocket) {
    var ws = new WebSocket('ws://localhost:5555');
    ws.onopen = function(e) {
        console.log("连接服务器成功");
        var item = {};
        item.type = "regist";
        item.server = "no";
        item.value = "server2010701";
        item.order = [];

        ws.send(JSON.stringify(item));
    }
    ws.onclose = function(e) {
        console.log("服务器关闭");
    }
    ws.onerror = function() {
        console.log("连接出错");
    }
    ws.onmessage = function(e) {
        var item = JSON.parse(e.data);
        console.log(item)
        showPage(item.showImg);
        var item = order("1");
        ws.send(JSON.stringify(item));
    }
}

//
function order(_status) {
    var item = {};
    item.type = "order";
    item.server = "client2010701"; //识别客户端
    item.value = "";
    item.order = [];
    var jObj = {
        status: "1",
    };
    item.order.push(jObj)
    return item;
}

function showPage(page) {
    console.log(page)
    switch (page) {
        case "home":

            $('#iframe').attr('src', '../HOME/index.html')
            console.log($('#iframe').attr("src"))
            console.log('home')
            $.connection.myHub.server.readMessage('天启大数据信息系统是金科服务与微软的首个战略成果，也是国内首个基于千万级用户容量规划的物业信息系统，整个系统涉及到智慧社区、智慧生活、家庭构成、社区、消费、预警等很多方面，集系统数据、物联数据、行业数据和生活服务数据于一体，为我们金科所有项目的运作和服务工作，提供深度的管理和决策支撑。');
            break;
        case "thmz":

            $('#iframe').attr('src', '../THMZ/index.html')
            console.log($('#iframe').attr("src"))
            console.log('thmz')
            $.connection.myHub.server.readMessage('天湖美镇是一个已经运行12年的小区，金科通过线上线下设施设备的改造，把社区巡更、能耗、设备管理、业主服务等等集成到天启系统中，这些管控将所有的工作数字化，透明化，有效促地进了服务质量以及服务效率提升。');
            break
        case "znjj":

            $('#iframe').attr('src', '../ZNJJ/index.html')
            console.log($('#iframe').attr("src"))
            console.log('znjj')
            $.connection.myHub.server.readMessage('除了对社区的工作管理和服务外，金科同样也作力于家庭服务的研究。我们通过智慧家居可以采集到家庭对生活服务要求，运行情况，环境指示等等 ，业主都可以按照家庭的要求设置，在金科大社区的APP上即可完成设置。这些服务或者设备运行的结果，都会接入到天启系统中，也会对我们不断完善社区周边服务提供依据。');
            break
        case "eba":

            $('#iframe').attr('src', '../EBA/index.html')
            console.log($('#iframe').attr("src"))
            console.log('eba')
            $.connection.myHub.server.readMessage('EBA即远程设备管控平台，是对社区所有基础设施和智能设备进行监管和维护，包括消防，配电，供暖、给排水，电梯等等平时对业主生活非常重要设施的管控。通过这种物联网的监测，小白的同事们可以随时掌握设施设备运行的健康状况，提前预警到需要维护和检测的设备或环境，保障业主在社区的舒适生活。');
            break
        case "tj":

            $('#iframe').attr('src', '../TJ/index.html')
            console.log($('#iframe').attr("src"))
            console.log('eba')
            $.connection.myHub.server.readMessage('这个就是我们武清博翠湾的管理界面了，由于现在项目还处于建设阶段，很多运营和服务工作的数据也还在接入过程中，待项目正式接房运营后，小白和同事们就会为大家带来更多贴心的服务，小白也很期待，早点迎接新主人呢。');
            break
        case "dsq":

            $('#iframe').attr('src', '../DSQ/index.html')
            console.log($('#iframe').attr("src"))
            console.log('eba')
            $.connection.myHub.server.readMessage('金科大社区是针对所有业主需求和服务的管理平台，这里统计了全国的业主主人们在线上线使用金科提供的社区服务情况，满意度反馈等等，为小白和同事们下阶段的服务工作做到更精准的支撑和延展。');
            break
        case "dgj":

            $('#iframe').attr('src', '../DGJ/index.html')
            console.log($('#iframe').attr("src"))
            console.log('eba')
            $.connection.myHub.server.readMessage('除了对社区的工作管理和服务外，金科同样也作力于家庭服务的研究。我们通过智慧家居可以采集到家庭对生活服务要求，运行情况，环境指示等等 ，业主都可以按照家庭的要求设置，在金科大社区的APP上即可完成设置。这些服务或者设备运行的结果，都会接入到天启系统中，也会对我们不断完善社区周边服务提供依据。大管家是基于整个社区服务人员的管理平台，包括报事报修处理，环境品质、安全管理，巡更管理、服务抢单、楼栋管家服务、品质巡检、标准化作业指导等等。这些管控将所有的工作数字化，透明化，有效促进了服务质量以及服务效率提升，加强业主们的体验和感知。');
            break;
        case "yzfw":
            alert("tttt");
            $('#iframe').attr('src', '../YZFW/index.html')
            console.log($('#iframe').attr("src"))
            console.log('yzfw')
            $.connection.myHub.server.readMessage('大家好，现在为您展示的是业主服务平台，这里统计了全国业主在线上使用金科大社区平台的情况以及项目的满意度，为物业服务在下阶段的工作做到更精准的支撑和延展。我们也将根据业主对社群活动的参与程度，引入更多的外部优质资源，为业主提供更优质的生活服务。同时我们也将对业主的报事报修处理情况进行追踪，全国的社区设施设备进行远程监控以及派单维修，保证业主的生活更加智慧，更加美好。');
            break;
        case "bs":
            alert("tttt");
            $('#iframe').attr('src', '../BS/index.html')
            console.log($('#iframe').attr("src"))
            console.log('bs')
            $.connection.myHub.server.readMessage('大家好，现在为您展示的是业主服务平台，这里统计了全国业主在线上使用金科大社区平台的情况以及项目的满意度，为物业服务在下阶段的工作做到更精准的支撑和延展。我们也将根据业主对社群活动的参与程度，引入更多的外部优质资源，为业主提供更优质的生活服务。同时我们也将对业主的报事报修处理情况进行追踪，全国的社区设施设备进行远程监控以及派单维修，保证业主的生活更加智慧，更加美好。');
            break;
        default:
            $('#iframe').attr('src', '../HOME/index.html')
            console.log($('#iframe').attr("src"))
            console.log('other')
            break
    }
}