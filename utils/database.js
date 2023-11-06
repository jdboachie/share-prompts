import mongoose from 'mongoose';

let isConnected = false; // track the connection status

export const connectToDatabase = async () => {
    if (isConnected) {
        console.log('=> using existing database connection');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "promptshare",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        isConnected = true;
        console.log('=> using new database connection');
    } catch (error) {
        console.error('Error connecting to the database:', error);
        // Handle the error appropriately, e.g., rethrow it or exit the application.
    }
}

// Set strict mode for schema definition
mongoose.set('strict', true);