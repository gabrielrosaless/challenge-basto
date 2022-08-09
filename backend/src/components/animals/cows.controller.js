import e from 'express';
import Cow from './cows.models.js';
import {validateInputs} from '../../utils/validateData.js'; 


export const getCows = async (req, res) => {
    let {page , pageSize} = req.query;

    if (!page) page = 0;
    if (!pageSize) pageSize = 5;

    try {
        // Get cows limit by paginations parameters.
        const cows = await Cow.find({ isActive: true })
            .limit(pageSize)
            .skip(pageSize * page);

        // Get total rows.
        const totalCows = await Cow.count({ isActive: true });
        
        res.status(200).json({
            data: cows,
            total: totalCows
        });
    } catch (error) {
        res.status(500);
        res.json(error.message);
    }
};

export const getCowById = async (req, res) => {

    const { id } = req.params;
    try {
        const cow = await Cow.find({ _id: id, isActive: true });
        res.status(200).json(cow);
    } catch (error) {
        res.status(500);
        res.json(error.message);
    }
}


export const createCow = async (req, res) => {
    const { idSenasa, typeAnimal, weight, paddockName, typeDisp, numDisp } = req.body;

    try {
        const validate = await validateInputs(req.body);
        if (!validate.isOk){
            res.status(400).json({ message: validate.msg });
            return;
        }
        const cow = new Cow({ idSenasa, typeAnimal, weight, paddockName, typeDisp, numDisp })
        await cow.save();
        res.status(200).json({ message: 'Cow saved' });
    } catch (error) {
        res.status(500);
        res.json(error.message);
    }
}

export const updateCowByID = async (req, res) => {

    const { id } = req.params;
    const { idSenasa, typeAnimal, weight, paddockName, typeDisp, numDisp } = req.body;
    
    try {
        const validate = await validateInputs(req.body);
        if (!validate.isOk) {
            res.status(400).json({ message: validate.msg });
            return;
        }
        
        const newCow = { idSenasa, typeAnimal, weight, paddockName, typeDisp, numDisp };
        
        const cow = await Cow.findByIdAndUpdate(id, newCow);
        if (cow) res.status(200).json({ message: 'Cow Updated.' });
        else{
            res.status(400).json({ message: 'Cow doesnt exist.' });
        }
    } catch (error) {
        res.status(500);
        res.json(error.message);
    }
};

export const deleteCowByID = async (req, res) => {

    const { id } = req.params;

    try {
        const response = await Cow.findByIdAndUpdate(id, {isActive:false});
        if (response) res.status(200).json({ message: 'Cow deleted.' }); 
        else{
            res.status(400).json({ message: 'Cow doesnt exist.' }); 
        }
    } catch (error) {
        res.status(500);
        res.json(error.message);
    }
};