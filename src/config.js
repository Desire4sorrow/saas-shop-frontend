import axios from "axios";

export const HTTP = axios.create({
    baseURL: process.env.VUE_APP_SERVICE_ORDER_URL + '/api',//(location.host === 'testvm.plotpad.ru') ? 'http://testvm.plotpad.ru:4964/api' : 'http://localhost:9965/api',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
})
