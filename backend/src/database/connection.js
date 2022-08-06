import moongose from 'mongoose';


const URI = 'mongodb://localhost:27017/basto-database';

moongose.connect(URI)
    .then(db => console.log('DB is connected.'))
    .catch( err => console.log(err));

export default moongose;