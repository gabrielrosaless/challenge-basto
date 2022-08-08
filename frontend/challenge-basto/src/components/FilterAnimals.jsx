import React from "react";
import { Typography } from "@mui/material";
import OutlinedInput from '@mui/material/OutlinedInput';

const FilterAnimals = () => {
    return (
        <div>
            <Typography variant="h6">Nombre potrero / Id senasa </Typography>
            <OutlinedInput placeholder="Buscar animal por ID" />
        </div>
    )
}

export default FilterAnimals;
