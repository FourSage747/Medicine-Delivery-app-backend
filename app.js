const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const mongoose = require("mongoose")
// const dotenv = require("dotenv")

// dotenv.config()

const DB_HOST = 'mongodb+srv://FourSage:rutor26762676@cluster0.fsheybs.mongodb.net/MedicineDelivery?retryWrites=true&w=majority'
// const {DB_HOST} = process.env
const app = express();


const productsRouter = require("./routes/productsRouter")
const shoppingRouter = require("./routes/shoppingRouter")


app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

app.use("/api/products", productsRouter);
app.use("/api/shopping", shoppingRouter);

app.use((_, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

mongoose.set('strictQuery', true)
mongoose.connect(DB_HOST)
  .then(()=>{
    app.listen(3000, () => {
      console.log("Server is running. Use our API on port: 3000");
    });
  })
  .catch((error)=>{
    console.log(error.message)
    process.exit(1)
  })