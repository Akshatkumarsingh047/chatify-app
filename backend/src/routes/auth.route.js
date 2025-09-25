import express from "express"
import { signup } from "../controllers/auth.controller.js"
const router=express.Router()
router.post("/signup",signup)
router.get("/login",(_,res)=>{
    res.send("Login Page")
})
router.get("/logout",(_,res)=>{
    res.send("logout Page")
})
export default router