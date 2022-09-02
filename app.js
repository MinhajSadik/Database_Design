import dotenv from "dotenv";
import express from "express";
// import error from "http-errors";
import cluster from "cluster";
import morgan from "morgan";
import os from "os";
// import connectDB from "./DB/mdb.js";
import errorMiddleware from "./middlewares/errors.js";
dotenv.config();

const numOfCPU = os.cpus().length;

// Initialize express app and middleware
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// Connect to MongoDB
// connectDB();

app.get("/", (req, res) => {
  res.send(`System Desing API Viewer`);
  cluster.worker.kill();
});

// Initialize routes
import usersRouter from "./routes/usersRoute.js";
app.use("/api/users", usersRouter);

app.use(errorMiddleware);

if (cluster.isPrimary) {
  for (let i = 0; i < numOfCPU; i++) {
    cluster.fork();
  }
  cluster.on("exit", (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
    cluster.fork();
  });
} else {
  // Start server
  app.listen(PORT, () => {
    console.log(`Server is running on pid ${process.pid} & port ${PORT}`);
  });
}
