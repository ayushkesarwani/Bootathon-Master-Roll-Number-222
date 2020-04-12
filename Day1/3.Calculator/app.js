var t1 = document.getElementById("t1");
var t2 = document.getElementById("t2");
var t3 = document.getElementById("t3");
function add() {
    var c = parseFloat(t1.value) + parseFloat(t2.value);
    t3.value = c.toString();
}
function sub() {
    var c = parseFloat(t1.value) - parseFloat(t2.value);
    t3.value = c.toString();
}
function mul() {
    var c = parseFloat(t1.value) * parseFloat(t2.value);
    t3.value = c.toString();
}
function div() {
    var c = parseFloat(t1.value) / parseFloat(t2.value);
    t3.value = c.toString();
}
//# sourceMappingURL=app.js.map