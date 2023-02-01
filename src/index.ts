import express, { Request, Response } from "express";

const app = express();

app.get("/", async (req, res: Response) => {
  console.log("Hitted");
  return res.send({ ok: true, message: "Hello World" });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
