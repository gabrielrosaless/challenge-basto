import React, {useState} from "react";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography } from "@mui/material";
import CustomSelect from "../components/CustomSelect";
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import { createCow, editCow } from "../api/animalsAPI";

const AnimalForm = ({ openModal, handleCloseModal, fetchData, formValues, setFormValues }) => {
    

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const handleSubmit = async (event) => {
        console.log('Submit formValues:', formValues)
        if (formValues._id){
            await editCow(formValues);
        }else{
            await createCow(formValues);
        }
        await fetchData();
        handleCloseModal();
        event.preventDefault();
    };

    return (
        <div>
            <Modal
                open={openModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <form >
                    <Box component="form" noValidate autoComplete="off" sx={style.modal}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Typography style={{ margin: 5 }} variant="h5"> Alta / Edicion Animal</Typography>
                                <IconButton onClick={handleCloseModal}>
                                    <CloseIcon />
                                </IconButton>
                            </div>
                            <Divider variant="fullWidth" />
                            <TextField
                                style={{ margin: 5 }}
                                required
                                id="standard-required"
                                label="ID Senasa"
                                variant="standard"
                                name="idSenasa"
                                inputProps={{ maxLength: 16 }}
                                value={formValues.idSenasa}
                                onChange={handleInputChange}
                            />
                            <CustomSelect
                                options={['Novillo', 'Toro', 'Vaquillona']}
                                labelId='lbl-type-animal'
                                labelSelect='select-type-animal'
                                title='Tipo animal'
                                name="typeAnimal"
                                value={formValues.typeAnimal}
                                handleInputChange={handleInputChange}
                            />
                            <TextField
                                style={{ marginTop: 20, marginLeft: 5, marginRight: 5 }}
                                required
                                id="standard-read-only-input"
                                label="Peso (Kg.)"
                                variant="standard"
                                type="number"
                                name="weight"
                                value={formValues.weight}
                                onChange={handleInputChange}
                            />
                            <TextField
                                style={{ margin: 5 }}
                                required
                                id="standard-number"
                                label="Nombre potrero"
                                variant="standard"
                                name="paddockName"
                                inputProps={{ maxLength: 200 }}
                                value={formValues.paddockName}
                                onChange={handleInputChange}
                            />
                            <CustomSelect
                                options={['COLLAR', 'CARAVANA']}
                                labelId='label-type-disp'
                                labelSelect='select-type-disp'
                                title='Tipo dispositivo'
                                name="typeDisp"
                                value={formValues.typeDisp}
                                handleInputChange={handleInputChange}
                            />
                            <TextField
                                style={{ margin: 5 }}
                                required
                                id="standard-helperText"
                                label="Numero de dispositivo"
                                variant="standard"
                                name="numDisp"
                                inputProps={{ maxLength: 8 }}
                                value={formValues.numDisp}
                                onChange={handleInputChange}
                            />
                            <div style={{ display: 'flex', justifyContent: 'space-between', padding: 15 }}>
                                <Button sx={{ width: 'fit-content', fontWeight: 'bold', color: 'white' }} variant="contained" color="gray" onClick={handleSubmit}>
                                    Cancelar
                                </Button>
                                <Button sx={{ width: 'fit-content', fontWeight: 'bold', color: 'white' }} variant="contained" color="primary" onClick={handleSubmit}>
                                    Guardar
                                </Button>

                            </div>
                        </div>
                       
                    </Box>
                </form>
            </Modal>
        </div>
    );
}

const style = {
    modal: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '1px solid #000',
        boxShadow: 24,
        p: 4,
    },
}

export default AnimalForm;