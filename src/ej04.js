
import fs from 'fs';
const ARCHIVO_ENTRADA = "./archivo-entrada.txt";
const ARCHIVO_SALIDA = "./archivo-salida.txt";
console.clear();
copiar(ARCHIVO_ENTRADA, ARCHIVO_SALIDA);

function copiar(origen, destino){
    fs.readFile(origen, 'utf8', function(error,data){
        if(error){
            console.error("No se pudo leer el archivo de entrada", error);
            return;
        }
    
    fs.writeFile(destino, data, function (error){
        if(error){
            console.error("No se pudo escribir el archivo de destino", error);
            return;
        }
        console.log(`El archivo ${origen} se ha copiado como ${destino} bien`);
    });
});
}