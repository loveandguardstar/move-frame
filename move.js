/**
 * Created by lover star on 2018/5/23.
 */
var move = function (obj, json, endFn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var pos = 0;
        for(var attr in json) {
            if (attr == "opacity") {
                pos = parseInt(parseFloat(getStyle(obj, attr)) * 100);
            }
            else {
                pos = parseInt(getStyle(obj, attr));
            }

            var iSpeed = (json[attr] - pos) / 8;
            iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);

            if(pos == json[attr]) {
                clearInterval(obj.timer);
                endFn && endFn();
            }
            else {
                if (attr == "opacity") {
                    obj.style.filter = "alpha(opacity:"+ (pos + iSpeed) +")";
                    obj.style.opacity = (pos + iSpeed) / 100;
                }
                else {
                    obj.style[attr] = pos + iSpeed + "px";
                }
            }
        }
    }, 30);
};
var getStyle = function (obj, attr) {
    return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj, null)[attr]
};
