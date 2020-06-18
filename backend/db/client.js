import dotenv from "dotenv";
import mongodb from "mongodb";

dotenv.config();

const { MongoClient } = mongodb;

export const client = new MongoClient(process.env.ATLAS_URI, {
  useUnifiedTopology: true,
});
