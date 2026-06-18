import express from "express";
import { getDashboardMetrics } from "../services/dashboardService";

const router = express.Router();

router.get("/", async (req, res) => {
  const metrics = await getDashboardMetrics();
  res.json(metrics);
});

export default router;