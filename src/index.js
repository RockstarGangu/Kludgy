import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./.env",
});

const port = process.env.PORT || 8080;

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running on port : ${port}`);
    });
  })
  .catch((err) => {
    console.log("Connection failed", err);
  });
