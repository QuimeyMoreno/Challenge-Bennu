import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config();

const connectDB = async () => {
    try {
        const uri = process.env.MONGO_URI;
        await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('MongoDB conectada');
    } catch (error) {
        console.error('MongoDB error:', error);
        process.exit(1); 
    }
};

export default connectDB;
