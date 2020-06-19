import { Router } from "express";
import { getCollection } from "db";

const router = Router();

router.get("/test", (_, res) => {
  res.send("<p>Sales Router testing</p>");
});

router.get("/sales", async (_, res) => {
  res.json(await getCollection("sample-sales"));
});

export default router;
