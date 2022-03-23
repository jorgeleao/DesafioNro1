// This code is rather verbose, but the objective is educational...
function calcular(a, b) {
    return a + b;
}
function mostrarResultadoCalculo() {
    var elemA;
    var elemB;
    elemA = document.getElementById("a");
    elemB = document.getElementById("b");
    var a = Number(elemA.value);
    var b = Number(elemB.value);
    document.getElementById("saida1").innerHTML = String(calcular(a, b));
}
document.getElementById("enter_button1").addEventListener("click", mostrarResultadoCalculo);
// Re-usable template:
var templateNumeroParaString = function (expressao) { return "O n\u00FAmero digitado foi " + String(expressao) + "."; };
function mostrarConfere() {
    // Variável tipada por annotation
    var elemX;
    // Typecasting
    elemX = document.getElementById("x");
    // Variável tipada por inferência
    var x = Number(elemX.value);
    // Valor tipado por conversão
    // Observe o uso de "string interpolation"
    document.getElementById("saida2").innerHTML = templateNumeroParaString(x);
}
document.getElementById("enter_button2").addEventListener("click", mostrarConfere);
