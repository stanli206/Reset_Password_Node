import express from "express";
import dotenv from "dotenv";
import connectDB from "./Database/config.js";
import userRoutes from "./Routes/userRoutes.js";
import cors from "cors";

dotenv.config();
const app = express();
app.use(cors());
app.use(
  cors({
    origin: "https://resetpasswordtask.netlify.app", //
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);
const port = process.env.PORT || 5000;
app.use(express.json());
connectDB();

app.use("/api/users", userRoutes);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
