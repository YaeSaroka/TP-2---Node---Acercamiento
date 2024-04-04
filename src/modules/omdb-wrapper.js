/* Módulo OMDBWrapper*/
import axios from "axios";
const APIKEY = "5227ea38"; 

const OMDBSearchByPage = async (searchText, page = 1) => {
    try {
        const request = `http://www.omdbapi.com/?apikey=${APIKEY}&s=${searchText}&page=${page}`;
        const apiResponse = await axios.get(request);
        return {
            respuesta: true,
            cantidadTotal: apiResponse.data.totalResults,
            datos: apiResponse.data.Search
        };
    } catch (error) {
        console.error("Error al realizar la búsqueda por página:", error);
        return {
            respuesta: false,
            cantidadTotal: 0,
            datos: {}
        };
    }
};


const OMDBSearchComplete = async (searchText) => {
    try {
        const request = `http://www.omdbapi.com/?apikey=${APIKEY}&s=${searchText}`;
        const apiResponse = await axios.get(request);
        let cantidadTotal = apiResponse.data.totalResults;
        let datos;

        for (let i = 0; i <cantidadTotal/10; i++) {
            console.log(await OMDBSearchByPage("cars",i )); 
            console.log("entra");
        }

    } catch (error) {
        console.error("Error al realizar la búsqueda:", error);
        return {
            respuesta: false,
            cantidadTotal: 0,
            datos: {}
        };
    }
};

const OMDBGetByImdbID = async (imdbID) => {
    try {
        const request = `http://www.omdbapi.com/?apikey=${APIKEY}&i=${imdbID}`;
        const apiResponse = await axios.get(request);
        return {
            respuesta: true,
            cantidadTotal : 0,
            datos: apiResponse.data
        };
    } catch (error) {
        console.error("Error al realizar la búsqueda por id:", error);
        return {
            respuesta: false,
            datos: {}
        };
    }
};


export {OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID};