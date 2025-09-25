import express from "express"
import dotenv from "dotenv"
import authRoutes from "./routes/auth.route.js"
import path from "path"
import { connectDB } from "./lib/db.js";
import cookieParser from"cookie-parser"
const app=express();
dotenv.config();
const PORT=process.env.PORT||3000
app.use(express.json());
app.use(cookieParser())
app.use('/api/auth',authRoutes)
const __dirname=path.resolve()
//make ready for deployment
if(process.env.NODE_ENV==="production"){
    app.use(express.static(path.join(__dirname,"../frontend/dist")))
    app.get("*",(_,res)=>{
        res.sendFile(path.join(__dirname,"../frontend","dist","index.html"))
    })
}
connectDB().then(()=>{
    app.listen(PORT,()=>console.log(`Server is up at ${PORT}`))
}).catch((err)=>console.error(err));
