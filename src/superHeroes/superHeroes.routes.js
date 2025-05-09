import { Router } from "express";
import { obtenerSuperheroes} from "./superHeroes.controller.js";

const router = Router();

router.get("/superheroes", obtenerSuperheroes);

export default router;