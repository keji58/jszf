var ua =  navigator.userAgent.toLowerCase();
var body = document.getElementsByTagName('body')[0];

var Util = {
    ios:(/iPhone|iPad|iPod|iTouch/i).test(ua),
    android:(/Android/i).test(ua)
};

if(Util.ios){
    body.className="fyl-ios";
}else if(Util.android){
    body.className="fyl-android";
}else{
    document.getElementById('link-web').style.display="block";
}