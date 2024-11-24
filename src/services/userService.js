import axios from "axios";


const API_URL = import.meta.env.API_URL;
export const loginUser = async (email, password) => {
    const config = {
        headers:{
            'Content-Type' : 'application/json'
        },
    };
    const {data} = await axios.post(`${API_URL}/users/login`, {email,password}, config);
    return data;
};
export const registreUser = async (name,email,password) => {
    const config = {
        headers:{
            'Content-Type' : 'application/json'
        },
    };
    const {data} = await axios.post(`${API_URL}/users/register`, {name, email, password}, config);
    return data;
};
export const getUserDetails = async (id,token) => {
    const config = {
        headers:{
            'Content-Type' : 'application/json',
            Authorization : `Bearer ${token}`
        }
    };
    const {data} = await axios.get(`${API_URL}/users/${id}`, config);
    return data;
}