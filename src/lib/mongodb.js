// lib/mongodb.js
import mongoose from "mongoose";
const mongodb_URI =
  "mongodb://hec:hec@ac-px6ygqz-shard-00-00.aj2pwqq.mongodb.net:27017,ac-px6ygqz-shard-00-01.aj2pwqq.mongodb.net:27017,ac-px6ygqz-shard-00-02.aj2pwqq.mongodb.net:27017/?ssl=true&replicaSet=atlas-gdv6zk-shard-0&authSource=admin&retryWrites=true&w=majority&appName=hec";
// mongodb.js

const connect = async () => {
  const connectionState =await mongoose.connection.readyState;
  if (connectionState === 1) {
    console.log("already connected");
    return;
  }
  if (connectionState === 2) {
    console.log("connecting...");
    return;
  }
  try {
    mongoose.connect(mongodb_URI, {
      dbName: "avicenna",
      bufferCommands: false,
    });
    console.log("connected");
  } catch (error) {
    console.log("error in connectind database", error);
    throw new Error("Error connecting to database");
  }
};
export default connect;
