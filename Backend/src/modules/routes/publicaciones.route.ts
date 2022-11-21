import { Router } from "express";
import publicacionesController from "../controllers/publicaciones.controller";

class PublicacionesRoute {
    public router: Router;

    constructor() {
        this.router = Router();
        this.router.get('/', publicacionesController.getPublicaciones)
    }
}

export default new PublicacionesRoute().router;