import { Router } from "express";
import { AssignedController } from "../api/assigned-controller";

const router = Router();

router.get('/:id',AssignedController.getAllAssignments)




export const AssignedRouter = router;