import e from 'express';
import Cow from './cows.models.js';

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
        if (idSenasa.length !== 16 || numDisp.length !== 8 || paddockName > 200 || !weight){
            return res.status(400).json({ message: 'Error! Revise los datos' });
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
        await Cow.findByIdAndUpdate(id, {isActive:false});
        res.status(200).json({ message: 'Cow deleted' }); 

    } catch (error) {
        res.status(500);
        res.json(error.message);
    }
};