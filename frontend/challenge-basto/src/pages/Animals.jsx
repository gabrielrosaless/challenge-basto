import React, {useState, useEffect} from "react";
import { ListAnimals } from "../components/ListAnimals";
import Button from '@mui/material/Button';
import { getCows } from "../api/animalsAPI";
import Titles from "../components/Titles";
import FilterAnimals from "../components/FilterAnimals";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import AnimalForm from "../components/AnimalForm";

export const Animals = () => {
    const [openModal, setOpenModal] = React.useState(false);
    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);
    const [toggle, setToggle] = useState(false);

    const [cows, setCows] = useState([]);
    
    const fetchData = async () => {
        try {
            let res = await getCows();
            setCows(res);
        } catch (error) {
            console.log('ERROR!!!', error)
        }
    };
    
    useEffect(() => {
        fetchData();
    }, [toggle]);
    
    

    return (
        <div style={{ backgroundColor: '#F8F9FA', display:'flex', alignItems:'center', justifyContent:'center', minHeight:'120vh'}}>
            <Container>

                <Stack
                    justifyContent="space-evenly"
                    spacing={3}
                    style={{width:'100%'}}
                >

                <Titles title='Admin / Establecimiento' subTitle='Gestión de animales'/>
                <Box sx={{width:'fit-content'}}>
                    <Button onClick={handleOpenModal} variant="contained" color="primary" sx={{ borderRadius: '64px', fontWeight: 'bold', color:'white' }}> Nuevo animal </Button>
                </Box>
                <FilterAnimals/>
                <ListAnimals animals={cows} />  
                </Stack>
                <AnimalForm openModal={openModal} handleCloseModal={handleCloseModal} setToggle={setToggle} toggle={toggle}/>
            </Container>
        </div>
    );
};
