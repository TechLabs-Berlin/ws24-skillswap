const Mongoose = require('mongoose');
//const localDB = `mongodb://localhost:27017/role_auth`;
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('MongoDB connected');
    } catch (err) {
        console.error('Error connecting to MongoDB', err.message);
        process.exit(1); // Exit application with error
    }
};
module.exports = connectDB;
