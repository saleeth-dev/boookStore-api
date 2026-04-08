const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(
            'mongodb+srv://nodeapi:PC3TazJatLbRRIkZ@nodeapi-cluster.dtfvelk.mongodb.net/bookstore-api'

        );

        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDB;