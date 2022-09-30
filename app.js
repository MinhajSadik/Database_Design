import dotenv from "dotenv";
import express from "express";
// import error from "http-errors";
import morgan from "morgan";
import connectDB from "./DB/mdb.js";
import errorMiddleware from "./middlewares/errors.js";
import worker from "./utils/helpers/serverWorker.js";
dotenv.config();

// Initialize express app and middleware
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// Connect to MongoDB
connectDB();

//express instance working
app.get("/", (req, res) => {
  res.send(`System Desing API Viewer`);
  worker.cluster.worker.kill();
});

// Initialize routes
import usersRouter from "./routes/usersRoute.js";
app.use("/api/user", usersRouter);

app.get("*", function (req, res) {
  res.status(404).send({
    message: "There are no similar route!",
  });
});

app.use(errorMiddleware);

if (worker.cluster.isPrimary) {
  worker.start();
} else {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} & PID ${process.pid}`);
  });
}
