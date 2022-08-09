import moongose from 'mongoose';


const URI = 'mongodb://localhost:27017/basto-database';

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