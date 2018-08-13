var express = require('express');
var path = require('path');
var util = require('util');
var uuid = require('node-uuid');
var clients = [];
var app = express();
var expressWs = require('express-ws')(app);

function getserver(server) {

    var _clients = [];
    console.log(server, '12');
    for (var i = 0; i < clients.length; i++) {
        var _client = clients[i];
        if (_client.value === server) {
            _clients.push(_client);

        }

    }
    console.log(_clients, '21');
    return _clients;
}
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
    console.log('middleware');
    req.testing = 'testing';
    console.log('0')
    return next();

});

app.get('/', function (req, res, next) {
    console.log('get route', req.testing);

    console.log('1')
    res.end();
});

app.ws('/', function (ws, req) {
    ws.on('message', function (msg) {
            if (msg != null) {
                console.log("收到的信息为:" + msg);
                var client = JSON.parse(msg);
                console.log("收到的信息为:" + client.type);
                var client_uid = uuid.v4();
                if (client.type === "regist") {
                    clients.push({
                        "type": client.type,
                        "uid": client_uid,
                        "server": client.server,
                        "ws": ws,
                        "value": client.value
                    });
                    var result = {"uid": client_uid, "status": "连接成功"}
                    ws.send(JSON.stringify(result));
                } else {
                    console.log(client, '59')
                    var servers = getserver(client.server);
                    // console.log(servers)
                    // console.log(servers.length)
                    for (var i = 0; i < servers.length; i++) {
                        var _server = servers[i];
                        console.log(_server, '65');
                        // console.log("发送消息为:" + JSON.stringify(client.order[0]));
                        // _server.ws.send(JSON.stringify(client.order[0]));
                        try {
                            _server.ws.send(JSON.stringify(client.order[0]))
                        }
                        catch (err) {
                            console.log('未检测到:'+_server.uid)
                        }

                    }

                }
            } else {
                console.log("连接已关闭");
            }
        }
    );
    // console.log('2')
    // console.log('socket', req.testing);
});

app.listen(3000);

// console.log("WebSocket建立完毕")
