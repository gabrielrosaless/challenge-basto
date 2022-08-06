
// This file is to avoid hardcode the PORT of the server.
// Here you can put another type of data like the timelife of a token 
// if you have your endpoints with security


import { config } from 'dotenv';
config();

export default {
    port: process.env.PORT || 3000
}