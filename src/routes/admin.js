import {Router} from 'express'

const router = Router()
router.get("/students", (req, res)=>{
    res.status(200).send({msg: "welcome here admin" })
}) 