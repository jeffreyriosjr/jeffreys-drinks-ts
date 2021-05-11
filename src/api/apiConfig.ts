import axios from 'axios';

const instance = axios.create ({
    baseURL:'https://www.thecocktaildb.com',
    headers: {

        'Content-type': 'application/json',
    }
});
export default instance;