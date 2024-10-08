import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect('mongodb://localhost:27017/football');  // No need for options now
        console.log(`MONGO_DB connected successfully | DB_HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("ERROR", error);
        process.exit(1);
    }
};

export default connectDB;
