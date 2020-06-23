import { Router } from "express";
import { getCollection, addData, deleteData } from "db";

const router = Router();

router.get("/test", (_, res) => {
  res.send("<p>Products Router testing</p>");
});

router.get("/products", async (_, res) => {
  try {
    res.json(await getCollection("sample-products"));
  } catch (e) {
    throw Error(e);
  }
});

router.post("/products", async (req, res) => {
  try {
    res.send(await addData(req.body, "sample-products"));
  } catch (e) {
    throw Error(e);
  }
});

router.delete("/products", async (req, res) => {
  try {
    res.send(await deleteData(req.body._id, "sample-products"));
  } catch (e) {
    throw Error(e);
  }
});

export default router;
