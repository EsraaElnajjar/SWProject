import { Router } from "express";
import department from '../models/department.js'
import { index, create, store, show } from "../controllers/department.js";

const router = new Router();

router.get('/', index);

router.get('/create', create);

router.post('/', store);

router.get('/:_id', show);

router.get('/createDept', async(req, res) => {
    await department.create({
        name: 'Information System',
        code: 'IS'
    });
    res.send('All is Done');
});

export default router;