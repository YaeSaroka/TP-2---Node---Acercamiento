let miUrl = new URL('http://www.ort.edu.so=2022&mes=mayo');
let miObjeto = parsearUrl(miUrl);;


function parsearUrl(url){
    try{
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
    catch{
        return url;
    }
   
}

console.log(miObjeto);