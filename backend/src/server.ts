import express from "express";
import aiRoutes from "./routes/aiRoutes";
import threatRoutes from "./routes/threatRoutes";
import fileRoutes from "./routes/fileRoutes";
import cors from "cors";
import activityRoutes from "./routes/activityRoutes";
import authRoutes from "./routes/auth.routes";

const app = express();


app.use(cors());
app.use(express.json());



app.use("/api/auth", authRoutes);

app.use(
"/api/ai",
aiRoutes
);app.use(
"/api/threats",
threatRoutes
);
app.use("/api/files", fileRoutes);


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