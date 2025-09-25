import express from "express"
import dotenv from "dotenv"
import authRoutes from "./routes/auth.route.js"
import path from "path"
const app=express();
dotenv.config();
const PORT=process.env.PORT||3000
app.use('/api/auth',authRoutes)
const __dirname=path.resolve()
//make ready for deployment
if(process.env.Node_ENV==="production"){
    app.use(express.static(path.join(__dirname,"../frontend/dist")))
    app.get("*",(_,res)=>{
        res.sendFile(path.join(__dirname,"../frontend","dist","index.html"))
    })
}

app.listen(PORT,()=>console.log(`Server is up at ${PORT}`))