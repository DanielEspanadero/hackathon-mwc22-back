const {connect, connection} = require('mongoose');
require('dotenv').config();


const dbConection = async () => {

    try {
        await connect(process.env.MONGODB_CNN || 'mongodb://localhost:27017/developers');
    } catch (error) {

        console.log(error)
        throw new Error('Error when starting the database');

    }
};

connection.on('error', (err) => {
    console.log(err);
});

module.exports = {
    dbConection,
    connection
}