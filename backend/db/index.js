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

export const addData = async (data, collection) => {
  try {
    console.log(data);
    await client.connect();

    const { insertedId } = await client
      .db("ecommerce-site-demo")
      .collection(collection)
      .insertOne(data);

    console.log(`New Data at: ${insertedId}`);
  } catch (e) {
    throw new Error(e);
  }
};
