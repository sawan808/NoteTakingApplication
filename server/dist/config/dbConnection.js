"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDatabase = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
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
const connectDatabase = () => {
    return new Promise((resolve, reject) => {
        const connectionString = process.env.CONNECTION_STRING || "";
        mongoose_1.default.connect(connectionString).then((connect) => {
            console.log(`Database connected successfully to ${connect.connection.host}`);
            resolve(true);
        }).catch((error) => {
            console.error("Failed to connect to database");
            reject(error);
            process.exit(1);
        });
    });
};
exports.connectDatabase = connectDatabase;
