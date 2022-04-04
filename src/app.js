import express from "express";
import taskRoutes from "./routes/tasks";
import cors from "cors";
import morgan from "morgan";

import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { options } from "./swagger_opts";
const spec = swaggerJsdoc(options);

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.set('json spaces', 2);

app.use(taskRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(spec));

export default app;