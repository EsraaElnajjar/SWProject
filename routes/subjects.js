import { Router } from "express";

import { model } from "mongoose";

const router = new Router();
router.get('/',index)
router.get('/create',create)
router.post('/',store)

