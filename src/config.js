import axios from "axios";

export const HTTP = axios.create({
    baseURL: 'http://localhost:4964/api',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
})