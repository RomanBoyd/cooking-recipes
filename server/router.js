import {Router} from "express";
import PostController from "./PostController.js";

const router = new Router();

router.post('/recipes', PostController.create)
router.get('/recipes', PostController.getAll)
router.get('/recipes/:id', PostController.getOne)
router.put('/recipes/:id', PostController.update)
router.delete('/recipes/:id', PostController.delete)

export default router;