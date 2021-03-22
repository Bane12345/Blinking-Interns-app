import { InternController } from './../api/intern-controller';
import { Router } from "express";

const router = Router();

router.get('/', InternController.getInterns);
router.get('/:id', InternController.getInternById);

router.post('/', InternController.addNewIntern);
router.post('/login', InternController.loginIntern);

router.delete('/:id', InternController.deleteIntern);
router.patch('/:id', InternController.updateIntern);


export const InternRouter = router;