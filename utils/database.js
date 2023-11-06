import mongoose from 'mongoose';

let isConnected = false; // track the connection status

export const connectToDatabase = async () => {
    mongoose.set('strictQuery', true);
    if (isConnected) {
        console.log('=> using existing database connection');
        return;
    } else {
        try {
            await mongoose.connect(process.env.MONGODB_URI, {
                dbName: "promptshare",
                useNewUrlParser: true,
                useUnifiedTopology: true,
            })
            isConnected = true;
            console.log('=> using new database connection')
        } catch (error) {
            console.log("Jude Boachie Kwame error connecting to database")
            console.log(error)
        }
    }
}