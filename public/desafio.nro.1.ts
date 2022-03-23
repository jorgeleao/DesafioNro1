// This code is rather verbose, but the objective is educational...
function calcular(a:number,b:number):number{
    return a + b
}

function mostrarResultadoCalculo(){
    let elemA:HTMLInputElement
    let elemB:HTMLInputElement
    elemA = <HTMLInputElement>document.getElementById("a")
    elemB = <HTMLInputElement>document.getElementById("b")
    let a = Number(elemA.value)
    let b = Number(elemB.value)
    document.getElementById("saida1").innerHTML = String(calcular(a,b))
}

document.getElementById("enter_button1").addEventListener("click", mostrarResultadoCalculo)

// Re-usable template:
const templateNumeroParaString = expressao => `O número digitado foi ${String(expressao)}.`;

function mostrarConfere(){
    // Variável tipada por annotation
    let elemX:HTMLInputElement
    // Typecasting
    elemX = <HTMLInputElement>document.getElementById("x")
    // Variável tipada por inferência
    let x = Number(elemX.value)
    // Valor tipado por conversão
    // Observe o uso de "string interpolation"
    document.getElementById("saida2").innerHTML = templateNumeroParaString(x)
}

document.getElementById("enter_button2").addEventListener("click", mostrarConfere)




