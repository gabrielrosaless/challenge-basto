import React from "react";
import { Typography } from "@mui/material";
import OutlinedInput from '@mui/material/OutlinedInput';

const FilterAnimals = ({data, handleChange}) => {
    
    return (
        <div style={{marginBottom:30}}>
            <Typography variant="h6" sx={{paddingBottom:1}}>Nombre potrero</Typography>
            <OutlinedInput sx={{ width: '50%' }} placeholder="Buscar animal por nombre" onChange={handleChange}/>
        </div>
    )
}

export default FilterAnimals;
