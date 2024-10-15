import { Router } from "express";
import { AddItem, GetItem, UpdateItem, RemoveItem, clearItem } from "../controllers/cart.controller.js";

const router = Router()

router.post('/add', AddItem)
router.get('/get',GetItem)
router.put('/put/:id',UpdateItem)
router.delete('/remove/:id', RemoveItem)
router.delete('/clear',clearItem)

export default router;
