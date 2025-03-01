function toggleLogicLevel(element) {
    element.classList.toggle("nivelLogicoBaixo");
    element.classList.toggle("nivelLogicoAlto");
}

function update2MUX() {
    const s0 = document.getElementById("s0");
    const in0 = document.getElementById("in0");
    const in1 = document.getElementById("in1");
    const not = document.getElementById("not0");
    const e0Row = document.getElementById("e0-row");
    const e1Row = document.getElementById("e1-row");
    const and1Output = document.getElementById("and1out");
    const and2Output = document.getElementById("and2out");
    const orOutput = document.getElementById("or0");

    // NOT = S0'
    if (s0.classList.contains("nivelLogicoAlto")) {
        not.classList.replace("nivelLogicoAlto", "nivelLogicoBaixo");
        e0Row.classList.replace("linhaLogicoAlto", "linhaLogicoBaixo");
        e1Row.classList.add("linhaLogicoAlto");
    } else {
        not.classList.replace("nivelLogicoBaixo", "nivelLogicoAlto");
        e1Row.classList.replace("linhaLogicoAlto", "linhaLogicoBaixo");
        e0Row.classList.add("linhaLogicoAlto");
    }

    // AND1 = S0 ⋅ IN1
    if (s0.classList.contains("nivelLogicoAlto") && in1.classList.contains("nivelLogicoAlto")) {
        and1Output.classList.replace("nivelLogicoBaixo", "nivelLogicoAlto");
    } else {
        and1Output.classList.replace("nivelLogicoAlto", "nivelLogicoBaixo");
    }

    // AND2 = S0' ⋅ IN0
    if (not.classList.contains("nivelLogicoAlto") && in0.classList.contains("nivelLogicoAlto")) {
        and2Output.classList.replace("nivelLogicoBaixo", "nivelLogicoAlto");
    } else {
        and2Output.classList.replace("nivelLogicoAlto", "nivelLogicoBaixo");
    }

    // OR = AND1 + AND2
    if (and1Output.classList.contains("nivelLogicoAlto") || and2Output.classList.contains("nivelLogicoAlto")) {
        orOutput.classList.replace("nivelLogicoBaixo", "nivelLogicoAlto");
    } else {
        orOutput.classList.replace("nivelLogicoAlto", "nivelLogicoBaixo");
    }
}

document.querySelectorAll("#s0, #in0, #in1").forEach(element => {
    element.addEventListener("click", function () {
        toggleLogicLevel(this);
        update2MUX();
    });
});