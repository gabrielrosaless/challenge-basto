
import axios from 'axios';

export const getCows = async () => {
    const response = await axios
        .get("http://localhost:4000/api/cows/")
        .then(response => response.data)
        .catch(error => {
            return `Error!: ${error.response}`;
        });
    return response;
}

export const createCow = async (body) => {
    
    const response = await axios
        .post("http://localhost:4000/api/cows/", body)
        .then(response => response.data)
        .catch(error => {
            return `Error!: ${error.response}`;
        });

    return response;
}