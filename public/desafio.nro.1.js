// This code is rather verbose, but the objective is educational...
function calcular(a, b) {
    return Math.sin(a) / Math.tanh(b);
}
function mostrarSoma() {
    var elemA;
    var elemB;
    elemA = document.getElementById("a");
    elemB = document.getElementById("b");
    var a = Number(elemA.value);
    var b = Number(elemB.value);
    document.getElementById("saida").innerHTML = String(calcular(a, b));
}
document.getElementById("enter_button").addEventListener("click", mostrarSoma);
