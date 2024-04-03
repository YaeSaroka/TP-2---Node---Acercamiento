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
    let ab = getCountryByAbbreviation(codigo_pais);
    let moneda = getCurrencyAbbreviation(ab);
    return moneda;
}