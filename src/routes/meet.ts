import {Router} from 'express'
import {holas} from '../controllers/ctrlHola'

const router = Router()


router.get('/hola',holas)



export {router}