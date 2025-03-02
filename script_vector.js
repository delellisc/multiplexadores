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

    const tableRows = [e0Row, e1Row];

    // NOT = S0'
    if (isHighLevel(s0)) {
        setActiveRow(tableRows[1], tableRows);
        not0.classList.replace("nivelLogicoAlto", "nivelLogicoBaixo");
    } else {
        setActiveRow(tableRows[0], tableRows);
        not0.classList.replace("nivelLogicoBaixo", "nivelLogicoAlto");
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

    // operação para retornar o index no array de acordo com operações binárias.
    // caso s1 = true, (isHighLevel(s1) << 1) retornará o valor numérico de 2
    // caso s0 = true, (isHighLevel(s0)) retornará o valor numérico de 1
    // a soma desses valores retorna o endereço da linha correspondente no array
    const rowIndex = ((isHighLevel(s1) << 1) | isHighLevel(s0));
    setActiveRow(tableRows[rowIndex], tableRows);


    // NOT0 = S0'
    if (isHighLevel(s0)) {
        not0.classList.replace("nivelLogicoAlto", "nivelLogicoBaixo");
    } else {
        not0.classList.replace("nivelLogicoBaixo", "nivelLogicoAlto");
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

function update8MUX() {
    const en = document.getElementById("o-en");
    const s0 = document.getElementById("o-s0");
    const s1 = document.getElementById("o-s1");
    const s2 = document.getElementById("o-s2");
    const in0 = document.getElementById("o-e0");
    const in1 = document.getElementById("o-e1");
    const in2 = document.getElementById("o-e2");
    const in3 = document.getElementById("o-e3");
    const in4 = document.getElementById("o-e4");
    const in5 = document.getElementById("o-e5");
    const in6 = document.getElementById("o-e6");
    const in7 = document.getElementById("o-e7");
    const notEn = document.getElementById("o-noten");
    const not0 = document.getElementById("o-not0");
    const not1 = document.getElementById("o-not1");
    const not2 = document.getElementById("o-not2");
    const and1Output = document.getElementById("o-and1out");
    const and2Output = document.getElementById("o-and2out");
    const and3Output = document.getElementById("o-and3out");
    const and4Output = document.getElementById("o-and4out");
    const and5Output = document.getElementById("o-and5out");
    const and6Output = document.getElementById("o-and6out");
    const and7Output = document.getElementById("o-and7out");
    const and8Output = document.getElementById("o-and8out");
    const orOutput = document.getElementById("o-or0");
    const enRow = document.getElementById("o-en-row");
    const e0Row = document.getElementById("o-e0-row");
    const e1Row = document.getElementById("o-e1-row");
    const e2Row = document.getElementById("o-e2-row");
    const e3Row = document.getElementById("o-e3-row");
    const e4Row = document.getElementById("o-e4-row");
    const e5Row = document.getElementById("o-e5-row");
    const e6Row = document.getElementById("o-e6-row");
    const e7Row = document.getElementById("o-e7-row");

    const tableRows = [enRow, e0Row, e1Row, e2Row, e3Row, e4Row, e5Row, e6Row, e7Row];

    // EN | X | X | X | Z = 0
    // EN' | 0 | 0 | 0 | Z = E0
    // EN' | 0 | 0 | 1 | Z = E1
    // EN' | 0 | 1 | 0 | Z = E2
    // EN' | 0 | 1 | 1 | Z = E3
    // EN' | 1 | 0 | 0 | Z = E4
    // EN' | 1 | 0 | 1 | Z = E5
    // EN' | 1 | 1 | 0 | Z = E6
    // EN' | 1 | 1 | 0 | Z = E7

    // NOTEN = EN''
    if (isHighLevel(en)) {
        notEn.classList.replace("nivelLogicoAlto", "nivelLogicoBaixo");
    } else {
        notEn.classList.replace("nivelLogicoBaixo", "nivelLogicoAlto");
    }

    if (!isHighLevel(notEn)) {
        setActiveRow(enRow, tableRows);
    }
    else {
        // operação para retornar o index no array de acordo com operações binárias.
        // caso s2 = true, (isHighLevel(s2) << 2) retornará o valor numérico de 4
        // caso s1 = true, (isHighLevel(s1) << 1) retornará o valor numérico de 2
        // caso s0 = true, (isHighLevel(s0)) retornará o valor numérico de 1
        // a soma desses valores retorna o endereço da linha correspondente no array
        const rowIndex = ((isHighLevel(s2) << 2) | (isHighLevel(s1) << 1) | isHighLevel(s0));
        setActiveRow(tableRows[rowIndex + 1], tableRows);
    }

    // NOT0 = S0'
    if (isHighLevel(s0)) {
        not0.classList.replace("nivelLogicoAlto", "nivelLogicoBaixo");
    } else {
        not0.classList.replace("nivelLogicoBaixo", "nivelLogicoAlto");
    }

    // NOT1 = S1'
    if (isHighLevel(s1)) {
        not1.classList.replace("nivelLogicoAlto", "nivelLogicoBaixo");
    } else {
        not1.classList.replace("nivelLogicoBaixo", "nivelLogicoAlto");
    }

    // NOT2 = S2'
    if (isHighLevel(s2)) {
        not2.classList.replace("nivelLogicoAlto", "nivelLogicoBaixo");
    } else {
        not2.classList.replace("nivelLogicoBaixo", "nivelLogicoAlto");
    }

    // AND1 = EN' ⋅ S0' ⋅ S1' ⋅ S2' ⋅ IN0
    if (isHighLevel(notEn) && isHighLevel(not0) && isHighLevel(not1) && isHighLevel(not2) && isHighLevel(in0)) {
        and1Output.classList.replace("nivelLogicoBaixo", "nivelLogicoAlto");
    } else {
        and1Output.classList.replace("nivelLogicoAlto", "nivelLogicoBaixo");
    }

    // AND2 = EN' ⋅ S0 ⋅ S1' ⋅ S2' ⋅ IN1
    if (isHighLevel(notEn) && isHighLevel(s0) && isHighLevel(not1) && isHighLevel(not2) && isHighLevel(in1)) {
        and2Output.classList.replace("nivelLogicoBaixo", "nivelLogicoAlto");
    } else {
        and2Output.classList.replace("nivelLogicoAlto", "nivelLogicoBaixo");
    }

    // AND3 = EN' ⋅ S0' ⋅ S1 ⋅ S2' ⋅ IN2
    if (isHighLevel(notEn) && isHighLevel(not0) && isHighLevel(s1) && isHighLevel(not2) && isHighLevel(in2)) {
        and3Output.classList.replace("nivelLogicoBaixo", "nivelLogicoAlto");
    } else {
        and3Output.classList.replace("nivelLogicoAlto", "nivelLogicoBaixo");
    }

    // AND4 = EN' ⋅ S0 ⋅ S1 ⋅ S2' ⋅ IN3
    if (isHighLevel(notEn) && isHighLevel(s0) && isHighLevel(s1) && isHighLevel(not2) && isHighLevel(in3)) {
        and4Output.classList.replace("nivelLogicoBaixo", "nivelLogicoAlto");
    } else {
        and4Output.classList.replace("nivelLogicoAlto", "nivelLogicoBaixo");
    }

    // AND5 = EN' ⋅ S0' ⋅ S1' ⋅ S2 ⋅ IN4
    if (isHighLevel(notEn) && isHighLevel(not0) && isHighLevel(not1) && isHighLevel(s2) && isHighLevel(in4)) {
        and5Output.classList.replace("nivelLogicoBaixo", "nivelLogicoAlto");
    } else {
        and5Output.classList.replace("nivelLogicoAlto", "nivelLogicoBaixo");
    }

    // AND6 = EN' ⋅ S0 ⋅ S1' ⋅ S2 ⋅ IN5
    if (isHighLevel(notEn) && isHighLevel(s0) && isHighLevel(not1) && isHighLevel(s2) && isHighLevel(in5)) {
        and6Output.classList.replace("nivelLogicoBaixo", "nivelLogicoAlto");
    } else {
        and6Output.classList.replace("nivelLogicoAlto", "nivelLogicoBaixo");
    }

    // AND7 = EN' ⋅ S0' ⋅ S1 ⋅ S2 ⋅ IN6
    if (isHighLevel(notEn) && isHighLevel(not0) && isHighLevel(s1) && isHighLevel(s2) && isHighLevel(in6)) {
        and7Output.classList.replace("nivelLogicoBaixo", "nivelLogicoAlto");
    } else {
        and7Output.classList.replace("nivelLogicoAlto", "nivelLogicoBaixo");
    }

    // AND8 = EN' ⋅ S0 ⋅ S1 ⋅ S2 ⋅ IN7
    if (isHighLevel(notEn) && isHighLevel(s0) && isHighLevel(s1) && isHighLevel(s2) && isHighLevel(in7)) {
        and8Output.classList.replace("nivelLogicoBaixo", "nivelLogicoAlto");
    } else {
        and8Output.classList.replace("nivelLogicoAlto", "nivelLogicoBaixo");
    }

    // OR = AND1 + AND2 + AND3 + AND4 + AND5 + AND6 + AND7 + AND8
    if (isHighLevel(and1Output) || isHighLevel(and2Output) || isHighLevel(and3Output) || isHighLevel(and4Output) || isHighLevel(and5Output) || isHighLevel(and6Output) || isHighLevel(and7Output) || isHighLevel(and8Output)) {
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

// MUX de 8 entradas
document.querySelectorAll("#o-en, #o-s0, #o-s1, #o-s2, #o-e0, #o-e1, #o-e2, #o-e3, #o-e4, #o-e5, #o-e6, #o-e7").forEach(element => {
    element.addEventListener("click", function () {
        toggleLogicLevel(this);
        update8MUX();
    });
});