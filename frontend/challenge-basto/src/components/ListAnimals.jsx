import React,{useState, useEffect} from "react";
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { Typography } from "@mui/material";
import { getCows, deleteCow } from "../api/animalsAPI";
import AnimalForm from "./AnimalForm";
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import FilterAnimals from "./FilterAnimals";
const defaultValues = {
    idSenasa: "",
    typeAnimal: "",
    weight: 0,
    paddockName: "",
    typeDisp: "",
    numDisp: "",
    isActive: true
}


export const ListAnimals = () => {
   
    const [pageState, setPageState] = useState({
        isLoading:false,
        data:[],
        total:0,
        page:0,
        pageSize:5,
    });
    
    // const [page, setPage] = useState(0);
    // const [pageSize, setPageSize] = useState(5);

    const [openModal, setOpenModal] = React.useState(false);
    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);
    const [animals, setAnimals] = useState([]);

    const fetchData = async () => {
        try {
            console.log('ON');
            
            setPageState(old => ({ ...old, isLoading: true }));

            const response = await getCows(pageState.page, pageState.pageSize);
            // const json = await response.json();
            // setAnimals(response);
            setPageState(old => ({ ...old, isLoading: false, data: response.data, total: response.total}));
        } catch (error) {
            console.log('ERROR!!!', error)
        }
    };

    useEffect(() => {
        fetchData();
    }, [pageState.page, pageState.pageSize]);

    const cleanData = () => {
        setFormValues(defaultValues);
        setOpenModal(true);
    }

    const [formValues, setFormValues] = useState(defaultValues);

    const onClickEdit = (item) => {
        setFormValues(item);
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

    console.log('pageState:', pageState);
    
    return (
        <div>
            <FilterAnimals />
            <Box sx={{ width: '100%', marginBottom: 20 }}>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                    <Typography mb={2} variant="h6">Lista de animales</Typography>
                    <Box sx={{ width: 'fit-content' }}>
                        <Button startIcon={<AddCircleRoundedIcon />} onClick={cleanData} variant="contained" color="primary" sx={{ borderRadius: '64px', fontWeight: 'bold', color: 'white' }}> Nuevo animal </Button>
                    </Box>
                </div>
                {/* <DataGrid
                    getRowId={(row) => row._id}
                    style={{ padding: 5 }}
                    rows={animals}
                    columns={columns}
                    // pageSize={pageSize}
                    rowsPerPageOptions={[5,10,20]}
                    // page={page} 
                    pagination
                /> */}
                <DataGrid
                    getRowId={(row) => row._id} 
                    autoHeight
                    rows={pageState.data}
                    rowCount={pageState.total}
                    loading={pageState.isLoading}
                    rowsPerPageOptions={[5,10,20]}
                    pagination
                    page={pageState.page}
                    pageSize={pageState.pageSize}
                    paginationMode="server"
                    onPageChange={(newPage) => setPageState(old => ({ ...old, page: newPage }))}
                    onPageSizeChange={(newPageSize) => setPageState((newPageSize) => setPageState(old => ({ ...old, pageSize: newPageSize })))}
                    columns={columns}
                />
            </Box>
            <AnimalForm openModal={openModal} handleCloseModal={handleCloseModal} fetchData={fetchData} formValues={formValues} setFormValues={setFormValues} />

        </div>
        
    )
};



