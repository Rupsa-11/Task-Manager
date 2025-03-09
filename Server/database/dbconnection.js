import mongoose from "mongoose";
export const dbconnection = () => {
    mongoose
    .connect(process.env.MONGO_URI,{
        dbName: "TASK_MANAGER",
    })
    .then(()=>{
        console.log("Connected to MongoDB")
    })
    .catch((err)=>{
        console.log(`Some error occured:${err}`)
    });
};