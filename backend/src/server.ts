import express from "express";
import fileRoutes from "./routes/fileRoutes";
import cors from "cors";

import authRoutes from "./routes/auth.routes";

const app = express();

app.use(cors());
app.use(express.json());


app.use("/api/auth", authRoutes);

app.use("/api/files", fileRoutes);


app.get("/", (_, res) => {
  res.send("PixelProtect API Running");
});


app.listen(5000, () => {
  console.log(
    "Server running on port 5000"
  );
});