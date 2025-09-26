import express from "express"
import dotenv from "dotenv"
import authRoutes from "./routes/auth.route.js"
import messageRoutes from "./routes/messages.route.js"
import path from "path"
import cors from "cors"
import { connectDB } from "./lib/db.js";
import cookieParser from"cookie-parser"
import { ENV } from "./lib/env.js"
import { app,server } from "./lib/socket.js"

dotenv.config();
const PORT=process.env.PORT||3000
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(cookieParser())
app.use(cors({
    origin:ENV.CLIENT_URL,
    credentials:true
}))
app.options("*", cors({
  origin: ["http://localhost:5173", ENV.CLIENT_URL],
  credentials: true
}));
app.use('/api/auth',authRoutes)
app.use('/api/messages',messageRoutes)
const __dirname=path.resolve()
//make ready for deployment
if(process.env.NODE_ENV==="production"){
    app.use(express.static(path.join(__dirname,"../frontend/dist")))
    app.get("*",(_,res)=>{
        res.sendFile(path.join(__dirname,"../frontend","dist","index.html"))
    })
}
connectDB().then(()=>{
    server.listen(PORT,()=>console.log(`Server is up at ${PORT}`))
}).catch((err)=>console.error(err));

