import { Router } from "express";
import { getCollection, addData, updateData } from "db";

const router = Router();

router.get("/test", (_, res) => {
  res.send("<p>Sales Router testing</p>");
});

router.get("/sales", async (_, res) => {
  res.json(await getCollection("sample-sales"));
});

router.post("/sales", async (req, res) => {
  try {
    res.send(await addData(req.body, "sample-sales"));
  } catch (e) {
    throw Error(e);
  }
});

router.patch("/sales", async (req, res) => {
  try {
    res.send(
      await updateData(
        req.body._id,
        { completed: req.body.completed },
        "sample-sales"
      )
    );
  } catch (e) {
    throw Error(e);
  }
});

export default router;
