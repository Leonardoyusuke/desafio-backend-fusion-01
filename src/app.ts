import 'module-alias/register';

import express, { json } from "express";
import cors from 'cors';
import router from "./routes";
import { connectDb } from "./database/database";
import { errorHandler } from "./middlewares/errorHandler"; 
import { loadEnv } from "./database";
loadEnv()

const app = express();

app.use(json());
app.use(cors());
app.use(router);

app.use(errorHandler)

connectDb();



export default app