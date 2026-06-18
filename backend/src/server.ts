import express from "express";
import profileRoutes from "./routes/profileRoutes";
import notificationRoutes from
"./routes/notificationRoutes";
import adminRoutes from "./routes/adminRoutes";
import aiRoutes from "./routes/aiRoutes";
import threatRoutes from "./routes/threatRoutes";
import reportRoutes from "./routes/reportRoutes";
import fileRoutes from "./routes/fileRoutes";
import cors from "cors";
import activityRoutes from "./routes/activityRoutes";
import authRoutes from "./routes/auth.routes";
import dashboardRoutes from "./routes/dashboardRoutes";
const app = express();


app.use(cors());
app.use(express.json());

app.use("/api/reports", reportRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/auth", authRoutes);
app.use(
"/api/admin",
adminRoutes
);
app.use(
"/api/ai",
aiRoutes
);app.use(
"/api/threats",
threatRoutes
);
app.use("/api/files", fileRoutes);

app.use(
"/api/notifications",
notificationRoutes
);

app.use(
  "/api/activity",
  activityRoutes
);


app.get("/", (_, res) => {
  res.send("PixelProtect API Running");
});



app.listen(5000, () => {
  console.log(
    "Server running on port 5000"
  );
});