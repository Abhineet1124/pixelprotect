import express from "express";
import prisma from "../lib/prisma";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        riskScore: true,
        createdAt: true
      }
    });

    res.json(users);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch profiles"
    });
  }
});

export default router;