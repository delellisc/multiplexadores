/* import { duasEntMUX, quatroEntMUX, oitoEntMUX } from "./script.js";

// validação dos inputs
document.addEventListener("DOMContentLoaded", () => {
    const inputs = document.querySelectorAll('input[type="number"]');
    
    inputs.forEach(input => {
        input.addEventListener('input', (event) => {
            validacao(event.target);
        });
        input.value = 0;
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
} */


/* // função para mudar o estilo dos elementos caso estejam em nível lógico alto
function acenderElementosOR(id) {
    const group = document.getElementById(id);
    const elements = group.querySelectorAll("line, circle");

    elements.forEach(el => {
        if (el.classList.contains("nivelLogicoBaixo")){
            el.classList.remove("nivelLogicoBaixo");
            el.classList.add("nivelLogicoAlto");
        }
        else {
            el.classList.remove("nivelLogicoAlto");
            el.classList.add("nivelLogicoBaixo");
        }
    });

    const groupOutput = document.getElementById("ors0");
    const elementsOutput = groupOutput.querySelectorAll("line, circle");

    const ore0 = document.querySelector("#ore0 line");
    const ore1 = document.querySelector("#ore1 line");

    elementsOutput.forEach(el => {
        if (ore0.classList.contains("nivelLogicoAlto") || ore1.classList.contains("nivelLogicoAlto")){
            el.classList.remove("nivelLogicoBaixo");
            el.classList.add("nivelLogicoAlto");
        }
        else {
            el.classList.remove("nivelLogicoAlto");
            el.classList.add("nivelLogicoBaixo");
        }
    });
}

document.getElementById('ore0').addEventListener("click", function () {
    acenderElementosOR(this.id);
});

document.getElementById('ore1').addEventListener("click", function () {
    acenderElementosOR(this.id);
}); */


// função para mudar o estilo dos elementos caso estejam em nível lógico alto
function acenderElementosAND(id) {
    const group = document.getElementById(id);
    const elements = group.querySelectorAll("line, circle");

    elements.forEach(el => {
        if (el.classList.contains("nivelLogicoBaixo")){
            el.classList.remove("nivelLogicoBaixo");
            el.classList.add("nivelLogicoAlto");
        }
        else {
            el.classList.remove("nivelLogicoAlto");
            el.classList.add("nivelLogicoBaixo");
        }
    });

    const groupOutput = document.getElementById("ands0");
    const elementsOutput = groupOutput.querySelectorAll("line, circle");

    const ande0 = document.querySelector("#ande0 line");
    const ande1 = document.querySelector("#ande1 line");

    elementsOutput.forEach(el => {
        if (ande0.classList.contains("nivelLogicoAlto") && ande1.classList.contains("nivelLogicoAlto")){
            el.classList.remove("nivelLogicoBaixo");
            el.classList.add("nivelLogicoAlto");
        }
        else {
            el.classList.remove("nivelLogicoAlto");
            el.classList.add("nivelLogicoBaixo");
        }
    });
}

document.getElementById('ande0').addEventListener("click", function () {
    acenderElementosAND(this.id);
});

document.getElementById('ande1').addEventListener("click", function () {
    acenderElementosAND(this.id);
});