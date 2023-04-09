import express from "express";
import personRoutes from "./routes/personRoutes.mjs";

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();

app.get("/version", (_, res) => {
    res.json({ version: 1.0 });
});
app.use("/person", personRoutes);

app.listen(PORT, HOST);