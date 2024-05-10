import express from "express";
import projectsRoutes from "./routes/projects.routes.js";

const app = express();

app.use(projectsRoutes);

export default app;
