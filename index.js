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
    origin: "http://localhost:5173", // Replace with your frontend URL
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);
const port = process.env.PORT || 5003;
app.use(express.json());
connectDB();

app.use("/api/users", userRoutes);

// app.use("/api/auth", userRouter);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
