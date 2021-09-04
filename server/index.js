import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import router from './router.js';

dotenv.config();
const PORT = 5000;
const DB_URL = process.env.DB_URL;

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', router);


async function startApp() {
    try {
        await mongoose.connect(DB_URL,{useUnifiedTopology: true, useNewUrlParser: true});
        app.listen(PORT, () => console.log('Server started on port ' + PORT));
    } catch (e) {
        console.log(e);
    }
}

startApp();