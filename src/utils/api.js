import axios from 'axios';

export const listApi = axios.create({
    baseURL: 'https://mdblist.p.rapidapi.com/',
    responseType: "json",
    Headers: {
        "x-rapidapi-host": "mdblist.p.rapidapi.com",
        "x-rapidapi-key": "c33be33bdbmshc1da63a3fd70931p182406jsn687237cd7697"
    }
});


export const detailApi = axios.create({
    baseURL: 'https://my-json-server.typicode.com/mustafaerk/getir-be/',
    responseType: "json"
});
