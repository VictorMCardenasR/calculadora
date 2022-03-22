
var operandoa;
var operandob;
var operacion;

function init() {
    var igual = document.getElementById('igual');
    var uno = document.getElementById('uno');
    var dos = document.getElementById('dos');
    var tres = document.getElementById('tres');
    var cuatro = document.getElementById('cuatro');
    var cinco = document.getElementById('cinco');
    var seis = document.getElementById('seis');
    var siete = document.getElementById('siete');
    var ocho = document.getElementById('ocho');
    var nueve = document.getElementById('nueve');
    var cero = document.getElementById('cero');
    var display = document.getElementById('resultado');
    var reset = document.getElementById('reset');
    var suma = document.getElementById('suma');
    var resta = document.getElementById('resta');
    var multiplicacion = document.getElementById('multiplicacion');
    var division = document.getElementById('division');
    var igual = document.getElementById('igual');
}
uno.onclick = function (e) {
    display.textContent = display.textContent + "1";
}
dos.onclick = function (e) {
    display.textContent = display.textContent + "2";
}
tres.onclick = function (e) {
    display.textContent = display.textContent + "3";
}
cuatro.onclick = function (e) {
    display.textContent = display.textContent + "4";
}
cinco.onclick = function (e) {
    display.textContent = display.textContent + "5";
}
seis.onclick = function (e) {
    display.textContent = display.textContent + "6";
}
siete.onclick = function (e) {
    display.textContent = display.textContent + "7";
}
ocho.onclick = function (e) {
    display.textContent = display.textContent + "8";
}
nueve.onclick = function (e) {
    display.textContent = display.textContent + "9";
}
cero.onclick = function (e) {
    display.textContent = display.textContent + "0";
}
reset.onclick = function (e) {
    resetear();
}
suma.onclick = function (e) {
    operandoa = display.textContent;
    operacion = "+";
    limpiar();
}
resta.onclick = function (e) {
    operandoa = display.textContent;
    operacion = "-";
    limpiar();
}
multiplicacion.onclick = function (e) {
    operandoa = display.textContent;
    operacion = "*";
    limpiar();
}
division.onclick = function (e) {
    operandoa = display.textContent;
    operacion = "/";
    limpiar();
}
igual.onclick = function (e) {
    operandob = display.textContent;
    resolver();
}
function limpiar() {
    display.textContent = "";
}
function resetear() {
    display.textContent = "";
    operandoa = 0;
    operandob = 0;
    operacion = "";
}

function resolver() {
    var res = 0;
    switch (operacion) {
        case "+":
            res = parseFloat(operandoa) + parseFloat(operandob);
            break;
        case "-":
            res = parseFloat(operandoa) - parseFloat(operandob);
            break;
        case "*":
            res = parseFloat(operandoa) * parseFloat(operandob);
            break;
        case "/":
            res = parseFloat(operandoa) / parseFloat(operandob);
            break;
    }
resetear();
display.textContent = res;
}    
