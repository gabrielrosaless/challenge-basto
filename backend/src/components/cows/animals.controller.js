import Cow from './animals.models.js';

export const getCows = async (req, res) => {
    let {page , pageSize} = req.query;

    if (!page) page = 0;
    if (!pageSize) pageSize = 5;

    try {
        const cows = await Cow.find({ isActive: true })
            .limit(pageSize)
            .skip(pageSize * page);

        //Brings all animals for total rows pagination
        const totalCows = await Cow.count({ isActive: true });
        
        res.json({
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
        res.json(cow);
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
        res.json({ status: 'Cow saved' });
    } catch (error) {
        res.status(500);
        res.json(error.message);
    }
}

export const updateCowByID = async (req, res) => {

    const { id } = req.params;
    const { idSenasa, typeAnimal, weight, paddockName, typeDisp, numDisp } = req.body;
    
    try {
        const newCow = { idSenasa, typeAnimal, weight, paddockName, typeDisp, numDisp };
        
        const cow = await Cow.findByIdAndUpdate(id, newCow);
        if (cow) res.json({ status: 'Cow Updated.' });
        else{
            res.json({ status: 'Cow doesnt exist.' });
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
        res.json({ status: 'Cow deleted' }); 

    } catch (error) {
        res.status(500);
        res.json(error.message);
    }
};