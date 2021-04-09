const mongoose = require('mongoose');
require('dotenv/config');
const connects = async() => {
    try{
        mongoose.connect(process.env.DB_CON, {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            useCreateIndex: true,
        }, (req, res) => {console.log('MongoDB conected')})
    }catch(e){
        console.log(e);
        process.exit(1);
    }
}



module.exports = connects