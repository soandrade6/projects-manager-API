import express from "express";
import projectsRoutes from "./routes/projects.routes.js";

const app = express();

// middlewares 
app.use(express.json())

app.use(projectsRoutes);

export default app;
