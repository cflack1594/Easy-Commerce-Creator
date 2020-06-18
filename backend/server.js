import express from "express";
import { getCollection } from "./db";

const app = express();
const PORT = 80;
const COLLECTION_NAMES = ["sample-products", "sample-sales"];

app.get("/", (_, res) =>
  res.send("<p>BEEP BOOP. Server is On. I AM A ROBOT</p>")
);

app.listen(PORT, () => {
  console.log("running on port" + PORT);
});

(async () => {
  try {
    console.log(await getCollection(COLLECTION_NAMES[0]));
  } catch (e) {
    throw new Error(e);
  }
})();
