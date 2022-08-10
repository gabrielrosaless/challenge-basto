import React from "react";
import { Typography } from "@mui/material";

const Titles = ({ title, subTitle }) => {
    return (
        <div>
            <Typography variant="h6" color='secondary'> {title}</Typography>
            <Typography variant="h4">{subTitle}</Typography>
        </div>
    )
};

export default Titles;
