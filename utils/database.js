import mongoose from 'mongoose';

let cachedConnection = null;

export const connectToDatabase = async () => {
    if (cachedConnection) {
        console.log('=> using existing database connection');
        return cachedConnection;
    }

    try {
        cachedConnection = await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "promptshare",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('=> using new database connection');
        return cachedConnection;
    } catch (error) {
        console.error('Error connecting to the database:', error);
        throw error;
    }
}
