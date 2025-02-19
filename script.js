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
/* MULTIPLEXADOR DE 2 ENTRADS */
function duasEntMUX(entrada0, entrada1, controle){
    return (entrada0 && !controle) || (entrada1 && controle); 
}

console.log(duasEntMUX(false, true, true));