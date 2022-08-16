import React, {useState} from 'react';
import { useFormik } from 'formik';
import { Modal, TextField, Box, Typography, Alert, Button, IconButton, Divider } from "@mui/material";
import CustomSelect from "../CustomComponents/CustomSelect";
import CloseIcon from '@mui/icons-material/Close';
import { createCow, editCow } from "../../api/animalsAPI";

export const AnimalForm = ({ openModal, handleCloseModal, fetchData, formValues }) => {
   
    const defaultValues = {
        idSenasa: "",
        typeAnimal: "",
        weight: 0,
        paddockName: "",
        typeDisp: "",
        numDisp: "",
        isActive: true
    }
    
    const [showAlert, setShowAlert] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const formik = useFormik({
        initialValues: formValues || defaultValues,
        onSubmit: async (values, actions) =>  {
            if (values._id) {
                const response = await editCow(values);
                if (response.status === 200) {
                    await fetchData();
                    handleCloseModal();
                    setShowAlert(false);
                    actions.resetForm();
                }
                else { 
                    setErrorMsg(response.message);
                    setShowAlert(true); 
                }
            } else {
                const response = await createCow(values);
                
                if (response.status === 200) {
                    await fetchData();
                    handleCloseModal();
                    setShowAlert(false);
                    actions.resetForm();
                }
                else {
                    setErrorMsg(response.message);
                    setShowAlert(true);
                }
            }
        },
        enableReinitialize:true
    });
    
    return (
        <form onSubmit={formik.handleSubmit}>
            <Modal
                open={openModal}
            >
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
                            id="idSenasa"
                            label="ID Senasa"
                            variant="standard"
                            name="idSenasa"
                            type="text"
                            inputProps={{ maxLength: 16 }}
                            value={formik.values.idSenasa}
                            onChange={formik.handleChange}
                        />
                        <CustomSelect
                            options={['Novillo', 'Toro', 'Vaquillona']}
                            labelId='typeAnimal'
                            labelSelect='typeAnimal'
                            title='Tipo animal'
                            name="typeAnimal"
                            value={formik.values.typeAnimal}
                            handleInputChange={formik.handleChange}
                        />
                        <TextField
                            style={{ marginTop: 20, marginLeft: 5, marginRight: 5 }}
                            required
                            id="weight"
                            label="Peso (Kg.)"
                            variant="standard"
                            type="number"
                            name="weight"
                            value={formik.values.weight}
                            onChange={formik.handleChange}
                        />
                        <TextField
                            style={{ margin: 5 }}
                            required
                            id="standard-number"
                            label="Nombre potrero"
                            variant="standard"
                            name="paddockName"
                            inputProps={{ maxLength: 200 }}
                            value={formik.values.paddockName}
                            onChange={formik.handleChange}
                        />
                        <CustomSelect
                            options={['COLLAR', 'CARAVANA']}
                            labelId='label-type-disp'
                            labelSelect='select-type-disp'
                            title='Tipo dispositivo'
                            name="typeDisp"
                            value={formik.values.typeDisp}
                            handleInputChange={formik.handleChange}
                        />
                        <TextField
                            style={{ margin: 5 }}
                            required
                            id="standard-helperText"
                            label="Numero de dispositivo"
                            variant="standard"
                            name="numDisp"
                            inputProps={{ maxLength: 8 }}
                            value={formik.values.numDisp}
                            onChange={formik.handleChange}
                        />
                        <div style={{ display: 'flex', justifyContent: 'space-between', padding: 15 }}>
                            <Button sx={style.button} variant="contained" color="gray" onClick={handleCloseModal}>
                                Cancelar
                            </Button>
                            <Button type="submit" sx={style.button} variant="contained" color="primary">
                                Guardar
                            </Button>
                        </div>
                        {showAlert &&
                            <Alert onClose={() => setShowAlert(false)} severity="warning">{errorMsg || 'Error! Revise los datos por favor.'}</Alert>
                        }

                    </div>
                </Box>

            </Modal>
        </form>
    );
};

const style = {
    modal: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '1px solid #gray',
        borderRadius:2,
        boxShadow: 24,
        p: 4,
    },
    button: {
        width: 'fit-content',
        fontWeight: 'bold',
        color: 'white'
    }
}