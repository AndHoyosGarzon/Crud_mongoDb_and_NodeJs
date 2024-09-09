import express from "express";
import mongoose from "mongoose";

import { router as productRouter } from "./routes/product.route.js";

const app = express();

//Middlewares
app.use(express.json());
//setting up middleware to receive data sent from a form...
app.use(express.urlencoded({ extended: false }));

//Router
app.use("/api/products", productRouter);

app.get("/", (req, res) => {
  res.status(200).send("hello from node API SERVER");
});

const PORT = process.env.PORT || 3000;
mongoose
  .connect(
    "mongodb+srv://andreshg9203:E86HfFKuAgzivNFf@nodeapi.5xqzq.mongodb.net/Node-API?retryWrites=true&w=majority&appName=NodeApi"
  )
  .then(() => {
    console.log("Connected to database");
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch(() => {
    console.log("Connection Failed to database");
  });
