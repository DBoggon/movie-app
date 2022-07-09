import axios from 'axios';

const http = axios.create({
    baseURL:"http://localhost:8080/"
});

export default {
    get(string) {
        return http.get('/results');
    }
}