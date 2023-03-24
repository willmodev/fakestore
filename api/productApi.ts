import axios from 'axios';

const productApi = axios.create({
    baseURL: 'https://fakestoreapi.com/',
})

export default productApi;