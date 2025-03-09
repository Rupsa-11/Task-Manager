import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import {dbconnection} from './database/dbconnection.js';

const app = express();
dotenv.config({path: "./config/config.env"});
app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:["GET","PUT","DELETE","POST"],
    credentials:true,
}));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}))
dbconnection();

export default app;
