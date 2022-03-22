// This code is rather verbose, but the objective is educational...
function calcular(a:number,b:number):number{
    return Math.sin(a)/Math.tanh(b)
}

function mostrarSoma(){
    let elemA:HTMLInputElement
    let elemB:HTMLInputElement
    elemA = <HTMLInputElement>document.getElementById("a")
    elemB = <HTMLInputElement>document.getElementById("b")
    let a = Number(elemA.value)
    let b = Number(elemB.value)
    document.getElementById("saida").innerHTML = String(calcular(a,b))
}

document.getElementById("enter_button").addEventListener("click", mostrarSoma)





