function toggleLogicLevel(element) {
    element.classList.toggle("nivelLogicoBaixo");
    element.classList.toggle("nivelLogicoAlto");
}

function isHighLevel(element) {
    return element.classList.contains("nivelLogicoAlto");
}

function setActiveRow(activeRow, allRows) {
    allRows.forEach(row => {
        row.classList.remove("linhaLogicoAlto");
        row.classList.add("linhaLogicoBaixo")
    });
    activeRow.classList.replace("linhaLogicoBaixo", "linhaLogicoAlto");
}

function update8MUX() {
    const s0 = document.getElementById("s0");
    const s1 = document.getElementById("s1");
    const in0 = document.getElementById("e0");
    const in1 = document.getElementById("e1");
    const in2 = document.getElementById("e2");
    const in3 = document.getElementById("e3");
    const not0 = document.getElementById("not0");
    const not1 = document.getElementById("not1");
    const and1Output = document.getElementById("and1out");
    const and2Output = document.getElementById("and2out");
    const and3Output = document.getElementById("and3out");
    const and4Output = document.getElementById("and4out");
    const orOutput = document.getElementById("or0");
    const e0Row = document.getElementById("e0-row");
    const e1Row = document.getElementById("e1-row");
    const e2Row = document.getElementById("e2-row");
    const e3Row = document.getElementById("e3-row");

    const tableRows = [e0Row, e1Row, e2Row, e3Row];

    // NOT0 = S0'
    if (isHighLevel(s0)) {
        not0.classList.replace("nivelLogicoAlto", "nivelLogicoBaixo");
        // S1 | S0 | X = E3
        if (isHighLevel(s1)) {
            setActiveRow(e3Row, tableRows);
        }
        // S1' | S0 | X = E1
        else {
            setActiveRow(e1Row, tableRows);
        }
    } else {
        not0.classList.replace("nivelLogicoBaixo", "nivelLogicoAlto");
        // S1 | S0' | X = E2
        if (isHighLevel(s1)) {
            setActiveRow(e2Row, tableRows);
        }
        // S1' | S0' | X = E0
        else {
            setActiveRow(e0Row, tableRows);
        }
    }

    // NOT1 = S1'
    if (isHighLevel(s1)) {
        not1.classList.replace("nivelLogicoAlto", "nivelLogicoBaixo");
    } else {
        not1.classList.replace("nivelLogicoBaixo", "nivelLogicoAlto");
    }

    // AND1 = S0' ⋅ S1' ⋅ IN0
    if (isHighLevel(not0) && isHighLevel(not1) && isHighLevel(in0)) {
        and1Output.classList.replace("nivelLogicoBaixo", "nivelLogicoAlto");
    } else {
        and1Output.classList.replace("nivelLogicoAlto", "nivelLogicoBaixo");
    }

    // AND2 = S0 ⋅ S1' ⋅ IN1
    if (isHighLevel(s0) && isHighLevel(not1) && isHighLevel(in1)) {
        and2Output.classList.replace("nivelLogicoBaixo", "nivelLogicoAlto");
    } else {
        and2Output.classList.replace("nivelLogicoAlto", "nivelLogicoBaixo");
    }

    // AND3 = S0' ⋅ S1 ⋅ IN2
    if (isHighLevel(not0) && isHighLevel(s1) && isHighLevel(in2)) {
        and3Output.classList.replace("nivelLogicoBaixo", "nivelLogicoAlto");
    } else {
        and3Output.classList.replace("nivelLogicoAlto", "nivelLogicoBaixo");
    }

    // AND4 = S0 ⋅ S1 ⋅ IN3
    if (isHighLevel(s0) && isHighLevel(s1) && isHighLevel(in3)) {
        and4Output.classList.replace("nivelLogicoBaixo", "nivelLogicoAlto");
    } else {
        and4Output.classList.replace("nivelLogicoAlto", "nivelLogicoBaixo");
    }

    // OR = AND1 + AND2 + AND3 + AND4
    if (isHighLevel(and1Output) || isHighLevel(and2Output) || isHighLevel(and3Output) || isHighLevel(and4Output)) {
        orOutput.classList.replace("nivelLogicoBaixo", "nivelLogicoAlto");
    } else {
        orOutput.classList.replace("nivelLogicoAlto", "nivelLogicoBaixo");
    }
}

