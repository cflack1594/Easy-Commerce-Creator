import { client } from "./client";

export const getCollection = async (collectionName) => {
  try {
    const cursor = await client
      .db("ecommerce-site-demo")
      .collection(collectionName)
      .find();
    const results = await cursor.toArray();
    await cursor.close();
    return results;
  } catch (e) {
    throw new Error(e);
  }
};
