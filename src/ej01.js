let textoEntrada01 = "Escuela";
let textoEntrada02 = "ORT";
let textoSalida;
textoSalida = concatInvert(textoEntrada01, textoEntrada02);
console.clear(); // Borra la pantalla en la consola.
console.log(`Textos de Entrada: "${textoEntrada01}" y "${textoEntrada02}"`);
console.log(`Texto de Salida: "${textoSalida}"`);

function concatInvert (texto1, texto2){
var concatenado= texto1+texto2;
var separar= concatenado.split("");
var invertir= separar.reverse();
let returnValue=invertir.join("");
return returnValue;
}