
const typesAnimals = ['Vaquillona','Toro','Novillo'];
const typesDevices = ['COLLAR','CARAVANA'];

export const validateInputs = async (cowData) => {
    const { idSenasa, typeAnimal, weight, paddockName, typeDisp, numDisp } = cowData;

    let response = {
        msg:'',
        isOk: true
    }
    console.log('idSenasa:', idSenasa, !idSenasa)

    if ( !idSenasa || !typeAnimal || !weight || !paddockName || !typeDisp || !numDisp){
        response.msg = 'Error! Complete todos los datos.';
        response.isOk = false;
        return response;
    }

    if (!numDisp || numDisp.length != 8) {
        response.msg = 'El número de dispositivo debe contener 8 caracteres.';
        response.isOk = false;
        return response;
    }
    if (!typeDisp|| !typesDevices.includes(typeDisp)) {
        response.msg = 'El tipo de dispositivo no existe.';
        response.isOk = false;
        return response;
    }
    if (!paddockName || paddockName.length > 200) {
        response.msg = 'El nombre del potrero no puede ser mayor a 200.';
        response.isOk = false;
        return response;
    }
    if (!weight || weight <= 0) {
        response.msg = 'El peso no puede ser negativo o nulo (0).'
        response.isOk = false;
        return response;
    }
    if (!typeAnimal || !typesAnimals.includes(typeAnimal)) {
        response.msg = 'El tipo de animal no existe.';
        response.isOk = false;
        return response;
    }
    if (!idSenasa || idSenasa.length != 16 ) {
        response.msg = 'El ID Senasa debe contener 16 caracteres.';
        response.isOk = false;
        return response;
    }
    return response;    
};