// AB
function portaAND(entrada1, entrada2) {
    return entrada1 && entrada2;
}

// A + B
function portaOR(entrada1, entrada2) {
    return entrada1 || entrada2;
}

// A'
function portaNOT(entrada) {
    return !entrada;
}

// (AB)'
function portaNAND(entrada1, entrada2) {
    return !(entrada1 && entrada2);
    // ou:
    // return portaNOT((portaAND(entrada1, entrada2)));
}

// (A + B)'
function portaNOR(entrada1, entrada2) {
    return !(entrada1 || entrada2);
    // ou:
    // return portaNOT((portaOR(entrada1, entrada2)));
}

// A⊕B
// AB' + A'B
function portaXOR(entrada1, entrada2){
    return (entrada1 && !entrada2) || (!entrada1 && entrada2);
    // ou:
    // return portaOR(portaAND(entrada1, portaNOT(entrada2)), portaAND(portaNOT(entrada1), entrada2));
}

// A⊙B
// (AB' + A'B)'
function portaXNOR(entrada1, entrada2){
    return !((entrada1 && !entrada2) || (!entrada1 && entrada2));
    // ou:
    // return portaNOT(portaOR(portaAND(entrada1, portaNOT(entrada2)), portaAND(portaNOT(entrada1), entrada2)));
}

/*************************************************************************************************/
/* MULTIPLEXADOR DE 2 ENTRADAS */
export function duasEntMUX(entrada0, entrada1, controle){ 
    return (entrada0 && !controle) || (entrada1 && controle); 
};

/* MULTIPLEXADOR DE 4 ENTRADAS */
export function quatroEntMUX(ent0, ent1, ent2, ent3, cont1, cont0){
    and0 = ent0 && !cont0 && !cont1;
    and1 = ent1 && cont0 && !cont1;
    and2 = ent2 && !cont0 && cont1;
    and3 = ent3 && cont0 && cont1;
    // z = and0 || and1 || and2 || and3;
    return and0 || and1 || and2 || and3;
    // ou:
    // return (ent0 && !cont0 && !cont1) || (ent1 && cont0 && !cont1) || (ent2 && !cont0 && cont1) || (ent3 && cont0 && cont1);
};

/* MULTIPLEXADOR DE 8 ENTRADAS */
export function oitoEntMUX(ent0, ent1, ent2, ent3, ent4, ent5, ent6, ent7, cont2, cont1, cont0, enable){
    cont2 = !cont2;
    cont1 = !cont1;
    cont0 = !cont0;
    /* enable = !enable; */
    and0 = ent0 && cont0 && cont1 && cont2 && enable;
    and1 = ent1 && !cont0 && cont1 && cont2 && enable;
    and2 = ent2 && cont0 && !cont1 && cont2 && enable;
    and3 = ent3 && !cont0 && !cont1 && cont2 && enable;
    and4 = ent4 && cont0 && cont1 && !cont2 && enable;
    and5 = ent5 && !cont0 && cont1 && !cont2 && enable;
    and6 = ent6 && cont0 && !cont1 && !cont2 && enable;
    and7 = ent7 && !cont0 && !cont1 && !cont2 && enable;
    nor0 = !(and0 || and1 || and2 || and3 || and4 || and5 || and6 || and7);
    // z = !nor0
    // z' = nor0
    // z' = i*
    return nor0;
}

console.log(quatroEntMUX(false, false, false, false, true, true));
