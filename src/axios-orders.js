import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-8b0f7.firebaseio.com/'
});

export default instance;