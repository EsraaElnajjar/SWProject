import { Router } from "express";

import { model } from "mongoose";

import { create, index,show,store ,edit,update,deleteone} from "../controllers/subject.js";

const router = new Router();
router.get('/',index)
router.get('/create',create)
router.post('/',store)

router.get('/:id/edit',edit)
router.get('/:id',show)
router.put('/:id',update);
router.delete('/:id',deleteone)

export default router;


