import { Router } from "express";
import { getCollection, addData } from "db";

const router = Router();

router.get("/test", (_, res) => {
  res.send("<p>Products Router testing</p>");
});

router.get("/auth", async (_, res) => {
  res.json(await getCollection("ecommerce-site-demo", "auth"));
});

router.post("/auth", async (req, res) => {
  try {
    res.send(await addData(req.body, "ecommerce-site-demo", "auth"));
  } catch (e) {
    throw Error(e);
  }
});

export default router;
