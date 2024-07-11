import mongoose from "mongoose"

export const dbConnection = () => {
    mongoose.connect(process.env.MONGODG_URL, {
         dbName: "Guardian_Angel_system",

    }).then(()=>{
        console.log("Connected to db")
    }  ).catch((error) => {
        console.log("Error occured while connecting to database")
    })
}