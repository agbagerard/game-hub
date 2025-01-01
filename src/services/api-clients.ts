import axios from 'axios';

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "ca79d565c4cc4819885e9f5af5ed4c55",
    },
});