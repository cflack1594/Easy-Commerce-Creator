import express from "express";

const app = express();
const PORT = 80;

app.get("/", (_, res) => "<p>BEEP BOOP. Server is On. I AM A ROBOT</p>");

app.listen(PORT, () => {
  console.log("running on port" + PORT);
});

(async () => {
  console.log("BEEP BOOP");
})();
