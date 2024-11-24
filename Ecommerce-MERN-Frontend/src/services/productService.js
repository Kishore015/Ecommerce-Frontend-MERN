import axios from "axios";
const API_URL =  import.meta.env.API_URL; + '/products';

export const getProducts = async () => {
    const response = await axios.get(API_URL);
    return response.data;
}

export const getProductByID = async(id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
}