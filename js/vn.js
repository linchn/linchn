function loadHTML() {
    var body=document.getElementsByTagName("body");
    var table=document.createElement("table");
    for(var i=0;i<=4;i+=4){
        var otr=document.createElement("tr");
        for(var j=1;j<=4;j++){
            var otd=document.createElement("td");
            var div=document.createElement("div");
            div.className="vn";
            div.id="vn0"+(i+j);
            otd.appendChild(div);
            otr.appendChild(otd);
        }
        table.appendChild(otr);
    }
    body[0].appendChild(table);
}

function addChannels() {//遍历表格id 并依次添加每个播放器；
    var ones = document.getElementsByClassName("vn");
    for (var i = 0; i < ones.length; i++) {
        var val = ones[i].getAttribute("id");
        var r_link = "http://192.168.8.20" + val[3] + "/cgi-bin/set_sys.cgi?type=reboot";
        var player = jwplayer(val);
        player.setup({
            flashplayer: "Player/jwplayer.flash.swf",
            file: "rtmp://192.168.8.250/sat/" + val + "2",
            stretching: "exactfit",
            height: document.documentElement.clientHeight * 0.5,
            width: document.documentElement.clientWidth * 0.25,
            mute: true,
            channel: val.toUpperCase(),
            reboot: r_link,
            events: {onDisplayClick: function(){this.play();}}
        });
        player = null;
        $(window).resize((function (ids) {
            return (function () {
                $(ids).width(document.documentElement.clientWidth * 0.25);
                $(ids).height(document.documentElement.clientHeight * 0.5);
            })
        }("#" + val)));
    }
    function doReboot(n){
        if(n==7) return false;
        else  ones.mywin=window.open("http://192.168.8.20"+n+"/cgi-bin/set_sys.cgi?type=reboot");
        setTimeout(function () {
            ones.mywin.close();
        },2000);
    }
}

//DOM加载完成后运行JS的方法
function addLoadEvent(func){
    var oldonload=window.onload;
    if(typeof window.onload!="function"){
        window.onload=func;
    }else{
        window.onload=function(){
            oldonload();
            func();
        }
    }
}
addLoadEvent(loadHTML);
addLoadEvent(addChannels);