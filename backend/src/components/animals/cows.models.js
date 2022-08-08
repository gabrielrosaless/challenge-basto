
import moongose from "mongoose";
const Schema = moongose.Schema;

const ANIMAL_TYPE = {
    Novillo: "Novillo",
    Toro: "Toro",
    Vaquillona: "Vaquillona",
}

const DISP_TYPE = {
    COLLAR: "COLLAR",
    CARAVANA: "CARAVANA",
}

const CowSchema = new Schema({
    idSenasa: { 
        type: String, 
        required: [true, 'ID Senasa is required'],
        minLength: [16, 'idSenasa has to be 16 chars.'],
        maxLength: [16, 'idSenasa has to be 16 chars.'],
    },
    typeAnimal: { 
        type: String, 
        required: [true, 'typeAnimal is required'],
        enum: [ANIMAL_TYPE.Novillo, ANIMAL_TYPE.Toro, ANIMAL_TYPE.Vaquillona] 
    },
    weight: { 
        type: Number, 
        required: [true, 'weight is required'],
        min: [0, 'Weight cant be negative']
    },
    paddockName: { 
        type: String, 
        required: [true, 'paddockName is required'],
        maxLength: [200, 'paddockName is too long.. (max 200 chars)'] 
    },
    typeDisp: { 
        type: String, 
        required: [true, 'typeDisp is required'],
        enum: [DISP_TYPE.CARAVANA, DISP_TYPE.COLLAR] 
    },
    numDisp: { 
        type: String, 
        required: [true, 'numDisp is required'],
        minLength: [8, 'numDisp has to be 8 chars.'],
        maxLength: [8, 'numDisp has to be 8 chars.'],
    },
    isActive: {
        type: Boolean,
        default: true,
    },
}, { versionKey: false })


export default moongose.model('Cow', CowSchema);