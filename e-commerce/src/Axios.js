import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5001/e-commerce-821f5/us-central1/api'
});

export default instance