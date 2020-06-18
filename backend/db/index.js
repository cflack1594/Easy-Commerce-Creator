import { client } from "./client";

export const getCollection = async (collectionName) => {
  try {
    await client.connect();
    const cursor = await client
      .db("ecommerce-site-demo")
      .collection(collectionName)
      .find();
    return await cursor.toArray();
  } catch (e) {
    throw new Error(e);
  } finally {
    await client.close();
  }
};
