import dotenv from "dotenv";
import { MongoClient } from "mongodb";

dotenv.config();

export const client = new MongoClient(process.env.ATLAS_URI, {
  useUnifiedTopology: true,
});

(async () => {
  await client.connect();

  process.on("SIGINT", () => {
    client
      .close()
      .then(() => {
        process.exit(0);
      })
      .catch((err) => console.error(err));
  });
})();
