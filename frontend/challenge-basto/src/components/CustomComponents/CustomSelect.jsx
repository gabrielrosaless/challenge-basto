import React from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { Select } from "@mui/material";

const CustomSelect = ({ options, title, labelId, labelSelect, value, handleInputChange,name }) => {
    
    return (
        <FormControl variant="standard">
            <InputLabel style={{ marginLeft: 5, marginRight: 5 }} id={labelId}>{title}</InputLabel>
            <Select
                name={name}
                style={{ marginLeft: 5, marginRight: 5 }}
                id={labelSelect}
                value={value}
                onChange={handleInputChange}
            >
                {options.map((item, index) => {
                    return <MenuItem key={index} value={item}>{item}</MenuItem>
                })}
            </Select>
        </FormControl>
    )
};

export default CustomSelect;
