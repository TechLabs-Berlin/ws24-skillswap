const mongoose = require('mongoose');
//const localDB = `mongodb://localhost:27017/role_auth`;
const connectDB = async () => {
    console.log(process.env.MONGODB_URI);
    try {
        await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('MongoDB connected');
    } catch (err) {
        console.error('Error connecting to MongoDB', err.message);
        process.exit(1); // Exit application with error
    }
};
module.exports = connectDB;
