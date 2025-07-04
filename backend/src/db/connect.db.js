import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/fotovoid';

const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI, {});
        console.log(`MongoDB connected ${process.env.MONGO_URI}`);
    } catch (err) {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    }
};

export default connectDB