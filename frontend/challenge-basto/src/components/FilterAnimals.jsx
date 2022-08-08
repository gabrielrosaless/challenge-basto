import React from "react";
import { Typography } from "@mui/material";
import OutlinedInput from '@mui/material/OutlinedInput';

const FilterAnimals = ({data, handleChange}) => {
    
    return (
        <div style={{marginBottom:30}}>
            <Typography variant="h6">Nombre potrero / Id senasa </Typography>
            <OutlinedInput sx={{ width: '50%' }} placeholder="Buscar animal por ID" onChange={handleChange}/>
        </div>
    )
}

export default FilterAnimals;
