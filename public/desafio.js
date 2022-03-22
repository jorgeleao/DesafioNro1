// "use strict"; 
// function soma_dois_numeros(a, b) {
//     return a + b;
// }
function chamaSoma() {
//    var a = Number(document.getElementById("a").getAttribute("value"));
//    var b = Number(document.getElementById("b").getAttribute("value"));
    console.log("=== OK"); //soma_dois_numeros(a, b));
}

var ele = document.getElementById("enter_button");
ele.onclick = function(){chamaSoma()};
console.log(chamaSoma());
document.getElementById("enter_button").addEventListener("click", chamaSoma);
