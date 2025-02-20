import { duasEntMUX, quatroEntMUX, oitoEntMUX } from "./script.js";

// validação dos inputs
document.addEventListener("DOMContentLoaded", () => {
    const inputs = document.querySelectorAll('input[type="number"]');
    
    inputs.forEach(input => {
        input.addEventListener('input', (event) => {
            validacao(event.target);
        });
    });
});

// executar MUX de duas entradas
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".dois-dig").addEventListener("click", duasMult);
});

function duasMult(){
    let de0 = document.getElementById("d-e0").value
    let de1 = document.getElementById("d-e1").value
    let dc0 = document.getElementById("d-c0").value
    console.log(de0, de1, dc0)
    return console.log(duasEntMUX(
        conversorBool(de0),
        conversorBool(de1),
        conversorBool(dc0)
    ))
}

// executar MUX de quatro entradas
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".quatro-dig").addEventListener("click", quatroMult);
});

function quatroMult(){
    let qe0 = document.getElementById("q-e0").value
    let qe1 = document.getElementById("q-e1").value
    let qe2 = document.getElementById("q-e2").value
    let qe3 = document.getElementById("q-e3").value
    let qc1 = document.getElementById("q-c1").value
    let qc0 = document.getElementById("q-c0").value
    console.log(qe0, qe1, qe2, qe3, qc1, qc0)
    return console.log(quatroEntMUX(
        conversorBool(qe0),
        conversorBool(qe1),
        conversorBool(qe2),
        conversorBool(qe3),
        conversorBool(qc1),
        conversorBool(qc0)
    ))
}

// executar MUX de oito entradas
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".oito-dig").addEventListener("click", oitoMult);
});

function oitoMult(){
    let oe0 = document.getElementById("o-e0").value
    let oe1 = document.getElementById("o-e1").value
    let oe2 = document.getElementById("o-e2").value
    let oe3 = document.getElementById("o-e3").value
    let oe4 = document.getElementById("o-e4").value
    let oe5 = document.getElementById("o-e5").value
    let oe6 = document.getElementById("o-e6").value
    let oe7 = document.getElementById("o-e7").value
    let oc2 = document.getElementById("o-c2").value
    let oc1 = document.getElementById("o-c1").value
    let oc0 = document.getElementById("o-c0").value
    let oen = document.getElementById("o-en").value
    console.log(oe0, oe1, oe2, oe3, oe4, oe5, oe6, oe7, oc2, oc1, oc0, oen);
    return console.log(oitoEntMUX(
        conversorBool(oe0),
        conversorBool(oe1),
        conversorBool(oe2),
        conversorBool(oe3),
        conversorBool(oe4),
        conversorBool(oe5),
        conversorBool(oe6),
        conversorBool(oe7),
        conversorBool(oc2),
        conversorBool(oc1),
        conversorBool(oc0),
        conversorBool(oen)
    ))
}

//funcao pra receber apenas 0 ou 1 no input
function validacao(input) {
    if (input.value !== "0" && input.value !== "1") {
        input.value = "" 
    }
}
//função para converter os valores numericos em boolean
function conversorBool(value) {
    return value === 1 || value === "1";
}