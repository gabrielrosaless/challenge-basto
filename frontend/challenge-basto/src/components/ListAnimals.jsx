import React from "react";
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { Typography } from "@mui/material";


export const ListAnimals = () => {
    return (
        // <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <div>
            <Box sx={{ height: 400, width: 750}}>
                <Typography mb={2} variant="h6">Lista de animales</Typography>
                <DataGrid
                    style={{ padding: 5 }}
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                />
            </Box>
        </div>
    )
};

const renderDetailsButton = (params) => {
    return (
        <strong>
            <Button
                variant="outlined"
                color="secondary"
                size="small"
                style={{}}
                onClick={() => {
                    console.log('editar')
                    // onClickEdit(params.row)
                }}
            >
                <EditOutlinedIcon />
            </Button>
            <Button
                variant="outlined"
                color="error"
                size="small"
                style={{ marginLeft: '10px' }}
                onClick={() => {
                    console.log('eliminar');
                    // onClickDelete(params.row)
                }}
            >
                <DeleteOutlineRoundedIcon />
            </Button>
            {/* <Modal open={open} onClose={handleClose} aria-labelledby="simple-modal-title" aria-describedby="simple-modal-description"> */}
            {/* {body} */}
            {/* </Modal> */}
        </strong>
    )
}

const columns = [
    {
        field: 'id',
        headerName: 'ID Senasa',
        width: 40,
        align: 'center',
    },
    {
        field: 'typeAnimal',
        headerName: 'Tipo Animal',
        width: 100,
        align: 'center',
    },
    {
        field: 'weight',
        headerName: 'Peso (kg)',
        minWidth: 100,
        align: 'center',
    },
    {
        field: 'paddockName',
        headerName: 'Nombre',
        minWidth: 100,
        align: 'center',
    },
    {
        field: 'typeDisp',
        headerName: 'Dispositivo',
        minWidth: 100,
        align: 'center',
    },
    {
        field: 'numDisp',
        headerName: 'N° Dispositivo',
        minWidth: 100,
        align: 'center',
    },
    {
        field: 'actions',
        headerName: 'Acciones',
        renderCell: renderDetailsButton,
        width: 150
    }
];

const rows = [
    { id: 1, typeAnimal: 'Vaquillona', weight: 200, paddockName: 'Potrero 1', typeDisp: 'COLLAR', numDisp: 'ABC12378' },
    { id: 2, typeAnimal: 'Vaquillona', weight: 200, paddockName: 'Potrero 1', typeDisp: 'COLLAR', numDisp: 'ABC12378' },
    { id: 3, typeAnimal: 'Vaquillona', weight: 200, paddockName: 'Potrero 1', typeDisp: 'COLLAR', numDisp: 'ABC12378' },
    { id: 4, typeAnimal: 'Vaquillona', weight: 200, paddockName: 'Potrero 1', typeDisp: 'COLLAR', numDisp: 'ABC12378' },
    { id: 5, typeAnimal: 'Vaquillona', weight: 200, paddockName: 'Potrero 1', typeDisp: 'COLLAR', numDisp: 'ABC12378' },
];