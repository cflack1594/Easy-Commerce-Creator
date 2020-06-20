import { Router } from "express";
import { getCollection } from "db";

const router = Router();

router.get("/test", (_, res) => {
  res.send("<p>Products Router testing</p>");
});

router.get("/auth", async (_, res) => {
  res.json(await getCollection("sample-auth"));
});

router.post("/auth", async (req, res) => {});

export default router;
