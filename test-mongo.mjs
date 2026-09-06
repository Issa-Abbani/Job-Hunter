import { MongoClient } from "mongodb";
import "dotenv/config";

const client = new MongoClient(process.env.MONGODB_URI);

try {
  console.log("Connecting to MongoDB...");
  
  await client.connect();

  console.log("Connected!");

  await client.db().command({ ping: 1 });

  console.log("Ping successful!");
} catch (error) {
  console.error("MongoDB connection failed:");
  console.error(error);
} finally {
  await client.close();
}