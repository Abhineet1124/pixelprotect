import express from "express";
import prisma from "../lib/prisma";

const router = express.Router();

router.get("/", async (req, res) => {

  const notifications =
    await prisma.notification.findMany({

      orderBy: {
        createdAt: "desc"
      }

    });

  res.json(notifications);

});


router.get("/test", async (req, res) => {

  const notification =
    await prisma.notification.create({

      data: {

        title: "Test Notification",

        message: "Phase 12 notification system working",

        type: "SYSTEM"

      }

    });

  res.json(notification);

});

export default router;