import { Router } from "express";
import starSystemRouters from "./starSystem/starSystemRoutes";
import characterRouter from "./character/characterRouters";
import planetsRouter from "./planets/planetsRouters";

const router = Router()

router.use('/star-systems',starSystemRouters)
router.use('/characters',characterRouter)
router.use('/planets',planetsRouter)


export default router