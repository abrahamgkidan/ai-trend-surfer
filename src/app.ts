import express, { Application } from "express";
import * as dotenv from "dotenv";
import { getStories } from "./controllers/api";
dotenv.config();

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/stories", getStories);

// send back a 404 error for any unknown api request
app.use((req: any, res: any, next) => {
  res.status(404).json({ error: "Not found" });
});

export const startApiServer = () => {
  app.listen(process.env.PORT, () => {
    console.log(`API server is running on port ${process.env.PORT}`);
  });
};
