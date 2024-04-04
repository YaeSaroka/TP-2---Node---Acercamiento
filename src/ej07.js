import { getCountryByAbbreviation } from 'currency-map-country';
import { getCurrencyAbbreviation  } from 'currency-map-country';


let monedaDelPais, codigoPais;
codigoPais = 'AR';
monedaDelPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);
codigoPais = 'US';
monedaDelPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);

function obtenerMoneda(codigo_pais){
    let ab = getCountryByAbbreviation(codigo_pais); // abreviacion a nombre completo
    let moneda = getCurrencyAbbreviation(ab); // de nombre completo a moneda
    return moneda;;
}