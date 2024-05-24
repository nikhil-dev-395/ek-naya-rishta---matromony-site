import { config } from "dotenv";
config();

import app from "./app.js";
const port = process.env.PORT;
import { connectDB } from "./src/db/connectDB.js";

app.get("/home", (req, res) => {
  res.send("hello world");
});



const startServer = async () => {
  try {
    await connectDB();
    await app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.log(error.message);
  }
};
startServer();
