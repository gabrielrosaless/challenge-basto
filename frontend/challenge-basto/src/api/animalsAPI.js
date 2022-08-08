
import axios from 'axios';

export const getCows = async () => {
    const response = await axios
        .get(`http://localhost:4000/api/cows/`)
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

export const editCow = async (body) => {
    const response = await axios
        .put(`http://localhost:4000/api/cows/${body._id}`, body)
        .then(response => response.data)
        .catch(error => {
            return `Error!: ${error.response}`;
        });

    return response;
}

export const deleteCow = async (id) => {
    const response = await axios
        .delete(`http://localhost:4000/api/cows/${id}`)
        .then(response => response.data)
        .catch(error => {
            return `Error!: ${error.response}`;
        });

    return response;
}