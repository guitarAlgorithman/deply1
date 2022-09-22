import express from 'express'
import { PORT } from './config.js';
import { pool } from  './db.js'
const app = express();

app.get('/ping', async (req,res)=>{
    const a=await pool.query(`select * from users`);
    console.log(a[0]);
    res.json(a[0]); 
})


app.listen(PORT);
console.log("running");