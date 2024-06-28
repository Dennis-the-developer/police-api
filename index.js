import express from "express";
import statmentRouter from "./routes/statmentRouter.js";
import 'dotenv/config';
import { dbConnection } from "./config/db.js";


const app = express();
app.use(express.json());

const mongoUri = process.env.Mongo_url

dbConnection();

app.use(statmentRouter);

app.listen(8080, () => {
    console.log('Server started');
});