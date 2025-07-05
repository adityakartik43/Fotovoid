import express from 'express'
import connectDB from './src/db/connect.db.js'
import dotenv from 'dotenv'
import cors from 'cors'

import authRoutes from './src/routes/auth.routes.js'
import imageRoutes from './src/routes/image.routes.js'
import contactRoutes from './src/routes/contact.routes.js'
import apiRoutes from './src/routes/apikeys.routes.js'
import dashboardRoutes from './src/routes/dashboard.routes.js'
import adminRoutes from "./src/routes/admin.routes.js"

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.send("API is working!");
});


connectDB();

app.use('/api/auth', authRoutes);
app.use('/api/images', imageRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/apikeys', apiRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/admin', adminRoutes);


const port = process.env.PORT || 5000;

app.listen(port, ()=>{
    console.log(`App is running on ${port}`)
})

