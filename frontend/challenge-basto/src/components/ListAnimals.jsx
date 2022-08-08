import React,{useState} from "react";
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { Typography } from "@mui/material";
import { deleteCow } from "../api/animalsAPI";

export const ListAnimals = ({ animals, setAnimalData, openModal, handleCloseModal, handleOpenModal, fetchData }) => {
   
    // const [page, setPage] = useState(0);
    // const [pageSize, setPageSize] = useState(5);

    const onClickEdit = (item) => {
        setAnimalData(item);
        handleOpenModal(true);
    }

    const onClickDelete = async (item) => {
        await deleteCow(item._id);
        await fetchData();
    }

    const renderDetailsButton = (params) => {
        return (
            <strong>
                <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => {
                        console.log('editar')
                        onClickEdit(params.row)
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
                        onClickDelete(params.row)
                    }}
                >
                    <DeleteOutlineRoundedIcon />
                </Button>
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


    

    return (
        <div>
            <Box sx={{ height: 400, width: '100%', marginBottom: 20 }}>
                <Typography mb={2} variant="h6">Lista de animales</Typography>
                <DataGrid
                    getRowId={(row) => row.idSenasa}
                    style={{ padding: 5 }}
                    rows={animals}
                    columns={columns}
                    pageSize={pageSize}
                    rowsPerPageOptions={[5,10,20]}
                    page={page}
                    pagination
                />
            </Box>
        </div>
    )
};



