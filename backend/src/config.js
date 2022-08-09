
// This file is to avoid hardcode the PORT of the server.
// Here you can put another type of data like the timelife of a token 
// if you have your endpoints with security


import { config } from 'dotenv';
config();

export default {
    port: process.env.PORT || 4000,
    MONGO_DATABASE: process.env.MONGO_DATABASE,
    MONGO_HOST: process.env.MONGO_HOST,
    MONGO_PORT: process.env.MONGO_PORT,
}