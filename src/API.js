import axios from 'axios';
import cookies from 'react-cookies';

export let endpoint = {
    'categories': '/categories/',
    'lessons': '/lessons/',
    'users': '/users/',
    'current-user': '/users/current-user/',
    'login': '/o/token/'
}

export let AuthAPI = axios.create({
    baseURL: "http://127.0.0.1:8000",
    headers: { 
        'Authorization': `Bearer ${cookies.load('access_token')}`
    }
})

export default axios.create({
    baseURL: "http://127.0.0.1:8000"
})