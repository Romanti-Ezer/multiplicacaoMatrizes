function criarMatrizes() {
    let matrizA = document.getElementById("matrizA")
    let matrizB = document.getElementById("matrizB")
    let matrizC = document.getElementById("matrizC")
    
    let matriz = ['A', 'B', 'C']

    for (cont = 0; cont < matriz.length; cont++) {
        for (i = 1; i < 4; i++) {
            let linha = document.createElement("div")

            for (j = 1; j < 4; j++) {
                let divSize = document.createElement("div")

                linha.setAttribute("class", "form-row text-center align-items-center")
                divSize.setAttribute("class", "col-sm-4 mb-3")

                let elemento = document.createElement("input")
                elemento.setAttribute("type", "number")
                elemento.setAttribute("id", "elemento" + matriz[cont] + i + j)
                elemento.setAttribute("class", "form-control text-center")
                elemento.setAttribute("placeholder", "" + matriz[cont] + i + j)
                elemento.required = true
                if (matriz[cont] === 'C') {
                    elemento.readOnly = true    
                }

                divSize.appendChild(elemento)
                linha.appendChild(divSize)

            }
            switch (matriz[cont]) {
                case 'A': matrizA.appendChild(linha)
                    break
                case 'B': matrizB.appendChild(linha)
                    break
                case 'C': matrizC.appendChild(linha)
                    break
            }
        }
    }
}

function checkarInputsPreenchidos() {
    console.log("Checkando inputs preechidos...")
    let input = document.getElementsByTagName("input")
    for (let i = 0; i < input.length; i++) {
        if (input[i].readOnly !== true && input[i].value === '') {
            console.log("Ainda há campos vazios!")
            return false
        }
    }
    console.log("Pronto para o cálculo! Vamos lá")
    // Implementar código para calcular
    return true
}

console.log("Criando matrizes...")
criarMatrizes()
console.log("Matrizes criadas - ", Date())