var num = 0;
function cal(num) {
    document.getElementById("screenName").value +=document.getElementById(num).value;
}
function eql() {
    document.getElementById("screenName").value = eval(document.getElementById("screenName").value);
}
function clearscreen() {
    document.getElementById("screenName").value = null;
}
function delnum() {
    var arr = document.getElementById("screenName").value;
    arr = arr.substring(0, arr.length - 1);
    document.getElementById("screenName").value = arr;
}

