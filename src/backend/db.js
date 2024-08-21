// backend/db.js
import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://maleeshapathirana1:KlVaXDpewK1PNA0z@cluster0.aqcl1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
    }
};

export default connectDB;
