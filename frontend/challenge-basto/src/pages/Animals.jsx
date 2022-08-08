import React from "react";
import { ListAnimals } from "../components/ListAnimals";
import Titles from "../components/Titles";
import { Container, Stack } from '@mui/material';

export const Animals = () => {
    
    return (
        <div style={{ backgroundColor: '#F8F9FA', display:'flex', alignItems:'center', justifyContent:'center', minHeight:'90vh', paddingTop:10}}>
            <Container>
                <Stack
                    justifyContent="space-evenly"
                    spacing={3}
                    style={{width:'100%'}}
                >
                    <Titles title='Admin / Establecimiento' subTitle='Gestión de animales'/>
                    <ListAnimals  />  
                </Stack>
            </Container>
        </div>
    );
};
