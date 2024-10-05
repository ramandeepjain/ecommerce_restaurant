import mongoose from "mongoose";

export const connectDB = async ()=> {
    await mongoose.connect('mongodb+srv://ramandeepjain:5ZfZAj0EiRXMnvMQ@cluster0.ppoms.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}