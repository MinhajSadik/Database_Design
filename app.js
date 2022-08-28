import dotenv from "dotenv";
import express from "express";
import redis from "redis";
import connectDB from "./DB/database.js";
dotenv.config();

// Initialize express app and middleware
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to Redis
const redisUrl = process.env.REDIS_PUBLIC_URL;
const redisPORT = process.env.REDIS_PORT;
const redisClient = redis.createClient(redisPORT, redisUrl);

// redis client error handling
redisClient.on("error", (err) => {
  console.log(err);
}),
  // redis client success handling
  redisClient.on("connect", () => {
    console.log("Redis client connected");
  });

await redisClient.connect();

// Connect to MongoDB
connectDB();

app.all("/", (req, res) => {
  res.send(`System Desing API Viewer`);
});

// Initialize routes
import usersRouter from "./routes/usersRoute.js";
app.use("/api/users", usersRouter);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
