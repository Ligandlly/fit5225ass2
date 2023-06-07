import axios from "axios";

const instance = axios.create({
    baseURL: "https://bolnwx1949.execute-api.us-east-1.amazonaws.com/alpha",
    headers: {
        'Access-Control-Allow-Origin': "*"
    }
});

export default instance;
