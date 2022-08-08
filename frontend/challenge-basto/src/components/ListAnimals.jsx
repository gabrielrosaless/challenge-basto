import React from "react";
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { Typography } from "@mui/material";


export const ListAnimals = ({animals}) => {
    console.log('VACAS:', animals)
    return (
        <div>
            <Box sx={{ height:400, width: '100%', marginBottom:20}}>
                <Typography mb={2} variant="h6">Lista de animales</Typography>
                <DataGrid 
                    getRowId={(row) => row.idSenasa}
                    style={{ padding: 5 }}
                    rows={animals}
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
        field: 'idSenasa',
        headerName: 'ID Senasa',
        flex: 1,
        align: 'center',
    },
    {
        field: 'typeAnimal',
        headerName: 'Tipo Animal',
        flex: 1,
        align: 'center',
    },
    {
        field: 'weight',
        headerName: 'Peso (kg)',
        flex: 1,
        align: 'center',
    },
    {
        field: 'paddockName',
        headerName: 'Nombre',
        flex: 1,
        align: 'center',
    },
    {
        field: 'typeDisp',
        headerName: 'Dispositivo',
        flex: 1,
        align: 'center',
    },
    {
        field: 'numDisp',
        headerName: 'N° Dispositivo',
        flex: 1,
        align: 'center',
    },
    {
        field: 'actions',
        headerName: 'Acciones',
        renderCell: renderDetailsButton,
        flex: 1,
    }
];

const rows = [
    { id: 1, typeAnimal: 'Vaquillona', weight: 200, paddockName: 'Potrero 1', typeDisp: 'COLLAR', numDisp: 'ABC12378' },
    { id: 2, typeAnimal: 'Vaquillona', weight: 200, paddockName: 'Potrero 1', typeDisp: 'COLLAR', numDisp: 'ABC12378' },
    { id: 3, typeAnimal: 'Vaquillona', weight: 200, paddockName: 'Potrero 1', typeDisp: 'COLLAR', numDisp: 'ABC12378' },
    { id: 4, typeAnimal: 'Vaquillona', weight: 200, paddockName: 'Potrero 1', typeDisp: 'COLLAR', numDisp: 'ABC12378' },
    { id: 5, typeAnimal: 'Vaquillona', weight: 200, paddockName: 'Potrero 1', typeDisp: 'COLLAR', numDisp: 'ABC12378' },
];