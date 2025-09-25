import express from "express"
const router=express.Router()
router.get("/signup",(_,res)=>{
    res.send("Signup Page")
})
router.get("/login",(_,res)=>{
    res.send("Login Page")
})
router.get("/logout",(_,res)=>{
    res.send("logout Page")
})
export default router