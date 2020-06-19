import { Router } from "express";
import { getCollection } from "db";

const router = Router();

router.get("/test", (_, res) => {
  res.send("<p>Products Router testing</p>");
});

router.get("/products", async (_, res) => {
  res.json(await getCollection("sample-products"));
});

export default router;
