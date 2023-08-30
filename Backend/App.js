const express = require("express");
const cors = require("cors");
const app = express();
const { Router } = require("express");

const router = Router();
app.use(cors({ origin: "http://localhost:3000" }));

const productsRouter = require("./routes/products");
const fruitRouter = require("./routes/Fruits");
const meatRouter = require("./routes/Meats");
const ProductByNameRouter = require("./routes/productByName");
const DairyRouter = require("./routes/Dairys");

app.use("/products", productsRouter, ProductByNameRouter);
app.use("/fruits", fruitRouter);
app.use("/meats", meatRouter);
app.use("/dairys", DairyRouter);

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
