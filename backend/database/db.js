import mongoose from "mongoose";

const connectDB = async () => {
    const MONGO_URI= 'mongodb+srv://raton:raton@filesharing.ca7mztc.mongodb.net/?retryWrites=true&w=majority'
    try {   
        const conn = await mongoose.connect(MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            
        });
        console.log('MongoDB Connected');
    } catch (error) {   
        console.error(error.message);
       
    }
}

export default connectDB;