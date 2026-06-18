import { Request, Response } from "express";
import {
detectThreat
}
from "../services/threatDetectionService";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import prisma from "../lib/prisma";

export const register = async (
  req: Request,
  res: Response
) => {
  try {
    const {
      email,
      password,
      firstName,
      lastName,
    } = req.body;

    const existingUser =
      await prisma.user.findUnique({
        where: { email },
      });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const passwordHash =
      await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        email,
        passwordHash,
        firstName,
        lastName,
      },
    });

    return res.status(201).json({
      message: "User created",
      user,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server Error",
    });
  }
};

export const login = async (
  req: Request,
  res: Response
) => {
  try {
    const { email, password } = req.body;

    const user =
      await prisma.user.findUnique({
        where: { email },
      });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const validPassword =
      await bcrypt.compare(
        password,
        user.passwordHash
      );

    if (!validPassword) {


  await detectThreat(

    "FAILED_LOGIN",

    `Failed login attempt for ${email}`

  );


  return res.status(401).json({

    message: "Invalid credentials",

  });

}

    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
      },
      process.env.JWT_SECRET!,
      {
        expiresIn: "1d",
      }
    );

    const safeUser = {
  id: user.id,
  email: user.email,
  firstName: user.firstName,
  lastName: user.lastName,
  riskScore: user.riskScore,
};

return res.json({
  token,
  user: safeUser,
});
  } catch {
    return res.status(500).json({
      message: "Server Error",
    });
  }
};