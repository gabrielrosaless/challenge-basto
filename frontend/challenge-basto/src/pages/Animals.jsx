import React from "react";
import { ListAnimals } from "../components/ListAnimals";
import { Typography } from "@mui/material";
import Button from '@mui/material/Button';
import OutlinedInput from '@mui/material/OutlinedInput';


export const Animals = () => {
    return (
        <div style={{ backgroundColor: '#F8F9FA' }}>
            {/* <div style={{ display: 'flex', flexDirection:'column', justifyContent: 'flex-start', alignItems: 'center',paddingTop:20 }}> */}
            <div style={{ padding: 20, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Typography variant="h6" color='secondary'> Admin / Establecimiento</Typography>
                <Typography variant="h4">Gestión de animales</Typography>
                <Button variant="contained" color="primary">
                    <Typography style={{ fontWeight: 'bold', color:'white' }}> Crear nuevo animal</Typography>
                </Button>
                <Typography variant="h6">Nombre potrero / Id senasa </Typography>
                <OutlinedInput placeholder="Buscar animal por ID" />
                <ListAnimals/>  
            </div>

        </div>
        
    );
};
