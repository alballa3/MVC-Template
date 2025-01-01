import express from "express";
import env from "dotenv";
import router from "./routes/route.route";
import mongoose from "mongoose";
env.config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api", router)
app.get("/", (req, res) => {
  res.send("Hello World");
});


if (!process.env.MONGO_URI) {
  console.error("Mongo URI is not defined");
}
mongoose.connect(process.env.MONGO_URI as string).then(() => {
  console.log("MongoDB Connected");
}).catch((err) => {
  console.error(err);
})

app.listen(PORT, () => {
  console.log(`Server is Running On http://localhost:${PORT}`);
});