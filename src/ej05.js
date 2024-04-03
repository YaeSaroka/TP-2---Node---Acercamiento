let miUrl = new URL('http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo');
let miObjeto = parsearUrl(miUrl);;


function parsearUrl(url){
    const host = url.host;
    
    const pathname = url.pathname;
    url.searchParams.sort();
    const parametros = url.search;
    return {
    host,
    pathname,
    parametros
    }; 
}

console.log(miObjeto);