function update4MUX() {
    const s0 = document.getElementById("q-s0");
    const s1 = document.getElementById("q-s1");
    const in0 = document.getElementById("q-e0");
    const in1 = document.getElementById("q-e1");
    const in2 = document.getElementById("q-e2");
    const in3 = document.getElementById("q-e3");
    const not0 = document.getElementById("q-not0");
    const not1 = document.getElementById("q-not1");
    const and1Output = document.getElementById("q-and1out");
    const and2Output = document.getElementById("q-and2out");
    const and3Output = document.getElementById("q-and3out");
    const and4Output = document.getElementById("q-and4out");
    const orOutput = document.getElementById("q-or0");
    const e0Row = document.getElementById("q-e0-row");
    const e1Row = document.getElementById("q-e1-row");
    const e2Row = document.getElementById("q-e2-row");
    const e3Row = document.getElementById("q-e3-row");

    const tableRows = [e0Row, e1Row, e2Row, e3Row];

    // NOT0 = S0'
    if (isHighLevel(s0)) {
        not0.classList.replace("nivelLogicoAlto", "nivelLogicoBaixo");
        // S1 | S0 | X = E3
        if (isHighLevel(s1)) {
            setActiveRow(e3Row, tableRows);
        }
        // S1' | S0 | X = E1
        else {
            setActiveRow(e1Row, tableRows);
        }
    } else {
        not0.classList.replace("nivelLogicoBaixo", "nivelLogicoAlto");
        // S1 | S0' | X = E2
        if (isHighLevel(s1)) {
            setActiveRow(e2Row, tableRows);
        }
        // S1' | S0' | X = E0
        else {
            setActiveRow(e0Row, tableRows);
        }
    }

    // NOT1 = S1'
    if (isHighLevel(s1)) {
        not1.classList.replace("nivelLogicoAlto", "nivelLogicoBaixo");
    } else {
        not1.classList.replace("nivelLogicoBaixo", "nivelLogicoAlto");
    }

    // AND1 = S0' ⋅ S1' ⋅ IN0
    if (isHighLevel(not0) && isHighLevel(not1) && isHighLevel(in0)) {
        and1Output.classList.replace("nivelLogicoBaixo", "nivelLogicoAlto");
    } else {
        and1Output.classList.replace("nivelLogicoAlto", "nivelLogicoBaixo");
    }

    // AND2 = S0 ⋅ S1' ⋅ IN1
    if (isHighLevel(s0) && isHighLevel(not1) && isHighLevel(in1)) {
        and2Output.classList.replace("nivelLogicoBaixo", "nivelLogicoAlto");
    } else {
        and2Output.classList.replace("nivelLogicoAlto", "nivelLogicoBaixo");
    }

    // AND3 = S0' ⋅ S1 ⋅ IN2
    if (isHighLevel(not0) && isHighLevel(s1) && isHighLevel(in2)) {
        and3Output.classList.replace("nivelLogicoBaixo", "nivelLogicoAlto");
    } else {
        and3Output.classList.replace("nivelLogicoAlto", "nivelLogicoBaixo");
    }

    // AND4 = S0 ⋅ S1 ⋅ IN3
    if (isHighLevel(s0) && isHighLevel(s1) && isHighLevel(in3)) {
        and4Output.classList.replace("nivelLogicoBaixo", "nivelLogicoAlto");
    } else {
        and4Output.classList.replace("nivelLogicoAlto", "nivelLogicoBaixo");
    }

    // OR = AND1 + AND2 + AND3 + AND4
    if (isHighLevel(and1Output) || isHighLevel(and2Output) || isHighLevel(and3Output) || isHighLevel(and4Output)) {
        orOutput.classList.replace("nivelLogicoBaixo", "nivelLogicoAlto");
    } else {
        orOutput.classList.replace("nivelLogicoAlto", "nivelLogicoBaixo");
    }
}

function update2MUX() {
    const s0 = document.getElementById("d-s0");
    const in0 = document.getElementById("d-e0");
    const in1 = document.getElementById("d-e1");
    const not0 = document.getElementById("d-not0");
    const e0Row = document.getElementById("d-e0-row");
    const e1Row = document.getElementById("d-e1-row");
    const and1Output = document.getElementById("d-and1out");
    const and2Output = document.getElementById("d-and2out");
    const orOutput = document.getElementById("d-or0");

    // NOT = S0'
    if (isHighLevel(s0)) {
        not0.classList.replace("nivelLogicoAlto", "nivelLogicoBaixo");
        e0Row.classList.replace("linhaLogicoAlto", "linhaLogicoBaixo");
        e1Row.classList.add("linhaLogicoAlto");
    } else {
        not0.classList.replace("nivelLogicoBaixo", "nivelLogicoAlto");
        e1Row.classList.replace("linhaLogicoAlto", "linhaLogicoBaixo");
        e0Row.classList.add("linhaLogicoAlto");
    }

    // AND1 = S0 ⋅ IN1
    if (isHighLevel(s0) && isHighLevel(in1)) {
        and1Output.classList.replace("nivelLogicoBaixo", "nivelLogicoAlto");
    } else {
        and1Output.classList.replace("nivelLogicoAlto", "nivelLogicoBaixo");
    }

    // AND2 = S0' ⋅ IN0
    if (isHighLevel(not0) && isHighLevel(in0)) {
        and2Output.classList.replace("nivelLogicoBaixo", "nivelLogicoAlto");
    } else {
        and2Output.classList.replace("nivelLogicoAlto", "nivelLogicoBaixo");
    }

    // OR = AND1 + AND2
    if (isHighLevel(and1Output) || isHighLevel(and2Output)) {
        orOutput.classList.replace("nivelLogicoBaixo", "nivelLogicoAlto");
    } else {
        orOutput.classList.replace("nivelLogicoAlto", "nivelLogicoBaixo");
    }
}

// MUX de 2 entradas
document.querySelectorAll("#d-s0, #d-e0, #d-e1").forEach(element => {
    element.addEventListener("click", function () {
        toggleLogicLevel(this);
        update2MUX();
    });
});

// MUX de 4 entradas
document.querySelectorAll("#q-s0, #q-s1, #q-e0, #q-e1, #q-e2, #q-e3").forEach(element => {
    element.addEventListener("click", function () {
        toggleLogicLevel(this);
        update4MUX();
    });
});

// MUX de 4 entradas
/* document.querySelectorAll("#o-s0, #o-s1, #o-s2, #o-e0, #o-e1, #o-e2, #o-e3, #o-e4, #o-e5, #o-e6, #o-e7").forEach(element => {
    element.addEventListener("click", function () {
        toggleLogicLevel(this);
        update8MUX();
    });
}); */