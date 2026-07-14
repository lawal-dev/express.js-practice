import {Router} from 'express'

const router = Router()
router.get("/admin", (req, res)=>{
    console.log(req.cookies)
    
    res.status(200).send({msg: "welcome here admin" })
}) 

export default router