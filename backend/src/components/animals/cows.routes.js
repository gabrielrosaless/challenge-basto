import { Router } from 'express';
import { getCows, getCowById, createCow, updateCowByID, deleteCowByID} from './cows.controller.js';

const router = Router();

router.get('/', getCows); //Get all cows

router.get('/:id', getCowById); // Get Cow by ID

router.post('/', createCow); // Post a new Cow

router.put('/:id', updateCowByID); // Update an existing cow


router.delete('/:id', deleteCowByID); //Delete an existing cow

export default router;
