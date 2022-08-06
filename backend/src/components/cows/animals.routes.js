import { Router } from 'express';
import { getCows, getCowById, createCow, updateCowByID, deleteCowByID} from './animals.controller.js';

const router = Router();

router.get('/', getCows); //Get all cows

router.get('/:id', getCowById); // Get Cow by ID

router.post('/', createCow); // Post a new Cow

router.put('/:id', updateCowByID); // Update an existing cow


router.delete('/:id', deleteCowByID);

export default router;
