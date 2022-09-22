import express from "express";
import cors from "cors";
import morgan from "morgan";
import {router} from './routes'

const app = express();
const PORT = process.env.PORT || 3000;

//middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(router)

app.listen(PORT, ()=>{
    console.log(`Server running on port http://localhost:${PORT}`)
})
