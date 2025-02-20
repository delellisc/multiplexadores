import { duasEntMUX, quatroEntMUX, oitoEntMUX } from "./script.js";

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".dois-dig button").addEventListener("click", duasMult);
});

document.addEventListener("DOMContentLoaded", () => {
    const inputs = document.querySelectorAll('input[type="number"]');
    
    inputs.forEach(input => {
        input.addEventListener('input', (event) => {
            validacao(event.target);
        });
    });
});

function duasMult(){
    let de0 = document.getElementById("d-e0").value
    let de1 = document.getElementById("d-e1").value
    let dc0 = document.getElementById("d-c0").value
    return console.log(duasEntMUX(
        conversorBool(de0),
        conversorBool(de1),
        conversorBool(dc0)
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