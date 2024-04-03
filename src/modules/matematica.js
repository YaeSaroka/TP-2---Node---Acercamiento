const PI = 3.14;
var array =  ["dos","cuatro", "ocho", "diez"];

function sumar(x, y) {
    let cuenta_sumar = x + y;
    return cuenta_sumar;
}
const multiplicar = (a, b) => {
    let cuenta_mult = a * b;
    return cuenta_mult;
};
function restar (a, b) {
    let cuenta_rest = a - b;
    return cuenta_rest;
};
const dividir = (a, b) => {
    let cuenta_div = a / b;
    return cuenta_div;
};
export {PI, sumar, multiplicar, restar, dividir};

