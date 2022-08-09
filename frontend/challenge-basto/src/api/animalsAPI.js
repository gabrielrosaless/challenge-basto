
import axios from 'axios';

export const getCows = async (page, pageSize) => {
    const response = await axios
        .get(`http://localhost:4000/api/cows/?pageSize=${pageSize}&page=${page}`)
        .then(response => response)
        .catch(error => {
            return `Error!: ${error.response}`;
        });
    
    return {
        response:response.data,
        status:response.status
    };
}

export const createCow = async (body) => {
    const response = await axios
        .post("http://localhost:4000/api/cows/", body)
        .then(response => response)
        .catch(error => {
            return {
                message: error.response.data.message,
                status: error.response.status,
            };
        });

    return {
        response: response.data,
        status: response.status,
        message: response.message
    };
}

export const editCow = async (body) => {
    const response = await axios
        .put(`http://localhost:4000/api/cows/${body._id}`, body)
        .then(response => response)
        .catch((error) => {
            return {
                message: error.response.data.message,
                status: error.response.status,
            };
        });
    return {
        response: response.data,
        status: response.status,
        message:response.message
    };
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