var net = require('net');

var gsckl = "ebsportscanner;İpadresi,80,25,30,15";
var EBSsrvİpadresi = gsckl.split(';')[1].split(',')[0].toString();
var EBSPortCount = gsckl.split(';')[1].split(',').length;
var Dizi = gsckl.split(';')[1].split(',');

for (var i = 1; i < EBSPortCount; i++) {
    var port = Dizi[i].toString();

    EBSPortScanner(EBSsrvİpadresi, port);
}



function EBSPortScanner(İpAdress, Port) {

    var sock = new net.Socket();
    sock.setTimeout(2500);

    sock.on('connect', function () {
        console.log(İpAdress + ':' + Port + ' İp Açık.');

        sock.destroy();
    }).on('error', function (e) {

        console.log(İpAdress + ':' + Port + ' İp Kapalı: ' + e.message);

    }).on('timeout', function (e) {

        console.log(İpAdress + ':' + Port + ' İp Kapalı: timeout');

    }).connect(Port, İpAdress);

    //ebsportscanner;ipadresi,80
}
