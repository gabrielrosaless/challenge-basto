import React,{useState, useEffect} from "react";
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { Typography, Box, Button } from "@mui/material";
import { getCows, deleteCow } from "../api/animalsAPI";
import AnimalForm from "./AnimalForm";
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import FilterAnimals from "./FilterAnimals";
import ConfirmDialog from "./ConfirmDialog";

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
    
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedCow, setSelectedCow] = useState({});
    
    const [openModal, setOpenModal] = React.useState(false);
    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);

    const fetchData = async () => {
        try {
            setPageState(old => ({ ...old, isLoading: true }));
            const {response, status} = await getCows(pageState.page, pageState.pageSize);
            if(status === 200){
                setPageState(old => ({ ...old, isLoading: false, data: response.data, total: response.total}));
            }
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
        setOpenDialog(true);
        setSelectedCow(item);
    }

    const handleDelete = async () => {
        await deleteCow(selectedCow._id);
        await fetchData();
    }

    const renderDetailsButton = (params) => {
        return (
            <strong>
                <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => onClickEdit(params.row)}
                >
                    <EditOutlinedIcon />
                </Button>
                <Button
                    variant="outlined"
                    color="error"
                    style={{ marginLeft: '10px' }}
                    onClick={() =>  onClickDelete(params.row)}
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
    
    const handleFilter = (e) => {
        
    }

    return (
        <div>
            <FilterAnimals data={pageState.data} handleChange={handleFilter} />
            <Box sx={{ width: '100%', marginBottom: 20 }}>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                    <Typography mb={2} variant="h6">Lista de animales</Typography>
                    <Box sx={{ width: 'fit-content' }}>
                        <Button startIcon={<AddCircleRoundedIcon />} onClick={cleanData} variant="contained" color="primary" sx={{ borderRadius: '64px', fontWeight: 'bold', color: 'white' }}> Nuevo animal </Button>
                    </Box>
                </div>
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
                    onPageSizeChange={(newPageSize) => setPageState(old => ({ ...old, pageSize: newPageSize }))}
                    columns={columns}
                />
            </Box>
            <AnimalForm openModal={openModal} handleCloseModal={handleCloseModal} fetchData={fetchData} formValues={formValues} setFormValues={setFormValues} />
            <ConfirmDialog
                title="Esta seguro que desea eliminar esta vaca?"
                open={openDialog}
                setOpen={setOpenDialog}
                onConfirm={handleDelete}
            />
        </div>
        
    )
};



