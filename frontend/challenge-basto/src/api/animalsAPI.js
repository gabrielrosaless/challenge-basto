
import axios from 'axios';

export const getCows = async (page, pageSize, text) => {
    if (!text) text = '';
    const response = await axios
        .get(`${process.env.REACT_APP_URL_API}/api/cows/?pageSize=${pageSize}&page=${page}&paddockName=${text}`)
        .then(response => response)
        .catch(error => {
            return `Error!: ${error.response}`;
        });

    return {
        response: response.data,
        status: response.status
    };
}

export const createCow = async (body) => {
    const response = await axios
        .post(`${process.env.REACT_APP_URL_API}/api/cows`, body)
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
        .put(`${process.env.REACT_APP_URL_API}/api/cows/${body._id}`, body)
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
        message: response.message
    };
}

export const deleteCow = async (id) => {
    const response = await axios
        .delete(`${process.env.REACT_APP_URL_API}/api/cows/${id}`)
        .then(response => response.data)
        .catch(error => {
            return `Error!: ${error.response}`;
        });

    return response;
}