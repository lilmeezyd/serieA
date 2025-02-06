import mongoose from "mongoose";

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };
const connectDB = async () => {
    const uri = `mongodb+srv://denismoini09:${process.env.PASSWORD}@cluster0.r7ekm.mongodb.net/serieadata?retryWrites=true&w=majority&appName=Cluster0`
    try {
        const conn = await mongoose.connect(uri, clientOptions)
        console.log(`MongoDB connect ${conn.connection.host}`)
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
}

export default connectDB