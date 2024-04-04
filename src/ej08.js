import axios from "axios";
import {OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID} from './modules/omdb-wrapper.js';
 console.clear();


let busqueda_pagina, busqueda_completa, busqueda_id;
busqueda_pagina= await OMDBSearchByPage ("cars", 1);
console.log("Busqueda ", busqueda_pagina);

console.log("Busqueda completa: ");
await OMDBSearchComplete("cars");

busqueda_id= await OMDBGetByImdbID("tt1285016");
console.log("Busqueda ", busqueda_id);
