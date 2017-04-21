/**
 * Created by Administrator on 2017-3-19.
 */
function moveElement(elemID,final_x,final_y,interval){
    var elem=document.getElementById(elemID);
    if(elem.movement){clearTimeout(elem.movement);}
    if(!elem.style.top){
        elem.style.top="0px";
    }
    if(!elem.style.left){
        elem.style.left="0px";

    }
    var xpos=parseInt(elem.style.left);
    var ypos=parseInt(elem.style.top);
    var dist=0;
    if(xpos==final_x&&ypos==final_y){return true;}

    if(xpos<final_x){
        dist=Math.ceil((final_x-xpos)/10);
        xpos+=dist;
    }
    if(xpos>final_x){
        dist=Math.ceil((xpos-final_x)/10);
        xpos-=dist;
    }
    if(ypos<final_y){
        dist=Math.ceil((final_y-xpos)/10);
        ypos+=dist;
    }
    if(ypos>final_y){
        dist=Math.ceil((ypos-final_y)/10);
        ypos-=dist;
    }
    elem.style.left=xpos+"px";
    elem.style.top=ypos+"px";
    var repeat="moveElement('"+elemID+"',"+final_x+","+final_y+","+interval+")";
    elem.movement=setTimeout(repeat,interval);
}
