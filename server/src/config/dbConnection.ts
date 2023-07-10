import mongoose from "mongoose";

// export const connectDb = async () => {
//   try {
//     console.log(`Connection String: ${process.env.CONNECTION_STRING}`);
//     const connectionString = process.env.CONNECTION_STRING || "";
//     const connect = await mongoose.connect(connectionString);
//     console.log(
//       `Database connected successfully to ${connect.connection.host}`
//     );
//   } catch (error) {
//     console.error("Failed to connect to database");
//     process.exit(1);
//   }
// };

export const connectDatabase = () => {
  return new Promise((resolve, reject) => {
  const connectionString = process.env.CONNECTION_STRING || "";
  mongoose.connect(connectionString).then((connect) =>{
    console.log(`Database connected successfully to ${connect.connection.host}`); 
    resolve(true); 
  }).catch((error) => {
    console.error("Failed to connect to database");
    reject(error);
    process.exit(1);  
  })
})
};

