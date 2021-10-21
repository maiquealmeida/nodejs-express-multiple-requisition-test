import dotenv from 'dotenv';
import cors, { CorsOptions } from 'cors';
import helmet from 'helmet';
import express, { Application } from 'express';
import router from './routes';
import { Stats } from "express-simple-stats";



dotenv.config();
const stats = Stats("123123");

const app = express();

app.use(helmet());
app.use(express.json({ limit: '50mb' }));

const corsOptions = {
  origin: true,
  methods: ['GET', 'PUT', 'POST', 'DELETE', 'HEAD', 'PATCH', 'OPTIONS'],
  preflightContinue: false,
  optionsSuccessStatus: 200,
  credentials: true,
};

app.use(cors(corsOptions));
app.use(stats.middleware);
app.use(router);

app.use("/stats", stats.router);

export default app;
