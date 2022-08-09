import moongose from 'mongoose';
import config from '../config.js';

const URI = `mongodb://${config.MONGO_HOST}:${config.MONGO_PORT}/${config.MONGO_DATABASE}`

const connectDB = async () => { 
    try {
        const db = await moongose.connect(URI)
            .then(db => db)
            .catch(err => console.log(err));
    } catch (error) {
        console.log(error);
    }
}


export default connectDB;