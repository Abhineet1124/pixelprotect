import express from "express";
import prisma from "../lib/prisma";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const activities =
      await prisma.activityLog.findMany({
        orderBy: {
          createdAt: "desc"
        }
      });

    const threats =
      await prisma.threatLog.findMany({
        orderBy: {
          createdAt: "desc"
        }
      });

    const notifications =
      await prisma.notification.findMany({
        orderBy: {
          createdAt: "desc"
        }
      });

    res.json({
      generatedAt: new Date(),
      activities,
      threats,
      notifications
    });

  } catch (error) {

    res.status(500).json({
      message: "Failed to generate report"
    });

  }
});

export default router;