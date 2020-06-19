import dotenv from "dotenv";
import { MongoClient } from "mongodb";

dotenv.config();

export const client = new MongoClient(process.env.ATLAS_URI, {
  useUnifiedTopology: true,
});

(async () => {
  await client.connect();

  process.on("SIGINT", async () => {
    await client.close();
    process.exit(0);
  });
})();
