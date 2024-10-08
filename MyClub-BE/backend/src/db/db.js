import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(process.env.MONGODB_URI);  // No need for options now
        console.log(`\n MONGO_DB connected successfully | DB_HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("ERROR", error);
        process.exit(1);
    }
};

export default connectDB;
