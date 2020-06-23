import { client } from "./client";
import { ObjectID } from "mongodb";

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

export const deleteData = async (dataId, collection) => {
  try {
    await client.connect();

    await client
      .db("ecommerce-site-demo")
      .collection(collection)
      .deleteOne({ _id: ObjectID(dataId) });
  } catch (e) {
    throw Error(e);
  }
};

export const updateData = async (target, data, collection) => {
  try {
    await client.connect();

    await client
      .db("ecommerce-site-demo")
      .collection(collection)
      .updateOne({ _id: ObjectID(target) }, { $set: { ...data } });
  } catch (e) {
    throw Error(e);
  }
};
