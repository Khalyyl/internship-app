import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import animalRouter from './routers/animal.router';

import { dbConnect } from './configs/database.config';
import userRouter from './routers/user.router';
dbConnect();
const app = express();
app.use(cors(
    {
        credentials: true,
        origin:["http://localhost:4200"]
    }
));

app.use("/api/animals", animalRouter);
app.use("/api/users", userRouter);
app.use("/api/tasks", userRouter);


const port = 5000;
app.listen(port, () => {
    console.log("Listening on port " + port);
})