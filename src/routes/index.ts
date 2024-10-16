import { Router } from "express";
import starSystemRouters from "./starSystem/starSystemRoutes";
import characterRouter from "./character/characterRouters";

const router = Router()

router.use('/star-systems',starSystemRouters)
router.use('/characters',characterRouter)


export default router