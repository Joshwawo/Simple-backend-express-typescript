import {Router, Request, Response} from 'express'


const router = Router()

router.get("/pato",(req:Request, res:Response)=>{

    res.json({message:"Hola desde pato"})
    
})

router.get("/nosotros", (req:Request, res:Response)=>{
    res.json({message:"hola desde  nosotros"})
})

export {router}
