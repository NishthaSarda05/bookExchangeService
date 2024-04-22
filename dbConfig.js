import mongoose from 'mongoose';

const url="mongodb://localhost:27017/BookExchangeApp";


const dbConnect=async()=>{
    try {
        await mongoose.connect(url)
        console.log("DB CONNECTED");
    } catch (error) {
        console.error("error",error)
    }
}

export default dbConnect;