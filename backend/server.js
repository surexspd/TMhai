
const express = require('express');
const app = express();
const { Pool } = require('pg');

app.use(express.json());
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

app.get('/api/leads', async(req,res)=>{
  if(req.header('x-api-key')!==process.env.ADMIN_API_KEY)
     return res.status(401).json({ok:false});
  const r = await pool.query("SELECT * FROM leads ORDER BY id DESC");
  res.json({ok:true,leads:r.rows});
});

app.post('/api/update-status', async(req,res)=>{
  if(req.header('x-api-key')!==process.env.ADMIN_API_KEY)
     return res.status(401).json({ok:false});
  await pool.query("UPDATE leads SET status=$1 WHERE id=$2",[req.body.status,req.body.id]);
  res.json({ok:true});
});

app.post('/api/delete-lead', async(req,res)=>{
  if(req.header('x-api-key')!==process.env.ADMIN_API_KEY)
     return res.status(401).json({ok:false});
  await pool.query("DELETE FROM leads WHERE id=$1",[req.body.id]);
  res.json({ok:true});
});

app.listen(8000,()=>console.log("Backend running"));
