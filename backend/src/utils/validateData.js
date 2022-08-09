
const typesAnimals = ['Vaquillona','Toro','Novillo'];
const typesDevices = ['COLLAR','CARAVANA'];

export const validateInputs = async (cowData) => {
    const { idSenasa, typeAnimal, weight, paddockName, typeDisp, numDisp } = cowData;

    let response = {
        msg:'',
        isOk: true
    }

    if (numDisp.length != 8) {
        response.msg = 'El número de dispositivo debe contener 8 caracteres.';
        response.isOk = false;
    }
    if (!typesDevices.includes(typeDisp)) {
        response.msg = 'El tipo de dispositivo no existe.';
        response.isOk = false;
    }
    if (paddockName.length > 200) {
        response.msg = 'El nombre del potrero no puede ser mayor a 200.';
        response.isOk = false;
    }
    if (weight <= 0) {
        response.msg = 'El peso no puede ser negativo o nulo (0).'
        response.isOk = false;
    }
    if (!typesAnimals.includes(typeAnimal)) {
        response.msg = 'El tipo de animal no existe.';
        response.isOk = false;
    }
    if (idSenasa.length != 16) {
        response.msg = 'El ID Senasa debe contener 16 caracteres.';
        response.isOk = false;
    }

    return response;
};