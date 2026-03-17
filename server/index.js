import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import { query } from "./db/index.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/health", async (req, res, next) => {
  try {
    // Simple database connectivity check
    await query("SELECT 1");
    res.json({ status: "ok" });
  } catch (err) {
    next(err);
  }
});

// Generic error handler
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({
    error: "Internal server error"
  });
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});

